import { Button, Grid, Typography } from "@mui/material";
import { Fragment, ReactElement } from "react";
import { ProductCard } from "../../components/Product/productCard";
import StoreLayout from "../../layouts/store";
import DUMMY_JSON from "../../dummy/products.json";
import Products from "../../components/Product/ProductList";
import HorizontalQuickProductList from "../../components/Product/HorizontalQuickProductList";
import { Box } from "@mui/system";

const Saved = () => {
  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Saved
      </Typography>

      <Products
        sx={{
          marginTop: {
            xs: 0,
            sm: 4,
          },
          marginBottom: 5,
        }}
      />

      <Box display="flex" justifyContent="center" marginBottom={15}>
        <Button>Load More </Button>
      </Box>

      <HorizontalQuickProductList
        title="You may also like"
        related={DUMMY_JSON}
      />
      <HorizontalQuickProductList
        title="Recently seen"
        related={DUMMY_JSON}
        seeMoreLink="/store/recently-viewd"
      />
    </Fragment>
  );
};

Saved.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Saved;
