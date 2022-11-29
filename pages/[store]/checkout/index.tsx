import { ArrowBack, ArrowForwardIos } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';
import { useContext, useState } from 'react';
import logo from '../../../assets/svg/mobile-nav-logo.svg';
import {
  CartItem,
  CheckoutContact,
  CheckoutDiscount,
  CheckoutShipping,
  CheckoutSummary,
  CheckoutSummaryCourier,
  Footer,
  Navigation,
} from '../../../components';
import ContactInfo from '../../../components/Checkout/Summary/ContactInfo';
import CartContext from '../../../context/CartContext';

const steps = ['Shipping', 'Summary', 'Payment'];
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useContext(CartContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Navigation />
      <Container sx={{ pt: 12, pb: 8 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={11} md={10} lg={8} sx={{ margin: 'auto' }}>
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={index + step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Divider
                sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }}
              />
              {activeStep === 1 && <ContactInfo />}
              <Box sx={{ m: 2 }}>
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
                  >
                    Order summary
                  </Typography>
                  <ArrowForwardIos sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  {cart.items.map((item: any, index: number) => (
                    <CartItem
                      item={item}
                      isCart={false}
                      key={item.id + index}
                    />
                  ))}
                </Box>
                <CheckoutDiscount />
                <CheckoutSummary />
                {activeStep === 1 && (
                  <>
                    <CheckoutSummaryCourier />
                  </>
                )}
                {activeStep === 0 && (
                  <>
                    <CheckoutContact />
                    <CheckoutShipping />
                  </>
                )}
                <Box sx={{ mt: 4 }}>
                  <Stack direction='row' spacing={2}>
                    <Button
                      color='secondary'
                      onClick={() => {
                        if (activeStep > 0) handleBack();
                        else return;
                      }}
                      variant='outlined'
                      disableElevation
                      sx={{
                        padding: '1rem',
                        borderRadius: '.75rem',
                        borderColor: `secondary`,
                        '&:hover': {
                          borderColor: `secondary`,
                        },
                      }}
                      disabled={activeStep === 0}
                    >
                      <ArrowBack />
                    </Button>
                    <Button
                      onClick={() => {
                        if (activeStep <= 2) handleNext();
                        else return;
                      }}
                      variant='contained'
                      fullWidth
                      disableElevation
                      sx={{
                        padding: '1rem',
                        borderRadius: '.75rem',
                        fontWeight: 500,
                        fontSize: '15px',
                        background: `var(--bg-accent)`,
                        '&:hover': {
                          background: `var(--bg-accent)`,
                        },
                      }}
                    >
                      {activeStep === 1
                        ? `Pay (N${cart.totalAmount.toLocaleString()})`
                        : 'Next'}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer
        logo={logo}
        color='var(bg-primary)'
        background1='var(--bg-accent)'
        background2='var(bg-primary)'
        link='shop-footer-link'
        quickLinks={false}
      />
    </>
  );
};

export default Checkout;
