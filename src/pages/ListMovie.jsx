import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Toolbar,
} from "@mui/material";
import MediaGrid from "../components/MediaGrid";

function ListMovie() {
  return (
    <div className="pt-[100px] bg-black flex flex-col justify-center items-center">
      <Toolbar className="bg-[#091C2D] min-w-[80%] px-9 py-6 rounded-lg">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-around",
            gap: 2,
          }}
        >
          {/* genremovie */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="movie-type-label">Loại phim</InputLabel>
            <Select
              labelId="movie-type-label"
              id="movie-type"
              value=""
              label="Loại phim"
              defaultValue="Phim Lẻ"
            >
              <MenuItem value="Phim Lẻ">Phim Lẻ</MenuItem>
              <MenuItem value="Phim Bộ">Phim Bộ</MenuItem>
            </Select>
          </FormControl>
          {/* genre */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="genre-label">Thể loại</InputLabel>
            <Select
              labelId="genre-label"
              id="genre"
              value=""
              label="Thể loại"
              defaultValue="- Tất cả -"
            >
              <MenuItem value="- Tất cả -">- Tất cả -</MenuItem>
              <MenuItem value="Hành Động">Hành Động</MenuItem>
              <MenuItem value="Kinh Dị">Kinh Dị</MenuItem>
            </Select>
          </FormControl>
          {/* national */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="national-label">Quốc gia</InputLabel>
            <Select
              labelId="national-label"
              id="national"
              value=""
              label="national"
              defaultValue="- Tất cả -"
            >
              <MenuItem value="- Tất cả -">- Tất cả -</MenuItem>
              <MenuItem value="national">Nhật Bản</MenuItem>
              <MenuItem value="national">Hàn Quốc</MenuItem>
              <MenuItem value="national">Việt Nam</MenuItem>
              <MenuItem value="national">Hoa Kỳ</MenuItem>
            </Select>
          </FormControl>
          {/* release Date */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="releaseDate-label">Năm phát hành</InputLabel>
            <Select
              labelId="releaseDate-label"
              id="releaseDate"
              value=""
              label="releaseDate"
              defaultValue="- Tất cả -"
            >
              <MenuItem value="- Tất cả -">- Tất cả -</MenuItem>
              <MenuItem value="releaseDate">2024</MenuItem>
              <MenuItem value="releaseDate">2023</MenuItem>
              <MenuItem value="releaseDate">2022</MenuItem>
              <MenuItem value="releaseDate">2021</MenuItem>
              <MenuItem value="releaseDate">2020</MenuItem>
              <MenuItem value="releaseDate">2019</MenuItem>
              <MenuItem value="releaseDate">2018</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
      <div className=" flex flex-row justify-center items-center">
        <MediaGrid/>
      </div>
    </div>
  );
}

export default ListMovie;
