import React, { useContext, useState } from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiDotsVerticalRounded, BiMenuAltLeft, BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { contextProvider } from '../../contextProviders/AuthProvider';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logoutUser } = useContext(contextProvider)
     
    const handleLogout = ()=>{
        logoutUser()
        .then(()=>{})
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <nav className='flex relative justify-around p-5 z-10'>
                <div className='md:hidden'>
                    {
                        isOpen ? <RxCross2 className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></RxCross2> :
                            <BiMenuAltLeft className='w-10 h-8 mt-1 me-5' onClick={() => setIsOpen(!isOpen)}></BiMenuAltLeft>
                    }
                </div>

                <div className='flex'>
                    <img src={logo} alt="" className='w-8 h-8 animate-pulse' />
                    <p className='font-bold font-serif mt-2 text-xl me-12 text-red-700'>BloodCareExchange</p>
                </div>
                <div className=''>
                    <ul className={`md:flex md:static absolute duration-500 md:mt-2  ${isOpen === true ? 'bg-slate-50 top-16 left-0 z-10 pb-5' : ' -top-56 left-0'}`}>
                        <li className='mx-4'><NavLink className={({ isActive }) =>
                            isActive ? "text-red-600" : ""} to='/'>Home </NavLink></li>
                        <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                        <li className='mx-4'><NavLink className={({ isActive }) =>
                            isActive ? "text-red-600" : ""} to='/services'>Services</NavLink></li>
                        <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                        <li className='mx-4 relative'><button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >Donors</button></li>
                        <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
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
                            </div>
                        )}

                        {
                            user ? <> <button onClick={handleLogout} className='text-red-800 font-bold mx-3 btn'>Logout</button>
                            <BiDotsVerticalRounded className='mt-1 text-gray-400 h-5'></BiDotsVerticalRounded>
                            <li className='mx-3'>Notification</li>
                            </> :
                             <Link to='/auth-layout/login' className='text-red-800 font-bold ms-3 btn'>Login</Link>
                        }
                    </ul>
                </div>
                <div>
                    <input type="text" className=' w-1/2  border-gray-300 border-b-2' />
                    <button type='submit'><BiSearch className='mt-2 w-5'></BiSearch></button>
                    {/* <input type="submit" value={<BiSearch></BiSearch>} className='text-white p-2 border bg-red-800' /> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;