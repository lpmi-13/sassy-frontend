import { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface AboutProps {
  value: number;
  suffix: string;
  description: string;
}

const About = (): JSX.Element => {
  const theme = useTheme();
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (
    isVisible: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  return (
    <div id='about'>
      <Box
        sx={{
          pt: 5,
          pb: 12,
          px: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            color={theme.palette.text.primary}
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            About
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color={theme.palette.text.secondary}
            marginTop={theme.spacing(1)}
            gutterBottom
          >
            This is some serious Saas
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default About;
