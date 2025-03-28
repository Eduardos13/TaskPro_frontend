import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import '../src/css/styles.css';
import '../src/css/reset.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
