import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import App from 'components/App/App';
window.onerror = function (message, source, lineno, colno, error) {
  if (message.includes("Failed to execute 'postMessage' on 'DOMWindow'")) {
    return true; // Предотвращаем вывод ошибки в консоль
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
