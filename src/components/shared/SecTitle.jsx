import React from 'react';

const SecTitle = ({title}) => {
    return (
        <div className='text-center text-red-800 font-sans text-4xl mb-10'>
            <h2 className='font-bold italic'>{title}</h2>
            <hr className=' border-red-700 mt-2 border-2   md:w-1/3 w-2/3 mx-auto'/>
        </div>
    );
};

export default SecTitle;