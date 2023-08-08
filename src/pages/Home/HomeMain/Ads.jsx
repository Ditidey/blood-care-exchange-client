import React, { useState } from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import { GiGloves } from 'react-icons/gi';
import { PiBriefcaseDuotone, PiUsersThreeFill } from 'react-icons/pi';
import SecTitle from '../../../components/shared/secTitle';

const Ads = () => {
    const hoverStyle = 'bg-red-500, text-white, p-4'
    const [isHover, setIsHover] = useState(false)
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover3, setIsHover3] = useState(false)
    return (
        <div className='my-20'>
            <SecTitle title={'Connect You with'}></SecTitle>
            <div className='flex justify-evenly mt-10 py-10 shadow-sm'>
                <div className={`transition duration-300 w-[250px] h-[200px] 
                ${isHover === true ? 'bg-red-600 p-4 text-white' : 'bg-red-50 p-4'}`}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {
                        isHover == false ?
                            <div>
                                <FaClinicMedical className='w-20 h-20 mx-8'></FaClinicMedical>
                                <h2 className='font-semibold text-xl my-5 text-center'>Clinical Services</h2>
                            </div>
                            :
                            <div>
                               <h2 className='font-semibold text-xl my-5'>Clinical Services</h2>
                               <p className='mx-6 '>We are providing 24/7 clinical services.</p>
                            </div>
                    }

                </div>
                <div className={`transition duration-300 w-[250px] h-[200px] 
                ${isHover1 === true ? 'bg-red-600 p-4 text-white' : 'bg-red-50 p-4'}`}
                    onMouseEnter={() => setIsHover1(true)}
                    onMouseLeave={() => setIsHover1(false)}
                >
                    {
                        isHover1 == false ?
                            <div>
                                <PiBriefcaseDuotone className='w-20 h-20 mx-8 text-center'></PiBriefcaseDuotone>
                                <h2 className='font-semibold text-xl my-5 text-center '>Career & Volunteer</h2>
                            </div>
                            :
                            <div>
                               <h2 className='font-semibold text-xl my-5'>Career & Volunteer</h2>
                               <p className='mx-6 '>We are recruiting excellent in different roles.</p>
                            </div>
                    }

                </div>
                <div className={`transition duration-300 w-[250px] h-[200px] 
                ${isHover2 === true ? 'bg-red-600 p-4 text-white' : 'bg-red-50 p-4'}`}
                    onMouseEnter={() => setIsHover2(true)}
                    onMouseLeave={() => setIsHover2(false)}
                >
                    {
                        isHover2 == false ?
                            <div>
                                <PiUsersThreeFill className='w-20 h-20 mx-8'></PiUsersThreeFill>
                                <h2 className='font-semibold text-xl my-5 text-center'>Community Health</h2>
                            </div>
                            :
                            <div>
                               <h2 className='font-semibold text-xl my-5'>Community Health</h2>
                               <p className='mx-6 '>You are helping with hearth in a large community.</p>
                            </div>
                    }

                </div>
                <div className={`transition duration-200 w-[250px] h-[200px] 
                ${isHover3 === true ? 'bg-red-600 p-4 text-white relative' : 'bg-red-50 p-4'}`}
                    onMouseEnter={() => setIsHover3(true)}
                    onMouseLeave={() => setIsHover3(false)}
                >
                    {
                        isHover3 == false ?
                            <div>
                                <GiGloves className='w-20 h-20 mx-8'></GiGloves>
                                <h2 className='font-semibold text-xl my-5 text-center'>Contribution & Sponsor</h2>
                            </div>
                            :
                            <div className={`absolute transform translate-y-2`}>
                               <h2 className='font-semibold text-xl my-5'>Contribution & Sponsor</h2>
                               <p className='mx-6 '>You contribution saves the future of our nations.</p>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Ads;