import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar,faLocationDot } from '@fortawesome/free-solid-svg-icons';

const AppliedJobCard = (props) => {
    // console.log(job)
     const {logo,job_title,salary,job_type,company_name,company_address,id}=props.job;
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
                        <div className='flex justify-between gap-5'>
                        <p><FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-1" aria-hidden="true" />{company_address}</p>
                        <p><FontAwesomeIcon icon={faDollar} className="h-4 w-4 mr-1" aria-hidden="true" />{salary}</p>
                        </div>
                    </div>
            </div>
            <div>
                <Link to={`/Job/${id}`}><button className='btn btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;