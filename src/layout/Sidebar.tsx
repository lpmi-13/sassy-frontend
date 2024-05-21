import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';
// import CustomButtonWithReload from '../components/CustomButtonWithReload';

interface Props {
    onClose: () => void;
    open: boolean;
}

const Sidebar = ({ open, onClose }: Props): JSX.Element => {
    const theme = useTheme();

    return (
        <>
            <Drawer
                anchor="left"
                onClose={() => onClose()}
                open={open}
                variant="temporary"
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.default,
                        width: 256,
                    },
                }}
            >
                <Box height="100%">
                    <Box width={1}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <IconButton size="large" disabled>
                                <img src="/images/logo.svg" alt="logo" />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        flexGrow: 1,
                                        color: theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        marginLeft: 1,
                                    }}
                                >
                                    My Totally Serious Saas Business
                                </Typography>
                            </IconButton>
                        </Link>
                    </Box>
                    <Box padding={2}>
                        <Box paddingY={2}>
                            <CustomButton href={'/'} text="Home" />
                        </Box>
                        {/* we turned off EKS, so this link won't do anything now */}
                        {/* <Box paddingY={2}> */}
                        {/* <CustomButtonWithReload */}
                        {/* href={'/api/saas'} */}
                        {/* text="API" */}
                        {/* /> */}
                        {/* </Box> */}
                        <Box paddingY={2}>
                            <CustomButton href={'/about'} text="About" />
                        </Box>
                        <Box paddingY={2}>
                            <CustomButton href={'/pricing'} text="Pricing" />
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;
