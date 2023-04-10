import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center mt-10'>
            <div>
                <h1 className="font-bold text-7xl text-[#1A1919] w-[570px]">One Step <br /> Closer To Your <br /> <span className='text-[#8C80FE]'>Dream Job</span></h1>
                <p className='w-[519px] text-[#757575] text-xl mt-5 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-[#8C80FE] text-white px-6 py-3 rounded-xl'>Get Started</button>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="rounded-xl w-[816px] h-[744px]" />
            </div>
        </div>
    );
};

export default Banner;