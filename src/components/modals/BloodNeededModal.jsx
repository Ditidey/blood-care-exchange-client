import React from 'react';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const BloodNeededModal = ({ openModal, closeModal }) => {
    const [axiosFetching] = useAxios();

    const handleBloodPost = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const number = event.target.number.value;
        const reason = event.target.reason.value;
        const address = event.target.address.value;
        const date = event.target.date.value;
        const group = event.target.group.value;
        const status = event.target.status.value;
        const bloodInfo = {
            name, address, date, reason, 
            number, group, status
        }
        // console.log(bloodInfo)
        axiosFetching.post('/blood-posts', bloodInfo)
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
        <div className={`fixed inset-0 z-10 flex items-center justify-center  ${openModal ? '' : 'hidden'}`}>
            <div className="bg-white w-96 p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Create blood urgency post</h2>
                <form action="" onSubmit={handleBloodPost}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name='name' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Reason:</label>
                    <input type="text" name='reason' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Number:</label>
                    <input type="number" name='number' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Address:</label>
                    <input type="text" name='address' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Date:</label>
                    <input type="date" name='date' className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Status:</label>
                    <input type="text" name='status' defaultValue={'needed'} className='border-b-2 mb-3 px-4' /> <br />
                    <label htmlFor="">Blood Group:</label>
                    <select name='group' className="border border-red-600 p-2 rounded-md w-full">
                        <option value="" className='bg-red-500'>Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="O+">O+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="O-">O-</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4" />
                </form>

                <button
                    className="bg-red-800 hover:bg-red-400  text-white mt-4 ms-72 px-3 rounded  bottom-0"
                    onClick={closeModal}
                >
                    x
                </button>
            </div>
        </div>
    );
};

export default BloodNeededModal;