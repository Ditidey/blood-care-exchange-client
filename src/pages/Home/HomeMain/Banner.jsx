import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {AiOutlineLock} from 'react-icons/ai';
import {GiSelfLove} from 'react-icons/gi';
import {BiCurrentLocation, BiLogoZoom, BiCalendar} from 'react-icons/bi';
import Aos from 'aos';

const Banner = () => {
   useEffect(() => {
      Aos.init()
  }, [])
    return (
        <div className=''>
            <div className='relative'>
                <img src="../../../../public/download (2).jpg" alt=""  className='w-full h-2/4  '/>
                <div className='absolute md:top-36 top-5 '>
                  <h2 className='md:text-6xl text-2xl mx-5 md:ms-20 text-white font-serif font-bold '>We are providing <br /> treatment, test, consultancy <br /> and   transfer of blood.</h2>

                  <div className='md:mt-36 mt-3 md:ms-20'>
                    <button className=' md:ms-10 btn p-4 px-10 text-ellipsis uppercase text-red-600 md:text-xl font-bold bg-red-50 mx-5'>Become a Donor <br /> <Link className='md:text-sm text-xs text-blue-300'>Am I Eligible?</Link></button>
                    
                    <button className='mt-2 btn p-4 text-ellipsis uppercase text-red-600 md:text-xl font-bold bg-red-50 mx-5'>Book an appointment <br /> <Link className='md:text-sm text-xs text-blue-300'>What should I do?</Link></button>
                  </div>

                  <div className='bg-red-800 md:mt-72 mt-3 grid md:grid-cols-4 md:justify-between  p-4 w-full md:relative md:bottom-0'>

                     <div data-aos="zoom-in-right" data-aos-duration="3000" className='bg-red-50 md:relative p-4 rounded-md -top-24 shadow-md md:mx-4 md:mb-0 mb-2'>
                        <BiCalendar className='text-red-600 bg-white rounded-full md:w-24 md:h-24 w-12 h-12 md:absolute md:-top-14 p-4 md:mx-24 shadow-md'></BiCalendar>
                        <h2 className='md:mt-8 text-center text-red-600 text-lg font-bold'><Link>We provide 24/7 services</Link> </h2> <br />
                        <p className='text-justify px-2 pb-4'> we are dedicated to providing crucial 24/7 blood services to support those in need of lifesaving blood donations at any hour of the day. We understand that emergencies can strike at any time.</p>
                     </div>
                      
                     <div data-aos="zoom-in-up" data-aos-duration="1500" className='bg-red-50 md:relative p-4 rounded-md -top-24 shadow-md md:mx-4 md:mb-0 mb-2'>
                        <BiCurrentLocation className='text-red-600 bg-white rounded-full md:w-24 md:h-24 w-12 h-12 md:absolute md:-top-14 p-4 md:mx-24 shadow-md'></BiCurrentLocation>
                        <h2 className='md:mt-8 text-center text-red-600 text-lg font-bold'> <Link>Find a consultant</Link></h2> <br />
                        <p className='text-justify px-2 pb-4'> Here's a guide to help you find the process of finding and engaging a consultant effectively.</p>
                     </div>
                     <div data-aos="zoom-in-up" data-aos-duration="3000" className='bg-red-50 md:relative p-4 rounded-md -top-24 shadow-md md:mx-4 md:mb-0 mb-2'>
                        <BiLogoZoom className='text-red-600 bg-white rounded-full md:w-24 md:h-24 w-12 h-12 md:absolute md:-top-14 p-4 md:mx-24 shadow-md'></BiLogoZoom>
                        <h2 className='md:mt-8 text-center text-red-600 text-lg font-bold'><Link>Attend an online service</Link> </h2> <br />
                        <p className='text-justify px-2 pb-4'>  We offer an online blood booking system. Individuals or hospitals can request specific blood types, and we promptly arrange for the delivery or onsite donation, depending on the situation.</p>
                     </div>
                      
                     <div data-aos="zoom-in-left" data-aos-duration="1500" className='bg-red-50 md:relative p-4 rounded-md -top-24 shadow-md md:mx-4'>
                        <GiSelfLove className='text-red-600 bg-white rounded-full md:w-24 md:h-24 w-12 h-12 md:absolute md:-top-14 p-4 md:mx-24 shadow-md'></GiSelfLove>
                        <h2 className='md:mt-8 text-center text-red-600 text-lg font-bold'><Link>Learn about blood</Link></h2> <br />
                        <p className='text-justify px-2 pb-4'>We are committed to raising awareness about the significance of blood donation and the impact it can have on saving lives.</p>
                     </div>
                      
                     
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;