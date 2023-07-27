import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../../../contextProviders/AuthProvider';

const AdminProfile = () => {
    const { user } = useContext(contextProvider);
    return (
        <div>
            <div className='mx-auto'>
                <img src={user?.photoURL} alt="" className='md:mt-0 mt-3 w-20 h-20 rounded-full mx-auto border-red-800 border-2' />
                <p className='text-center'>{user?.displayName}</p>
                <p className='text-center'>{user?.email}</p>
                <p className='text-center'>Blood Group: {curUser?.group}</p>

            </div>
        </div>
    );
};

export default AdminProfile;