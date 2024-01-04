import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAzGsL_EOGleXkfrHja7em8XTwohpD4K6g',
  authDomain: 'leetcode-clone-660f4.firebaseapp.com',
  projectId: 'leetcode-clone-660f4',
  storageBucket: 'leetcode-clone-660f4.appspot.com',
  messagingSenderId: '8545666122',
  appId: '1:8545666122:web:cfb1ed6582854f1c4992b3',
  measurementId: 'G-CZF5R5DD5N',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app); 