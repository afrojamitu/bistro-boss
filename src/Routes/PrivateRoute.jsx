import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loaderGif from '../assets/others/loader3.gif'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='bg-[#2d2d2d] flex items-center justify-center h-[100vh]'><img className='w-52' src={loaderGif} alt="" /></div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;