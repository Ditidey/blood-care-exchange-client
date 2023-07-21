import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-red-800 mt-10'>Coming Soon...</h2>
            <Link to='/' className='text-center text-blue-500 ms-96 ps-72  '>Back to Home</Link>
            <br />
            <img className='w-[300px] rounded-xl mx-auto my-10' src="https://media.istockphoto.com/id/951668074/photo/immune-system.webp?b=1&s=170667a&w=0&k=20&c=nDQYq0kRRMFq7XNdckT09X2tOpgyzB5ujC7KBPKwwf4=" alt="" />
        </div>
    );
};

export default Research;