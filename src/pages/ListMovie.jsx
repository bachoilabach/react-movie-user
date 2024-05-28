import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

function ListMovie() {
  return (
    <AppBar position="static" className="pt-[200px]">
      <Toolbar className="bg-[#091C2D]">
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          {/* genremovie */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: 120,
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
            sx={{ minWidth: 120, backgroundColor: "white" }}
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
            sx={{ minWidth: 120, backgroundColor: "white" }}
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
            sx={{ minWidth: 120, backgroundColor: "white" }}
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
    </AppBar>
  );
}

export default ListMovie;
