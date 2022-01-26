import React from 'react';
import { Counter } from './features/Counter';
import './App.css';

//Components
import SideBar from './components/SideBar'
import ChatRegion from './components/ChatRegion';
import Navbar from './components/Navbar'
import { Router, Routes, Route } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ActivityRegion from './components/ActivityRegion';

export default function App() {
  return (
    <div className="app">

      {/* Navegation Bar - Left Most Side */}
      <Navbar />

      {/* SideBar - Friends / DM / Chanels */}
      <SideBar />

      {/* Main Window Pages / Servers */}
      <Routes>
        <Route path='/' element={<FriendsPage />} />
      </Routes>
      
    </div>
  );
}