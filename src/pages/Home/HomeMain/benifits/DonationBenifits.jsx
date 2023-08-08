import React from 'react';
import {GiLifeBar, GiBrainstorm, GiArchiveResearch} from 'react-icons/gi';
import {RiCommunityFill} from 'react-icons/ri';
import {MdEmergencyShare} from 'react-icons/md';
import SecTitle from '../../../../components/shared/secTitle';

const DonationBenifits = () => {
    return (
        <div className='my-20'>
            <SecTitle title={'Benefits of Blood Donation'}></SecTitle>
            <div>
                <div className='flex'>
                    <div className='md:ps-96 ps-5 '>
                          <GiLifeBar className='w-20 h-20 text-red-800'></GiLifeBar>
                    </div>
                    <div className='w-1/2 md:ps-20 ps-5'>
                        <h2 className='text-2xl font-semibold'>Saving Lives</h2>
                        <p> Blood donation is vital for patients undergoing medical treatments, surgeries, accidents, and various medical conditions that require blood transfusions. Donated blood is used to replace lost blood due to trauma, surgery, or medical conditions like anemia, cancer, and hemophilia.</p>
                    </div>
                </div>
                <div className='flex mt-8'>
                    <div className='md:ps-96 ps-5 '>
                          <RiCommunityFill className='w-20 h-20 text-red-800'></RiCommunityFill>
                    </div>
                    <div className='w-1/2 md:ps-20 ps-5'>
                        <h2 className='text-2xl font-semibold'>Community Health</h2>
                        <p> Blood donation plays a significant role in maintaining community health. Regular blood drives and donations contribute to a consistent supply of blood products, reducing the strain on healthcare systems.</p>
                    </div>
                </div>
                <div className='flex mt-8'>
                    <div className='md:ps-96 ps-5 '>
                          <GiBrainstorm className='w-20 h-20 text-red-800'></GiBrainstorm>
                    </div>
                    <div className='w-1/2 md:ps-20 ps-5'>
                        <h2 className='text-2xl font-semibold'>Sense of Contribution</h2>
                        <p> Blood donation provides individuals with a unique opportunity to give back to their communities and make a positive impact on the lives of others. It fosters a sense of social responsibility and promotes a culture of helping those in need.</p>
                    </div>
                </div>
                <div className='flex mt-8'>
                    <div className='md:ps-96 ps-5 '>
                          <GiArchiveResearch className='w-20 h-20 text-red-800'></GiArchiveResearch>
                    </div>
                    <div className='w-1/2 md:ps-20 ps-5'>
                        <h2 className='text-2xl font-semibold'>Research and Innovation</h2>
                        <p> Donated blood also plays a crucial role in medical research, allowing scientists to study blood-related diseases, develop new treatments, and advance medical knowledge.</p>
                    </div>
                </div>
                <div className='flex mt-8'>
                    <div className='md:ps-96 ps-5 '>
                          <MdEmergencyShare className='w-20 h-20 text-red-800'></MdEmergencyShare>
                    </div>
                    <div className='w-1/2 md:ps-20 ps-5'>
                        <h2 className='text-2xl font-semibold'>Emergency Situations</h2>
                        <p> During disasters, accidents, and natural calamities, the demand for blood can surge dramatically. Having a sufficient supply of donated blood readily available can make a significant difference in saving lives during such emergencies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationBenifits;