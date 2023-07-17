import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contextProvider } from '../contextProviders/AuthProvider';
import Swal from 'sweetalert2';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(contextProvider);
    
    if(loading){
        <p>Loading...</p>
    }
    if(user){
        return children;
    }
    if(!user){
        Swal.fire({
            text: 'Login First',
            timer: 1500,
            icon: 'warning',
            showCloseButton: false
        })
    }
    return (
        <Navigate to='/auth-layout/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;