import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  AccountCircleOutlined,
  ChromeReaderModeOutlined,
  LocalMall,
  Logout,
  ManageAccountsOutlined,
  MyLocationOutlined,
  PersonAdd,
  Preview,
  Settings,
  ShoppingBagOutlined,
  Stars,
  StorefrontOutlined,
  //   StoreOutlined,
} from "@mui/icons-material";
import AuthDialog from "../AuthModal";

const menus = [
  {
    title: "Home",
    icon: <StorefrontOutlined />,
    isLink: true,
    link: "/",
  },
  {
    title: "Categories",
    icon: <ChromeReaderModeOutlined />,
    isLink: false,
    action: "OPEN_CATEGORY_MODAL",
  },
  {
    title: "Orders",
    icon: <ShoppingBagOutlined />,
    isLink: true,
    action: "/orders",
  },
  {
    title: "Account",
    icon: <AccountCircleOutlined />,
    isLink: false,
    action: "OPEN_ACCOUNT_MODAL",
  },
];

export default function MobileNavigation() {
  const [value, setValue] = React.useState("Home");
  const [showModal, setshowModal] = React.useState(false);

  const handleMenuClick = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setshowModal((oldState) => !oldState);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: -5,
            // mb: 30,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:after": {
              content: '""',
              display: "block",
              position: "absolute",
              bottom: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(45%) rotate(-45deg)",
              zIndex: 0,
            },
          },
        }}
        // transformOrigin={{ horizontal: "right", vertical: "top" }}
        // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <LocalMall />
          </ListItemIcon>
          Orders
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Stars />
          </ListItemIcon>
          Saved Items
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Preview />
          </ListItemIcon>
          Recently viewed
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <MyLocationOutlined fontSize="small" />
          </ListItemIcon>
          Address Book
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsOutlined fontSize="small" />
          </ListItemIcon>
          Account Management
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <AuthDialog open={showModal} handleClose={handleMenuClick} />
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
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                label={menu.title}
                icon={menu.icon}
                key={`${menu.title}_${index}`}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </>
  );
}
