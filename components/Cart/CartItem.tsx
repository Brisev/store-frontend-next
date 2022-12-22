import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  ButtonGroup,
} from '@mui/material';
import {
  DeleteSharp,
  AddBoxRounded,
  RemoveRounded,
  DeleteRounded,
  AddCircleRounded,
  RemoveCircleRounded,
} from '@mui/icons-material';
import React from 'react';
import Button from '@mui/material/Button';

const CartItem = (props: any) => {
  const variations = [];

  for (const key in props.item.variation) {
    variations.push({
      name: key,
      details: props.item.variation[key],
    });
  }

  return (
    <Card
      elevation={0}
      sx={{
        mb: 1,
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: {
          xs: 'center',
          sm: 'space-between',
        },
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        background: 'transparent',
        outline: '1px solid #f4f4f4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flex: 3,
        }}
      >
        <CardMedia
          component='img'
          sx={{ width: 120 }}
          image='https://stunner.ng/wp-content/uploads/2022/07/iphone-13-pro-max-1.jpg'
          alt='Live from space album cover'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 2 auto' }}>
            {props.type === 'order' && (
              <Typography sx={{ fontWeight: 400, fontSize: 12, color: 'grey' }}>
                Order: #849443839393303849
              </Typography>
            )}
            <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
              {props.item.name}
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: 12, color: 'grey', my: 0.5 }}
            >
              RAM: 32GB
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 16,
                color: 'primary.main',
              }}
            >
              ₦{props.item.price.toLocaleString()}
            </Typography>
            {/* <Typography
              sx={{
                fontSize: "13px",
                textDecoration: "line-through",
                color: "grey",
              }}
            >
              ₦900,000
            </Typography> */}
          </CardContent>
        </Box>
      </Box>
      <Box
        px={2}
        pb={2}
        mt={-2}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          flex: 1,
        }}
      >
        {props.type === 'order' ? (
          <Button size='small' disableElevation variant='outlined'>
            Buy Again
          </Button>
        ) : (
          <ButtonGroup size='small' disableElevation variant=''>
            <Button>
              <DeleteRounded fontSize='small' color='error' />
            </Button>
            <Button
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1.2rem',
              }}
            >
              -{/* <RemoveCircleRounded fontSize="small" /> */}
            </Button>
            <Button>9</Button>
            <Button
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1.2rem',
              }}
            >
              +{/* <AddCircleRounded fontSize="small" /> */}
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </Card>
  );
};

export default CartItem;
