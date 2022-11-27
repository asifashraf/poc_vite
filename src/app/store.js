import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/userSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokomonService'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch)