import { configureStore } from '@reduxjs/toolkit';
import { ageOfEmpiresAPi } from './Api/ageOfEmpiresApi';

export const store = configureStore({
  reducer: {
    [ageOfEmpiresAPi.reducerPath]: ageOfEmpiresAPi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ageOfEmpiresAPi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
