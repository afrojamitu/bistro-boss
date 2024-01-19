import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import banner from '../../../assets/home/vector-banner.png'

const Banner = () => {
    return (
        <div className='h-[100vh] flex flex-col items-start justify-center' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='lg:w-10/12 lg:mx-auto space-y-4'>
                <h1 className="flex flex-col relative">
                    <span className='text-5xl ps-5 absolute left-16 top-6 text-slate-300 uppercase font-thin italic'>Today's</span>
                    <span className='text-[170px] font-bold' style={{ fontFamily: 'Dancing Script' }}>Special</span>
                    <span className='text-5xl ps-5 absolute left-36 -bottom-1 text-slate-300 uppercase font-thin italic'>Fastfood</span>
                </h1>
                <h1 className="text-3xl pt-3" style={{ fontFamily: 'Dancing Script' }}>Eat whatever your heart desires.</h1>

                <div className='flex items-center gap-3 text-2xl '>
                    <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaFacebook /></span>
                    <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaInstagram /></span>
                    <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaLinkedin /></span>
                    <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaTwitter /></span>
                    <span className='border border-[#d72320] p-2 rounded-full hover:scale-110'><FaPinterest /></span>
                </div>

            </div>


        </div>
    );
};

export default Banner;