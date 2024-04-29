import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface FooterProps {
  copyright: string;
}

const Footer = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography
            align='center'
            variant='subtitle2'
            color={theme.palette.text.secondary}
            gutterBottom
            sx={{ marginTop: '25px' }}
          >
            Copyright &copy; {new Date().getFullYear()}.{' '}
          </Typography>
        </Box>
    </Grid>
  );
};

export default Footer;
