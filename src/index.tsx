import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import { mainTheme } from './style/themes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={responsiveFontSizes(mainTheme)}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
