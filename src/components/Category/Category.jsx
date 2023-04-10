import React from 'react';
import ReactDOM from 'react-dom'

  


const Category = (props) => {
    // console.log(props.category)
    const {name,jobs_available,logo}=props.category;
    return (
        <div className='w-[311px] h-[243px] bg-white pl-14'>
            <img src={logo} className="w-[40px] h-[40px] mt-10 mb-7" />
            <div className='px-2 w-[311px] h-[243px]'>
                <h1 className='text-[#474747] font-bold text-xl'>{name}</h1>
                <p className='text-[#A3A3A3] font-semibold mt-2'>{jobs_available} Jobs Available</p>
            </div>
            
        </div>
    );
};

export default Category;