import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import TreatmentBook from '../../../components/modals/TreatmentBook';

const Doctors = ({ doctors }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedDOc, setSelectedDoc] = useState({});

    const handleSelectDoc = doctor => {
        setOpenModal(true)
        setSelectedDoc(doctor)
    }
    const handleClose = () =>{
         setOpenModal(false)
    }
    return (
        <div className='md:mx-10 md:p-8 p-3'>
            {doctors?.length < 0 && <h2 className='text-3xl font-bold font-serif text-red-900 text-center mb-5'>Not Available Now. Coming soon</h2>}
            <h2 className='text-3xl font-bold font-serif text-red-900 text-center mb-5'>Select Doctor</h2>
            {
                doctors?.length > 0 && doctors && <>

                    <table className='shadow-md md:p-10 overflow-x-auto'>
                        <thead className=''>
                            <tr className='w-full'>
                                <th className='mx-5 p-2 shadow-xl'>Name</th>
                                <th className='mx-5 p-2 px-5 shadow-lg'>Image</th>
                                <th className='mx-5 p-2 shadow-lg'>Treatment</th>
                                <th className='mx-5 p-2 px-10 shadow-lg'>Fee</th>
                                <th className='mx-5 p-2 shadow-lg'>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map(doc =>
                                    <tr key={doc._id}>
                                        <td className='mx-5 p-2  px-5'>{doc.name}</td>
                                        <td className='mx-5 p-2  px-5'> <img src={doc.image} alt="" className='w-16 h-16 rounded-lg' /></td>
                                        <td className='mx-5 p-2  ps-7'>{doc.treatment}</td>
                                        <td className='mx-5 p-2  px-10'>{doc.fee}</td>
                                        <td className='mx-5 p-2  px-5'><button onClick={() => handleSelectDoc(doc)}><FaExternalLinkAlt className='text-red-800'></FaExternalLinkAlt></button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </>
            }
            <TreatmentBook openModal={openModal} closeModal={handleClose} doctor={selectedDOc}></TreatmentBook>
        </div>
    );
};

export default Doctors;