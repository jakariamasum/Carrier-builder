import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col gap-3 lg:flex-row justify-between items-center mt-10'>
            <div className='mx-auto lg:mx-0'>
                <h1 className="font-bold text-2xl text-[#1A1919] lg:text-7xl w-[570px] lg:w-auto">One Step <br /> Closer To Your <br /> <span className='text-[#8C80FE]'>Dream Job</span></h1>
                <p className='text-[#757575] w-[250px] lg:w-[519px] mt-5 mb-8 lg:mb-0'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-[#8C80FE] text-white px-6 py-3 rounded-xl mt-6 lg:mt-10'>Get Started</button>
            </div>
            <div className="flex justify-center">
                <img src="https://i.ibb.co/2gbXy6L/user.png" className="rounded-xl w-[200px] h-[250px] lg:w-[816px] lg:h-[744px]" />
            </div>
        </div>
    );
};

export default Banner;
