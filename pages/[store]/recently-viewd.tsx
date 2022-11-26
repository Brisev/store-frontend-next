import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const RecentlyViewed = () => {
  return <>Recently viewed</>;
};

RecentlyViewed.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default RecentlyViewed;
