import React from 'react';

const Cover = ({image, title, subTitle}) => {
    return (
        <div>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: `url("${image}")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[800px] h-[200px] flex flex-col justify-center bg-black bg-opacity-50 ">
                        <h1 className="mb-4 text-5xl uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;