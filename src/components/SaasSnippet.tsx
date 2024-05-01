import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';

import { USDollar } from '../utils/Currency';

interface SaasDetails {
    id: number;
    name: string;
    type: string;
    revenue: number;
}

const SaasSnippet: React.FC<SaasDetails> = ({
    id,
    name,
    type,
    revenue,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div id="saas">
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
                        <CustomButton
                            href={`/saas/${id.toString()}`}
                            text={`Saas Name: ${name}`}
                        />
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        marginTop={theme.spacing(1)}
                        gutterBottom
                        color={theme.palette.text.secondary}
                    >
                        business type: {type}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        fontWeight={'bold'}
                        marginTop={theme.spacing(1)}
                        gutterBottom
                        color={theme.palette.text.secondary}
                    >
                        Current revenue: {USDollar.format(revenue)}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default SaasSnippet;
