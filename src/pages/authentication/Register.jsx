import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { contextProvider } from '../../contextProviders/AuthProvider';

const Register = () => {
    const { registerUser, updateUser } = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const onSubmit = data => {

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result)
                console.log(result.user.UserImpl)
                const students = {
                    email: result.user.email,
                    name: data.name,
                    photo: data.photo

                }
                console.log(students)
                updateUser(data.name, data.photo)
                    .then(() => { })
                    .catch(err => {
                        setError(err.message)
                        console.log(err)
                    })

                Swal.fire({
                    title: 'Registered!',
                    text: 'Successfully created account',
                    icon: 'success',
                    timer: '1500',
                    showConfirmButton: false
                })
                // saveStudents(students)
                navigate(from, { replace: true })
            }
            )
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    };

    const watchPassword = watch('password', '');
    return (
        <div className='md:ms-96 md:me-52 py-10 md:px-10 mt-10 rounded-lg'>
         
            <div className="card w-full shadow-xl bg-base-100">

                <h1 className="text-3xl font-bold md:ms-52 ms-5 text-red-700 py-10">Register now!</h1>
                <p className='text-xl text-center'>{error}</p>

                <form action="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="w-full   ms-5 ">
                        <div className="form-control  md:ms-32 mt-5">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label> <br />
                            <input type="text" placeholder="your name" {...register("name", { required: true })} className="border border-red-600 p-2 rounded-md w-2/3" />
                            {errors.name && <span className='text-red-500'>Name is required</span>}
                        </div>

                        <div className=' md:flex'>
                            <div className="form-control  md:ms-32 mt-5">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label> <br />
                                <input type="text" placeholder="your photo" {...register("photo", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                                {errors.photo && <span className='text-red-500'>Photo is required</span>}
                            </div>
                            <div className=" md:ms-32 mt-5 ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label> <br />
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                        </div>

                        <div className="md:flex">
                            <div className=" md:ms-32 mt-5">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label> <br />
                                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[a-zA-Z!@#$%^&*()]{6,}$/ })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                                {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                                {errors.password?.type == 'minLength' && <p className='text-red-500'>Password should be at least 6 characters long.</p>}
                                {errors.password?.type === 'pattern' && (
                                    <p className='text-red-500'>
                                        Password should contain at least one uppercase letter, <br /> one lowercase letter, <br /> and one special character.
                                    </p>
                                )}
                            </div>
                            <div className=" md:ms-32 mt-5">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label> <br />
                                <input type="password" placeholder="confirm password" {...register("confirm", { required: true, validate: (value) => value === watchPassword || 'The passwords do not match', })} className="border border-red-600 p-2 rounded-md md:w-full w-2/3" />
                                {errors.confirm && <span className='text-red-500'>{errors.confirm?.message}</span>}
                            </div>
                        </div>


                        <div className=" md:ms-32 mt-8">
                            <button type='submit' className="border bg-red-700 text-white p-2 rounded-md w-2/3">Register</button>
                        </div>
                    </div>
                </form>

                <p className='text-blue-800 mb-10 md:ms-36 ms-5 mt-2 pb-20'> Already have an account? <Link to='/auth-layout/login'>Login</Link></p>
            </div>

        </div>


    );
};

export default Register;