import React from "react";

export default function MovieDetail_Card({ film: { imdbID, Poster, Title } }) {
  return (
    <div className="MovieDetail_Card" key={imdbID}>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
    </div>
  );
}
