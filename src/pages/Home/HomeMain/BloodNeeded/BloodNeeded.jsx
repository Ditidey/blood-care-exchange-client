import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import BloodNeededModal from '../../../../components/modals/BloodNeededModal';
import Swal from 'sweetalert2';
import UpdateBloodNonation from '../../../../components/modals/UpdateBloodNonation';

const BloodNeeded = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [bloods, setBloods] = useState([])
    const [blood, setBlood] = useState({})
    const handleClose = () => {
        setOpenModal(false)
    }
    useEffect(() => {
        fetch('https://blood-care-server.vercel.app/blood-posts')
            .then(res => res.json())
            .then(data => {
                setBloods(data)
            })
    }, [bloods])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Did you get the needed blood?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            fetch(`https://blood-care-server.vercel.app/blood-posts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your post has been deleted.',
                            'success'
                        )
                    }
                    const filterBloods = bloods.filter(bl => bl._id != id)
                    setBloods(filterBloods)
                })

        })
    }

    const handleNeeded = blood =>{
        setBlood(blood)
        setOpenUpdate(true)
    }
    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    }
    return (
        <div className='md:p-5'>
            <div className='bg-red-500'>
                <h2 className='text-4xl font-bold text-center text-white pt-2'>Need Blood?</h2>
                <button onClick={() => setOpenModal(!openModal)} className='md:ms-96 ms-20 md:ps-72 text-blue-900 inline-flex my-2 text-lg'>Create a post <FaCaretDown className='mt-1 ms-1 animate-ping'></FaCaretDown></button>
                <BloodNeededModal openModal={openModal} closeModal={handleClose}></BloodNeededModal>

                <div className='bg-white'>
                    <div className='grid md:grid-cols-4 gap-5 md:p-8'>
                        {
                            bloods.map(blood =>
                                <div key={blood._id} className='p-6 w-[320px] h-[250px] bg-red-50 text-justify'>
                                    <p><span className='font-bold'>Reason:</span>  {blood.reason}</p>
                                    <p><span className='font-bold'>Address: </span> {blood.address}</p>
                                    <p className=' '><span className='font-bold'>Group:</span>  {blood.group}</p>

                                    <p><span className='font-bold'>Status:</span>  {blood.status || 'needed'}</p>
                                    <p><span className='font-bold'>Date:</span>  {blood.date}</p>
                                    <p className=' '><span className='font-bold'>Name:</span>  {blood.name}</p>
                                    <p><span className='font-bold'>Personal Contact:</span>  {blood.number}</p>
                                    <button className='bg-red-800 text-white py-1 px-3 mt-4 me-5' onClick={() => handleDelete(blood._id)}>Delete</button>
                                    <button disabled={blood.status == 'approved'} onClick={()=>handleNeeded(blood)} className='py-1 px-3 text-red-900 uppercase ms-10 border border-red-900 font-bold mt-2'>{blood.status || 'Please donate'}</button>
                                </div>)
                        }
                        <UpdateBloodNonation openModal={openUpdate} closeModal={handleCloseUpdate} blood={blood}></UpdateBloodNonation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodNeeded;