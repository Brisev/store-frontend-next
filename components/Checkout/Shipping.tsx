import React from 'react';
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';

const Shipping = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          Shipping Address
        </Typography>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          type='text'
          name='name'
          placeholder='Full Name'
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        />
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          type='tel'
          name='phone'
          placeholder='Phone Number'
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        />
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          type='text'
          name='address'
          multiline
          rows={2}
          placeholder='Address'
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        />
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          type='text'
          name='city'
          placeholder='City'
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        />
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <Select
          displayEmpty
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        >
          <MenuItem value='' selected>
            <em>Nigeria</em>
          </MenuItem>
        </Select>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <Select
          displayEmpty
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        >
          <MenuItem value='' selected>
            <em>Bayelsa</em>
          </MenuItem>
        </Select>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          type='number'
          name='Zipcode'
          placeholder='Zip Code'
          color='secondary'
          sx={{ borderRadius: 3, fontFamily: 'sansation' }}
        />
      </Box>
    </>
  );
};

export default Shipping;
