import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import StoreLayout from "../../../layouts/store";
import AddressBookCreateAndUpdate from "../../../components/AddressBook/AddressBookCreateAndUpdate";

const CreateAddressBook = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          // pb: "2rem",
        }}
      >
        Add Address
      </Typography>

      <Box>
        <AddressBookCreateAndUpdate />
      </Box>
    </>
  );
};

CreateAddressBook.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default CreateAddressBook;
