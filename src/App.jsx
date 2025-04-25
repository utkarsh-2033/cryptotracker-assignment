import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { websocketService } from './services/websocketService';
import CryptoTable from './components/CryptoTable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
    },
    subtitle1: {
      fontSize: { xs: '0.875rem', sm: '1rem' },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: 2, sm: 3 },
          paddingRight: { xs: 2, sm: 3 },
        },
      },
    },
  },
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    websocketService.start();
    return () => websocketService.stop();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'background.default',
          }}
        >
          <Navbar />
          <Container 
            maxWidth="xl" 
            sx={{ 
              py: { xs: 2, sm: 3, md: 4 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, sm: 3, md: 4 }
            }}
          >
            <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Crypto Price Tracker
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Real-time cryptocurrency prices and market data
              </Typography>
            </Box>
            <Box sx={{ flex: 1, width: '100%', overflow: 'hidden' }}>
              <CryptoTable />
            </Box>
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
