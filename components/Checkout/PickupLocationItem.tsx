import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const PickupLocationItem = ({ elevation = 0 }) => {
  return (
    <Card
      sx={{
        my: 1,
        cursor: 'pointer',
        boxShadow: 0,
        borderWidth: '1px',
        borderColor: '#DBE1FC',
        borderStyle: 'solid',
        borderRadius: 3,
      }}
      elevation={elevation}
    >
      <CardContent>
        <Box>
          <Box>
            <Typography variant='caption' fontWeight={500}>
              NO 2, Ademola Adetokunbo crescent, Wuse 11
            </Typography>
            <Typography variant='caption' display='block' fontWeight={500}>
              FCT Abuja
            </Typography>
          </Box>
        </Box>
        <Typography
          variant='caption'
          display='block'
          sx={{
            mt: 2,
          }}
        >
          Availability:
        </Typography>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Sun
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Mon
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Tue
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Wed
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Thur
          </Typography>
          <Typography variant='caption' display='block'>
            8am - 3pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Fri
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width={115}>
          <Typography variant='caption' display='block'>
            Sat
          </Typography>
          <Typography variant='caption' display='block'>
            9am - 5pm
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PickupLocationItem;
