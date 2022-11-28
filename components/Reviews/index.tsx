import { Box, ButtonGroup, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ShopagoBox from "../Layout/ShopagoBox";
import ReviewItem from "./ReviewItem";
import ReviewSummary from "./ReviewSummary";

const Reviews = (props: any) => {
  return (
    <ShopagoBox>
      <Typography variant="h6" fontWeight={500} mb={3} mt={1}>
        Product Reviews
      </Typography>
      {props.reviews.length > 0 ? (
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <ReviewSummary />
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            {props.reviews.map((review: any, index: number) => (
              <ReviewItem
                key={`${index}-${review.id}`}
                user={review.user}
                rating={review.rating}
                message={review.message}
              />
            ))}
            <Box textAlign="right">
              <ButtonGroup size="small" disableElevation variant="outlined">
                <Button size="small" disabled>
                  Prev
                </Button>
                <Button size="small">Next</Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <>
          <Typography sx={{ fontFamily: "inherit", color: "var(--text-2)" }}>
            No reviews for this product
          </Typography>
        </>
      )}
    </ShopagoBox>
  );
};

export default Reviews;
