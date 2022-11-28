import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment, ReactElement, useState } from "react";
// import { Grid } from "swiper";
import AddressBookItem from "../../../components/AddressBook/AddressBookItem";
import Modal from "../../../components/Misc/Modal";
import HorizontalQuickProductList from "../../../components/Product/HorizontalQuickProductList";
import StoreLayout from "../../../layouts/store";
import DUMMY_JSON from "../../../dummy/products.json";

const AddressBook = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const onDeleteAddress = () => {
    setOpenDeleteModal(true);
  };
  return (
    <Fragment>
      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        cancelText="Don't Delete"
        okText="Yes, Delete"
        header="Delete Address"
      >
        <Typography fontSize={15}>
          Are you sure want to remove this Address? This cannot be reversed
        </Typography>
      </Modal>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          // pb: "2rem",
        }}
      >
        Address book
      </Typography>

      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="end"
        mb={1}
        // mt={1}
      >
        <Button href="/store/address-book/create">Add Address</Button>
      </Stack>

      <Grid
        container
        rowSpacing={{ xs: 0, sm: 6, md: 8 }}
        columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
        mx="auto"
        mb={8}
      >
        {[1, 2, 3].map((address, index) => {
          return (
            <Grid item xs={12} sm={3} md={3} lg={4} key={index}>
              <AddressBookItem onDeleteAddress={onDeleteAddress} />
            </Grid>
          );
        })}
      </Grid>

      <HorizontalQuickProductList
        title="Recently seen"
        related={DUMMY_JSON}
        seeMoreLink="/store/saved"
      />
    </Fragment>
  );
};

AddressBook.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AddressBook;
