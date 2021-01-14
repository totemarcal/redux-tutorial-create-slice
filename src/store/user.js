import { createSlice } from '@reduxjs/toolkit'

// Slice

const initialUser = { username: '', password: '' }

const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      console.log(state)
      state.user = action.payload;
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
    },
  },
});

export default slice.reducer

// Actions

const { loginSuccess, logoutSuccess } = slice.actions

export const login = ({ username, password }) => async dispatch => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
}

export const logout = () => async dispatch => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}
