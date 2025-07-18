import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
    // const navigate = useNavigate();
    const {axios,setToken,navigate} = useAppContext();
    const logout = () => {
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null);
        navigate('/')
    }

  return (
    <>
        <div className='flex items-center justify-between h-[70px] px-4 py-2 sm:px-12 border-b border-gray-200'>
            <img src={assets.luminote} alt="" className='w-26 sm:w-20 cursor-pointer'
                onClick={()=> navigate('/')}
            />
            <button className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
                onClick={logout}
            >Logout</button>
        </div>
        <div className='flex h[calc(100vh-70px)]'>
            <Sidebar/>
            <Outlet />
        </div>
    </>
  )
}

export default Layout