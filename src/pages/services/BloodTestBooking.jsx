import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import BloodTest from '../../components/BloodTest';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../components/hooks/useAxios';

const BloodTestBooking = () => {
    const [valueDate, onChange] = useState(new Date());
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosFetching] = useAxios();
   
    const handleBloodTest = data => {
        const date = moment(valueDate).format('YYYY/MM/DD')
        if(data.age < 18){
            return Swal.fire({
                icon: 'warning',
                timer: '1500',
                text: 'You are not eligible',
                showConfirmButton: false,
            })
        }

        const testInfo = {
            name: data.name,
            email: data.email,
            age: data.age,
            address: data.address,
            group: data.group,
            reason: data.reason,
            date: date
        }
        axiosFetching.post('/treatments', testInfo)
        .then(res => {
            // console.log(res)
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    timer: '1500',
                    text: 'You become a donor successfully',
                    showConfirmButton: false,
                })
            }
        })

    }
    return (
        <div className='md:flex md:justify-between'>
            
            <div className='md:px-10 bg-red-800 p-5'>
                <h2 className='text-red-50 text-3xl font-bold font-serif text-center pt-3'>Book Now</h2>
                <div className='w-[400px] h-[220px] mx-auto bg-yellow-100 my-5 p-4 shadow-md rounded-md'>
                    <Calendar onChange={onChange} value={valueDate} />
                </div>

                <form action="" onSubmit={handleSubmit(handleBloodTest)} className='w-[400px] mx-auto p-4 bg-red-100 shadow-md mb-5 '>
                    <div className='space-y-6'>
                        <div>
                            <label htmlFor="">Name</label> <br />
                            <input type="text" {...register('name', { required: true })} placeholder='your name' className='border-b-2 ps-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Email</label> <br />
                            <input type="email" {...register('email', { required: true })} placeholder='your email' className='border-b-2 ps-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Address</label> <br />
                            <input type="text" {...register('address', { required: true })} placeholder='your address' className='border-b-2 ps-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Age</label> <br />
                            <input type="number" {...register('age', { required: true })} placeholder='your age' className='border-b-2 ps-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Reason</label> <br />
                            <input type="text" {...register('reason', { required: true })} placeholder='why do you need a test' className='border-b-2 ps-3 py-2' />
                        </div>
                        <div className=" ">
                            <label className="label">
                                <span className="label-text">Test type</span>
                            </label> <br />
                            <select {...register('group', { required: true })} className="border border-red-600 p-2 rounded-md w-full">
                                <option value="" className='bg-red-500'>Select Test type</option>
                                <option value="Complete Blood Count">Complete Blood Count</option>
                                <option value="Basic Metabolic Panel">Basic Metabolic Panel </option>
                                <option value="Lipid Panel">Lipid Panel</option>
                                <option value="Blood Glucose Test">Blood Glucose Test</option>
                                <option value="Thyroid Function Tests">Thyroid Function Tests</option>
                                <option value="Coagulation Panel">Coagulation Panel</option>
                                <option value="Infectious Disease Tests">Infectious Disease Tests</option>
                                <option value="AB-">Other</option>
                            </select>

                        </div>
                    </div>
                    <input type="submit" value="Book now" className='border bg-red-900 text-white p-3 w-full hover:bg-red-600 mt-5' />
                </form>
            </div>
            <BloodTest></BloodTest>
        </div>
    );
};

export default BloodTestBooking;