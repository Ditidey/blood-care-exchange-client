import React from 'react';
import { useState } from 'react';
import { FaBookMedical, FaCalendarTimes, FaConnectdevelop, FaEarlybirds } from 'react-icons/fa';

const ServiceHome = () => {
    const [read, setRead] = useState(false)
    return (
        <div>
            <div className='grid md:grid-cols-3 bg-red-100 md:px-16 md:ps-16 p-3'>
                <div className='grid-cols-1 md:px-8 px-3 py-14 '>
                    <h2 className='text-3xl font-bold md:pt-20 mb-6'>We are providing </h2>
                    <p>Services play a crucial role in addressing the constant need for blood donations and ensuring a steady supply of blood for medical emergencies, surgeries, and transfusions and consultancy. <br /><span onClick={()=>setRead(true)} className='text-blue-500 mt-5 ms-44'>{read === false && 'See more' }</span>
                    {read && <>
                    <ul>
                        <li><span className='text-xl font-bold'>Blood Donation Drives and Events</span>
                        These initiatives encourage individuals to participate in donation campaigns, providing a convenient and organized way for donors to contribute.
                        </li>
                        <li><span className='text-xl font-bold'>Appointment booking and Scheduling</span> You can book appointments for blood donation, ensuring an organized process for both donors and blood banks. Also can reschedual your booking. You can book you selected consultant</li>
                        <li><span className='text-xl font-bold'>Integration with Blood Banks and Healthcare Providers</span> You or we may establish partnerships or integrations with blood banks, hospitals, and healthcare providers to facilitate seamless coordination and ensure efficient delivery of donated blood to those in need.</li>
                    </ul>
                    <span onClick={()=>setRead(false)} className='text-blue-500'>See less</span>
                    </>}
                    </p>

                </div>
                <div className='grid-cols-2 md:p-6 p-3 md:ms-20 md:flex md:justify-between'>
                    <div className='md:mt-32'>
                        <div className='shadow-lg p-5 bg-slate-50 w-[250px] h-[350px]'>
                            <FaCalendarTimes className='text-red-800 w-16 h-16 bg-slate-50 p-3 ms-2 mt-5'></FaCalendarTimes>
                            <h2 className='text-2xl font-bold mb-6'>Check Appointment</h2>
                            <p>Check appointments for blood donation or consultancy at designated centers or during blood drives or others.</p>
                        </div>
                        <div className='shadow-lg p-5 bg-slate-50 mt-5 w-[250px] h-[350px]'>
                            <FaConnectdevelop className='text-red-800 w-16 h-16 bg-slate-50 p-3 ms-2 mt-5'></FaConnectdevelop>
                            <h2 className='text-2xl font-bold mb-6'>Volunteer Opportunities</h2>
                            <p>It allows to sign up as volunteers, participate in blood drives, or assist in organizing donation events</p>
                        </div>                     

                    </div>
                    <div className='mt-4 md:ms-14'>
                        <div className='shadow-lg p-5 bg-slate-50 w-[250px] h-[350px]'>
                            <FaEarlybirds className='text-red-800 w-16 h-16 bg-slate-50 p-3 ms-2 mt-5'></FaEarlybirds>
                            <h2 className='text-2xl font-bold mb-6'>Emergency Blood Requests</h2>
                            <p>It allows quick and targeted notifications to eligible donors who are geographically close to the location of the emergency.</p>
                        </div>
                        <div className='shadow-lg p-5 bg-slate-50 mt-5 w-[250px] h-[400px]'>
                            <FaBookMedical className='text-red-800 w-16 h-16 bg-slate-50 p-3 ms-6 mt-3'></FaBookMedical>
                            <h2 className='text-2xl font-bold mb-4'>Educational Resources</h2>
                            <p>Educational materials, including information on the importance of blood donation, eligibility criteria, and the donation process. These resources help raise awareness and address common concerns.</p>
                        </div>                     

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;