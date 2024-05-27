import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularRate from "./CircularRate";

function MediaItem({ imgUrl, score, releaseDate, title }) {
  return (
    <div
      className="bg-contain bg-no-repeat w-[270px] h-[405px] mt-6 cursor-pointer text-white p-3
            overflow-hidden group flex flex-col justify-center items-center mb-16 relative"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="absolute inset-0  bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff0000",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.8)",
            },
          }}
        >
          <PlayArrowIcon />
        </Button>
      </div>
      <div className="absolute bottom-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
        <CircularRate value={score} />
        <p className="font-bold text-[16px]">{releaseDate}</p>
        <p className="font-semibold text-[15px]">{title}</p>
      </div>
    </div>
  );
}

export default MediaItem;
