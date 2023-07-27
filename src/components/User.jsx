import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Wave from 'react-wavify';
import SecTitle from './shared/secTitle';

const User = () => {
    const [users, setUsers] = useState();;

    useEffect(() => {
        fetch('https://blood-care-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='mt-24'>
            <SecTitle title={'Delighted Donors'}></SecTitle>
            <div className='flex justify-center items-start overflow-hidden w-full h-1/2'>

                <Swiper
                    spaceBetween={30}
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView='auto'
                    coverflowEffect={{
                        rotate: 100,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,

                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        users?.map(user => <SwiperSlide key={user._id}>
                            <div className='p-5 md:flex relative md:ms-10 ms-5'>
                                <img src={user.photo} alt="" className='md:w-80 md:h-80 w-44 h-44 rounded-full object-cover md:ms-44 ms-8' />
                                <div className='absolute md:left-40 top-24'>
                                    <Wave fill="#e62315" mask="url(#mask)" options={{ points: 20, speed: 0.2, amplitude: 40 }}>
                                        <mask id="mask">
                                            <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
                                        </mask>

                                    </Wave>
                                </div>
                                <div className='p-8 text-center md:ms-20 md:mt-10'>
                                    <p className='mt-3 text-lg font-semibold'>Name: {user.name}</p>
                                    <p className='mt-3 text-lg font-semibold'>Email: {user.email}</p>
                                    <p className='mt-3 text-lg font-semibold '>Donation type: <span className='uppercase'>{user.donor_class}</span>  </p>
                                    <p className='mt-3 text-lg font-semibold'>Last donation time: {user.last_donation}</p>
                                </div>


                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <Wave fill="url(#gradient)" options={{
                height: 10,
                amplitude: 20,
                speed: 0.15,
                points: 5
            }}>

                <defs>

                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                       
                        <stop offset="80%" stopColor="#f00" />

                    </linearGradient>
                </defs>
                {/* <foreignObject  x="150" y="20"  width="100%" height="100%" className='relative'>
                    <p className='ms-10  '>Your blood has the power to heal, the power to save lives. Share it generously.</p>
                </foreignObject> */}
            </Wave>
         
        </div>
    );
};

export default User;