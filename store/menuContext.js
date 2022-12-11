const {
  ManageAccountsOutlined,
  Logout,
  AccountCircleOutlined,
  ShoppingBagOutlined,
  ChromeReaderModeOutlined,
  StorefrontOutlined,
  MyLocationOutlined,
  Preview,
  Stars,
} = require("@mui/icons-material");
const { Divider } = require("@mui/material");

import { createContext, useState } from "react";

export const MenuContext = createContext({
  menu: [],
  subMenu: [],
  setMenuHandler: (items) => {},
  setSubMenuHandler: (items) => {},
});

const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState([
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
      action: "OPEN_CATEGORIES_MENU_MODAL",
      sx: {
        mt: -5,
        width: 200,
        "&:after": {
          content: '""',
          display: "block",
          position: "absolute",
          bottom: 0,
          right: 160,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(45%) rotate(-45deg)",
          zIndex: 0,
        },
      },
      sxMenuDestop: {
        mt: 0.5,
        width: 200,
        // ml: -19.5,
        "&:after": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 180,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-45%) rotate(45deg)",
          zIndex: 0,
        },
      },
      subMenu: [
        {
          title: "Electronics",
          link: "/store/category/electronics",
          isLink: true,
        },
        {
          title: "Phones",
          link: "/store/category/phones",
          isLink: true,
        },
        {
          title: "Fashion",
          link: "/store/category/fashion",
          isLink: true,
        },
      ],
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
      sx: {
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
      sxMenuDestop: {
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
      },
      subMenu: [
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
          icon: <Logout fontSize="small" color="error" />,
          isLink: false,
          color: "error",
        },
      ],
    },
  ]);

  const [subMenu, setSubMenu] = useState();

  const setMenuHandler = (menuItems) => {
    setMenu(menuItems);
  };

  const setSubMenuHandler = (subMenuItems) => {
    setSubMenu(subMenuItems);
  };

  return (
    <MenuContext.Provider
      value={{
        menu: menu,
        subMenu: subMenu,
        setSubMenuHandler: setSubMenuHandler,
        setMenuHandler: setMenuHandler,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
