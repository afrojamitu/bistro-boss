import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import bgCover from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaClock, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import location from '../../assets/icon/location.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRef } from 'react';

const Contact = () => {
    const [error, setError] = useState('')

    const form = useRef();

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const email = form.current.email.value;
        const name = form.current.name.value;
        const message = form.current.message.value;

        if (!isValidEmail(email)) {
            setError('Invalid email address.');
            return;
        }

        if (name.length < 3) {
            setError('Name must be in 4 characters!');
            return;
        }

        if (name.length < 150) {
            setError('Message should be in at least 20 word!');
            return;
        }

        emailjs.sendForm('service_f3r8aig',
            'template_35m6im8',
            form.current, 'jykAzkj3dptbbUKmV')
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Message Sent Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='bg-black bg-opacity-90 text-white'>
            <Helmet>
                <title>Contact Us - BIstro Boss Restaurant</title>
            </Helmet>
            <Cover
                image={bgCover} title={'Contact Us'} subTitle={'Contact us whenever you need delicious foods!'}
            ></Cover>

            <div className='py-16 lg:w-10/12 lg:mx-auto mx-5'>
                <SectionTitle
                    subHeading={"---Visit Us---"}
                    mainHeading={"OUR LOCATION"}
                ></SectionTitle>

                <div className='grid lg:grid-cols-3 lg:w-9/12 lg:mx-auto gap-10'>
                    <div className='border border-[#2d2d2d]'>
                        <div className='bg-[#2d2d2d] p-3 flex justify-center text-xl text-white'>
                            <FaPhone />
                        </div>
                        <div className='mx-4 mb-4 p-5 text-center bg-[#555555]'>
                            <h1 className='font-bold text-lg'>Phone</h1>
                            <h1>+880 1234567890</h1>
                            <h1>+880 1234567890</h1>
                        </div>
                    </div>
                    <div className='border border-[#2d2d2d]'>
                        <div className='bg-[#2d2d2d] p-3 flex justify-center text-xl text-white'>
                            <img className='w-[17px]' src={location} alt="" />
                        </div>
                        <div className='mx-4 mb-4 p-5 text-center bg-[#555555]'>
                            <h1 className='font-bold text-lg'>Location</h1>
                            <h1>North Patenga, Chattogram, Bangladesh</h1>
                        </div>
                    </div>
                    <div className='border border-[#2d2d2d]'>
                        <div className='bg-[#2d2d2d] p-3 flex justify-center text-xl text-white'>
                            <FaClock />
                        </div>
                        <div className='mx-4 mb-4 p-5 text-center bg-[#555555]'>
                            <h1 className='font-bold text-lg'>Working Hour</h1>
                            <h1>Mon - Fri: 08:00 - 22:00<br />
                                Sat - Sun: 10:00 - 23:00</h1>
                        </div>
                    </div>

                </div>

                <div className='pt-16'>
                    <SectionTitle
                        subHeading={"---Send us a feedback---"}
                        mainHeading={"CONTACT FORM"}
                    ></SectionTitle>


                    <div className='py-8 lg:w-9/12 lg:mx-auto mx-5'>
                        <form ref={form} onSubmit={sendEmail} className='grid gap-5'>
                            <div className='flex items-center gap-6'>
                                <input className='border w-full bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" name='name' placeholder='Full Name' required />

                                <input className='border w-full bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="email" name='email' placeholder='Email' required />
                            </div>

                            <input className='border bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" name='phone' placeholder='Contact' required />

                            <textarea className='border bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' name="message" placeholder='Write Your Feedback Here' id="" cols="30" rows="5"></textarea>

                            <p className='text-red-600'>{error}</p>

                            <div className='flex justify-center items-center w-52 mx-auto gap-3 pt-2 text-center rounded py-2 md:py-3 cursor-pointer shadow-xl hover:shadow-lg text-white font-bold bg-gradient-to-r from-[#d72320] to-[#ae312e] hover:bg-gradient-to-r hover:from-[#ae312e] hover:to-[#d72320]' style={{ transition: '.4s' }}>
                                <input className='flex justify-center' type="submit" value="Send Message" /> <FaTelegramPlane className='text-2xl'></FaTelegramPlane>
                                <ToastContainer />
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;