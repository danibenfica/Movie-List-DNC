import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "ba2fd98918670e36e0cb7362cc018452"

const withBaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
   static getMovies() {
        return axios(withBaseURL("movie/popular"))
    }

   static getMovieDetails(id) {
        return axios(withBaseURL(`movie/${id}`))
    }

   static searchMovies(movie){
        return axios(withBaseURL("search/movie")+ `&query=${movie}`)
    }
}