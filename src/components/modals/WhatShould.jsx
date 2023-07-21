import React from 'react';
import { FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhatShould = ({openModal, closeModal}) => {
    return (
        <div className={`fixed inset-0 z-10 flex items-center justify-center  ${openModal ? '' : 'hidden'}`}>
        <div className="bg-white w-96 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Blood is most important part of body</h2>
            <p className='text-blue-600 inline-flex'><FaClipboardCheck className='mt-1'></FaClipboardCheck><Link to='/blood-test'>Learn About Blood Test</Link></p> <br />
            <p className='text-blue-600 inline-flex'><FaClipboardCheck className='mt-1'></FaClipboardCheck><Link to='/test-book'>Book Blood Test</Link></p> <br />
            <p className='text-blue-600 inline-flex'><FaClipboardCheck className='mt-1'></FaClipboardCheck><Link to='/treat-learn'> Learn About Blood Treatment</Link> </p>
            <p className='text-blue-600 inline-flex'><FaClipboardCheck className='mt-1'></FaClipboardCheck><Link to='/all-treatment'> Book Treatment as you want</Link> </p>
             
            
            <button
                className="bg-red-800 hover:bg-red-400  text-white mt-4 ms-72 px-3 rounded  bottom-0"
                onClick={closeModal}
            >
                x
            </button>
        </div>
    </div>
    );
};

export default WhatShould;