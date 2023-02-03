// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//     userId: null,
//     nickname: null,
// };

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialState,
//     reducers: {
//         updateUserProfile: (state, { payload }) => ({
//             ...state,
//             userId: payload.userId,
//         }),
//     },
// });
// console.log(authSlice);

import { createSlice } from '@reduxjs/toolkit';
import { authSignUpUser, authSignInUser, authStateChanged } from './operations';

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
    [authSignInUser.fulfilled](state, action) {
      state.userId = action.payload.uid;
      state.nickname = action.payload.displayName;
      state.email = action.payload.email;
    },
  },
});

export const authReducer = authSlice.reducer;
export const stateChange = authSlice.actions.authStateChanged;
