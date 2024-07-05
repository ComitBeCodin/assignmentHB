import React from 'react';
import Sidebar from './Sidebar';
import ProfilePage from './ProfilePage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
