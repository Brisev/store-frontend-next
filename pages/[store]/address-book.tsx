import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const AddressBook = () => {
  return <>address book</>;
};

AddressBook.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AddressBook;
