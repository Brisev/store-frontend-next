import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";

const ProductVariation = () => {
  return (
    <Fragment>
      <Box
        sx={{
          marginBottom: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Memory
        </Typography>
        {["16GB", "32GB", "64GB", "256GB", "512GB", "1TB"].map((_, index) => (
          <Chip
            key={index}
            label={_}
            variant="filled"
            sx={{
              marginRight: 0.5,
              marginTop: 0.8,
            }}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default ProductVariation;
