import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail_Card from "./MovieDetail_Card";
import "./MovieDetail.css";
import {} from "react-icons/fa";

export default function MovieDetail() {
  const routerParams = useParams();
  const id = routerParams.id;
  const [film, setFilm] = useState({});
  const API_URL = "https://www.omdbapi.com?apikey=54b99610";

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (imdbID) => {
    try {
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();
      if (data.Response === "True") {
        setFilm(data);
        console.log(data);
      } else {
        console.log("Fetching data failed.");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <div className="container_MovieDetail">
        <a href="/" className="home">
          NetFlexx
        </a>
        <div className="rows">
          <div className="left-row">
            <MovieDetail_Card film={film} />
          </div>
          <div className="right-row">
            <div className="content-MovieDetail">
              <h1>{film.Title}</h1>
              <p>
                <strong>Relseased:</strong> {film.Released}
                <br />
                <strong>Actors:</strong> {film.Actors}
                <br />
                <strong>Director:</strong> {film.Director}
                <br />
                <strong>Genre:</strong> {film.Genre}
                <br />
                <strong>Runtime:</strong> {film.Runtime}
                <br />
                <strong>Plot:</strong> {film.Plot}
              </p>
            </div>
            <div className="container_button">
              <button>Watch</button>
              <button>Save</button>
              <button>Report</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
