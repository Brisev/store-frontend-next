import { Grid, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShopagoBox from "../Layout/ShopagoBox";

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
              <Stack
                direction="row"
                gap={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={review.rating}
                  />
                  <Typography
                    mb={1}
                    sx={{
                      fontWeight: 700,
                      color: "var(--text-1)",
                      fontFamily: "Sansation",
                    }}
                  >
                    {review.user}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "inherit",
                      color: "var(--text-2)",
                      mb: 2,
                      fontSize: "14px",
                    }}
                  >
                    {review.message}
                  </Typography>
                </Box>
              </Stack>
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
