import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// 9bda06f0

const API_URL = 'https://www.omdbapi.com?apikey=9bda06f0';

const movie1 = {
    "Title": "Harry Potter and the Order of the Phoenix",
    "Year": "2007",
    "imdbID": "tt0373889",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Harry Potter');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value='Superman'
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default App;