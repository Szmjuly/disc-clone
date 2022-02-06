//React
import { useEffect } from 'react';

//Styling
import './App.css';

//Components
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';

//Pages
import FriendsPage from './pages/FriendsPage';
import ServerPage from './pages/ServerPage';
import LoginPage from './pages/LoginPage'

//Redux + Firebase Stuff
import { selectUser, login, logout } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {auth} from './firebase/firebase'

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  
  useEffect(() => {
    auth.onAuthStateChanged((authenticatedUser) => {
      
      if(authenticatedUser){

        dispatch(login({
          uid: authenticatedUser.uid,
          photo: authenticatedUser.photoURL,
          email: authenticatedUser.email,
          displayName: authenticatedUser.displayName,
        }))
      }
      else{
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      {currentUser ? <>
              {/* Nav Bar - Left Most Side */}
              <Navbar />

              {/* Main Window Pages / Servers */}
              <Routes>
                <Route path='/' element={<FriendsPage />} />
                <Route path='/server' element={<ServerPage />} />
              </Routes>
                    </>
                    :
                    <>
              <LoginPage />
                    </>
        }
      
      
    </div>
  );
}