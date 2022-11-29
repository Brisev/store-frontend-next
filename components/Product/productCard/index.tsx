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
import ProductContent from "./content";
import Link from "@mui/material/Link";

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
  showHoverShadow?: boolean;
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
    showHoverShadow,
  } = props;
  return (
    <Card
      sx={{
        maxWidth: 180,
        maxHeight: 350,
        boxShadow: "none",
        cursor: "pointer",
        ":hover": {
          boxShadow: showHoverShadow ? 2 : "none",
        },
      }}
    >
      <ProductCardMedia id={id} media={media} name={name} />
      <Link
        href={`/store/${id}`}
        underline="hover"
        sx={{
          textDecoration: "none",
          color: "inherit",
          ":hover": {
            textDecoration: "none",
          },
        }}
      >
        <CardContent>
          <ProductContent
            name={name}
            price={price}
            productDiscountType={productDiscountType}
            productDiscount={productDiscount}
          />
        </CardContent>
      </Link>

      {showActionButtons && (
        <CardActions sx={{ justifyContent: "space-between" }}>
          <ShopagoButton
            size="small"
            // sx={{
            //   display: "none",
            //   ":hover": {
            //     display: "block",
            //   },
            // }}
          >
            <>Add to cart</>
          </ShopagoButton>
          <IconButton
            aria-label="favourite"
            sx={{ border: "0.1px solid #D5D5DE" }}
            size="small"
          >
            <FavoriteSharp />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};
