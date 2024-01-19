import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className=''>
            <div className='flex items-center justify-between gap-5'>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-16 h-16' src={image} alt="" />
                <div>
                    <h1 className="text-lg uppercase">{name}----------------</h1>
                    <p className="text-slate-300">{recipe}</p>
                </div>
                <p className="text-lg text-[#d72320]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;