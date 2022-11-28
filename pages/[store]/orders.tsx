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

const Orders = () => {
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
        Orders
      </Typography>
      {cart.items.length > 0 ? (
        <Grid container spacing={2} marginBottom={10}>
          <Grid item xs={12} sm={12} md={8}>
            {cart.items.length > 0 &&
              cart.items.map((item: any, index: number) => (
                <CartItem
                  type="order"
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
          {/* <Grid
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
          </Grid> */}
        </Grid>
      ) : (
        <Typography
          variant="h5"
          component="p"
          sx={{ textAlign: "center", padding: "2rem 0" }}
        >
          No orders yet
        </Typography>
      )}
      <HorizontalQuickProductList
        title="Saved"
        related={DUMMY_JSON}
        seeMoreLink="/store/saved"
      />
      <HorizontalQuickProductList
        title="You may also like"
        related={DUMMY_JSON}
      />
      <HorizontalQuickProductList
        title="Recently seen"
        related={DUMMY_JSON}
        seeMoreLink="/store/recently-viewd"
      />
    </>
  );
};

Orders.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Orders;
