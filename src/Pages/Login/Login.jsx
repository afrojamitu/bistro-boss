import React, { useEffect, useRef, useState } from 'react';
import imgLeft from '../../assets/others/login.jpg'
import bgImg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handlelogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'Logged in successfully.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true});
        })
    }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className='bg-login p-10 bg-black bg-opacity-90' >
            <Helmet>
                <title>Login - Bistro Boss Restaurant</title>
            </Helmet>
            <div className='grid md:grid-cols-2 gap-5 items-center md:w-8/12 md:mx-auto mx-5 shadow-2xl bg-slate-100'> 
                <div>
                    <img src={imgLeft} alt="" />
                </div>

                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <form onSubmit={handlelogin} className='grid gap-2'>
                        <div className='grid gap-2 text-lg'>
                            <label>Email</label>
                            <input className='w-full py-2 rounded px-3' type="email" name="email" id="" placeholder='Type Your Email' required />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Password</label>
                            <input className='w-full py-2 rounded px-3' type="password" name="password" id="" placeholder='Type Your Password' required />
                        </div>

                        <div className='grid gap-2 text-lg py-2 w-full'>
                            <LoadCanvasTemplate />
                        </div>

                        <div className='grid gap-2 text-lg relative'>
                            <input onBlur={handleValidateCaptcha} className='w-full py-2 rounded px-3' type="text" name="captcha" id="" placeholder='Type Captcha' required />
                        </div>


                        <div>
                            <input disabled={disabled} type="submit" value="Login" className='w-full cursor-pointer py-2 bg-[#d72320] rounded font-bold text-white'/>
                        </div>

                        <p className='text-[#d72320] text-center'>New Here? <Link to='/signin' className='hover:underline'>Create an Account</Link></p>
                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;