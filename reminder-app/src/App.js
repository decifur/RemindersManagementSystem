import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';


import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'
import LoginFailed from './components/LoginFailed.jsx'
import Welcome from './components/Welcome.jsx'
import ThankYou from './components/ThankYou.jsx'
import EnableReminder from './components/EnableReminder.jsx'
import DisableReminder from './components/DisableReminder.jsx'
import DeleteReminder from './components/DeleteReminder.jsx'
import ModifyReminder from './components/ModifyReminder.jsx'
import ViewReminder from './components/ViewReminder.jsx'
import SetReminder from './components/SetReminder.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/home" element={<Welcome />} />
          <Route exact path="/login-failed" element={<LoginFailed />} />
          <Route exact path="/set-reminder" element={<SetReminder />} />
          <Route exact path="/modify-reminder" element={<ModifyReminder />} />
          <Route exact path="/delete-reminder" element={<DeleteReminder />} />
          <Route exact path="/disable-reminder" element={<DisableReminder />} />
          <Route exact path="/enable-reminder" element={<EnableReminder />} />
          <Route exact path="/thank-you" element={<ThankYou />} />
          <Route exact path="/view-reminder" element={<ViewReminder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
