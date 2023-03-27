import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';
import { api } from 'store/api';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefault => getDefault().concat(api.middleware),
});

export default store;
