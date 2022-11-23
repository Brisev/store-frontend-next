import { Fragment } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { FreeMode, Pagination } from "swiper";
import Image from "next/image";

const ProductDetailsMedia = () => {
  return (
    <Fragment>
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
        {[23].map((item: any, index: number) => (
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1669072257143-5592e0652644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
              width={200}
              height={200}
            />
            {/* <ProductCard
              id={item.id}
              showActionButtons={false}
              name={item.name}
              price={item.price}
              media={item.resources[0].file}
              productDiscount={item.productDiscount}
              productDiscountType={item.productDiscountType}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default ProductDetailsMedia;
