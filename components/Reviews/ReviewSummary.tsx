import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";

const ReviewSummary = () => {
  return (
    <Fragment>
      <Box
        textAlign="center"
        sx={{
          background: "#f2f2f2",
          paddingTop: 2,
          paddingBottom: 2,
          borderRadius: 2,
        }}
        marginBottom={{
          xs: 3,
          sm: 0,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }} mb={0} mt={1}>
          4.1/5
        </Typography>
        <div>
          <Rating size="small" value={4.1} readOnly />
        </div>
        <Typography variant="subtitle2" sx={{ fontWeight: 300 }} mb={0}>
          90,000 ratings
        </Typography>
      </Box>
      <Box
        mt={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        {[5, 4, 3, 2, 1].map((item, index) => {
          return (
            <Box display="flex" flexDirection="row" key={index}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 300, marginRight: 2 }}
                mb={0}
              >
                90
              </Typography>
              <Rating size="small" value={item} readOnly />
            </Box>
          );
        })}
      </Box>
    </Fragment>
  );
};

export default ReviewSummary;
