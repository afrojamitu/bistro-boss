import React from 'react';

const Button = ({btnText}) => {
    return (
        <div className='text-center'>
            <button className='px-3 py-1 border-b-4  bg-[#2d2d2d] hover:bg-slate-500 border-[#d72320] rounded-lg text-lg font-semibold' style={{ transition: '0.5s' }}>{btnText}</button>
        </div>
    );
};

export default Button;