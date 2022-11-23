import { Typography } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { ProductCard } from "./productCard";
import "swiper/css";

import { FreeMode, Pagination } from "swiper";

const HorizontalQuickProductList = ({ related, title }: any) => {
  return (
    <>
      <Typography variant="h6" component="p" mb={1} mt={5}>
        {title}
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {related.map((item: any, index: number) => (
          <SwiperSlide>
            <ProductCard
              id={item.id}
              showActionButtons={false}
              name={item.name}
              price={item.price}
              media={item.resources[0].file}
              productDiscount={item.productDiscount}
              productDiscountType={item.productDiscountType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HorizontalQuickProductList;
