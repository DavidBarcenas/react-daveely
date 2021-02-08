import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { DaveelyRouter } from '../router';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DaveelyRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default DaveelyTheme;
