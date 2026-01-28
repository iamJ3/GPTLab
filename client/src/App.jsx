import React from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  // const { getToken } = useAuth();
  // useEffect(() => {
  //   getToken().then((token) => console.log(token));

  // }, []);
  return (
    <div>
      <Toaster />
      <AppRoutes />
    </div>
  )
}

export default App