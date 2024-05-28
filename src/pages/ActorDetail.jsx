import React, { useEffect, useState } from "react";

import { Box, Typography, Stack } from "@mui/material";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { getAllActors } from "../services/actorService";

import MediaItem from "../components/MediaItem";
import { getAllMovies, getMoviesByActorID } from "../services/movieService";

function ActorDetail() {
  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);

  const fetchActor = async () => {
    try {
      const response = await getAllActors(id);
      setActor(response.actors);

      const responseMovieByActorID = await getMoviesByActorID(id);
      console.log(responseMovieByActorID.movies);
      const movieIDs = responseMovieByActorID.movies.map(
        (movie) => movie.movieID
      );
      const moviesDetails = await Promise.all(
        movieIDs.map(async (movieID) => {
          let response = await getAllMovies(movieID);
          return response.movies;
        })
      );

      const flattenedMovies = moviesDetails.flat();
      setMovies(flattenedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActor();
  }, [id]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "auto",
          padding: "100px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            marginBottom: "32px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", md: "20%" },
            }}
          >
            <Box
              sx={{
                paddingTop: "160%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "darkgrey",
                backgroundImage: `url(${actor.image})`,
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              padding: { xs: "1rem 0", md: "1rem 2rem" },
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h3" fontWeight="700">
                {actor.name}
              </Typography>
              <Typography variant="h6" fontWeight="700">
                Ngày sinh: {actor.birthdate}
              </Typography>
              <Typography variant="h6" fontWeight="700">
                Nơi sinh: {actor.nationality}
              </Typography>
              <Typography>{actor.biography}</Typography>
            </Stack>
          </Box>
        </Box>
        <Container header="Các phim đã tham gia">
          <div className="flex gap-5 ml-5">
            {movies.map((movie, index) => (
              <MediaItem
                key={index}
                imgUrl={movie.background}
                score={movie.imdb}
                title={movie.title}
                releaseDate={movie.release}
                movieID={movie.movieID}
              />
            ))}
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ActorDetail;
