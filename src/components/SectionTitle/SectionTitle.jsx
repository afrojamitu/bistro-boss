import React from 'react';

const SectionTitle = ({ subHeading, mainHeading }) => {
    return (
        <div className='flex flex-col items-center pb-10'>
            <p className='text-[#d72320] text-center italic border-b-2 py-2 md:w-4/12'>{subHeading}</p>

            <h1 className='text-4xl text-center uppercase border-b-2 py-4 md:w-4/12'>{mainHeading}</h1>
        </div>
    );
};

export default SectionTitle;