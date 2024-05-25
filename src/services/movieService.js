import axios from '../axious';

const handleGetMovieByImdb = ()=>{
    return axios.get('/api/get-movies-by-Imdb')
}

export {
    handleGetMovieByImdb
}