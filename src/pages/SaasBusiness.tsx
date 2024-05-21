import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { SaasInfo } from './Home';
import { USDollar } from '../utils/Currency';

import { data } from './Home';

export interface OneSaas {
    id?: number;
}

// duplicated from Home page, but we can refactor at some point
// async function getSaasInfoById(id: number): Promise<SaasInfo> {
// see note in Home.tsx
// const response = await fetch(
// `https://mytotallyserioussaasbusiness.com/api/saas/${id}`
// );
// const data = await response.json();
// return data;
// }

const SaasBusiness: React.FC<OneSaas> = (): JSX.Element => {
    const theme = useTheme();

    const { id } = useParams();
    const [saasData, setSaasData] = useState<SaasInfo>();

    useEffect(() => {
        if (id !== undefined && Number(id) <= 10) {
            const individualSaas = data.results.filter(
                (item) => item.id === Number(id)
            );
            setSaasData(individualSaas[0]);
        } else {
            setSaasData(data.results[0]);
        }
    }, [id]);

    const revenueAmount =
        saasData?.revenue === undefined ? 0 : USDollar.format(saasData.revenue);

    const fundingAmount =
        saasData?.funding === undefined ? 0 : USDollar.format(saasData.funding);

    const numberOfEmployees =
        saasData?.employee_number === undefined
            ? 0
            : saasData.employee_number.toLocaleString();

    const monthlyActiveUsers =
        saasData?.mau === undefined ? 0 : saasData.mau.toLocaleString();

    if (saasData === undefined) {
        setTimeout(() => {}, 7000);
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
                        Loading...
                    </Typography>
                </Box>
            </Container>
        );
    }

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
                    variant="h2"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Name: {saasData?.name}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Founder: {saasData?.founder}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Number of Employees: {numberOfEmployees}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Type of Business: {saasData?.type}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Amount of funding: {fundingAmount}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Monthly Active Users: {monthlyActiveUsers}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography
                    align="center"
                    color={theme.palette.text.primary}
                    variant="h3"
                    sx={{ fontWeight: 700 }}
                    gutterBottom
                >
                    Total Revenue: {revenueAmount}
                </Typography>
            </Box>
        </Container>
    );
};

export default SaasBusiness;
