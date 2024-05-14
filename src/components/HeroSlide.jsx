import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CircularRate from "./CircularRate";

// Mô phỏng dữ liệu bộ phim
const staticMovies = [
  {
    id: 1,
    title: "Tên phim",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg",
    overview: "Mô tả...",
    vote_average: 8.5,
    genre: "Hành động",
  },
  {
    id: 1,
    title: "Tên phim",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg",
    overview: "Mô tả...",
    vote_average: 8.5,
    genre: "Hài hước",

  },
  {
    id: 1,
    title: "Tên phim",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg",
    overview: "Mô tả...",
    vote_average: 8.5,
    genre: "Phiêu lưu",
  },
];


const HeroSlide = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Swiper grabCursor={true} loop={true} style={{ width: "100%" }}>
        {staticMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Box
              sx={{
                paddingTop: "56.25%", // Aspect ratio of 16:9
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${movie.backdrop_path})`,
                position: "relative", // Added for positioning elements inside the Box
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)", // Dark overlay if needed for readability
                  display: "flex",
                  flexDirection: "column",
                  padding: { sm: "10px", md: "5rem", lg: "10rem" },
                }}
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                    fontWeight="700"
                    color={"white"}
                  >
                    {movie.title}
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <CircularRate value={movie.vote_average} />
                 
                        <Button variant="contained" className="bg-buttonColor">
                          {movie.genre}
                        </Button>
                  </Stack>

                  <Typography variant="body1" color={"white"}>{movie.overview}</Typography>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    // component={Link}
                    // to={routesGen.mediaDetail(mediaType, movie.id)}
                    className="bg-buttonColor w-max"
                  >
                    Xem phim
                  </Button>
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlide;
