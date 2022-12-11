import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Backdrop, Paper } from "@mui/material";
import AuthDialog from "../AuthModal";
import { useRouter } from "next/router";
import QuickMenu from "./QuickMenuPop";
import { MenuContext } from "../../store/menuContext";

function MobileNavigation() {
  const router = useRouter();

  const [mobileMenuValue, setMobileMenuValue] = React.useState("Home");

  const [showAuthDialogModal, setshowAuthDialogModal] = React.useState(false);

  const [quickMenuSX, setquickMenuSX] = React.useState({});

  const handleMenuClick = (event: React.SyntheticEvent, newValue: string) => {
    setMobileMenuValue(newValue);
    setshowAuthDialogModal((oldState) => !oldState);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { menu, setSubMenuHandler, subMenu } = React.useContext(MenuContext);

  const handleMenuAction = (e: React.MouseEvent<HTMLElement>, menu) => {
    if (
      ["OPEN_ACCOUNT_MODAL", "OPEN_CATEGORIES_MENU_MODAL"].includes(menu.action)
    ) {
      setSubMenuHandler(menu.subMenu);
      setquickMenuSX(menu.sx);
      handleClick(e);
    }
  };

  const handleMenuItemClicked = (e: React.MouseEvent<HTMLElement>, menu) => {
    const authenticated = true;
    if (true) {
      if (menu.isLink) {
        router.push(menu.link);
      } else {
        handleMenuAction(e, menu);
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
        <QuickMenu
          sk={quickMenuSX}
          quickMenu={subMenu}
          handleClick={handleClick}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      </Backdrop>

      <AuthDialog open={showAuthDialogModal} handleClose={handleMenuClick} />
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
          value={mobileMenuValue}
          onChange={(event, newValue) => {
            setMobileMenuValue(newValue);
          }}
        >
          {menu.map((menu, index: number) => {
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
