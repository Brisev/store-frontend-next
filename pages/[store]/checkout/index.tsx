import { ReactElement } from "react";
import StoreLayout from "../../../layouts/store";

const Checkout = () => {
  return <>Checkout page</>;
};

Checkout.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Checkout;
