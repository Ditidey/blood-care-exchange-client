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
                    pageId="101427393054301"
                    appId="23959069367017893"
               
                />,
            </div>
        </div>
    );
};

export default MainLayout;