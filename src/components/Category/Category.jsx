import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  const element = <FontAwesomeIcon icon="fa-solid fa-calculator" />
  


const Category = (props) => {
    // console.log(props.category)
    const {name,jobs_available}=props.category;
    return (
        <div className='w-[311px] h-[243px] bg-[#F9F9FF] flex'>
            <div className='px-2 w-[311px] h-[243px]'>
                <h1>{name}</h1>
                <p>{jobs_available}</p>
            </div>
            
        </div>
    );
};

export default Category;