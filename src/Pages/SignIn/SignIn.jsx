import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import imgRight from '../../assets/others/signup.jpg'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { createUser, updateUserprofile } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                updateUserprofile(data.name, data.photo)
                    .then(() => {
                        const saveduser = {name: data.name, email: data.email}
                        fetch('https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveduser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User Information Updated Successfully.',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate('/login')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div className='bg-login p-14 bg-black bg-opacity-90 '>
            <Helmet>
                <title>Sign Up - Bistro Boss Restaurant</title>
            </Helmet>
            <div className='grid md:grid-cols-2  items-center md:w-8/12 md:mx-auto mx-5 shadow-2xl'>

                <div className='p-10 bg-slate-100'>
                    <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-2'>
                        <div className='grid gap-2 text-lg'>
                            <label>Name</label>
                            <input {...register("name")} className='w-full py-2 rounded px-3' type="text" name="name" id="" placeholder='Type Your Name' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Photo URL</label>
                            <input {...register("photo")} className='w-full py-2 rounded px-3' type="text" name="photo" id="" placeholder='Photo URL' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Email</label>
                            <input {...register("email", { required: true })} className='w-full py-2 rounded px-3' type="email" name="email" id="" placeholder='Type Your Email' />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Password</label>
                            <input {...register("password", { required: true, minLength: 8 })} className='w-full py-2 rounded px-3' type="password" name="password" id="" placeholder='Type Your Password' required />
                        </div>


                        <div>
                            <input type="submit" value="Sign Up" className='w-full py-2 bg-[#d72320] rounded font-bold text-white cursor-pointer' />
                        </div>

                        <p className='text-[#d72320] text-center'>Already Have an Account? <Link to='/login' className='hover:underline'>Login to Your Account</Link></p>
                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>

                <div className='h-full'>
                    <img className='h-full' src={imgRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;