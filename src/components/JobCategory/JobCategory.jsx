import React, { useEffect, useState } from 'react';
import SingleJob from '../Category/Category';
import Category from '../Category/Category';

const JobCategory = () => { 
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/jobCategory.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);
    // console.log(jobs.job_categories)
    return (
        <div className='mt-32 mb-8'>
            <div className='text-center'>
            <h1 className='font-bold text-5xl mb-4 text-[#1A1919]'>Job Category List</h1>
            <p className='mb-8 font-semibold text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
           {
                categories.map(category=><Category key={category.id} category={category}></Category>)
           }
           </div>
        </div>
    );
};

export default JobCategory;