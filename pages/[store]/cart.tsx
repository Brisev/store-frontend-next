import React, { ReactElement, useContext } from "react";
import logo from "../../../assets/svg/mobile-nav-logo.svg";
import { AddBoxRounded, Google, RemoveRounded } from "@mui/icons-material";
import {
  Typography,
  Stack,
  Box,
  Button as MuiButton,
  styled,
  Grid,
  Divider,
} from "@mui/material";
import CartItem from "../../components/Cart/CartItem";
import DUMMY_JSON from "../../dummy/products.json";
import StoreLayout from "../../layouts/store";
import CartSumarrySideBar from "../../components/Cart/CartSummarySideBar";
import HorizontalQuickProductList from "../../components/Product/HorizontalQuickProductList";

const Cart = () => {
  const cart = { items: DUMMY_JSON };
  //   const { toggleShowModal } = useContext(ModalContext);

  const addItemToCart = (item: any) => {
    // cart.addItem({
    //   ...item,
    //   amount: 1,
    // });
  };

  const removeItemFromCart = (id: any, variation: string) => {
    // cart.removeItem(id, variation);
  };

  const deleteItemHandler = (id: any, number: any, variation: string) => {
    // cart.deleteItem(id, number, variation);
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
        Cart
      </Typography>
      {cart.items.length > 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            {cart.items.length > 0 &&
              cart.items.map((item: any, index: number) => (
                <CartItem
                  item={item}
                  key={item.id + index}
                  onAdd={addItemToCart.bind(null, item)}
                  onRemove={removeItemFromCart.bind(
                    null,
                    item.id,
                    item.variationString
                  )}
                  onDelete={deleteItemHandler.bind(
                    null,
                    item.id,
                    item.amount,
                    item.variationString
                  )}
                />
              ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <CartSumarrySideBar />
          </Grid>

          <Stack
            direction="row"
            width="100%"
            bgcolor="#fff"
            alignItems="center"
            justifyContent="space-between"
            py={1}
            px={3}
            sx={{
              zIndex: 5,
              display: { xs: "flex", sm: "flex", md: "none" },
              position: "fixed",
              bottom: 0,
              left: 0,
              borderTopColor: "#DBE1FC",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            }}
          >
            <MuiButton
              variant="contained"
              disableElevation
              fullWidth
              href="/store/checkout"
              sx={{
                padding: ".75rem 3rem",
                borderRadius: "",
              }}
            >
              Checkout (₦1,233,000)
            </MuiButton>
          </Stack>
        </Grid>
      ) : (
        <Typography
          variant="h5"
          component="p"
          sx={{ textAlign: "center", padding: "2rem 0" }}
        >
          No items in cart
        </Typography>
      )}
      <Box mt={10}></Box>
      <HorizontalQuickProductList
        title="Saved"
        related={DUMMY_JSON}
        seeMoreLink="/store/saved"
      />
      <HorizontalQuickProductList
        title="Recently seen"
        related={DUMMY_JSON}
        seeMoreLink="/store/recently-viewd"
      />
    </>
  );
};

Cart.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Cart;
