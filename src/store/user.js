import { USER_GET } from '../api';
import { fetchToken, resetTokenState } from './token';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => USER_GET(token),
});

const { resetState: resetUserState, fetchError } = slice.actions;
export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) {
    window.localStorage.setItem('token', payload.token);
    await dispatch(fetchUser(payload.token));
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem('token');
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token: tokenReducer } = getState();
  if (tokenReducer?.data?.token) {
    const { type } = await dispatch(fetchUser(tokenReducer.data.token));
    if (type === fetchError.type) dispatch(userLogout());
  }
};

export default slice.reducer;
