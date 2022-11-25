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
  Rating,
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
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  padding: 10,
  elevation: "0",
}));

const ProductDetails = () => {
  const router = useRouter();

  const triggerShare = () => {
    console.log(router);

    if (navigator.share) {
      navigator
        .share({
          title: DUMMY_JSON[0].name,
          text: `Hi, checkout the ${DUMMY_JSON[0].name} from shopago`,
          url: "https://store-frontend-next.vercel.app/store/9a4dc2010-6767-5f44-910a2-bad6d6110bbcc",
        })
        .then(() => {})
        .catch();
    }
  };
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <ProductDetailsMedia media={DUMMY_JSON[0].resources} />
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
                <IconButton
                  onClick={triggerShare}
                  aria-label="share"
                  sx={{
                    mt: -0.5,
                    display: {
                      xs: "inline-block",
                      sm: "none",
                    },
                  }}
                  size="small"
                >
                  <Share fontSize="small" />
                </IconButton>

                <IconButton
                  aria-label="favourite"
                  sx={{ mt: -1.1, mr: -1 }}
                  size="small"
                >
                  <FavoriteSharp fontSize="small" />
                </IconButton>
              </div>
            </Stack>
            <Typography mt={1} variant="h6" sx={{ fontWeight: 500 }}>
              <span className="sansation">{DUMMY_JSON[0].name}</span>
            </Typography>

            <Stack
              direction="row"
              sx={{
                mb: -0.3,
                ml: -0.3,
              }}
            >
              <Rating value={3.5} readOnly size="small" />
              <Typography variant="caption" sx={{ ml: 1 }}>
                <> (10,000 ratings)</>
              </Typography>
            </Stack>

            <Typography sx={{ color: "#000", mt: 1 }}>
              <span className="sansation">₦{(50000).toLocaleString()}</span>
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                fontWeight: 400,
                mt: -0.1,
                color: "grey",
                fontSize: { xs: "14px", sm: "14px", md: "12px" },
              }}
            >
              ₦90,000
            </Typography>
            <Typography
              component="p"
              ml={0}
              mt={4}
              sx={{ color: "red", fontSize: "13px" }}
            >
              <ReportProblem sx={{ fontSize: 13, mb: -0.2 }} /> 8 units left
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
