import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#1bedff',
      light: '#97f8fe',
      dark: '#0d8cb5',
      contrastText: '#333',
    },
    secondary: {
      main: '#eb8f34',
      light: '#f0ae4f',
      dark: '#dc5e01',
    },
    background: {
      paper: '#5f5f60',
      default: '#befaff',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    action: {
      disabled: 'rgba(255,255,255,1)',
      disabledBackground: '#0d8cb5',
    },
    divider: '#0d8cb5',
  },
});
