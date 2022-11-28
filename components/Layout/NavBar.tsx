import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Badge, Container } from "@mui/material";
import { Search, ShoppingBasket } from "@mui/icons-material";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1.5rem" }}>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(255,255,255, 0.98)",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px -1px 5px",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              // color="action"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              color="grey"
            >
              {/* Shopago */}
            </Typography>
            {/* {auth && ( */}
            <div>
              <IconButton
                sx={{
                  mr: 1,
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
                <Search fontSize="large" color="action" />
              </IconButton>
              <IconButton
                href="/store/cart"
                sx={{
                  padding: 0,
                }}
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingBasket fontSize="large" color="action" />
                </Badge>
              </IconButton>
              <IconButton
                sx={{
                  ml: 1,
                  display: {
                    xs: "none",
                    sm: "inline",
                    md: "inline",
                    lg: "inline",
                    xl: "inline",
                  },
                  padding: 0,
                }}
                size="large"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
            </div>
            {/* )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
