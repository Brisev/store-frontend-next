import { CardMedia } from "@mui/material";
import { memo } from "react";
import Link from "next/link";
import style from "./productCard.module.css";

export interface PRODUCT_MEDIA {
  media: string;
  name: string;
  id: string;
}

const ProductMedia = ({ media, name, id }: PRODUCT_MEDIA) => {
  return (
    <Link
      href={`/store/${id}`}
      // className={style.productMedia}
    >
      <CardMedia
        component="img"
        height={140}
        width={50}
        image={media}
        alt={name}
      />
    </Link>
  );
};

export default memo(ProductMedia);
