import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {

    // declare movies and search term state
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    
    // define searching logic
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('good');
    }, [])

    const handleKeyDown = event => {
        // console.log('User pressed: ', event.key);
        if (event.key === 'Enter') {
          setSearch(event.target.value);
          searchMovies(search);
        }
    };

    return (
        <div className="app">
            <h1>Movie Man</h1>
            
            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {
                movies?.length > 0 ?
                (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;