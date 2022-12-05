import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";

import { Search, ShoppingCart } from "@mui/icons-material";
import AccountMenu from "./AccountMenu";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1.5rem" }}>
      <AccountMenu
        sk={{
          mt: 0.5,
          ml: -19.5,
          "&:after": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 20,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-45%) rotate(45deg)",
            zIndex: 0,
          },
        }}
        handleClick={handleClick}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />

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
                size="medium"
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
              color="black"
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
                  <Search fontSize="medium" color="action" />
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
                <ShoppingCart fontSize="medium" color="action" />
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
                <IconButton onClick={(e) => handleClick(e)}>
                  <AccountCircle fontSize="medium" />
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
