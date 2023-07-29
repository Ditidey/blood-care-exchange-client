import React, { useContext } from 'react';
import { contextProvider } from '../../contextProviders/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxios from '../../components/hooks/useAxios';
import Swal from 'sweetalert2';

const BecomeDonors = () => {
    const { user } = useContext(contextProvider)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosFetching] = useAxios();


    const onSubmit = data => {
        console.log(data)
        axiosFetching.post('/users', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        timer: '1500',
                        text: 'You become a donor successfully',
                        showConfirmButton: false,
                    })
                }
            })
    };
    return (
        <div>

            <h1 className="text-3xl font-bold md:ms-96 ms-5 text-red-700 py-10">Become a Donor now!</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)} className='md:ms-44 pb-10'>

                <div className="w-full ms-5 ">
                    <div className="form-control  md:ms-32 mt-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label> <br />
                        <input defaultValue={user?.displayName} type="text" placeholder="your name" {...register("name", { required: true })} className="border border-red-600 p-2 rounded-md md:w-1/3 w-2/3" />
                        {errors.name && <span className='text-red-500'>Name is required</span>}
                    </div>

                    <div className=' md:flex'>
                        <div className="form-control  md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label> <br />
                            <input defaultValue={user?.photoURL} type="text" placeholder="your photo" {...register("photo", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                            {errors.photo && <span className='text-red-500'>Photo is required</span>}
                        </div>
                        <div className=" md:ms-32 mt-5 ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label> <br />
                            <input defaultValue={user?.email} type="email" placeholder="email" {...register("email", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                    </div>

                    <div className="md:flex">
                        <div className=" md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label> <br />
                            <input type="text" placeholder="your phone number" {...register("phone", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                            {errors.phone && <span className='text-red-500'>{errors.phone?.message}</span>}

                        </div>
                        <div className=" md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label> <br />
                            <input type="text" placeholder="your location (city/county name)" {...register("location", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                            {errors.location && <span className='text-red-500'>{errors.location?.message}</span>}
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className=" md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Blood group</span>
                            </label> <br />
                            <select {...register('group', { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3">
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

                        </div>
                        <div className=" md:ms-36 mt-5">
                            <label className="label">
                                <span className="label-text">Donors Types</span>
                            </label> <br />
                            <select {...register('donor_class', { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3">
                                <option value="">Select Donation Type</option>
                                <option value="Whole Blood">Whole Blood</option>
                                <option value="Platelets">Platelet</option>
                                <option value="Plasma">Plasma</option>
                                <option value="Plasma">Regular</option>
                                <option value="Plasma">Emergency</option>
                            </select>

                        </div>
                    </div>
                    <div className="md:flex">
                        <div className=" md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Last Donation Date</span>
                            </label> <br />
                            <input type="date" placeholder="your last donation date" {...register("last_donation",)} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />


                        </div>
                        <div className=" md:ms-40 mt-5">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label> <br />
                            <select {...register('status')} className="border border-red-600 p-2 rounded-md md:w-full w-2/3">
                                <option value="">Select Status</option>
                                <option value="donor">Donor</option>
                                <option value="doctor">Doctor</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <div className=" md:ms-32 mt-8">
                        <button type='submit' className="border bg-red-700 text-white p-2 rounded-md md:w-1/3 w-2/3">Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BecomeDonors;