import {configureStore} from '@reduxjs/toolkit';
import funfactReducer from './reducers/funfactReducer';
import userReducer from './reducers/userReducer';


export const store = configureStore({
  reducer: {
 
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch