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
        <Rating size="small" value={rating} readOnly />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {user}
        </Typography>
        <Typography
          variant="caption"
          mb={1}
          sx={{
            fontWeight: 300,
            color: "grey",
          }}
        >
          an hour ago
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "var(--text-2)",
            mb: 2,
            fontSize: "13.5px",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ReviewItem;
