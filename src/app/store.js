import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signInReducer from '../features/SignIn/signInSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signIn: signInReducer,
  },
});
