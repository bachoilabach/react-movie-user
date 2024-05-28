import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularRate from "./CircularRate";
import { useNavigate } from "react-router-dom";

function MediaItem({ imgUrl, score, releaseDate, title, movieID }) {
  const navigate = useNavigate();
  const releaseYear = (releaseDate) => {
    if (releaseDate) {
      const year = releaseDate.split("-")[0];
      return year;
    }
    return "";
  };

  return (
    <div
      className="bg-contain bg-no-repeat w-[230px] h-[355px] mt-6 cursor-pointer text-white p-3
		overflow-hidden group flex flex-col justify-center items-center mb-16 relative rounded-lg"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
      onClick={() => navigate(`/movie/${movieID}`)}
    >
      <div className="absolute inset-0  bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#ff0000",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.8)",
            },
          }}
        ><PlayArrowIcon /></Button>
      </div>
      <div className="absolute bottom-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
        <CircularRate value={score} />
        <p className="text-[14px] w-full">{releaseYear(releaseDate)}</p>
        <p className="font-semibold text-[13px] w-full">{title}</p>
      </div>
    </div>
  );
}

export default MediaItem;
