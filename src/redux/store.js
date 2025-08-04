import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/slice.js';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
