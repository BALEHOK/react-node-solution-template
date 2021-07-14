import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
});
