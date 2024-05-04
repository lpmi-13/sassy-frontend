import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

const Pricing = (): JSX.Element => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="md"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '5em',
            }}
        >
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h3"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    This site is totally free, the Saasy way to be!
                </Typography>
            </Box>
        </Container>
    );
};

export default Pricing;
