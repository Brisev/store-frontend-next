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
import QuickMenu from "./QuickMenuPop";
import { MenuContext } from "../../store/menuContext";

export default function MenuAppBar() {
  const { menu, setSubMenuHandler, subMenu } = React.useContext(MenuContext);

  const [quickMenuSX, setquickMenuSX] = React.useState({});

  const [accountMenuEl, setAccountMenuElEl] =
    React.useState<null | HTMLElement>(null);
  const openAccountMenu = Boolean(accountMenuEl);

  const handleAccountMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    action: string
  ) => {
    if (action === "menu") {
      setSubMenuHandler(menu[1].subMenu);
      setquickMenuSX(menu[1].sxMenuDestop);
    }
    if (action === "account") {
      setSubMenuHandler(menu[3].subMenu);
      setquickMenuSX(menu[3].sxMenuDestop);
    }
    setAccountMenuElEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuElEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1.5rem" }}>
      <QuickMenu
        quickMenu={subMenu}
        sk={quickMenuSX}
        handleClick={handleAccountMenuClick}
        anchorEl={accountMenuEl}
        open={openAccountMenu}
        handleClose={handleAccountMenuClose}
      />

      <AppBar
        sx={{
          background: "rgba(255,255,255, 0.98)",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px -1px 5px",
          position: "fixed",
          // width: 400,
          // top: 80,
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
                onClick={(e) => handleAccountMenuClick(e, "menu")}
                size="medium"
                edge="start"
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
                <IconButton
                  onClick={(e) => handleAccountMenuClick(e, "account")}
                >
                  <AccountCircle fontSize="medium" />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
