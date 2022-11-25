import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  ButtonGroup,
} from "@mui/material";
import {
  DeleteSharp,
  AddBoxRounded,
  RemoveRounded,
  DeleteRounded,
  AddCircleRounded,
  RemoveCircleRounded,
} from "@mui/icons-material";
import React from "react";

import Button from "@mui/material/Button";

const CartItem = (props: any) => {
  const variations = [];

  for (const key in props.item.variation) {
    variations.push({
      name: key,
      details: props.item.variation[key],
    });
  }

  return (
    <Card elevation={0} sx={{ mb: 2 }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://stunner.ng/wp-content/uploads/2022/07/iphone-13-pro-max-1.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography sx={{ fontWeight: 400 }}>{props.item.name}</Typography>
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              N{props.item.price.toLocaleString()}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: "grey",
              }}
            >
              4 items in cart
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Box textAlign="right" sx={{ mt: -4, pb: 1, pr: 1 }}>
        <ButtonGroup size="small" disableElevation variant="outlined">
          <Button color="error">
            <DeleteRounded fontSize="small" />
          </Button>
          <Button>
            <RemoveCircleRounded fontSize="small" />
          </Button>
          <Button>
            <AddCircleRounded fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
};

export default CartItem;