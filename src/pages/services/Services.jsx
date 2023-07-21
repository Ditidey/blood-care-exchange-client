import React from 'react';
import { Link } from 'react-router-dom';
import BloodTestBooking from './BloodTestBooking';
import { useState } from 'react';
import ServiceHome from './ServiceHome';
import { IoIosArrowDown } from 'react-icons/io';
import TransDonation from './TransDonation';
import Treatment from './treatment/Treatment';
const Services = () => {
    const [isTest, setIsTest] = useState(false);
    const [details, setDetails] = useState(true);
    const [con, setConsultancy] = useState(false)
    const [isTrans, setIsTrans] = useState(false)
    const handleDetails = () => {
        setDetails(true)
        setIsTest(false)
        setIsTrans(false)
        setConsultancy(false)
    }
    const handleBlood = () => {
        setDetails(false)
        setIsTest(true)
        setIsTrans(false)
    }
    const handleTreatment = () => {
        setDetails(false)
        setIsTest(false)
        setConsultancy(true)
        setIsTrans(false)
    }
    const handleTrans = () => {
        setDetails(false)
        setIsTest(false)
        setIsTrans(true)
        setConsultancy(false)
    }

    return (
        <div>
            <div className=''>
                <ul className='md:flex md:justify-evenly bg-red-600 text-white p-4'>
                    <li className='hover:bg-red-900 p-3 flex' onClick={handleDetails}><Link className='inline-flex'>Details <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
                    <li className='hover:bg-red-900 p-3 ' onClick={handleBlood}><Link className='inline-flex'>Blood Test <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
                    <li className='hover:bg-red-900 p-3 flex' onClick={handleTreatment}><Link className='inline-flex'>Treatment <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown ></Link></li>
                    <li className='hover:bg-red-900 p-3 flex' onClick={handleTrans}><Link className='inline-flex'>Transfusion and Donation <IoIosArrowDown className='mt-2 ms-1'></IoIosArrowDown></Link></li>
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
                {
                    isTrans == true && <>
                        <TransDonation></TransDonation>
                    </>
                }
                {
                    con === true && <>
                        <Treatment></Treatment>
                    </>
                }
            </div>
        </div>
    );
};

export default Services;