import { Button, Typography } from "@mui/material";
import { Fragment, ReactElement } from "react";
import StoreLayout from "../../../layouts/store";
import DUMMY_JSON from "../../../dummy/products.json";
import { Box } from "@mui/system";
import HorizontalQuickProductList from "../../../components/Product/HorizontalQuickProductList";
import Products from "../../../components/Product/ProductList";
import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        {router.asPath.split("/")[3].toUpperCase()}
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

CategoryPage.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default CategoryPage;
