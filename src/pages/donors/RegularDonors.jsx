import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../reducers/usersReduce';
// import { fetchUsers } from '../../reducers/Reduce';
 import {FiLoader, FiMessageSquare} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const RegularDonors = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users?.data);
    const loading = useSelector((state) => state.users.loading);
    const err = useSelector((state) => state.users.error);
    const regularUsers = users?.filter(user => user.donor_class == 'regular')
    // console.log(users, loading, err)
    useEffect(() => {
        dispatch(fetchUsers())
        
    }, [dispatch])

    if(loading){
        <div><FiLoader className='text-red-800 text-2xl animate-spin'></FiLoader></div>
    }
    if(err){
        <p>{err.message}</p>
    }
    return (

        <div className='my-10'>
            <div className='grid md:grid-cols-3 gap-10 md:mx-14 mx-3'>
                {
                    regularUsers?.map(user => 
                    <div key={user._id} className='w-[400px] h-[500px] shadow-xl'>
                        <img src={user.photo} alt="" className='w-[200px] h-[200px] rounded-full mx-auto my-4'/>
                        <div className='text-center mt-12'>
                            <h2 className='text-xl font-serif font-bold relative'>{user.name} <span className='text-red-700 font-mono absolute -top-20 text-sm uppercase border-2 px-1'>{user.donor_class}</span></h2>
                            <p>Location: {user.location}</p>
                            <p>Last donation date: {user.last_donation}</p>
                            
                        </div>
                        <button className='bg-red-800 ps-32 text-white p-3 mt-24 inline-flex w-full '>  <Link to={`/message-web/${user._id}`} className='inline-flex'>Message me <FiMessageSquare className='mt-2 ms-1 animate-pulse'></FiMessageSquare></Link> </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RegularDonors;