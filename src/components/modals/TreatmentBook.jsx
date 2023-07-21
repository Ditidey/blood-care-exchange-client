import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../hooks/useAxios';

const TreatmentBook = ({ openModal, closeModal, doctor }) => {
    const [axiosFetching] = useAxios();
    const handleTreatmentBook = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const age = event.target.age.value;
        const address = event.target.address.value;
        const date = event.target.date.value;
        const treatInfo = {
            name,email, age, address,date,
             treatment: doctor.treatment,
             fee: doctor.fee,
             doctor: doctor.name
        }
        axiosFetching.post('/treatments', treatInfo)
        .then(res => {
            // console.log(res)
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    timer: '1500',
                    text: 'You booked an appointment successfully',
                    showConfirmButton: false,
                })
            }
        })
       closeModal()
        event.target.reset();
    }
    return (
        <div className={`fixed inset-0 z-10 flex items-center justify-end  ${openModal ? '' : 'hidden'}`}>
            <div className="bg-white w-96 p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Book your appointment</h2>
                <form action="" onSubmit={handleTreatmentBook}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name='name' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Email:</label>
                    <input type="email" name='email' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Age:</label>
                    <input type="text" name='age' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Address:</label>
                    <input type="text" name='address' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Date:</label>
                    <input type="date" name='date' className='border-b-2 mb-3 px-4' /> <br />

                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4" />
                </form>
 
                {/* <button
                    className="bg-red-800 hover:bg-red-400  text-white mt-4 ms-72 px-3 rounded  bottom-0"
                    onClick={closeModal}
                >
                    x
                </button> */}
            </div>
        </div>
    );
};

export default TreatmentBook;