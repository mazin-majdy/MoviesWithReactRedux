import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie } from '../redux/actions/movieAction'
import CardMovie from "./CardMovie"
import PaginationCo from './Pagination';
const MovieList = () => {

  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getAllMovie())
  }, [])

  const dataMovies = useSelector((state) => state.movies)

  useEffect(() => {
    setMovies(dataMovies)

  }, [dataMovies])

  return (
    <Row className='mt-3'>
      {
        movies.length ? (
          movies.map((movie, index) => {
            return (<CardMovie key={index} movie={movie} />)

          })
        )
          :
          <h2 className="alert alert-danger text-center">لا يوجد أفلام</h2>
      }
      {
        movies.length ? (<PaginationCo />) : null
      }

    </Row >
  )
}

export default MovieList