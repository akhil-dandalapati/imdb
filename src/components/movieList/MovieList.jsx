import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const getData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setMovieList(response.data.results);
  };
  useEffect(() => {
    getData();
    console.log("movielist");
  }, []);

  useEffect(() => {
    getData();
  }, [type]);
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div
        className="card-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginRight: "15px",
        }}
      >
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
