import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';


//Pages
import FriendsPage from './pages/FriendsPage';
import ServerPage from './pages/ServerPage';
import LoginPage from './pages/LoginPage'

//Redux Stuff
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

export default function App() {
  const currentUser = useSelector(selectUser);
  
  return (
    <div className="app">
      {currentUser ? <>
              {/* Navegation Bar - Left Most Side */}
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