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
import { useRouter } from "next/router";

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
    action: "/store/orders",
  },
  {
    title: "Account",
    icon: <AccountCircleOutlined />,
    isLink: false,
    action: "OPEN_ACCOUNT_MODAL",
  },
];

interface IAccountMenu {
  title?: string;
  icon?: React.ReactElement;
  action?: string;
  link?: string;
  isLink?: boolean;
  component?: React.ReactElement;
}

const accountMenu: IAccountMenu[] = [
  {
    title: "Saved Items",
    icon: <Stars fontSize="small" />,
    link: "/store/saved",
    isLink: true,
  },
  {
    title: "Recently viewed",
    icon: <Preview fontSize="small" />,
    link: "/store/recently-viewd",
    isLink: true,
  },
  {
    title: "Address Book",
    icon: <MyLocationOutlined fontSize="small" />,
    link: "/store/address-book",
    isLink: true,
  },
  {
    component: <Divider sx={{ my: 0.5 }} />,
  },
  {
    title: "Account Management",
    icon: <ManageAccountsOutlined fontSize="small" />,
    link: "/store/account-update",
    isLink: true,
  },
  {
    title: "Logout",
    icon: <Logout fontSize="small" />,
    isLink: false,
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
      >
        {accountMenu.map((menu: IAccountMenu, index: number) => {
          if (menu.component) return <>{menu.component}</>;
          return (
            <MenuItem
              onClick={(e) => handleMenuItemClicked(e, menu)}
              key={`mobile_menu_${index}`}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              {menu.title}
            </MenuItem>
          );
        })}
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
          {menus.map((menu: IMobileMenu, index: number) => {
            return (
              <BottomNavigationAction
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
