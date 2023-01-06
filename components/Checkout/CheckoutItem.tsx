import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

function CheckoutItem({ itemsCount, count, name, image }) {
  return (
    <Box paddingBottom={1}>
      {/* <Typography fontSize={13} fontWeight={400} color="grey">
        Package {++count} of {itemsCount}
      </Typography> */}
      <Typography variant='h6' fontSize={14} fontWeight={500} noWrap mb={1}>
        {name}
      </Typography>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        marginBottom={1}
      >
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          gap={2}
        >
          <Box
            height={60}
            width={60}
            sx={{
              background: `url(${image}) no-repeat center center/cover`,
              borderRadius: 2,
              borderWidth: '1px',
              borderColor: '#DBE1FC',
              borderStyle: 'solid',
            }}
          />
          {/* <Image src={`${image}`} alt={name} width={100} height={100} /> */}
          <Box>
            <Typography fontSize={13} fontWeight={400} color='grey'>
              Ram: 32GB
            </Typography>
            <Typography fontSize={13} fontWeight={400} color='grey'>
              Color: Green
            </Typography>
          </Box>
        </Box>
        <Typography fontSize={13} fontWeight={400} color='grey'>
          2x
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}

export default CheckoutItem;
