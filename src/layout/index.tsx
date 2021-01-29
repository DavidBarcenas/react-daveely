import React from 'react';
import Auth from '../auth/views/Auth';
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

function Layout(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Auth />
    </ThemeProvider>
  );
}

export default Layout;
