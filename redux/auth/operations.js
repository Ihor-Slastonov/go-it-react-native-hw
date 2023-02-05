import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { stateChange } from './authSlice';

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
      await signInWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSingOutUser = createAsyncThunk(
  'auth/singOutUser',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authStateChanged = () => dispatch => {
  try {
    onAuthStateChanged(auth, user => {
      if (user) {
        const updateInfo = {
          userId: user.uid,
          nickname: user.displayName,
          email: user.email,
        };
        dispatch(stateChange(updateInfo));
      }
    });
  } catch (error) {}
};
