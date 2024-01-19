import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black bg-opacity-90 '>
            <footer className="text-white grid md:grid-cols-3 py-16 px-24 items-center border-t border-[#d72320]">

                <div className=' w-full grid items-center'>
                    <span className="footer-title">QUICK LINKS</span>
                    <div className='grid space-y-1 items-center'>
                        <Link className='hover:underline' to='/'>Home</Link>
                        <Link className='hover:underline' to='/menu'>Menu</Link>
                        <Link className='hover:underline' to='/order/salad'>Foods</Link>
                        <Link className='hover:underline' to='/contact'>Contact</Link>
                    </div>
                </div>

                <div className=' w-full grid items-center'>
                    <div className='felx flex-col space-y-1 items-center'>
                        <span className="footer-title">CONTACT US</span>
                        <p>North Patenga, Chattogram, Bangladesh</p>
                        <p>+88 01234567890</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

                <div className=' h-full marker:w-full grid justify-center'>
                    <div className='space-y-2'>
                        <span className="footer-title">Follow US</span>
                        <p>Join us on social media</p>
                        <div className="grid grid-flow-col gap-4">
                            <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaFacebook /></span>
                            <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaInstagram /></span>
                            <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaLinkedin /></span>
                            <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaTwitter /></span>
                            <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaPinterest /></span>

                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-black bg-opacity-95 p-4 text-center text-white'>
                <p>Copyright © 2024 - All right reserved by BIstro Boss Restaurant</p>
            </div>
        </div>
    );
};

export default Footer;