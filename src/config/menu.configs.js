import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const main = [
  {
    display: "Trang chủ",
    path: "/main/home",
    icon: <HomeOutlinedIcon />,
    state: "home"
  },
  {
    display: "Phim lẻ",
    path: "/movie",
    icon: <SlideshowOutlinedIcon />,
    state: "movie"
  },
  {
    display: "Phim bộ",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "tv"
  },
  {
    display: "Tìm kiếm",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search"
  }
];

const user = [
  {
    display: "Tài khoản",
    path: "/account",
    icon: <AccountCircleIcon />,
    state: "account"
  },
  {
    display: "Yêu thích",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews"
  },
  {
    display: "Đổi mật khẩu",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;