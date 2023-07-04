import React, { useEffect } from 'react';
import img from '../../../../public/istockphoto-1141048856-612x612.jpg';
import img1 from '../../../../public/istockphoto-1418786649-612x612.jpg';
import img2 from '../../../../public/istockphoto-627292166-612x612.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
const DonorsDivide = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='bg-red-700 md:p-20 p-3   md:pt-20 md:grid-cols-3 grid md:gap-5 md:mt-20  '>
            <div className='shadow-xl relative bg-white md:mt-0   md:mb-0 mb-2' data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                <img src={img} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 p-3 absolute top-64 ms-32 font-bold text-xl'><Link>Certified Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Certified donors are individuals who have undergone a thorough screening process and health assessment to determine their eligibility to donate blood. These assessments include reviewing medical history, conducting physical examinations, and testing for infectious diseases to ensure the safety of both donors and recipients. Certified donors have met the necessary criteria and are recognized as suitable candidate</p>
                </div>
            </div>
            <div className='shadow-xl relative bg-white md:mb-0 mb-2' data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                <img src={img1} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 p-3 absolute top-64 ms-32 font-bold text-xl'><Link> Platelet Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Platelet donors are a specific type of blood donor who contribute platelets, a vital component of blood involved in clotting. Platelets are commonly used in the treatment of patients with bleeding disorders, cancer, or undergoing certain medical procedures.</p>
                </div>
            </div>
            <div className='shadow-xl relative bg-white ' data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                <img src={img2} alt="" />
                <div>
                    <button className='text-red-50 bg-red-800 p-3 absolute top-64 ms-32 font-bold text-xl'><Link>Emergency Donors</Link></button>
                    <p className='text-justify p-5 px-4 mt-5'>Emergency donors are individuals who step forward to donate blood in times of crisis or urgent need. They respond to public appeals for blood donations during emergencies, natural disasters, or when blood supplies are critically low.</p>
                </div>
            </div>
        </div>
    );
};

export default DonorsDivide;