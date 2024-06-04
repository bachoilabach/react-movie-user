import { Grid } from "@mui/material";
import MediaItem from "./MediaItem";

import { getAllMovies, handleGetMovieByImdb } from "../services/movieService";
import { useEffect, useState } from "react";

const MediaGrid = () => {
  const [movies, setMovie] = useState([]);
  const fetchMovie = async () => {
    try {
      let response = await getAllMovies("ALL");
      setMovie(response.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Grid container sx={{ width: "85%",gap: '10px', justifyContent: 'space-between' }}>
      {movies.map((movie, index) => (
        <Grid key={index} sx={{}}>
          <MediaItem
            key={index}
            imgUrl={movie.background}
            score={movie.imdb}
            title={movie.title}
            releaseDate={movie.release}
            movieID={movie.movieID}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaGrid;
