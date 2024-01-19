import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'

const BistroBio = () => {
    return (
        <div className='py-14'>
            <div className='relative hidden md:block py-16 bg-fixed' style={{backgroundImage: `url(${chef})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='lg:w-7/12 mx-5 lg:mx-auto bg-black bg-opacity-80 rounded p-10 space-y-2 my-16'>
                <h1 className='text-3xl uppercase text-center'>BIstro Boss</h1>
                <p className='text-slate-200 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem recusandae minima harum obcaecati rerum. Natus aut totam saepe, dolorum molestiae possimus ab aperiam beatae soluta ullam maxime veniam ratione officia.</p>
            </div>
        </div>
        </div>
    );
};

export default BistroBio;