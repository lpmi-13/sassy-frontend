import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FRONTEND_SOURCE_CODE_URL = 'https://github.com/lpmi-13/sassy-frontend';
const BACKEND_SOURCE_CODE_URL = 'https://github.com/lpmi-13/sassy-backend';

const About = (): JSX.Element => {
    const theme = useTheme();

    return (
        <div id="about">
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
                        variant="h5"
                        align="center"
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
                        variant="subtitle1"
                        align="center"
                        color={theme.palette.text.secondary}
                        marginTop={theme.spacing(1)}
                        gutterBottom
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '60%',
                            margin: '0 20%',
                        }}
                    >
                        This is some serious Saas! We aggregate data on a whole
                        bunch of completely fake Saas companies and give that
                        data to you for free. Our business is keeping you up 
                        to date with the latest in autogenerated Saas data, and
                        business is GOOD!
                    </Typography>
                </Box>
                <Container>
                    <img
                        src="/images/sassy-architecture.png"
                        alt="the totally serious architecture"
                        style={{ maxWidth: '100%' }}
                    />
                </Container>
                <Container
                    sx={{
                        marginBottom: '2em',
                        marginTop: '2em',
                        textAlign: 'center',
                        fontSize: '1.3rem',
                    }}
                >
                    <Link to={FRONTEND_SOURCE_CODE_URL}>
                        frontend source code on GitHub
                    </Link>
                </Container>
                <Container
                    sx={{
                        marginBottom: '2em',
                        marginTop: '2em',
                        textAlign: 'center',
                        fontSize: '1.3rem',
                    }}
                >
                    <Link to={BACKEND_SOURCE_CODE_URL}>
                        backend source code on GitHub
                    </Link>
                </Container>
            </Box>
        </div>
    );
};

export default About;
