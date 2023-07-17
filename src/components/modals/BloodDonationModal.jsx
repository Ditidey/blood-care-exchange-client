import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BloodDonationModal = ({ isOpen, onClose }) => {

    return (
        <div className={`fixed inset-0 z-10 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white w-96 p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Blood Donation Eligibility</h2>
                <p className="mb-4">
                    Determining eligibility to donate blood depends on various factors, including the policies and guidelines of the specific blood donation organization or blood center in your country. <br /> Here are some common factors that may affect blood donation eligibility:</p>
                <ul className='text-sm space-y-2 mb-5 text-red-700'>
                    <li>Age: Require above 18 years old, </li>
                    <li>Weight and Body Mass Index (BMI): It ensures that they have enough blood volume to donate without compromising their health</li>
                    <li>Health Conditions: Not having any infectious diseases, chronic conditions, or recent surgeries.</li>
                    <li>Lifestyle and Behaviors: Engaging in risky sexual behaviors or intravenous drug use might lead to temporary or permanent deferral </li>
                </ul>


                <Link
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
                    to='/auth-layout/become-donor'
                >
                    Become a Donor
                </Link>

                <button
                    className="bg-red-800 hover:bg-red-400  text-white ml-2 px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BloodDonationModal;