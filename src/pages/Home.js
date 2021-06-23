import React from 'react';
import useFetch from '../hooks/useFetch';


export default function Home(){
    const Movies = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=efd24d7b6e0779a6489fe52ce1e4e821&language=es_ES&page=1");
    console.log(Movies);
    return 'estamos en el Home';
}