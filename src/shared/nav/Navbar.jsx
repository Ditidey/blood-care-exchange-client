import React, { useContext, useState } from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiDotsVerticalRounded, BiMenuAltLeft, BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { contextProvider } from '../../contextProviders/AuthProvider';
import useAxios from '../../components/hooks/useAxios';
import BloodGroupDonors from '../../pages/donors/BloodGroupDonors';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBloods } from '../../reducers/bloodReducer';
// import io from 'socket.io-client';
import { fetchUsers } from '../../reducers/usersReduce';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logoutUser } = useContext(contextProvider)
    const [axiosFetching] = useAxios();
    const [groups, setGroups] = useState();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const bloods = useSelector((state) => state.bloods?.data);
    const users = useSelector((state) => state.users?.data);
    const staUser = users?.find(u => u.email == user?.email)
    console.log(staUser)
 
    useEffect(() => {
        dispatch(fetchBloods())
        dispatch(fetchUsers())
    }, [dispatch])

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSearch = event => {
        setOpen(false)
        event.preventDefault();
        const searchText = event.target.search.value;
        const encodedSearchInput = encodeURIComponent(searchText)
        console.log(encodedSearchInput)
        axiosFetching.get(`/users?group=${encodedSearchInput}`)
            .then(res => {
                console.log(res.data)
                setGroups(res.data)
            })
        event.target.reset()
        setOpen(true)

    }

    // useEffect(() => {
    //     // Connecting to the WebSocket server
    //     const socket = io('ws://localhost:5000/');

    //     socket.on('message', (notificationMessage) => {
    //         setNotifications((prevNotifications) => [...prevNotifications, notificationMessage]);
    //         setUnreadCount((prevCount) => prevCount + 1);
    //     });

    //     // Cleaning up the WebSocket connection on component unmount
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    // const markAllAsRead = () => {
    //     setUnreadCount(0);
    // };
    return (
        <div className=' '>
            <nav className='flex relative justify-around p-5 z-10'>
                <div className='md:hidden'>
                    {
                        isOpen ? <RxCross2 className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></RxCross2> :
                            <BiMenuAltLeft className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></BiMenuAltLeft>
                    }
                </div>

                <div className='md:flex hidden'>
                    <img src={logo} alt="" className='w-8 h-8 animate-pulse' />
                    <p className='font-bold font-serif mt-2 text-xl me-12 text-red-700'><Link to='/'>BloodCareExchange</Link></p>
                </div>
                <div className=''>
                    <ul className={`md:flex md:static absolute duration-500 md:mt-2  ${isOpen === true ? 'bg-slate-50 top-16 left-0 z-10 pb-5' : ' -top-60 left-0'}`}>

                        <li className='mx-4'><NavLink className={({ isActive }) =>
                            isActive ? "text-red-600" : ""} to='/blood-need'>Need Blood</NavLink></li> <span className='bg-red-800 rounded-full w-5 ps-1  h-5 text-white -ms-3 text-xs'>{bloods?.length}+</span>
                        <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                        <li className='mx-4'><NavLink className={({ isActive }) =>
                            isActive ? "text-red-600" : ""} to='/services'>Services</NavLink></li>
                        <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                        <li className='mx-4 relative'><button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >Donors</button></li>
                        <BiDotsVerticalRounded className={`mt-1 text-gray-400 h-5 `}></BiDotsVerticalRounded>
                        {isDropdownOpen && (
                            <div className="absolute top-14 mb-10 md:ms-36 ms-20 md:mt-0 mt-10 z-10  bg-white shadow-lg p-4">

                                <NavLink to='/regular-donors' className={({ isActive }) =>
                                    isActive ? "text-red-600" : ""}>Regular Donors</NavLink> <br />
                                <NavLink to='/registered-donors' className={({ isActive }) =>
                                    isActive ? "text-red-600" : ""}>Emergency Donors</NavLink> <br />
                                <NavLink to='/platelet-donors' className={({ isActive }) =>
                                    isActive ? "text-red-600" : ""}>Platelet Donors</NavLink> <br />
                                <NavLink to='/auth-layout/become-donor' className={({ isActive }) =>
                                    isActive ? "text-red-600" : ""}>Become Donors</NavLink>
                                <RxCross2 onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-6 h-6 ms-30 bg-red-500 text-white absolute end-0 bottom-0 rounded-full`}  ></RxCross2>
                            </div>
                        )}

                        {
                            user ? <> <button onClick={handleLogout} className='text-red-800 font-bold mx-3 btn'>Logout</button>
                                <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                                
                                {/* <li className='mx-3'>Notification </li><span className='bg-red-800 rounded-full w-5 ps-1  h-5 text-white -ms-3 text-xs'>{unreadCount}+</span>
                                {
                                    unreadCount > 0 &&
                                    <div className="bg-red-50 p-5 rounded-md z-10">
                                        {notifications.map((notification, index) => (
                                            <div key={index} className="notification-item">
                                                {notification}
                                            </div>
                                        ))}
                                         <div className="text-red-800" onClick={markAllAsRead}>x</div>
                                    </div>
                                }



                                // <BiDotsVerticalRounded className='mt-1 ms-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                                // <li className='mx-3'> <NavLink to='/dash-layout' className={({ isActive }) =>
                                //     isActive ? "text-red-600" : ""}>Dashboard</NavLink></li> */}

                            </> :
                                <Link to='/auth-layout/login' className='text-red-800 font-bold ms-3 btn'>Login</Link>
                        }
                        {
                             staUser?.status &&  <li className='mx-3'> <NavLink to='/dash-layout' className={({ isActive }) =>
                            isActive ? "text-red-600" : ""}>Dashboard</NavLink></li>
                        }
                    </ul>
                </div>
                <div>
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" name='search' placeholder='blood group' className=' w-1/2 border-gray-300 border-b-2' />
                        <button type='submit'><BiSearch className='mt-2 w-5'></BiSearch></button>
                    </form>

                </div>
            </nav>
            <div className=' z-10'>{
                open === true && groups?.length > 0 &&
                <>
                    <AiOutlineCloseCircle onClick={() => setOpen(false)} className='w-10 h-8 bg-slate-300 text-red-500 ms-10'></AiOutlineCloseCircle>
                    <BloodGroupDonors donors={groups}></BloodGroupDonors>
                </>

            }
            </div>
        </div>
    );
};

export default Navbar;