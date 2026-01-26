import React from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react';

const App = () => {
  const {getToken} = useAuth();
 useEffect(() => {
  getToken().then((token)=>console.log(token));
 
 }, []);
  return (
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App