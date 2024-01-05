import { useEffect } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import SignIn from './components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import TopBar from './components/TopBar';
import Card from './components/Card';

function App() {
  return (
    // <RecoilRoot>
    <div className='max-w-screen-lg mx-auto'>
      <TopBar />
      {/* <StoreApp /> */}
      <Card>Hi There!</Card>
    </div>
    // </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        console.log('This is a user', user);
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        console.log('There is no logged user');
        setUser({ loading: false });
      }
    });
  }, []);

  if (user.loading) {
    return <div>Loading...</div>;
  }

  if (!user.user) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }

  return (
    <>
      <h1>
        You Logged in as <b>{user.user?.email}</b>{' '}
      </h1>
    </>
  );
}

export default App;
