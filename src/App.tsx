import React from 'react';
import Login from './auth/components/Login';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e53e3e',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
