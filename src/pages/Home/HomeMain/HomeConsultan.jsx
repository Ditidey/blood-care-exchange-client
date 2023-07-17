import React from 'react';
import SecTitle from '../../../components/shared/secTitle';
import blood from '../../../../public/blood.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const HomeConsultan = () => {
    return (
        <div className='my-20'>
            <SecTitle title={'Blood Treatment'}></SecTitle>
            <div style={{ backgroundImage: `url(${blood})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='w-full opacity-90 bg-slate-900 '>
                <div className=' pb-10'>
                    <h2 className='font-bold text-white opacity-90 text-5xl md:ms-44 ms-10 pt-10'>How Can we <br /> Help you?</h2>
                    <div className='mt-10 pb-10'>
                        <Swiper
                           
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='md:ps-20 ps-2'>
                                <div className='grid md:grid-cols-3 gap-5 md:px-20 '>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Bone Marrow Transplantation</h2>
                                        <p>It involves replacing damaged or diseased bone marrow with healthy stem cells. </p>
                                        <hr className='my-6 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$200+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Iron Replacement Therapy</h2>
                                        <p>It is used to treat iron deficiency anemia, a condition characterized by low levels of iron in the blood </p>
                                        <hr className='my-8 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$100+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Immunotherapy</h2>
                                        <p>It is a type of treatment that stimulates the body's immune system to recognize and attack cancer cells or other diseases</p>
                                        <hr className='my-8 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$500+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='md:ps-20 ps-2'>
                                <div className='grid md:grid-cols-3 gap-5 md:px-20 '>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Chemotherapy</h2>
                                        <p>It is a systemic treatment that uses drugs to destroy or inhibit the growth of cancer cells in the blood or bone marrow </p>
                                        <hr className='my-6 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$100+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Coagulation Therapy</h2>
                                        <p>It  is employed to manage bleeding disorders or abnormal blood clotting conditions </p>
                                        <hr className='my-8 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$400+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                    <div className='border-4 border-white p-5 text-white w-[320px] h-[400px]'>
                                        <h2 className='text-center text-2xl font-bold mb-2'>Targeted Therapy</h2>
                                        <p>It utilizes drugs or other agents that specifically target certain molecules or genetic abnormalities found in cancer cells</p>
                                        <hr className='my-8 border-white' />
                                        <p className='text-center my-3'>24 hrs</p>
                                        <p className='text-center'>$100+</p>
                                        <button className='mt-10 ms-24 text-red-800 bg-white font-bold p-2 rounded-md'>Book Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeConsultan;