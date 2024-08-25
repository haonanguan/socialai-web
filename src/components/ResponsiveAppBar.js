import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["Create", "Collection"];

function ResponsiveAppBar(props) {
    const { isLoggedIn, handleLogout } = props;

    const [anchorElNav, setAnchorElNav] = useState(null); //El - element
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    };

    const handleNavigate = (page) => {
        //Navigate function to handle page redirection
        navigate(`/${page.toLowerCase()}`);
        handleCloseNavMenu();
    };

    return (
        <AppBar
            position="static"
            style={{
                background: "navy",
                top: 0,
                position: "fixed",
                zIndex: 1,
            }}
        >
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Diversity2Icon
                        sx={{
                            display: {
                                xs: isLoggedIn ? "none" : "flex",
                                md: "flex",
                            },
                            mr: 1, //margin right
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: isLoggedIn ? "none" : "flex",
                                md: "flex",
                            },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Social AI
                    </Typography>

                    {isLoggedIn && (
                        <>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user" //ScreenReader, for disability
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
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                    }}
                                >
                                    {/* navigation in mobile view */}
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page}
                                            onClick={() => handleNavigate(page)}
                                        >
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {/* navigation in desktop view */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => handleNavigate(page)}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<LogoutIcon />}
                                    onClick={handleLogout}
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                >
                                    Log out
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
