import { Box, Button, Stack, TextField, Grid } from "@mui/material";
import { useState } from "react";

import MediaItem from "../components/MediaItem";

const movies = [
  {
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
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
    title: "Godzilla x Kong: The New Empire",
    releaseDate: "2024",
    score: "8",
    imgUrl: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
  },
];

const mediaTypes = ["Tìm kiếm phim", "Tìm kiếm diễn viên"];

const SearchPage = () => {
  const [mediaType, setMediaType] = useState(mediaTypes[0]);
  const [medias, setMedias] = useState([]);

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          backgroundColor: "black",
          minHeight: "1000px",
          padding: "100px",
        }}
      >
        <Stack spacing={3}>
          <Stack
            spacing={5}
            direction="row"
            justifyContent="center"
            sx={{ width: "100%", color: "white" }}
          >
            {mediaTypes.map((item, index) => (
              <Button
                size="large"
                key={index}
                sx={{
                  color: "white",
                }}
                // onClick={() => onCategoryChange(item)}
              >
                {item}
              </Button>
            ))}
          </Stack>
          <TextField
            color="success"
            placeholder="Nhập tên phim..."
            sx={{ width: "100%", border: "0.5px solid red", color: "white" }}
            autoFocus
            // onChange={onQueryChange}
          />

          <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
            {medias.map((media, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <MediaItem media={media} mediaType={mediaType} />
              </Grid>
            ))}
          </Grid>

          {/* {medias.length > 0 && (
            <LoadingButton
              loading={onSearch}
              onClick={() => setPage(page + 1)}
            >
              load more
            </LoadingButton>
          )} */}
        </Stack>
      </Box>
    </>
  );
};

export default SearchPage;
