import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Pricing = (): JSX.Element => {
    const theme = useTheme();

    return (
        <div id="pricing">
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
                        variant="h5"
                        align="center"
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
                        variant="subtitle1"
                        align="center"
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
