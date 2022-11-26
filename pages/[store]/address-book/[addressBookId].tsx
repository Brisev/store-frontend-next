import { ReactElement } from "react";
import StoreLayout from "../../../layouts/store";

const AddressEdit = () => {
  return <>Address Edit</>;
};

AddressEdit.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AddressEdit;
