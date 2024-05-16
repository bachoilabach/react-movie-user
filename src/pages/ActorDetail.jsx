import React, { useEffect, useState } from "react";

import { Box, Typography, Stack } from "@mui/material";
import Container from "../components/Container";
// import { avatar } from "@material-tailwind/react";

const actors = [
  {
    id: 1,
    name: "Tom Hanks",
    birthday: "1956-07-09",
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
      <Box sx={{ maxWidth: "100%", margin: "auto", padding: "100px", backgroundColor: "black", color: "white"}}
      
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
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
              <Typography variant="h5" fontWeight="700">
                {`${actor.name} (${
                  actor.birthday && actor.birthday.split("-")[0]
                }`}{")"}
              </Typography>
              <Typography>
                {actor.description}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Container header="medias">
        </Container>
      </Box>
    </>
  );
}

export default ActorDetail;
