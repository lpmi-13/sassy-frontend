import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import getTheme from './theme/theme'
import ColorModeContext from './utils/ColorModeContext'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'

const App = (): JSX.Element => {
    const [mode, setMode] = useState('light')
    const colorMode = useMemo(
        () => ({
            // The theme mode switch will invoke this method
            toggleColorMode: () => {
                window.localStorage.setItem(
                    'themeMode',
                    mode === 'dark' ? 'light' : 'dark'
                )
                setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
            },
        }),
        [mode]
    )

    useEffect(() => {
        try {
            const localTheme = window.localStorage.getItem('themeMode')
            localTheme ? setMode(localTheme) : setMode('light')
        } catch {
            setMode('light')
        }
    }, [])

    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | My Totally Serious Saas Business"
                defaultTitle="My Totally Serious Saas Business | Seriously Saasy"
            />
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={getTheme(mode)}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="*" element={<Home />} />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </HelmetProvider>
    )
}

export default App
