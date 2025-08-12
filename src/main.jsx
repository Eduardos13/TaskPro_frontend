import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import '../src/css/styles.css';
import '../src/css/reset.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { setToken } from './config/taskPROapi.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
      onBeforeLift={() => {
        const token = store.getState().auth.accessToken;
        if (token) setToken(token);
      }}
    >
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
