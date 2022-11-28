import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const AccountManagement = () => {
  return <>Account management coming soon</>;
};

AccountManagement.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AccountManagement;
