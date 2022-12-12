import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk'
import reducer from './reducer'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
})
export const state = store.getState()