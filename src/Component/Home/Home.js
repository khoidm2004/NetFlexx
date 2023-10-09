import "../../App.css";
import React, { useEffect, useState } from 'react';
import SearchIcon from "../../search.svg";
import MovieCard from '../MovieCard/MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=54b99610";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm)
            console.log("Enter pressed.")
        }
    }

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("new");
    }, [])

    return (
        <>
            <a className="home" href="/">NetFlexx</a>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                    onKeyDown={handleKeyPress} />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} />
            </div>
            {movies?.length > 0 ? (
                <div key={movies.imdbID} className="container">
                    {movies.map((movie) => (
                        <>
                            <a href={`/MovieDetail/${movie.imdbID}`}>
                                <MovieCard movie={movie}/>
                            </a>
                        </>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </>
    );
}
