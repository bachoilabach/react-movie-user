import React, { useEffect, useState } from "react";

import { Box, Typography, Stack } from "@mui/material";
import Container from "../components/Container";
import CastSliderMovie from "../components/CastSliderMovie";
// import { avatar } from "@material-tailwind/react";

const actors = [
  {
    id: 1,
    name: "Zendaya",
    birthday: "1996-09-01",
    national: "United States",
    description:
      "Thomas Jeffrey Hanks is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.",
    avatar: "path",
  },
];

function ActorDetail() {
  const [actor, setactor] = useState({});

  useEffect(() => {
    setactor(actors[0]);
  });

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
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg)`,
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
                Ngày sinh: {actor.birthday}
              </Typography>
              <Typography variant="h6" fontWeight="700">
                Nơi sinh: {actor.national}
              </Typography>
              <Typography>{actor.description}</Typography>
            </Stack>
          </Box>
        </Box>
        <Container header="Các phim đã tham gia">
          <CastSliderMovie />
        </Container>
      </Box>
    </>
  );
}

export default ActorDetail;
