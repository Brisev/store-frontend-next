import { Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import ShopagoButton from '../../components/Inputs/Button/Button';

const CartSumarrySideBar = () => {
  return (
    <Box
      sx={{
        height: 280,
        backgroundColor: 'white',
        position: 'sticky',
        // width: 400,
        top: 75,
        borderRadius: '0.5rem',
        outline: '1px solid #ddd',
      }}
    >
      <Stack
        mb={0}
        p={3}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
          Order Summary
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          {4} Items
        </Typography>
      </Stack>
      <Divider />
      <Stack
        mt={1}
        py={1}
        px={3}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography sx={{ color: '', fontSize: '15px' }}>Subtotal</Typography>
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          ₦900,000
        </Typography>
      </Stack>
      <Stack
        py={1}
        px={3}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography sx={{ color: '', fontSize: '15px' }}>
          Delivery Fee
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          ---
        </Typography>
      </Stack>
      <Stack
        py={1}
        px={3}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: 'theme.text.primary',
            fontSize: '15px',
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          ₦{(900000).toLocaleString()}
        </Typography>
      </Stack>

      <Box
        px={2}
        py={1}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <ShopagoButton
          fullWidth
          size='large'
          sx={{ fontSize: '14px' }}
          href='/store/checkout'
        >
          <>CHECKOUT</>
        </ShopagoButton>
      </Box>
    </Box>
  );
};

export default CartSumarrySideBar;
