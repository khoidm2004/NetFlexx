import React from 'react';


/**
 * Một số systax cơ bản của một project nên làm 
 *- Systax -> biến  phải là lowercase nếu có 2 chữ thì chứ đầu tiên ở sau phải là UpperCase  ví dụ: poster, posterFilm
    -> Fuction ví dụ: handleSubit(), onChangeText()
    -> Component: MovieCard
    -> Tên file: đối với component -> MovieCard, Folder: movieCard hoặc MovieCard
    -> Tên className: movie-card
 */

    /**
     * 
     *Trong React thì em nên chia nhỏ các component để xử lý
     Ví dụ: Header, Footer, Card , nên tạo ra component chung để xử lý
     */
  
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;