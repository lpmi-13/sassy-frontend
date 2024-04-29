import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

interface PricingProps {
  title: string;
  price: number;
  currency: string;
  features: { name: string }[];
}

const Pricing = (): JSX.Element => {
  const theme = useTheme();

  const handleButtonClick = () => {
    const signupUrl = process.env.REACT_APP_SIGNUP_URL;

    if (signupUrl) {
      window.location.href = signupUrl;
    } else {
      console.error('Signup URL is undefined.');
    }
  };

  return (
    <div id='pricing'>
      <Box
        sx={{
          pt: 5,
          pb: 10,
          px: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'uppercase',
            }}
          >
            Pricing
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
          >
            It's all free!
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Pricing;
