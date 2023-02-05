import { createSlice } from '@reduxjs/toolkit';
import { authSignUpUser, authSignInUser, authSingOutUser } from './operations';

const initialState = {
  userId: null,
  nickname: null,
  stateChange: false,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStateChanged: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
      email: payload.email,
      stateChange: true,
    }),
  },
  extraReducers: {
    [authSignUpUser.fulfilled](state, action) {
      state.userId = action.payload.uid;
      state.nickname = action.payload.displayName;
      state.email = action.payload.email;
    },
    [authSignUpUser.rejected]() {
      alert('try again');
    },
    [authSignInUser.fulfilled]() {
      alert('Welcome');
    },
    [authSignInUser.rejected]({ payload }) {
      alert(payload);
    },
    [authSingOutUser.fulfilled](state) {
      state.userId = null;
      state.nickname = null;
      state.stateChange = false;
      state.email = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const stateChange = authSlice.actions.authStateChanged;
