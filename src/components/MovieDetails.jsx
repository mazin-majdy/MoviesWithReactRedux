import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import imgNotFound from "../images/notFoundpng.png";
import Slide from 'react-reveal/Slide';


const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([])

  //get  movie by details 
  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=708381b36f0fc4e681fe78a22b51a968&language=ar`)
    setMovie(res.data)
  }
  useEffect(() => {
    getMovieDetails();
  }, [])
  return (
    <div style={{ overflowX: "hidden" }}>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <Slide right>

              <img
                className="img-movie w-30"
                src={movie.poster_path ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path : imgNotFound}
                alt="Film Background Image"
              />
            </Slide>
            <Slide left>

              <div className="content">


                <div className="justify-content-center text-center  mx-auto">
                  <p className="card-text-details border-bottom">
                    اسم الفيلم: <span className='card-text-api'>{movie.title}</span>
                  </p>
                  <p className="card-text-details border-bottom">
                    تاريخ الفيلم : <span className='card-text-api'>{movie.release_date ? movie.release_date : "Not Found"}</span>
                  </p>
                  <p className="card-text-details border-bottom">
                    التقييم : <span className='card-text-api'>{movie.vote_average}</span>
                  </p>
                </div>


                <div className="card-story  d-flex flex-column align-items-start">
                  <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">القصة:</p>
                  </div>
                  <div className="text-end px-2">
                    <p className="card-text-story">{movie.overview ? movie.overview : "احضره انت وقلنا القصة 😂"}</p>
                  </div>
                </div>

                <Row className="justify-content-center">
                  <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                      <button
                        style={{ backgroundColor: "rgb(28 28 69)", border: "none" }}
                        className="btn btn-primary mx-2">
                        عوده للرئيسيه
                      </button>
                    </Link>
                    <a href={movie.homepage} >
                      <button
                        style={{ backgroundColor: "rgb(28 28 69)", border: "none" }}
                        className="btn btn-primary">
                        مشاهده الفيلم
                      </button>
                    </a>
                  </Col>
                </Row>
              </div>
            </Slide>

          </div>
        </Col>
      </Row>

    </div >
  )
}

export default MovieDetails;