import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import { AccountCircle, Search, ShoppingBasket } from "@mui/icons-material";
import UseAutocomplete from "./NavSearch";
import { Container } from "@mui/system";
import navLogo from "../../assets/nav-logo.svg";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1.5rem" }}>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(255,255,255, 0.98)",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px -1px 5px",
        }}
        // elevation={24}
      >
        <Container>
          <Toolbar>
            {/* <IconButton
              size="medium"
              sx={{
                // mr: 2,
                color: "black",
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <span>
              <img
                src={navLogo}
                alt="Shopago logo mobile"
                style={{ width: "10rem" }}
              />
            </span> */}

            {/* <UseAutocomplete /> */}

            {/* <IconButton
              sx={{
                mr: -2.5,
                mb: -1,
                display: {
                  xs: "inline",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <Search />
            </IconButton> */}
            {/* <Badge
              badgeContent={4}
              color="error"
              sx={{
                ml: 2,
              }}
            >
              <IconButton href="/store/cart">
                <ShoppingBasket />
              </IconButton>
            </Badge> */}
            {/* 
            <IconButton
              sx={{
                ml: 1,
                mb: -0.7,
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <AccountCircle />
            </IconButton> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
