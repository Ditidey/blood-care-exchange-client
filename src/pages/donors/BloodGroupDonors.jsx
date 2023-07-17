import React from 'react';
import { Link } from 'react-router-dom';
import { FiLoader, FiMessageSquare } from 'react-icons/fi';

const BloodGroupDonors = ({ donors }) => {
    return (
        <div className='my-10'>
            <div className='grid md:grid-cols-3 gap-10 md:mx-14 mx-3'>
                {
                    donors?.map(user =>
                        <div key={user._id} className='w-[400px] h-[500px] shadow-xl'>
                            <img src={user.photo} alt="" className='w-[200px] h-[200px] rounded-full mx-auto my-4' />
                            <div className='text-center mt-16'>
                                <h2 className='text-xl font-serif font-bold relative'>{user.name} <span className='text-red-700 font-mono absolute -top-20 text-sm uppercase border-2 px-1'>{user.donor_class}</span></h2>
                                <p>Location: {user.location}</p>
                                <p>Last donation date: {user.last_donation}</p>
                                <p>Group: {user.group}</p>
                            </div>
                            <button className='bg-red-800 ps-32 text-white p-3 mt-20 inline-flex w-full '><Link to={`/message-web/${user._id}`} className='inline-flex'>Message me <FiMessageSquare className='mt-2 ms-1 animate-pulse'></FiMessageSquare></Link></button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default BloodGroupDonors;