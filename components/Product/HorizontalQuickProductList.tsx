import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { SwiperSlide, Swiper } from "swiper/react";
import { ProductCard } from "./productCard";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";

// import "swiper/css";

// import { FreeMode, Pagination } from "swiper";
import ShopagoBox from "../Layout/ShopagoBox";
// import { useTheme } from "@emotion/react";

interface IHorizontalQuickProductList {
  related: any;
  title: string;
  seeMoreLink?: string;
}

const HorizontalQuickProductList = ({
  related,
  title,
  seeMoreLink,
}: IHorizontalQuickProductList) => {
  related = related.slice(0, 5);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  let itemsToShow = 2; // default for mobile
  if (isMdUp) itemsToShow = 4;
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

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "#000",
  //         borderRadius: "100%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "#000",
  //         borderRadius: "100%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    slidesToShow: itemsToShow,
    swipeToSlide: true,
    arrows: false,
    infinite: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <ShopagoBox>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h6" fontSize={16} fontWeight={600} mb={2} mt={0}>
          {title}
        </Typography>
        <div>
          {seeMoreLink && (
            <Button
              variant="text"
              size="small"
              sx={{ fontSize: 13, mt: -0.5, textTransform: "capitalize" }}
              href={seeMoreLink}
            >
              See more
            </Button>
          )}
        </div>
      </Box>
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
