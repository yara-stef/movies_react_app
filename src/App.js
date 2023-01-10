import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// 9bda06f0

const API_URL = 'https://www.omdbapi.com?apikey=9bda06f0';

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
        <h1>App</h1>
    );
    
}

export default App;