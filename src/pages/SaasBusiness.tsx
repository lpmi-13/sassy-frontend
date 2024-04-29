import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { useTheme } from '@mui/material/styles'

import { SaasInfo } from './Home'

// duplicated from Home page, but we can refactor at some point
async function getSaasInfoById(id: number): Promise<SaasInfo> {
    const response = await fetch(
        `https://mytotallyserioussaasbusiness.com/api/saas/${id}`
    )
    const data = await response.json()
    return data.results
}

const SaasBusiness: React.FC<SaasInfo> = ({ id }): JSX.Element => {
    const theme = useTheme()

    const [saasData, setSaasData] = useState<SaasInfo>()

    useEffect(() => {
        getSaasInfoById(id).then((data) => setSaasData(data))
    }, [])

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
                    Name: {saasData?.name}
                    Founder: {saasData?.founder}
                    Number of Employees: {saasData?.employeeNumber}
                    Type of Business: {saasData?.type}
                    Amount of funding: {saasData?.funding}
                    Monthly Active Users: {saasData?.mau}
                    Total Revenue: {saasData?.revenue}
                </Typography>
            </Box>
        </Container>
    )
}

export default SaasBusiness
