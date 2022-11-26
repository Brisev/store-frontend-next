import { ReactElement } from "react";
import StoreLayout from "../../../layouts/store";

const CreateAddressBook = () => {
  return <>CreateAddressBook</>;
};

CreateAddressBook.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default CreateAddressBook;
