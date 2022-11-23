import { Fragment, ReactElement } from "react";
import Products from "../../components/Product/ProductList";
import StoreLayout from "../../layouts/store";

const StoreHome = () => {
  return (
    <Fragment>
      <Products />
    </Fragment>
  );
};

StoreHome.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default StoreHome;
