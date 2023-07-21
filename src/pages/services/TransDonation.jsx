import React from 'react';
import BecomeDonors from '../donors/BecomeDonors';
import BloodTrans from '../../components/BloodTrans';
import { FaArrowDown } from 'react-icons/fa';

const TransDonation = () => {
    return (
        <div className='  '>
            <div className=''>
                <BloodTrans></BloodTrans>
            </div>
            <div className=''>
                <BecomeDonors></BecomeDonors>
            </div>
            <div className='bg-red-600 text-white'>
                <FaArrowDown></FaArrowDown>
            </div>
        </div>
    );
};

export default TransDonation;