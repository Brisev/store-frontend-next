import React from 'react';
import { Button, Stack, Box, Divider } from '@mui/material';
import { ArrowForwardSharp } from '@mui/icons-material';

const Discount = () => {
  return (
    <>
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
      <Box>
        <Stack direction='row' spacing={2}>
          <input
            type='text'
            placeholder='Discount Code'
            className='sansation newsletter'
          />
          <Button
            variant='contained'
            disableElevation
            sx={{
              padding: '1rem',
              borderRadius: '.75rem',
              background: `var(--bg-accent)`,
              '&:hover': {
                background: `var(--bg-accent)`,
              },
            }}
          >
            <ArrowForwardSharp />
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Discount;
