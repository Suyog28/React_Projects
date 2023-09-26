
// import { config } from 'dotenv';
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])



  return !loading ? <div className='min-h-screen flex 
  flex-wrap content-between bg-gray-400'> Test</div> : <div
    className='w-full h-full flex justify-center items-center text-2xl font-bold text-gray-400 bg-gray-800 
  border-4 border-gray-700 rounded-lg animate-pulse '
  >
    <Header />
    <main>
      {/*<Outlet />*/}
    </main>
    <Footer />
  </div>

}

export default App
