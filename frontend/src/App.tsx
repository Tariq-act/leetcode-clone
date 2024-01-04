import { useEffect } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import SignIn from './components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log('This is a user', user);
      } else {
        console.log('There is no logged user');
      }
    });
  }, []);
  return (
    <>
      <SignIn />
    </>
  );
}

export default App;
