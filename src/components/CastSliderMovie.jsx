import React from "react";
import "react-multi-carousel/lib/styles.css";

import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularRate from "./CircularRate";

const movies = [
  {
    title: "Godzilla x Kong: The New Empire",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
  {
    title: "Movie1",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
  {
    title: "Movie12",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
  {
    title: "Truongz",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
];

const CastSliderMovie = () => {
  return (
    <div className="flex gap-5 ">
      {/* Hiển thị danh sách phim mà ca sĩ đó tham gia đóng phim */}
      {movies.map((movie, index) => (
        <div
          className="bg-contain bg-no-repeat  w-[260px] h-[360px] mt-6 rounded-lg hover cursor-pointer text-white p-3
                overflow-hidden group flex flex-col justify-between items-center hover:brightness-[0.8] mb-16
                "
          style={{
            backgroundImage: `url(${movie.imgUrl})`,
          }}
        >
          <div className="opacity-0 group-hover:opacity-100">
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
              sx={{
                backgroundColor: "#ff0000",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.8)",
                },
                paddingLeft: "40%",
                marginBottom: "-100px",
                width: "10px",
              }}
            ></Button>
          </div>
          <div className="inset-0 opacity-0 items-center group-hover:opacity-100 transition-opacity ">
            <div className="w-full">
              <CircularRate value={movie.score} />
              <p className="text-[14px]">{movie.releaseDate}</p>
              <p className="font-semibold text-[15px] pb-4">{movie.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastSliderMovie;
