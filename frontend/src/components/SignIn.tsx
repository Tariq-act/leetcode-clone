/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UserCredential,
  getAuth,
  sendSignInLinkToEmail,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { app, auth } from '../utils/firebase';
import { FirebaseError } from 'firebase/app';

import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const SignIn = () => {
  const [email, setEmail] = useState('');

  async function onSignIn() {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error: FirebaseError) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error?.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .catch((error: { code: unknown; message: unknown }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }

  return (
    <div>
      <button
        type='submit'
        onClick={() => onSignIn()}
        className='border shadow-md rounded-lg p-4'
      >
        Sign up with google
      </button>
    </div>
  );
};

export default SignIn;
