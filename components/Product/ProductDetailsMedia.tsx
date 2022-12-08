import { Fragment } from "react";
// import { SwiperSlide, Swiper } from "swiper/react";
// import "swiper/css";
// import { FreeMode, Pagination } from "swiper";
// import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";

const ProductDetailsMedia = ({ media }) => {
  // const theme = useTheme();
  // const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // //   let itemsToShow = isSmDown ? 2 : isMdUp ? 4 : null;
  // let spaceBetween = isSmDown ? 50 : isMdUp ? -120 : null;
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <Slider {...settings}>
        {media.map((item: any, index: number) => (
          <div key={index}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "#fff",
                background: `url(${item.file}) no-repeat center center/cover`,
              }}
            />
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default ProductDetailsMedia;
