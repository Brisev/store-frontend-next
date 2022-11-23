import { Typography, useMediaQuery, useTheme } from "@mui/material";
// import { SwiperSlide, Swiper } from "swiper/react";
import { ProductCard } from "./productCard";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "swiper/css";

import { FreeMode, Pagination } from "swiper";
import ShopagoBox from "../Layout/ShopagoBox";
// import { useTheme } from "@emotion/react";

const HorizontalQuickProductList = ({ related, title }: any) => {
  related = related.slice(0, 5);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  let itemsToShow = isSmDown ? 2 : isMdUp ? 4 : null;
  if (isMdUp) {
    if (related.length <= 4) {
      itemsToShow = related.length;
    }
  }
  if (isSmDown) {
    if (related.length < 3) {
      itemsToShow = related.length;
    }
  }
  const settings = {
    slidesToShow: itemsToShow,
    swipeToSlide: true,
  };

  return (
    <ShopagoBox>
      <Typography variant="h6" component="p" mb={2} mt={0}>
        {title}
      </Typography>
      <Slider {...settings}>
        {related.map((item: any, index: number) => (
          <ProductCard
            id={item.id}
            key={index}
            showActionButtons={false}
            name={item.name}
            price={item.price}
            media={item.resources[0].file}
            productDiscount={item.productDiscount}
            productDiscountType={item.productDiscountType}
          />
        ))}
      </Slider>
    </ShopagoBox>
  );
};

export default HorizontalQuickProductList;
