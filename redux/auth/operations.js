import { app } from '../../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);
export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    console.log(email);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};
