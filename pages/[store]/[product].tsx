import { Fragment, ReactElement } from "react";
import HorizontalQuickProductList from "../../components/Product/HorizontalQuickProductList";
import StoreLayout from "../../layouts/store";

import DUMMY_JSON from "../../dummy/products.json";
import ProductDetailsMedia from "../../components/Product/ProductDetailsMedia";

const ProductDetails = () => {
  return (
    <Fragment>
      <ProductDetailsMedia />
      <HorizontalQuickProductList
        title="You may also like"
        related={DUMMY_JSON}
      />
      <HorizontalQuickProductList title="Recently seen" related={DUMMY_JSON} />
    </Fragment>
  );
};

ProductDetails.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default ProductDetails;
