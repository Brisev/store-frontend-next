import React from 'react';
import { Box, Typography, Divider, Stack, Avatar } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const ContactInfo = () => {
  return (
    <>
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
          Contact Information
        </Typography>
        <ArrowForwardIos sx={{ fontSize: 16 }} />
      </Box>
      <Stack
        py={2}
        direction='row'
        alignItems='center'
        justifyContent='flex-start'
        gap={2}
      >
        <Avatar sx={{ bgcolor: 'var(--bg-accent)', width: 48, height: 48 }}>
          JD
        </Avatar>
        <Stack
          direction='column'
          alignItems='flex-start'
          justifyContent='center'
        >
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'var(--text-2)',
              fontSize: '14px',
              textTransform: 'uppercase',
            }}
          >
            Jonathan Doe
          </Typography>
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'var(--text-2)',
              fontSize: '14px',
            }}
          >
            johndoesmith@google.mail
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
    </>
  );
};

export default ContactInfo;
