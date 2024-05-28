import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  marginBottom: "20px",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: 0,
    width: "15%",
    height: "4px",
    backgroundColor: "#ff0000",
    borderRadius: "2px",
  },
}));

function Container({ header, children }) {
  return (
    <div className="">
      <HeaderTypography
        variant="h5"
        fontWeight="700"
        textTransform="uppercase"
        color={"white"}
      >
        {header}
      </HeaderTypography>
      <div>{children}</div>
    </div>
  );
}

export default Container;
