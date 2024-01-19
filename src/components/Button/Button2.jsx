import React from 'react';

const Button2 = ({btnText}) => {
    return (
        <div className='text-center pt-4'>
            <button className='px-3 py-1 border-b-4 hover:text-[#d72320] bg-slate-300 hover:bg-slate-400 border-[#d72320] rounded-lg text-lg font-semibold' style={{ transition: '0.5s' }}>{btnText}</button>
        </div>
    );
};

export default Button2;