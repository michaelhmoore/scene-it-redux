import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Search } from 'semantic-ui-react';

function SearchMovies() {

    const [movies, setMovies] = useState([]);


    const fetchMovieResults = () => {
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${movies}`) 
        .then(res => res.json())
        .then(data => {
            setMovies(data.Search)
        })
    }

    return (
        <div>
            <Search onClick={fetchMovieResults} onChange={''}/>
        </div>
    )
}

export default SearchMovies;