import { app } from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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

export const authSignInUser = () => async (dispatch, getState) => {};

export const authSignOutUser = () => async (dispatch, getState) => {};
