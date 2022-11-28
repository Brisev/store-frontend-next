import { Button, Grid, Typography } from "@mui/material";
import { Fragment, ReactElement } from "react";
import { ProductCard } from "../../components/Product/productCard";
import StoreLayout from "../../layouts/store";
import DUMMY_JSON from "../../dummy/products.json";
import Products from "../../components/Product/ProductList";
import HorizontalQuickProductList from "../../components/Product/HorizontalQuickProductList";
import { Box } from "@mui/system";

const RecentlyViewed = () => {
  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Recently Viewed
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
        title="Saved"
        related={DUMMY_JSON}
        seeMoreLink="/store/saved"
      />
    </Fragment>
  );
};

RecentlyViewed.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default RecentlyViewed;
