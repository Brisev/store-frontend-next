import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import {
  AccountCircleOutlined,
  ChromeReaderModeOutlined,
  ShoppingBagOutlined,
  StorefrontOutlined,
  //   StoreOutlined,
} from "@mui/icons-material";

const menus = [
  {
    title: "Home",
    icon: <StorefrontOutlined />,
  },
  {
    title: "Categories",
    icon: <ChromeReaderModeOutlined />,
  },
  {
    title: "Orders",
    icon: <ShoppingBagOutlined />,
  },
  {
    title: "Account",
    icon: <AccountCircleOutlined />,
  },
];

export default function MobileNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        borderTop: "1px solid #cfcfcf",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        display: {
          xs: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
      //   elevation={10}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {menus.map((menu, index) => {
          return (
            <BottomNavigationAction
              label={menu.title}
              icon={menu.icon}
              key={`${menu.title}_${index}`}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
