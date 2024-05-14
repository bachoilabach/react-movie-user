import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import menuConfigs from "../config/menu.configs";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <AppBar elevation={0} sx={{ zIndex: 9999 }}>
        <Toolbar className="items-center justify-between bg-bgColorBlock">
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="inherit" sx={{ mr: 2, display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
              <Logo />
            </Box>
          </Stack>

          {/* main menu */}
          <Box
            flexGrow={1}
            alignItems="center"
            display={{ xs: "none", md: "flex" }}
          >
            <Box sx={{ marginRight: "30px" }}>
              <Logo />
            </Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                variant="text"
              >
                <Typography className="text-white" fontWeight={600}>
                  {item.display}
                </Typography>
              </Button>
            ))}
          </Box>
          {/* main menu */}

          {/* user menu */}
          <Stack spacing={3} direction="row" alignItems="center">
            {
              <Button className="bg-buttonColor" variant="contained">
                Đăng nhập
              </Button>
            }
          </Stack>
          {/* user menu */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
