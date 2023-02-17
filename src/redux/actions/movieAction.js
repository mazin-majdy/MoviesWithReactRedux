import { ALLMOVIES, MovieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi)
    dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
  }
}

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=708381b36f0fc4e681fe78a22b51a968&language=ar&query=${word}`)
    dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
  }
}

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=708381b36f0fc4e681fe78a22b51a968&language=ar&page=${page}`)
    dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
  }
}