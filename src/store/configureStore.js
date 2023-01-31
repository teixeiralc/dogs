import { configureStore, combineReducers } from '@reduxjs/toolkit';
import photo from './photo';
import photoPost from './photoPost';
import user from './user';
import token from './token';
import feed from './feed';
import ui from './ui';

const reducer = combineReducers({
  photo,
  photoPost,
  user,
  token,
  feed,
  ui,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
