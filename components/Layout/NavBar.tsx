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
import { Search, ShoppingBasket, ShoppingCart } from "@mui/icons-material";

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
        <Container fixed>
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            >
              <IconButton
                size="small"
                edge="start"
                // color="action"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              color="grey"
              fontWeight={900}
            >
              Shopago
            </Typography>
            {/* {auth && ( */}
            <div>
              <Box
                sx={{
                  display: {
                    xs: "inline",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <IconButton>
                  <Search fontSize="small" color="action" />
                </IconButton>
              </Box>
              <IconButton href="/store/cart" sx={{}}>
                {/* <Badge
                  badgeContent={2}
                  color="error"
                  sx={{
                    fontSize: 1,
                  }}
                > */}
                <ShoppingCart fontSize="small" color="action" />
                {/* </Badge> */}
              </IconButton>
              <Box
                sx={{
                  ml: 1,
                  display: {
                    xs: "none",
                    sm: "inline",
                    md: "inline",
                    lg: "inline",
                    xl: "inline",
                  },
                }}
              >
                <IconButton>
                  <AccountCircle fontSize="small" />
                </IconButton>
              </Box>
              {/* <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                open={true}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // open={Boolean(anchorEl)}
                // onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
              </Menu> */}
            </div>
            {/* )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
