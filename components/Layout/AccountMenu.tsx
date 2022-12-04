import {
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
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
import React, { memo } from "react";
import { useRouter } from "next/router";

interface IAccountMenu {
  title?: string;
  icon?: React.ReactElement;
  action?: string;
  link?: string;
  isLink?: boolean;
  component?: React.ReactElement;
  color?: string;
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
    icon: <Logout fontSize="small" color="error" />,
    isLink: false,
    color: "error",
  },
];

function AccountMenu({ sk, handleClick, anchorEl, open, handleClose }: any) {
  const router = useRouter();

  const handleMenuAction = (
    e: React.MouseEvent<HTMLElement>,
    action: string
  ) => {
    //
  };

  const handleMenuItemClicked = (
    e: React.MouseEvent<HTMLElement>,
    menu: IAccountMenu
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
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
            },
            ...sk,
          },
        }}
      >
        {accountMenu.map((menu: IAccountMenu, index: number) => {
          if (menu.component)
            return <div key={`divider_${index}`}>{menu.component}</div>;
          return (
            <MenuItem
              onClick={(e) => handleMenuItemClicked(e, menu)}
              key={`mobile_menu_${index}`}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <Typography color={menu.color}>{menu.title}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default memo(AccountMenu);
