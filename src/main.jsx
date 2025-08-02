import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import '../src/css/styles.css';
import '../src/css/reset.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
