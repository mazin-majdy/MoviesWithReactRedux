import React from 'react'
import { Col } from 'react-bootstrap';
import { Reveal } from 'react-reveal';
import { Link } from 'react-router-dom';
import imgNotFound from '../images/notFoundpng.png'

const CardMovie = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='my-1'>
      <Link to={`/movie/${movie.id}`}>
        <Reveal effect="fadeInUp">

          <div className="card">
            <img src={movie.backdrop_path ? "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path : imgNotFound} alt="Film image" className='card__image' />
            <div className="card__overlay">
              <div className="overlay__text text_center w-100 p-2">
                <p>اسم الفيلم : {movie.original_title}</p>
                <p>تاريخ الإصدار : {movie.release_date}</p>
                <p>التقييم : {movie.vote_average}</p>
              </div>
            </div>
            <div className="average">
              {movie.vote_average.toFixed(1)}
            </div>
          </div>
        </Reveal>
      </Link>
    </Col>
  )
}

export default CardMovie