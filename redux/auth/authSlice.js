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
import { authSignUpUser, authSignInUser } from './operations';

const initialState = {
  userId: null,
  nickname: null,
  stateChange: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authSignUpUser.fulfilled](state, action) {
      console.log(action.payload.uid);
      console.log(action.payload.displayName);
      state.userId = action.payload.uid;
      state.nickname = action.payload.displayName;
      state.email = action.payload.email;
    },
    [authSignUpUser.rejected]() {
      alert('try again');
    },
    [authSignInUser.fulfilled](state, action) {
      state.userId = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
