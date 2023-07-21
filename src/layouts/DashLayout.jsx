import React, { useState } from 'react';
import AuthNavbar from '../shared/nav/AuthNavbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import blood from '../../public/blood.jpg';
import { useContext } from 'react';
import { contextProvider } from '../contextProviders/AuthProvider';
import useAxios from '../components/hooks/useAxios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../reducers/usersReduce';
import { RxCross2 } from 'react-icons/rx';
import { RiMenuAddLine } from 'react-icons/ri';
import UserProfile from '../pages/dashPage/userPages/UserProfile';
import DoctorProfile from '../pages/dashPage/DoctorPage/DoctorProfile';

const DashLayout = () => {
    const { user } = useContext(contextProvider);
    const [axiosFetching] = useAxios();
    const [curUser, setCurUser] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users?.data);


    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {

        axiosFetching.get(`user/${user?.email}`).then(res => {
            setCurUser(res.data)
        })
    }, [])

    return (
        <div>
            <div className='md:flex hidden'>
                <AuthNavbar></AuthNavbar>
            </div>

            <div className='grid md:grid-cols-6'>
                <div className='grid-cols-2 md:h-[800px] md:p-4  bg-red-50'  >

                    <div className='md:hidden flex justify-end mt-4'>
                        <div>
                            <p className='font-bold font-serif  text-xl  text-red-700'><Link to='/'>BloodCareExchange</Link></p>
                        </div>
                        {
                            isOpen ? <RxCross2 className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></RxCross2> :
                                <RiMenuAddLine className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></RiMenuAddLine>
                        }
                    </div>

                    <ul className={`md:flex-col md:static absolute duration-500 md:mt-2 pt-10 ps-3 space-y-3 font-semibold  ${isOpen === true ? 'bg-red-50 px-2 top-14 z-10 pb-5 ms-10' : ' -top-52 left-0'}`}>
                        {
                            curUser?.status == 'donor' && <>
                                <li><NavLink to='/dash-layout/user-pro' className={({ isActive }) =>
                                    isActive ? "text-red-600" : ""}>Profile</NavLink></li>
                                <li><NavLink to='/dash-layout/user-pro'>History</NavLink></li>
                            </>
                        }
                        {
                            curUser?.status == 'doctor' && <>
                                <li><NavLink to='/dash-layout/user-pro'>Profile</NavLink></li>
                                <li><NavLink to='/dash-layout/user-pro'>Profile</NavLink></li>
                            </>
                        }
                        {
                            curUser?.status == 'admin' && <>
                                <li><NavLink to='/dash-layout/user-pro'>Profile</NavLink></li>
                                <li><NavLink to='/dash-layout/user-pro'>Profile</NavLink></li>
                            </>
                        }

                        <li><NavLink to='/blood-need' className={({ isActive }) =>
                            isActive ? "text-red-600" : ""}>Need Blood</NavLink></li>
                        <li><NavLink to='/services' className={({ isActive }) =>
                            isActive ? "text-red-600" : ""}>Services</NavLink></li>
                        <li><NavLink to='/group-donors' className={({ isActive }) =>
                            isActive ? "text-red-600" : ""}>Donors</NavLink></li>
                    </ul>
                </div>
                <div className='grid-cols-4 md:p-4 w-full'>

                    {
                        curUser?.status == 'donor' && <>
                            <UserProfile></UserProfile>
                        </>
                    }
                    {
                        curUser?.status == 'doctor' && <>
                            <DoctorProfile></DoctorProfile>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashLayout;
// style={{ backgroundImage: `url(${blood})`, backgroundRepeat: 'no-repeat', height: '1000px' }}