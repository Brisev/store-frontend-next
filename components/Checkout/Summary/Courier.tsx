import React, { useState } from 'react';
import {
  Divider,
  Checkbox,
  Typography,
  Box,
  Avatar,
  Stack,
  Radio,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const couriers = [
  { index: 0, name: 'GIG Logistics', price: 2500 },
  { index: 1, name: 'Topship Logistics', price: 5000 },
  { index: 2, name: 'Kwik Logistics', price: 7500 },
];

function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Courier = () => {
  const [selectedValue, setSelectedValue] = useState(couriers[0].name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
      <Box>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 'bold', fontFamily: 'Sansation' }}
        >
          Shipping Methods
        </Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          gap={2}
          my={2}
        >
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            gap={1}
          >
            <Checkbox defaultChecked color='secondary' />
            <Typography
              sx={{
                fontFamily: 'inherit',
                color: 'var(--text-2)',
                fontSize: '14px',
              }}
            >
              FLAT RATE: All deliveries within Lagos state are N2000
            </Typography>
          </Stack>
          <Typography
            ml={1}
            sx={{
              fontFamily: 'Sansation',
              color: 'var(--bg-primary)',
              fontWeight: 700,
            }}
          >
            N{(2000).toLocaleString()}
          </Typography>
        </Stack>
      </Box>
      {/*  */}
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        gap={2}
        my={2}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          gap={1}
        >
          <Checkbox color='secondary' />
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'var(--text-2)',
              fontSize: '14px',
            }}
          >
            Customer Pickup
          </Typography>
        </Stack>
        <Typography
          ml={1}
          sx={{
            fontFamily: 'Sansation',
            color: 'var(--bg-primary)',
            fontWeight: 700,
          }}
        >
          FREE
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: '#dbe1fc', marginX: 'auto', my: 3 }} />
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
          Courier Shipping
        </Typography>
        <ArrowForwardIos sx={{ fontSize: 16 }} />
      </Box>

      <Box my={2}>
        {couriers.map((courier, index) => (
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            gap={2}
            my={2}
          >
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='flex-start'
              gap={1}
            >
              <Radio
                checked={selectedValue === courier.name}
                onChange={handleChange}
                value={courier.name}
                name='radio-buttons'
                inputProps={{ 'aria-label': courier.name }}
                color='secondary'
              />
              <Avatar
                {...stringAvatar(courier.name)}
                sx={{ background: 'var(--bg-accent)' }}
              />
              <Typography
                ml={1}
                sx={{
                  fontFamily: 'inherit',
                  color: 'var(--text-2)',
                  fontSize: '14px',
                }}
              >
                {courier.name}
              </Typography>
            </Stack>

            <Typography
              ml={1}
              sx={{
                fontFamily: 'Sansation',
                color: 'var(--bg-primary)',
                fontWeight: 700,
              }}
            >
              N{courier.price.toLocaleString()}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default Courier;
