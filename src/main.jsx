import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import '../src/css/styles.css';
import '../src/css/reset.css';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
