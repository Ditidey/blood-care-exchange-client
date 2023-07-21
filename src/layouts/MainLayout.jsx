import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/nav/Navbar';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const MainLayout = () => {
    return (
        <div className='  mx-3'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <div>
                <MessengerCustomerChat
                    pageId="101055286412109"
                    appId="1729280587500320"
               
                />,
            </div>
        </div>
    );
};

export default MainLayout;