import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const Modal = React.lazy(() => import("../Misc/Modal"));
const PickupLocationItem = React.lazy(() => import("./PickupLocationItem"));

const ShippingOptionsAndDetails = () => {
  const [openAddAddressModal, setOpenAddAddressModal] = React.useState(false);

  const handleAddAddressModal = () => {
    setOpenAddAddressModal((prev) => !prev);
  };

  return (
    <Box>
      <Modal
        open={openAddAddressModal}
        onHandleCloseModal={handleAddAddressModal}
        showModalActions={false}
        cancelText="Cancel"
        okText="Add"
        header="Choose Pickup Location"
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
                  <PickupLocationItem elevation={1} />
                </Suspense>
              </Grid>
            );
          })}
        </Grid>
      </Modal>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="male"
          control={<Radio />}
          sx={{
            fontSize: "10px",
            marginBottom: 2,
          }}
          label={
            <Box>
              <Typography fontSize={14}>Door Delivery (₦1,400)</Typography>
              <Typography variant="caption">
                Delivered between 14th Dec and 20th Dec
              </Typography>
            </Box>
          }
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label={
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                mb: -0.9,
              }}
            >
              <Typography fontSize={14}>Pickup Location (₦2,920)</Typography>
              <Button
                sx={{
                  // padding: 0,
                  // py: 0,
                  ml: 2,
                  mt: -0.6,
                  textTransform: "capitalize",
                }}
                onClick={handleAddAddressModal}
                size="small"
              >
                Select Location
              </Button>
            </Box>
          }
        />
      </RadioGroup>
      <Suspense fallback={<div>Loading...</div>}>
        <PickupLocationItem />
      </Suspense>
    </Box>
  );
};

export default ShippingOptionsAndDetails;
