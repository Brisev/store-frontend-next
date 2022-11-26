import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const Orders = () => {
  return <>Orders</>;
};

Orders.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Orders;
