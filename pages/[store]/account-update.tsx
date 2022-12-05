import { Lock, ManageAccounts, Password } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import ChangePassword from "../../components/AccountManagement/ChangePassword";
import ProfileUpdate from "../../components/AccountManagement/ProfileUpdate";
import Security from "../../components/AccountManagement/Security";
import StoreLayout from "../../layouts/store";

const sideMenu = [
  {
    title: "Profile",
    action: "",
    icon: <ManageAccounts fontSize="small" />,
    component: <ProfileUpdate />,
  },
  {
    title: "Security",
    action: "",
    icon: <Lock fontSize="small" />,
    component: <Security />,
  },
  {
    title: "Change Password",
    action: "",
    icon: <Password fontSize="small" />,
    component: <ChangePassword />,
  },
];

const AccountManagement = () => {
  const [menu, setMenu] = useState(0);
  const handleMenuSelect = (index: number) => {
    setMenu(index);
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          pb: "2rem",
        }}
      >
        Account Management
      </Typography>

      <Grid container columnSpacing={2} rowSpacing={{ xs: 2 }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{}} elevation={0}>
            <MenuList>
              {sideMenu.map((menuItem, index) => {
                return (
                  <MenuItem
                    onClick={() => handleMenuSelect(index)}
                    // dense
                    selected={menu === index}
                  >
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText color="error">{menuItem.title}</ListItemText>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper
            elevation={0}
            sx={{
              padding: 3,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: 350,
                },
              }}
            >
              {sideMenu[menu].component}
              {[0, 2].includes(menu) && (
                <Button
                  fullWidth
                  sx={{ mt: 3 }}
                  variant="contained"
                  disableElevation
                >
                  Update
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

AccountManagement.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AccountManagement;
