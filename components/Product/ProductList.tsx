import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import DUMMY_JSON from "../../dummy/products.json";
import { ProductCard } from "./productCard";

const StyledProducts = styled("section")(({ theme }) => ({
  background: "#fff",
  margin: "auto",
}));

const Products = () => {
  return (
    <StyledProducts
      sx={{
        paddingTop: { xs: "1rem", md: "1rem" },
        paddingBottom: "1rem",
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{ color: "var(--text-1)", fontWeight: 500 }}
        mb={4}
        px={2}
      >
        Featured Products
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 4, sm: 6, md: 8 }}
        columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
        mx="auto"
      >
        {DUMMY_JSON.map((product, index) => (
          <Grid item xs={2} sm={3} md={2} lg={3} key={`${index}-${product.id}`}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              media={product.resources[0].file}
              productDiscount={product.productDiscount}
              productDiscountType={product.productDiscountType}
            />
          </Grid>
        ))}
      </Grid>
    </StyledProducts>
  );
};

export default Products;
