import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { useTheme } from '@mui/material/styles'

const About = (): JSX.Element => {
    const theme = useTheme()
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
                    I've always had the dream to run Kubernetes (The EKS
                    flavour!) in production. So I built this totally serious
                    Saas business from the ground up to give me an excuse.`
                </Typography>
            </Box>
        </Container>
    )
}

export default About
