import {
  Avatar,
  Box,
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

function QuickMenu({
  sk,
  handleClick,
  anchorEl,
  open,
  handleClose,
  quickMenu = [],
}: any) {
  const router = useRouter();

  const handleMenuAction = (
    e: React.MouseEvent<HTMLElement>,
    action: string
  ) => {
    //
  };

  const handleMenuItemClicked = (e: React.MouseEvent<HTMLElement>, menu) => {
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

  const isMenuSelected = (link: string) => {
    const path = router.asPath;
    if (path.includes(link)) return true;
    return false;
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
        {quickMenu.map((menu, index: number) => {
          if (menu.component)
            return <div key={`divider_${index}`}>{menu.component}</div>;
          return (
            <MenuItem
              onClick={(e) => handleMenuItemClicked(e, menu)}
              key={`mobile_menu_${index}`}
              // dense
              selected={isMenuSelected(menu.link)}
            >
              {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
              <Typography color={menu.color}>{menu.title}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default memo(QuickMenu);
