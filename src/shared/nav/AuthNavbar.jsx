import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';

const AuthNavbar = ({title}) => {
    return (
        <div className='mb-5'>
            <div className='flex pt-5'>
                <Link to='/' className='flex'>
                    <img src={logo} alt="" className='w-10 h-10 mt-5 ms-10 animate-pulse' />
                    <h1 className="text-3xl font-bold   text-red-700 pt-5 ps-2">BloodCareExchange</h1>
                </Link>
            </div>
            <p className='ms-10 text-red-700'>"Your blood has the power to heal, the power to save lives. Share it generously."</p>
            
        </div>
    );
};

export default AuthNavbar;