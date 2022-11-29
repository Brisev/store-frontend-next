import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          Contact Information
        </Typography>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          placeholder='Enter Email'
          className='sansation inputStyle'
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Sansation',
            mt: 1,
          }}
        >
          <Typography variant='body2' sx={{ color: '#6E6F9D', mr: 0.5 }}>
            Already have an account?
          </Typography>
          <Typography variant='body2' color='secondary'>
            Login
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
