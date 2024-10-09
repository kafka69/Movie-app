import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import useStateMovie from "../hooks/useStateProvider";
import { useNavigate } from "react-router-dom";
const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  color: "white",
  "&:before": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -4, // Adjust this to move the underline closer or further from the text
    height: "2px",
    backgroundColor: "white",
    transform: "scaleX(0)",
    transition: "transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
  },
  "&:hover:before": {
    transform: "scaleX(1)",
    opacity: 1,
  },
}));

const pages = ["Home", "Search", "Watch list", "original", "movies"];
const links  = ["/home","/search","/watch-list","original","/movies"]
const icons = [
  <HomeIcon />,
  <SearchIcon />,
  <PlaylistAddIcon />,
  <StarRateIcon />,
  <MovieFilterIcon />,
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function Header() {
  const navigate = useNavigate();
  const { isLogin, login,logout } = useStateMovie();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavClick = (url)=>{
    navigate(url);
    handleCloseNavMenu();
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#090b13" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/images/logo.svg"
            alt="Disney Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={()=>handleNavClick(links[index])}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <StyledButton
                key={page}
                onClick={()=>handleNavClick(links[index])}
                sx={{
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icons[index]}
                <Box component="span" sx={{ ml: 1, mt: 1 }}>
                  {" "}
                  {page}
                </Box>
              </StyledButton>
            ))}
          </Box>
          {/* login function */}
          {!isLogin ? (
            <Box sx={{ flexGrow: 0 }}>
              <StyledButton
              onClick={login}>Login</StyledButton>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting,index) => (
                  <MenuItem key={setting} onClick={index === settings.length - 1 ? logout : handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
