import React from 'react';

const emptyMovieCardImg = process.env.REACT_APP_EMPTY_MOVIE_CARD_IMG;

const MovieCard = ({ movie }) => {
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : {emptyMovieCardImg}} alt={movie.title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;