import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = (props) => {
    // console.log(job)
     const {logo,job_title,salary,job_type,company_name,company_address}=props.job;
    return (
        <div className='flex justify-between w-[90%] mx-auto mt-32 items-center'>
            {/* //<h1>oookkkkkkkk</h1> */}
            <div className='flex items-center gap-8'>
                <div>
                    <img src={logo} className="h-[50px] w-[145px]" />
                </div>
                    <div>
                        <h1>{job_title}</h1>
                        <p>{company_name}</p>
                        <button className='btn btn-outline text-[#A4A3FF] border border-[#A4A3FF] mr-3'>{job_type[0]}</button>
                        <button className='btn btn-outline  text-[#A4A3FF] border border-[#A4A3FF]'>{job_type[1]}</button>
                        <p>{company_address}</p>
                    </div>
            </div>
            <div>
                <Link><button className='btn btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;