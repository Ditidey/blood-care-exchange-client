import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../public/istockphoto-860895490-170667a.webp';
import img1 from '../../../../public/donate.jpg';
import img2 from '../../../../public/consul.jpg';
import img3 from '../../../../public/img3.webp';
import Aos from 'aos';
import SecTitle from '../../../components/shared/secTitle';

const WeProvides = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='md:mt-44 mt-96 pt-96 md:pt-0 md:p-10 p-3'>
            <br />
             <SecTitle title={'We Provide'}></SecTitle>
            <div className='grid md:grid-cols-4 gap-6 pt-40 md:pt-0'>

                 <div className='py-3 shadow-xl rounded-md' data-aos="zoom-in-right" data-aos-duration="3000">
                    <img src={img} alt=""  className='w-full h-1/2'/>
                    <div className='md:px-8 px-2 pb-10 md:pb-0'>
                        <h2 className='font-bold text-red-700 text-2xl mt-4 text-center'>Blood Test</h2>
                        <p className='text-justify my-3 mb-9'>Blood tests are essential diagnostic tools used by healthcare professionals to detect and monitor a wide range of conditions and diseases</p>
                        <Link to='/blood-test' className='text-blue-700 text-sm me-20  mt-3'>Learn more..</Link>
                        <Link className='text-blue-700 text-sm shadow-md p-2 hover:bg-red-600 ms-8 rounded-md mt-3'>Book now</Link>
                    </div>
                 </div>
                 <div className='py-3 shadow-xl rounded-md' data-aos="zoom-in-up" data-aos-duration="3000">
                    <img src={img2} alt=""  className='w-full h-1/2'/>
                    <div className='  pb-5 md:pb-0'>
                        <h2 className='font-bold text-red-700 text-2xl mt-4 text-center'>Specialized Consultancy</h2>
                        <p className='text-justify my-3 md:px-8 px-2'>Blood consultancy typically refers to a specialized service or expertise provided by healthcare professionals or organizations that focus on blood-related matters</p>
                        <Link to=' ' className='text-blue-700 text-sm me-20 mb-3 md:px-10 px-5'>Learn more..</Link>
                        <Link className='text-blue-700 text-sm shadow-md p-2 ps-1 hover:bg-red-600 mb-3 rounded-md'>Book now</Link>
                    </div>
                 </div>
                 <div className='py-3 shadow-xl rounded-md' data-aos="zoom-in-up" data-aos-duration="3000">
                    <img src={img1} alt=""  className='w-full h-1/2'/>
                    <div className=' pb-5 md:pb-0'>
                        <h2 className='font-bold text-red-700 text-2xl mt-2 text-center'>Transfusion and Donation</h2>
                        <p className='text-justify my-3 md:px-8 px-2 mb-6'>Blood transfusion is a medical procedure that involves the infusion of donated blood, transfusion reactions, managing complications, and ensuring transfusion safety.</p>
                        <Link to='/blood-trans' className='text-blue-700 text-sm me-20 mb-5 md:ms-8 ms-2'>Learn more..</Link>
                        <Link className='text-blue-700 text-sm shadow-md p-2 hover:bg-red-600 ms-8 mb-5 rounded-md'>Book now</Link>
                    </div>
                 </div>
                 <div className='py-3 shadow-xl rounded-md' data-aos="zoom-in-left" data-aos-duration="3000">
                    <img src={img3} alt=""  className='w-full h-1/2'/>
                    <div className=' pb-5 md:pb-0'>
                        <h2 className='font-bold text-red-700 text-2xl mt-4 text-center'>Research and Development</h2>
                        <p className='text-justify my-3 md:px-8 px-2 mb-9'> To develop new testing methodologies, improve blood product safety, or contribute to scientific publications.</p>
                        <Link to=' ' className='text-blue-700 text-sm me-20 mb-3 md:ps-8 ps-2'>Learn more..</Link>
                        <Link className='text-blue-700 text-sm shadow-md p-2 hover:bg-red-600 ms-8 mb-3 rounded-md'>Book now</Link>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default WeProvides;