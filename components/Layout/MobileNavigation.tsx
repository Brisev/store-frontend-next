import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Backdrop,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  AccountCircleOutlined,
  ChromeReaderModeOutlined,
  ErrorOutline,
  ErrorOutlined,
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
import { useRouter } from "next/router";
import AccountMenu from "./AccountMenu";

interface IMobileMenu {
  title?: string;
  icon?: React.ReactElement;
  isLink?: boolean;
  link?: string;
  action?: string;
}

const menus: IMobileMenu[] = [
  {
    title: "Home",
    icon: <StorefrontOutlined />,
    isLink: true,
    link: "/store",
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
    link: "/store/orders",
  },
  {
    title: "Account",
    icon: <AccountCircleOutlined />,
    isLink: false,
    action: "OPEN_ACCOUNT_MODAL",
  },
];

function MobileNavigation() {
  const router = useRouter();
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

  const handleMenuAction = (
    e: React.MouseEvent<HTMLElement>,
    action: string
  ) => {
    if (action === "OPEN_ACCOUNT_MODAL") {
      handleClick(e);
    }
  };

  const handleMenuItemClicked = (
    e: React.MouseEvent<HTMLElement>,
    menu: IMobileMenu
  ) => {
    const authenticated = true;
    if (true) {
      if (menu.isLink) {
        router.push(menu.link);
      } else {
        handleMenuAction(e, menu.action);
      }
    } else {
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <AccountMenu
          sk={{
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
          }}
          handleClick={handleClick}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      </Backdrop>

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
          {menus.map((menu: IMobileMenu, index: number) => {
            return (
              <BottomNavigationAction
                sx={{
                  color: "primary",
                }}
                onClick={(e) => handleMenuItemClicked(e, menu)}
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

export default React.memo(MobileNavigation);
