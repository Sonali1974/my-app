import React from "react";

function MovieCard(props) {
    return (
        <div className="card" key={props.movie.imdbID}>
            <div><h2>{props.movie.Title}</h2>
            <span>{props.movie.Type}</span>
            <div><p>{props.movie.Year}</p>
            </div>
            </div>
            <div> <img src={props.movie.Poster} alt={"Title"}/></div>
            
        </div>
    );
}
export default MovieCard;