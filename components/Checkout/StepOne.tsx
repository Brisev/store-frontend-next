import { Box, Button, Grid, Typography } from "@mui/material";
import React, { Suspense } from "react";
import CheckoutItem from "../../components/Checkout/CheckoutItem";
import ShippingOptionsAndDetails from "./ShippingOptionsAndDetails";
import DUMMY_JSON from "../../dummy/products.json";
import Modal from "../../components/Misc/Modal";
const AddressBookCreateAndUpdate = React.lazy(
  () => import("../../components/AddressBook/AddressBookCreateAndUpdate")
);
const AddressBookItem = React.lazy(
  () => import("../../components/AddressBook/AddressBookItem")
);

const CheckoutStepOne = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [openAddAddressModal, setOpenAddAddressModal] = React.useState(false);

  const [openAddNewAddressModal, setopenAddNewAddressModal] =
    React.useState(false);

  const handleAddAddressModal = () => {
    setOpenAddAddressModal((prev) => !prev);
  };

  const handleAddNewAddressModal = () => {
    setopenAddNewAddressModal((prev) => !prev);
  };

  const addNewAddressModal = () => {
    setOpenAddAddressModal(false);
    setopenAddNewAddressModal(true);
  };
  return (
    <>
      <Modal
        open={openAddNewAddressModal}
        onHandleCloseModal={handleAddNewAddressModal}
        cancelText="Cancel"
        okText="Add"
        header="Add Address"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <AddressBookCreateAndUpdate />
        </Suspense>
      </Modal>
      <Modal
        open={openAddAddressModal}
        onHandleCloseModal={handleAddAddressModal}
        showModalActions={false}
        cancelText="Cancel"
        okText="Add"
        header="Select Delivery Address"
      >
        <Grid
          container
          rowSpacing={{ xs: 0, sm: 2, md: 2 }}
          columnSpacing={{ xs: 0, sm: 2, md: 1 }}
          columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
          mx="auto"
        >
          {[1, 2, 3].map((address, index) => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                <Suspense fallback={<div>Loading...</div>}>
                  <AddressBookItem
                    elevation={1}
                    showActionButtons={false}
                    onDeleteAddress={() => console.log()}
                  />
                </Suspense>
              </Grid>
            );
          })}
        </Grid>

        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            marginTop: 3,
          }}
          onClick={addNewAddressModal}
        >
          Create New Address
        </Button>
      </Modal>
      <Box mt={3}>
        <Typography
          variant="h6"
          fontSize={15}
          fontWeight={600}
          marginBottom={0.5}
        >
          Shippment Details
        </Typography>

        {DUMMY_JSON.map((item, index) => {
          return (
            <CheckoutItem
              key={index}
              itemsCount={DUMMY_JSON.length}
              count={index}
              name={item.name}
            />
          );
        })}
      </Box>
      <Box mt={3}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="h6"
            fontSize={15}
            fontWeight={600}
            // marginBottom={0.5}
          >
            Address Details
          </Typography>
          <Box>
            <Button
              size="small"
              sx={{ textTransform: "capitalize" }}
              onClick={handleAddAddressModal}
            >
              Change
            </Button>
          </Box>
        </Box>

        <Typography fontSize={14} fontWeight={400}>
          Ikhide Bright
        </Typography>
        <Typography fontSize={14} fontWeight={400}>
          No 2, behind Gishiri police station
        </Typography>
        <Typography fontSize={14} fontWeight={400}>
          Ikeja, Lagos
        </Typography>
        <Typography fontSize={14} fontWeight={400}>
          07064045329
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          variant="h6"
          fontSize={15}
          fontWeight={600}
          marginBottom={2}
        >
          Delivery Method
        </Typography>
        <ShippingOptionsAndDetails />
      </Box>
    </>
  );
};

export default CheckoutStepOne;
