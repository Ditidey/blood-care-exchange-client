import React from 'react';
import AuthNavbar from '../shared/nav/AuthNavbar';
import { Outlet } from 'react-router-dom';
import blood from '../../public/blood.jpg';

const DashLayout = () => {
    return (
        <div>
            <AuthNavbar></AuthNavbar>
            <div className='grid md:grid-cols-6'>
                <div className='grid-cols-2 h-full' style={{backgroundImage: `url(${blood})`, backgroundRepeat:'no-repeat', height:'1000px'}}>
                     hello
                </div>
                <div className='grid-cols-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashLayout;