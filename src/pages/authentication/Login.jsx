import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { contextProvider } from '../../contextProviders/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { loginUser } = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        loginUser(data.email, data.password)
            .then(result => {
               
                Swal.fire({
                    text: 'Successfully login',
                    icon: 'success',
                    timer: '1500',
                    showConfirmButton: false
                })
                navigate(from, { replace: true })
            }
            )
            .catch(error => console.log(error.message))
    };
    return (
        <div className='md:ms-96 md:me-52 py-10 md:px-10 rounded-lg'>
            <div className="card w-full shadow-xl bg-base-100">              

                <h1 className="text-3xl font-bold md:ms-44 ms-5 text-red-700 py-10">Login now!</h1>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full   ms-5 ">

                        <div className="form-control md:ms-32 ">
                            <label className="label">
                                <span className="label-text">Email: </span>
                            </label> <br />
                            <input type="email" placeholder="your email" {...register("email", { required: true })} className="border border-red-600 p-2 rounded-md w-1/3" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>

                        <div className="form-control md:ms-32 mt-5">
                            <label className="label">
                                <span className="">Password: </span>
                            </label> <br />
                            <input type="password" placeholder="password" {...register("password", { required: true })} className="border border-red-600 p-2 rounded-md w-1/3" />
                            {errors.password && <span className='text-red-500'>Password is required</span>}
                        </div>
                        <div className="form-control mt-6 md:ms-32">
                            <button type='submit' className="border bg-red-700 text-white p-2 rounded-md w-1/3">Login</button>
                        </div>
                    </div>
                </form>
                <p className='text-blue-800  py-2 md:ms-44 ms-5'>Create account? <Link to='/auth-layout/register'>Register</Link></p>
                <SocialLogin></SocialLogin>

            </div>

        </div>

    );
};

export default Login;