import { configureStore, combineReducers } from '@reduxjs/toolkit';
import photo from './photo';
import user from './user';
import token from './token';

const reducer = combineReducers({ photo, user, token });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
