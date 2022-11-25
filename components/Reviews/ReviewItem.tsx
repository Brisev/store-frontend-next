import { Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const ReviewItem = ({ user, rating, message }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Rating name="simple-controlled" size="small" value={rating} readOnly />
        <Typography
          mb={1}
          sx={{
            fontWeight: 700,
            color: "var(--text-1)",
            fontFamily: "Sansation",
          }}
        >
          {user}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "var(--text-2)",
            mb: 2,
            fontSize: "14px",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ReviewItem;
