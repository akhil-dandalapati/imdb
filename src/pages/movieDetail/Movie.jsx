import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Movie = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState();

  const getData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setCurrentMovie(response.data);
    console.log(response);
  };
  useEffect(() => {
    getData();
    console.log(currentMovie);
  }, []);
  return (
    <div>
      <div className="moviepage" style={{ position: "relative" }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${
              currentMovie ? currentMovie.backdrop_path : ""
            }`}
            className="img-fluid"
            alt="..."
            style={{ height: "100vh", width: "100%" }}
          />
        </div>

        <div
          className="container"
          style={{
            position: "absolute",
            top: "50%",
            direction: "flex",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <div class="row gap-5">
            <div class="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    currentMovie ? currentMovie.poster_path : ""
                  }`}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div className="movie__detailRightTop">
                <h1 class="h1">
                  {currentMovie ? currentMovie.original_title : ""}
                </h1>
                <p class="h6">{currentMovie ? currentMovie.tagline : ""}</p>
                <p class="h6">
                  {currentMovie ? currentMovie.vote_average : ""}{" "}
                  <i class="bi bi-star-fill"></i>
                  <span className="movie__voteCount">
                    {currentMovie
                      ? "(" + currentMovie.vote_count + ") votes"
                      : ""}
                  </span>
                </p>
                <p class="h6">
                  {currentMovie ? currentMovie.runtime + " mins" : ""}
                </p>
                <p class="h6">
                  {currentMovie
                    ? "Release date: " + currentMovie.release_date
                    : ""}
                </p>
                <div className="movie__genres">
                  {currentMovie && currentMovie.genres
                    ? currentMovie.genres.map((genre) => (
                        <>
                          <button
                            type="button"
                            class="btn btn-outline-light rounded-pill me-3"
                          >
                            {genre.name}
                          </button>
                        </>
                      ))
                    : ""}
                </div>
              </div>
              <div style={{ marginTop: "40px" }}>
                <h1 className="synopsisText">Synopsis</h1>
                <p>{currentMovie ? currentMovie.overview : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <span>Usefull Links</span>
        <Link target="_blank">
          <button type="button" class="btn btn-danger">
            Homepage <i class="bi bi-box-arrow-up-right"></i>
          </button>
        </Link>
        <Link to="https://www.imdb.com/" target="_blank">
          <button type="button" class="btn btn-warning">
            IMDB <i class="bi bi-box-arrow-up-right"></i>
          </button>
        </Link>
      </div>
      <div>
        <center className="product-companies">
          <h1>Production companies</h1>
        </center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "50px 30%",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {currentMovie &&
            currentMovie.production_companies &&
            currentMovie.production_companies.map((company) => (
              <div>
                {company.logo_path && (
                  <span className="productionCompanyImage">
                    <img
                      className="movie__productionComapany productionCompanyImage"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                      style={{ width: "150px", height: "75px" }}
                    />
                    <h6>{company.name}</h6>
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
