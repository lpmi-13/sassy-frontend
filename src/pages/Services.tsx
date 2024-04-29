import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useTheme } from '@mui/material/styles';

const Services = (): JSX.Element => {
  const theme = useTheme();
  return (
          <Container
            maxWidth='md'
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '5em',
            }}
          >
            <Box marginBottom={2}>
              <Typography
                align='center'
                color={theme.palette.text.primary}
                variant='h3'
                sx={{ fontWeight: 700 }}
                gutterBottom
              >
        We have some great services, so go ahead and sign up to hear all about how YOU can set up your own Totally Serious Saas Business!
              </Typography>
            </Box>
          </Container>
  );
};

export default Services;