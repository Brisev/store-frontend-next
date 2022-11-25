import { Grid, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShopagoBox from "../Layout/ShopagoBox";
import ReviewItem from "./ReviewItem";

const Reviews = (props: any) => {
  return (
    <ShopagoBox>
      <Typography variant="h6" mb={3} mt={1}>
        Product Reviews
      </Typography>
      {props.reviews.length > 0 ? (
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 8, lg: 12 }}
          mx="auto"
        >
          {props.reviews.map((review: any, index: number) => (
            <Grid
              item
              xs={2}
              sm={3}
              md={2}
              lg={4}
              key={`${index}-${review.id}`}
            >
              <ReviewItem
                user={review.user}
                rating={review.rating}
                message={review.message}
              />
            </Grid>
          ))}
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
