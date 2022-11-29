import React, { useContext } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CartContext from '../../context/CartContext';

const Summary = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
      <Box
        sx={{
          my: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{
            color: '#6E6F9D',
            fontWeight: '400',
            fontFamily: 'Sansation',
          }}
        >
          Subtotal
        </Typography>

        <Typography
          variant='subtitle2'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          ₦{cart.totalAmount.toLocaleString()}
        </Typography>
      </Box>
      <Box
        sx={{
          my: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{
            color: '#6E6F9D',
            fontWeight: '400',
            fontFamily: 'Sansation',
          }}
        >
          Delivery Fee
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          ₦{(2500).toLocaleString()}
        </Typography>
      </Box>
      <Box
        sx={{
          my: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{
            color: '#6E6F9D',
            fontWeight: 'bold',
            fontFamily: 'Sansation',
          }}
        >
          Total
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          ₦{(2500 + cart.totalAmount).toLocaleString()}
        </Typography>
      </Box>
    </>
  );
};

export default Summary;
