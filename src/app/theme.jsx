// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#0064d7' },
    secondary: { main: '#ffd700' },
    background: { default: '#fff' },
  },
  typography: {
    fontFamily: [
      'Geist',
      'Arial',
      'Helvetica',
      'sans-serif',
    ].join(','),
  },
});

export default theme;