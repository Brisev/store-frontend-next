import { Typography } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { ProductCard } from "./productCard";
import "swiper/css";

import { FreeMode, Pagination } from "swiper";
import ShopagoBox from "../Layout/ShopagoBox";

const HorizontalQuickProductList = ({ related, title }: any) => {
  return (
    <ShopagoBox>
      <Typography variant="h6" component="p" mb={2} mt={0}>
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
    </ShopagoBox>
  );
};

export default HorizontalQuickProductList;
