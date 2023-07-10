import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthNavbar from '../shared/nav/AuthNavbar';

const AuthenticLayout = () => {
    return (
        <div>
            <AuthNavbar></AuthNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthenticLayout;