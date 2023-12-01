//auto enabled redux devtools, adds thunk middleware
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/CounterSlice';
import { dogsApiSlice } from '../features/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  }
});

export type appDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;