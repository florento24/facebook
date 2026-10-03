import React, { useState } from 'react';
import Login from './screens/Login'; 
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <HomeScreen />;
  }

  return <Login onLogin={() => setIsLoggedIn(true)} />;
}