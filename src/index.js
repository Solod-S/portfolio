import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import App from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="portfolio">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
