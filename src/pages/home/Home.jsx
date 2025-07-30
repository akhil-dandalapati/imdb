import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
  const [popularMovies, setPopolarmovies] = useState([]);
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      setPopolarmovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies &&
            popularMovies.map((movie, i) => (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
                key={movie.id}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average.toFixed(1) : ""}
                      <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))}
        </Carousel>
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
