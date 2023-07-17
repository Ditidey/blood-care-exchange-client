import React from 'react';
import { Link } from 'react-router-dom';
import BloodTestBooking from './BloodTestBooking';
import { useState } from 'react';
import ServiceHome from './ServiceHome';
import { IoIosArrowDown } from 'react-icons/io';
const Services = () => {
    const [isTest, setIsTest] = useState(false);
    const [details, setDetails] = useState(true);
    const [con, setConsultancy] = useState(false)

    const handleDetails = () => {
        setDetails(true)
        setIsTest(false)
    }
    const handleBlood = () => {
        setDetails(false)
        setIsTest(true)
    }
    const handConsultancy = () => {
        setDetails(false)
        setIsTest(false)
        setConsultancy(true)
    }
    return (
        <div>
            <div className=''>
                <ul className='flex justify-evenly bg-red-600 text-white p-4'>
                    <li className='hover:bg-red-900 p-3 flex' onClick={handleDetails}><Link className='inline-flex'>Details <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
                    <li className='hover:bg-red-900 p-3 ' onClick={handleBlood}><Link className='inline-flex'>Blood Test <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
                    <li className='hover:bg-red-900 p-3 flex'><Link className='inline-flex'>Consultancy <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown ></Link></li>
                    <li className='hover:bg-red-900 p-3 flex'><Link className='inline-flex'>Transfusion and Donation <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
                </ul>
            </div>

            <div>
                {
                    details === true && <>
                        <ServiceHome></ServiceHome>
                    </>
                }
                {
                    isTest === true && <>
                        <BloodTestBooking></BloodTestBooking>
                    </>
                }

            </div>
        </div>
    );
};

export default Services;