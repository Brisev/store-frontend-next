import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import {
  SearchOutlined,
  ShoppingBag,
  ShoppingBasket,
} from "@mui/icons-material";
import UseAutocomplete from "./NavSearch";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
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
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopago
          </Typography>
          <UseAutocomplete />
          <Badge
            badgeContent={4}
            color="primary"
            sx={{
              ml: 2,
            }}
          >
            <ShoppingBasket />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
