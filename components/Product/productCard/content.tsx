import { CardMedia, Typography } from "@mui/material";
import { memo } from "react";
import Link from "next/link";
import style from "./productCard.module.css";
import { Stack } from "@mui/system";
import { calculateProductDiscount } from "../../../utils/products";

const ProductContent = ({
  name,
  price,
  productDiscountType,
  productDiscount,
}) => {
  return (
    <>
      <Typography
        mb={1}
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          mt: -1,
          // color: "var(--text-1)",
        }}
        noWrap
      >
        {name}
      </Typography>
      <Stack
        sx={{
          gap: ".5rem",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
          justifyContent: {
            xs: "center",
            sm: "space-between",
            md: "space-between",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 400,
            mt: -1,
            color: "var(--text-1)",
          }}
        >
          ₦
          {
            calculateProductDiscount(
              price,
              productDiscountType,
              productDiscount
            ).productAmount
          }
        </Typography>
        <Typography
          sx={{
            textDecoration: "line-through",
            fontSize: "12px",
            fontWeight: 400,
            mt: -1,
            color: "grey",
            // fontSize: { xs: "12px", sm: "12px", md: "11px" },
          }}
        >
          ₦
          {
            calculateProductDiscount(
              price,
              productDiscountType,
              productDiscount
            ).discountAmount
          }
        </Typography>
      </Stack>
    </>
  );
};

export default memo(ProductContent);
