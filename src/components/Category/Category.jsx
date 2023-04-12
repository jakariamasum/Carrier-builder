import React from 'react';

const Category = (props) => {
    const { name, jobs_available, logo } = props.category;
    return (
        <div className='bg-white rounded-lg'>
            <img src={logo} className="mx-auto my-7 h-24 lg:h-32" alt={`Logo of ${name}`} />
            <div className='p-4 text-center'>
                <h1 className='text-gray-700 font-bold text-xl mb-2'>{name}</h1>
                <p className='text-gray-600 font-semibold'>{jobs_available} Jobs Available</p>
            </div>
        </div>
    );
};

export default Category;
