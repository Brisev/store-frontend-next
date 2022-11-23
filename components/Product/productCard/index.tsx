import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FavoriteSharp } from "@mui/icons-material";
import { calculateProductDiscount } from "../../../utils/products";
import ShopagoButton from "../../Inputs/Button/Button";
import ProductCardMedia from "./media";

export interface OFFER {
  name: string;
}

export interface PRODUCT_CARD {
  id: string;
  price: number;
  name: string;
  media: string;
  discount?: string;
  freeShipping?: boolean;
  availableOffer?: boolean;
  showActionButtons?: boolean;
  offer?: OFFER;
  productDiscountType?: string;
  productDiscount?: number;
}

export const ProductCard = (props: PRODUCT_CARD) => {
  //eslint-disable-next-line
  const {
    id,
    price,
    name,
    media,
    freeShipping,
    availableOffer,
    offer,
    showActionButtons = true,
    productDiscountType,
    productDiscount,
  } = props;
  return (
    <Card sx={{ maxWidth: 180, maxHeight: 350, boxShadow: "none" }}>
      <ProductCardMedia id={id} media={media} name={name} />
      <CardContent>
        <Typography mb={1} noWrap>
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
              fontSize: "15px",
              fontWeight: 500,
              mt: -1,
              color: "var(--text-1)",
            }}
          >
            N
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
              fontWeight: 400,
              mt: -1,
              color: "grey",
              fontSize: { xs: "12px", sm: "12px", md: "11px" },
            }}
          >
            N
            {
              calculateProductDiscount(
                price,
                productDiscountType,
                productDiscount
              ).discountAmount
            }
          </Typography>
        </Stack>
      </CardContent>

      {showActionButtons && (
        <CardActions sx={{ justifyContent: "space-between" }}>
          <ShopagoButton>
            <>Add to cart</>
          </ShopagoButton>
          <IconButton
            aria-label="favourite"
            sx={{ border: "1px solid var(--text-4)" }}
            size="small"
          >
            <FavoriteSharp />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};
