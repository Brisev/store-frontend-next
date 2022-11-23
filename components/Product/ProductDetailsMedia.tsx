import { Fragment } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import { Box } from "@mui/material";

const ProductDetailsMedia = ({ media }) => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={80}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {media.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "#fff",
                background: `url(${item.file}) no-repeat center center/cover`,
              }}
            >
              {/* <img src={item.file} alt={item} width="100%" height="auto" /> */}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default ProductDetailsMedia;
