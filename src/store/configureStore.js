import { configureStore, combineReducers } from '@reduxjs/toolkit';
import photo from './photo';
import user from './user';
import token from './token';
import feed from './feed';

const reducer = combineReducers({ photo, user, token, feed });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
