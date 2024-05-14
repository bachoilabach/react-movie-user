import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
      <Paper square={true} sx={{ backgroundImage: "unset", paddingTop: "3rem" }}>
        <Stack
          alignItems="flex-start"
          justifyContent="space-around"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content", paddingBottom: "2rem" }}
        >
          <Logo/>
          <Stack spacing={2} direction={{ md: "column" }} >
            <Typography>Về FilmPlay</Typography>
            <Typography>Giới thiệu</Typography>
            <Typography>Các gói dịch vụ</Typography>
          </Stack>
          <Stack spacing={2} direction={{ md: "column" }}>
            <Typography>Quy định</Typography>
            <Typography>Điều khoản sử dụng</Typography>
            <Typography>Chính sách thanh toán</Typography>
            <Typography>Chính sách bảo mật</Typography>
          </Stack>
          <Stack spacing={2} direction={{ md: "column" }}>
            <Typography>Liên hệ công việc</Typography>
            <Stack spacing={2} direction={{md: "row"}}>
            <FacebookIcon />
            <EmailIcon />
            </Stack>
          </Stack>
        </Stack>
        <Typography sx={{display: "flex", justifyContent: "flex-end", alignContent: "flex-end", fontSize: "12px", padding: "10px"}} >© Copyright 2023 VSS Corporation. All right reserved</Typography>  
      </Paper>
  );
};

export default Footer;
