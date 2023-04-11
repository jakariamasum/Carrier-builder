import React from 'react';
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <img src="https://i.ibb.co/25qLCZ1/404.jpg" className='w-[550px] mr-5' />
            <div>
                <h1 className='text-7xl font-bold mb-7'>Oops!</h1>
                <p className='text-xl font-semibold'>Sorry, an unexpected error has occurred.</p>
                <p className='text-red-400 font-bold'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;