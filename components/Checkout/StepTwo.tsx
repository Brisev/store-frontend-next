import { ContentCopy } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const CheckoutStepTwo = ({ elevation = 0 }) => {
  return (
    <Box mt={4}>
      <Typography variant='h6' fontSize={16} fontWeight={700} mt={4} mb={2}>
        Voucher
      </Typography>
      <Box
        // display="flex"
        sx={{
          width: {
            xs: '100%',
            sm: 300,
          },
        }}
      >
        <TextField placeholder='Enter Voucher Code' fullWidth size='small' />
        <Button
          sx={{
            mt: 1,
          }}
          variant='outlined'
          fullWidth
        >
          Apply
        </Button>
      </Box>

      <Typography
        variant='h6'
        fontSize={15}
        fontWeight={600}
        marginBottom={2}
        marginTop={4}
      >
        Payment Method
      </Typography>

      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='male'
        name='radio-buttons-group'
      >
        <FormControlLabel
          value='male'
          control={<Radio />}
          sx={{
            fontSize: '10px',
            // marginBottom: 2,
          }}
          label={
            <Box>
              <Typography fontSize={14}>Pay with cards</Typography>
              {/* <Image
                src="/assets/webpayments.svg"
                alt="available card types"
                width={100}
                height={20}
              /> */}
            </Box>
          }
        />
        <FormControlLabel
          value='female'
          control={<Radio />}
          label={<Typography fontSize={14}>Pay withBank transfer</Typography>}
        />
      </RadioGroup>
      <Card
        sx={{
          my: 1,
          cursor: 'pointer',
        }}
        elevation={elevation}
      >
        <CardContent>
          {/* <Box> */}
          <Box>
            <Typography
              variant='caption'
              // fontWeight={500}
              display='block'
              mb={3}
            >
              Pay the exact sum of <b> N93,800</b> to the account details below
            </Typography>
            <Typography variant='body2' fontWeight={500}>
              Ikhide Bright
            </Typography>
            <Typography variant='body2' display='block' fontWeight={500}>
              Zenith Bank
            </Typography>
            <Box display='flex'>
              <Typography variant='body2' display='block' fontWeight={500}>
                0215337974
              </Typography>
              <Tooltip title='Copy Account Number'>
                <IconButton
                  size='small'
                  sx={{
                    // display: "inline",
                    mt: -1,
                    ml: 2,
                  }}
                >
                  <ContentCopy fontSize='small' />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          {/* </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CheckoutStepTwo;
