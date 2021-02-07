import React from 'react';
import AuthView from '../auth/views/AuthView';
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

function DaveelyTheme(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthView />
    </ThemeProvider>
  );
}

export default DaveelyTheme;
