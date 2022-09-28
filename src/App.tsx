import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/home';
import { useAppSelector } from './hooks/redux';
import ProtectedRoute from './utils/ProtectedRoute';

  
function App() {
  const { currentUser } = useAppSelector(state => state.userReducer)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute user={currentUser} />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route
          path="*"
          element={
            currentUser ?
              <Navigate to="/home" /> :
              <Navigate to="/signup" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
