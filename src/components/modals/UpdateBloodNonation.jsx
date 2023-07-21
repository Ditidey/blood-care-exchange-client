import React from 'react';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const UpdateBloodNonation = ({ openModal, closeModal, blood}) => {
    const {_id, name, address, reason, date, group, number, status} = blood
    const [axiosFetching] = useAxios();

    const handleBloodPostUpdate = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const number = event.target.number.value;
        const reason = event.target.reason.value;
        const address = event.target.address.value;
        const date = event.target.date.value;
        const group = event.target.group.value;
        const status = event.target.status.value;
        const nameDonor = event.target.nameDonor.value;
        const emailDonor = event.target.emailDonor.value;
        const numberDonor = event.target.numberDonor.value;

        const bloodInfo = {
            name, address, date, reason, 
            number, group, status, nameDonor, emailDonor, numberDonor
        }
        console.log(bloodInfo)
        axiosFetching.put(`/blood-posts/${_id}`, bloodInfo)
            .then(res => {
                // console.log(res)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        timer: '1500',
                        text: 'You updated information',
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

            <form action="" onSubmit={handleBloodPostUpdate}>
                <label htmlFor="">Name:</label>
                <input defaultValue={name} type="text" name='name' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Reason:</label>
                <input type="text" defaultValue={reason} name='reason' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Number:</label>
                <input type="number" defaultValue={number} name='number' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Address:</label>
                <input type="text" defaultValue={address} name='address' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Date:</label>
                <input type="date" name='date' defaultValue={date} className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Status:</label>
                <input type="text" name='status' defaultValue={'approved'} className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Blood Group:</label>
                <select name='group' defaultValue={group} className="border border-red-600 p-2 rounded-md w-full">
                    <option value="" className='bg-red-500'>Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="O-">O-</option>
                    <option value="AB-">AB-</option>
                </select> <br />
                <label htmlFor="" className='font-bold text-xl'>Donar info</label> <br />
                <label htmlFor="">Donar Name:</label>
                <input type="text" name='nameDonor' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Donor Email:</label>
                <input type="email"   name='emailDonor' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Donor Number:</label>
                <input type="number"   name='numberDonor' className='border-b-2 mb-3 px-4' /> <br />

                <input type="submit" value="Update" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4" />
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

export default UpdateBloodNonation;