import { Fragment, ReactElement } from "react";
import HorizontalQuickProductList from "../../components/Product/HorizontalQuickProductList";
import StoreLayout from "../../layouts/store";

import DUMMY_JSON from "../../dummy/products.json";
import ProductDetailsMedia from "../../components/Product/ProductDetailsMedia";
import { Box, Stack } from "@mui/system";
import {
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {
  FavoriteSharp,
  RemoveRounded,
  ReportProblem,
  Share,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import Reviews from "../../components/Reviews";
import ShopagoBox from "../../components/Layout/ShopagoBox";
import ProductDetailsAndSpecification from "../../components/Product/Description";

const Item = styled(Paper)(({ theme }) => ({
  padding: 10,
  elevation: "0",
}));

const ProductDetails = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <ProductDetailsMedia media={DUMMY_JSON[2].resources} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              height: 300,
              backgroundColor: "white",
              padding: "1rem",
            }}
          >
            <Stack flexDirection="row" justifyContent="space-between">
              <div>
                {DUMMY_JSON[0].tags && (
                  <>
                    {DUMMY_JSON[0].tags.map((tag: string) => (
                      <Chip
                        label={tag}
                        size="small"
                        sx={{
                          mr: 1,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              <div>
                <IconButton aria-label="share" sx={{ mt: -0.5 }} size="small">
                  <Share fontSize="small" />
                </IconButton>

                <IconButton
                  aria-label="favourite"
                  sx={{ mt: -0.5, mr: -1 }}
                  size="small"
                >
                  <FavoriteSharp fontSize="small" />
                </IconButton>
              </div>
            </Stack>
            <Typography my={1} variant="h6" sx={{ fontWeight: 500 }}>
              <span className="sansation">{DUMMY_JSON[0].name}</span>
            </Typography>

            <Typography mt={-1} sx={{ color: "#000", mt: 0 }}>
              <span className="sansation">N{(50000).toLocaleString()}</span>
            </Typography>

            <Typography
              sx={{
                textDecoration: "line-through",
                fontWeight: 500,
                mt: 1,
                color: "var(--bg-secondary)",
                fontSize: { xs: "14px", sm: "14px", md: "12px" },
              }}
            >
              N{899}
            </Typography>

            <Typography
              component="p"
              ml={0}
              mt={4}
              sx={{ color: "red", fontSize: "14px" }}
            >
              <ReportProblem sx={{ fontSize: 15, mb: -0.4 }} /> 8 units left
              {/* {DUMMY_JSON[0].stockQuantity} in stock */}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <ProductDetailsAndSpecification
        specification={DUMMY_JSON[3].description}
      />

      <Reviews reviews={DUMMY_JSON[2].reviews} />

      <HorizontalQuickProductList
        title="You may also like"
        related={DUMMY_JSON}
      />

      <HorizontalQuickProductList title="Recently seen" related={DUMMY_JSON} />
    </Fragment>
  );
};

ProductDetails.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default ProductDetails;
