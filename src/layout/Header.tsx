import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';
import ColorModeContext from '../utils/ColorModeContext';

interface Props {
    onSidebarOpen: () => void;
}

const Header = ({ onSidebarOpen }: Props): JSX.Element => {
    // we'll make these more granular later
    const featureFlagged = Boolean(process.env.REACT_APP_FEATURE_FLAG_HIDE);
    const signupUrl = process.env.REACT_APP_SIGNUP_URL;
    const signinUrl = process.env.REACT_APP_SIGNIN_URL;
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <AppBar
                color="transparent"
                position="sticky"
                sx={{
                    border: 0,
                    padding: '10px 0',
                    marginBottom: '5px',
                    top: 'auto',
                    boxShadow:
                        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <Link href="/" sx={{ textDecoration: 'none' }}>
                        <IconButton size="large" disabled>
                            <img src="/images/logo.svg" alt="logo" />
                            <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        flexGrow: 1,
                                        color: theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        marginLeft: '10px',
                                    }}
                                >
                                    My Totally Serious Saas Business
                                </Typography>
                            </Box>
                        </IconButton>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: { lg: 'flex', md: 'none', xs: 'none' },
                        }}
                    >
                        <CustomButton href={'/'} text="Home" />
                        {!featureFlagged && (<CustomButton href="/api/sass" text="API" />)}
                        <CustomButton href={'/about'} text="About" />
                        <CustomButton href={'/pricing'} text="Pricing" />
                        {!featureFlagged && (
                            <CustomButton href={`${signupUrl}`} text="Signup" />
                        )}
                        {!featureFlagged && (
                            <CustomButton
                                href={`${signinUrl}`}
                                text="Sign in"
                            />
                        )}
                    </Box>
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: 32,
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' },
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label="Theme Mode"
                            color={
                                theme.palette.mode === 'dark'
                                    ? 'warning'
                                    : 'inherit'
                            }
                        >
                            {theme.palette.mode === 'dark' ? (
                                <Tooltip title="Turn on the light">
                                    <LightModeIcon fontSize="medium" />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Turn off the light">
                                    <DarkModeIcon fontSize="medium" />
                                </Tooltip>
                            )}
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: { md: 'block', lg: 'none' },
                        }}
                        alignItems="center"
                    >
                        <Button
                            onClick={() => onSidebarOpen()}
                            aria-label="Menu"
                            variant="outlined"
                            sx={{
                                borderRadius: 0,
                                minWidth: 'auto',
                                padding: 1,
                                borderColor: alpha(theme.palette.divider, 0.2),
                            }}
                        >
                            <MenuIcon
                                sx={{
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary.main
                                            : theme.palette.success.dark,
                                }}
                            />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
