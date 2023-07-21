import React from 'react';
import { PiUsersFour } from 'react-icons/pi';
import { FaBookmark } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../../reducers/doctorsReducer';
import { FiLoader } from 'react-icons/fi';
import { useState } from 'react';
import Doctors from './Doctors';

const AllTreatment = () => {
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors?.data);
    const loading = useSelector((state) => state.doctors.loading);
    const err = useSelector((state) => state.doctors.error);
     const [doctorsTreat, setDoctorsTreat] = useState(doctors)

    useEffect(() => {
        dispatch(fetchUsers())

    }, [dispatch])

    if (loading) {
        <div><FiLoader className='text-red-800 text-2xl animate-spin'></FiLoader></div>
    }
    if (err) {
        <p>{err.message}</p>
    }

    const handleDoctors = treat => {
        const groupDoctors = doctors.filter(doc => doc.treatment == treat);
        // console.log(groupDoctors)
        setDoctorsTreat(groupDoctors)
    }
    return (
        <div className='md:flex p-10 bg-red-50'>
             <div className='flex h-[1300px]'>
             <div className='grid   '>
                <div className='border-2 rounded-sm border-red-800 p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Bone Marrow Transplantation</h2>
                    <p>It involves replacing damaged or diseased bone marrow with healthy stem cells. </p>
                    <hr className='my-6 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$200+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Bone Marrow')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
                <div className='border-2 rounded-sm border-red-800  p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Iron Replacement Therapy</h2>
                    <p>It is used to treat iron deficiency anemia, a condition characterized by low levels of iron in the blood </p>
                    <hr className='my-8 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$100+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Iron Replacement')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
                <div className='border-2 rounded-sm border-red-800  p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Immunotherapy</h2>
                    <p>It is a type of treatment that stimulates the body's immune system to recognize and attack cancer cells or other diseases</p>
                    <hr className='my-8 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$500+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Chemotherapy')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
            </div>

            <div className='grid  gap-5 ms-8 mt-20'>
                <div className='border-2 rounded-sm border-red-800  p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Chemotherapy</h2>
                    <p>It is a systemic treatment that uses drugs to destroy or inhibit the growth of cancer cells in the blood or bone marrow </p>
                    <hr className='my-6 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$100+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Chemotherapy')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
                <div className='border-2 rounded-sm border-red-800  p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Coagulation Therapy</h2>
                    <p>It  is employed to manage bleeding disorders or abnormal blood clotting conditions </p>
                    <hr className='my-8 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$400+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Coagulation Therapy')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
                <div className='border-2 rounded-sm border-red-800  p-5   w-[320px] h-[400px]'>
                    <h2 className='text-center text-2xl font-bold mb-2'>Targeted Therapy</h2>
                    <p>It utilizes drugs or other agents that specifically target certain molecules or genetic abnormalities found in cancer cells</p>
                    <hr className='my-8 border-black' />
                    <p className='text-center my-3'>24 hrs</p>
                    <p className='text-center'>$100+</p>
                    <div className='flex'>
                        <button onClick={()=>handleDoctors('Targeted Therapy')} className='mt-10 text-white bg-red-800   p-2 rounded-md inline-flex'>See Doctors <PiUsersFour className='mt-2 ms-1'></PiUsersFour></button>
                        <button className='mt-10 ms-5 text-white bg-red-800 inline-flex  p-2 rounded-md'>Book Now <FaBookmark className='mt-2 ms-1 w-4 h-3'></FaBookmark></button>
                    </div>
                </div>
            </div>
             </div>

            <div>
                <Doctors doctors={doctorsTreat}></Doctors>
            </div>
        </div>
    );
};

export default AllTreatment;