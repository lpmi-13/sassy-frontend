import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            spacing={4}
        >
            <Typography
                variant="subtitle2"
                color={theme.palette.text.secondary}
            >
                Copyright &copy; {new Date().getFullYear()}.{' '}
            </Typography>
        </Grid>
    );
};

export default Footer;
