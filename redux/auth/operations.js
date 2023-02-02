// import { auth }from '../../firebase/config'
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { authSlice } from './authSlice'

// export const authSignUpUser =
//   ({ email, password, login }) =>
//   async (dispatch, getState) => {
//     try {
//       const {user} = await createUserWithEmailAndPassword(auth, email, password);
//       console.log('user', user);
//       dispatch(authSlice.actions.updateUserProfile({userId: user.uid}))
//     } catch (error) {
//       console.log(error);
//       console.log(error.message);
//     }
//   };

// export const authSignInUser =
//   ({ email, password }) =>
//   async (dispatch, getState) => {
//     try {
//         const user = await signInWithEmailAndPassword(auth, email, password);
//       console.log('user', user);
//     } catch (error) {
//       console.log(error);
//       console.log(error.message);
//     }
//   };

// export const authSignOutUser = () => async (dispatch, getState) => {};

import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

export const authSignUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ mail, password, login }, thunkApi) => {
    try {
      await createUserWithEmailAndPassword(auth, mail, password);
      await updateProfile(auth.currentUser, { displayName: login });
      const { uid, displayName, email } = auth.currentUser;
      return { uid, displayName, email };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSignInUser = createAsyncThunk(
  'auth/signInUser',
  async ({ mail, password }, thunkApi) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        mail,
        password
      );
      console.log('user login operations', user);
      return user.uid;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const onAuthStateChanged = createAsyncThunk('auth/stateChange');
