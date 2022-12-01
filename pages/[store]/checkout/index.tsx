import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { ReactElement } from "react";
import AddressBookItem from "../../../components/AddressBook/AddressBookItem";
import CheckoutItem from "../../../components/Checkout/CheckoutItem";
import Modal from "../../../components/Misc/Modal";
// import StoreLayout from "../../../layouts/store";
import DUMMY_JSON from "../../../dummy/products.json";
const steps = ["Shipping", "Payment", "Summary"];

const StoreLayoutDiv = styled("div")(({ theme }) => ({
  background: "#f5f5f5",
  maxHeight: "auto",
  // height: "100vh",
}));

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [openAddAddressModal, setOpenAddAddressModal] = React.useState(false);

  const handleAddAddressModal = () => {
    setOpenAddAddressModal((prev) => !prev);
  };

  return (
    <StoreLayoutDiv>
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
          mb={8}
        >
          {[1, 2, 3].map((address, index) => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                <AddressBookItem
                  elevation={1}
                  showActionButtons={false}
                  onDeleteAddress={() => console.log()}
                />
              </Grid>
            );
          })}
        </Grid>
      </Modal>
      <Container>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "60%",
              lg: "60%",
              sm: "60%",
              xl: "60%",
            },
            margin: "0 auto",
          }}
          paddingTop={4}
          paddingBottom={5}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton
                  disableTouchRipple
                  disableRipple
                  color="inherit"
                  onClick={handleStep(index)}
                  sx={{
                    p: 1.4,
                  }}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Box mt={3}>
            <Typography
              variant="h6"
              fontSize={14}
              fontWeight={600}
              marginBottom={2}
            >
              Shippment Details
            </Typography>

            {DUMMY_JSON.map((item, index) => {
              return (
                <CheckoutItem
                  itemsCount={DUMMY_JSON.length}
                  count={index}
                  name={item.name}
                />
              );
            })}
          </Box>
          <Box mt={3}>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={2}
              >
                Address Details
              </Typography>
              <Button
                size="small"
                sx={{ mt: -2.5, p: 0 }}
                onClick={handleAddAddressModal}
              >
                Change
              </Button>
            </Stack>

            <Typography fontSize={12.5} fontWeight={400}>
              Ikhide Bright
            </Typography>
            <Typography fontSize={12.5} fontWeight={400}>
              No 2, behind Gishiri police station
            </Typography>
            <Typography fontSize={12.5} fontWeight={400}>
              Ikeja, Lagos
            </Typography>
            <Typography fontSize={12.5} fontWeight={400}>
              07064045329
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography
              variant="h6"
              fontSize={14}
              fontWeight={600}
              marginBottom={2}
            >
              Delivery Method
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: 85,
                backgroundColor: "#c2c2c2",
                borderRadius: 1,
                padding: 1,
                cursor: "pointer",
                // "&:hover": {
                //   backgroundColor: "#c3c3c3",
                //   opacity: [0, 0, 0.9],
                // },
              }}
            >
              <Typography variant="h6" fontSize={13}>
                Door Delivery
              </Typography>
              <Typography variant="h6" mt={0} fontSize={12}>
                ₦1,400
              </Typography>
              <Typography variant="caption" mt={1}>
                Delivered between Wednesday 14 Dec and Friday 16 Dec
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: 85,
                backgroundColor: "#c2c2c2",
                borderRadius: 1,
                marginTop: 2,
                padding: 1,
                cursor: "pointer",
                // "&:hover": {
                //   backgroundColor: "#c3c3c3",
                //   opacity: [0, 0, 0.9],
                // },
              }}
            >
              <Typography variant="h6" fontSize={13}>
                In-store Pickup
              </Typography>
              <Typography variant="h6" mt={0} fontSize={12}>
                ₦3,400
              </Typography>
              <Typography variant="caption" mt={1}>
                Delivered between Wednesday 14 Dec and Friday 16 Dec
              </Typography>
            </Box>
          </Box>

          <Box mt={3}>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={1}
              >
                Subtotal
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={1}
              >
                ₦90,400
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={2}
              >
                Shipping Fee
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={2}
              >
                ₦3,400
              </Typography>
            </Stack>
          </Box>

          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              marginTop: 3,
            }}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Container>
    </StoreLayoutDiv>
  );
};

export default Checkout;
