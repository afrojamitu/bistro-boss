import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import featuredBG from '../../../assets/home/featured-bg.png'
// import './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg-black bg-opacity-50 py-20 text-white' style={{backgroundImage: `url(${featuredBG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <SectionTitle
                subHeading={'---Check it out---'}
                mainHeading={'Featured Items'}
            ></SectionTitle>

            <div className='md:flex items-center gap-10 md:w-9/12 mx-5 md:mx-auto mt-8'>
                <div className=''>
                    <img className='w-[1400px]' src={featured} alt="" />
                </div>
                <div className='space-y-3'>
                    <p className='text-lg'>June 15, 2023</p>
                    <p className='text-lg font-semibold'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className='px-5 py-2 border-b-4 text-black hover:bg-slate-400 bg-opacity-90 bg-slate-200 border-[#d72320] rounded-lg text-lg font-semibold' style={{transition: '0.5s'}}>READ MORE</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;