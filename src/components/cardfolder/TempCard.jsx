import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./card.css";
import { Link } from "react-router-dom";

const TempCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} width={200} duration={1} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie?.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card card-image">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body card-texts cards__overlay">
              <h6 className="card-title">
                {movie?.original_title?.slice(0, 118)}
              </h6>
              <p
                className="card-text"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {movie?.release_date}
                <span className="card__rating">
                  {movie?.vote_average?.toFixed(1)}
                  <i className="bi bi-star-fill"></i>
                </span>
              </p>
              <p className="card__description">
                {movie?.overview?.slice(0, 118)}...
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default TempCard;
