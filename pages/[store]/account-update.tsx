import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const AccountManagement = () => {
  return <>address book</>;
};

AccountManagement.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AccountManagement;
