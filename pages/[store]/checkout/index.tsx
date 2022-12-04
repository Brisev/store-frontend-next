import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Divider,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import CheckoutStepOne from "../../../components/Checkout/StepOne";
import CheckoutStepTwo from "../../../components/Checkout/StepTwo";

const steps = ["Shipping", "Payment"];

const StoreLayoutDiv = styled("div")(({ theme }) => ({
  background: "#f5f5f5",
  maxHeight: "auto",
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

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  return (
    <StoreLayoutDiv>
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

          {activeStep === 0 && <CheckoutStepOne />}

          {activeStep === 1 && <CheckoutStepTwo />}

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
            <Divider />
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={2}
                color="primary"
              >
                Total
              </Typography>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={600}
                marginBottom={2}
                color="primary"
              >
                ₦93,800
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
            onClick={handleNext}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Container>
    </StoreLayoutDiv>
  );
};

export default Checkout;
