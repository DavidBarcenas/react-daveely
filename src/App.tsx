import React from 'react';
import Login from './auth/components/Login';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['A400'],
      dark: blue['A200'],
      contrastText: '#fff',
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
