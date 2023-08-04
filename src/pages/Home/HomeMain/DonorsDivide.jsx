import React, { useEffect } from 'react';
import img from '../../../../public/istockphoto-1141048856-612x612.jpg';
import img1 from '../../../../public/istockphoto-1418786649-612x612.jpg';
import img2 from '../../../../public/istockphoto-627292166-612x612.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import SecTitle from '../../../components/shared/secTitle';
const DonorsDivide = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className=' md:pt-4     '>
            <SecTitle title={' Donors Categories'}></SecTitle>
            <div className='bg-red-700 p-3 md:grid-cols-3 grid md:gap-5  mt-5 py-20 md:px-20 px-3'>

            
            <div className='shadow-xl relative bg-white md:mt-0   md:mb-0 mb-2' data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine">
                <img src={img} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 p-3 absolute md:top-64 top-44 ms-32 font-bold text-xl'><Link to={'/registered-donors'}>Certified Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Certified donors are individuals who have undergone a thorough screening process and health assessment to determine their eligibility to donate blood. These assessments include reviewing medical history, conducting physical examinations, and testing for infectious diseases to ensure the safety of both donors and recipients. Certified donors have met the necessary criteria and are recognized as suitable candidate</p>
                </div>
            </div>
            <div className='shadow-xl relative bg-white md:mb-0 mb-2' data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine">
                <img src={img1} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 p-3 absolute md:top-64 top-44 ms-32 font-bold text-xl'><Link to={'/platelet-donors'}> Platelet Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Platelet donors are a specific type of blood donor who contribute platelets, a vital component of blood involved in clotting. Platelets are commonly used in the treatment of patients with bleeding disorders, cancer, or undergoing certain medical procedures.</p>
                </div>
            </div>
            <div className='shadow-xl relative bg-white ' data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine">
                <img src={img2} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 md:p-3 p-2 absolute md:top-64 top-44 ms-32 font-bold text-lg'><Link to={'/regular-donors'}>Emergency Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Emergency donors are individuals who step forward to donate blood in times of crisis or urgent need. They respond to public appeals for blood donations during emergencies, natural disasters, or when blood supplies are critically low.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DonorsDivide;