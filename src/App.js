import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useIsAuthenticated } from '@azure/msal-react';
import WelcomeScreen from './components/WelcomeScreen';
import { Box, Typography } from '@mui/material';

function App() {

  const isAuthenticated = useIsAuthenticated();

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {isAuthenticated ?
          <Box sx={styles.container}>
            <WelcomeScreen />
          </Box>

          :

          <Box sx={styles.container}>
            <Box component={'main'} sx={styles.mainSection}>
              <Typography variant='h2' textAlign={'center'}>Please Login!</Typography>
            </Box>
          </Box>
        }
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100vh'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}