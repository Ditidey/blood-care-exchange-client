import React, { useState, useEffect, useContext } from 'react';
import { contextProvider } from '../../../contextProviders/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../reducers/usersReduce';
import useAxios from '../../../components/hooks/useAxios';
import { fetchBloods } from '../../../reducers/bloodReducer';
import { fetchTreatments } from '../../../reducers/treatmentReducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { user } = useContext(contextProvider);
    const [axiosFetching] = useAxios();
    const [curUser, setCurUser] = useState({})
    const bloods = useSelector((state) => state.bloods?.data);
    const currentDonors = bloods?.filter(u => u.emailDonor == user?.email)
    const treatments = useSelector((state) => state.treatments?.data);
    const treatmentLists = treatments?.filter(u => u.email == user?.email)
    console.log(treatments,treatmentLists)

    useEffect(() => {
        dispatch(fetchBloods())
        dispatch(fetchTreatments())
    }, [dispatch])
    
    useEffect(() => {
        axiosFetching.get(`/user/${user?.email}`).then(res => {
            setCurUser(res.data)
            // console.log(res.data)
        })
      
    }, [])
 

    return (
        <div className='md:w-[1280px]'>
            <div className='mx-auto'>
                <img src={user?.photoURL} alt="" className='md:mt-0 mt-3 w-20 h-20 rounded-full mx-auto border-red-800 border-2' />
                <p className='text-center'>{user?.displayName}</p>
                <p className='text-center'>{user?.email}</p>
                <p className='text-center'>Blood Group: {curUser?.group}</p>

            </div>
            <div className='grid md:grid-cols-2 gap-7 mt-10 bg-red-50 md:p-10 p-2 w-full'>
                <div className=''>
                    <h2 className='text-center text-3xl font-bold font-serif'>Booking History </h2>
                    <div className='grid md:grid-cols-2 gap-3 mt-5'>
                        {
                            treatmentLists?.map(tr => 
                            <div key={tr._id} className='w-[300px] h-[250px] p-8 shadow-xl mx-4'>
                                <p className='font-bold'>Booking: {tr.treatment || 'Blood Test'}</p>
                                <p className=''>Doctor: {tr.doctor || 'Unknown'}</p>
                                <p className=''>Date: {tr.date || 'Unknown'}</p>
                                <p className=''>Fee: {tr.fee || 'Unknown'}</p>
                                <p className=''>Location: {tr.address || 'Unknown'}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div> 
                <p className='text-center text-3xl font-bold font-serif'>Donation History</p>

                <div className='grid md:grid-cols-2 gap-3 mt-5'>

                        {
                            currentDonors?.map(tr => 
                            <div key={tr._id} className='w-[300px] h-[250px] p-8 shadow-xl mx-4'>
                                <p className='font-bold'>Patient Name: {tr.name || 'Unknown'}</p>
                                <p className=''>Blood Group: {tr.group || 'Unknown'}</p>
                                <p className=''>Date: {tr.date || 'Unknown'}</p>
                                <p className=''>Reason: {tr.reason || 'Unknown'}</p>
                                <p className=''>Location: {tr.address || 'Unknown'}</p>
                            </div>)
                        }
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default UserProfile;