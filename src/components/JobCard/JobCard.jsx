import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar,faLocationDot } from '@fortawesome/free-solid-svg-icons';


const JobCard = (props) => {
    const { job_title, job_type, salary, company_address, logo,id,company_name } = props.job;
    return (
        <div className='w-full'>
            <div className="card p-2 bg-base-100 shadow-xl lg:w-full">
                <img src={logo} className="h-[40px] w-[115px] mt-10 ml-10" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className='text-[#757575] font-semibold text-xl mt-2 pb-4'>{company_name}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-accent">{job_type[0]}</button>
                        <button className="btn btn-outline btn-accent">{job_type[1]}</button>
                    </div>
                    <div className=' text-[#757575] grid grid-cols-1 lg:grid-cols-2'>
                        <p><FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" aria-hidden="true" />{company_address}</p>
                        <p><FontAwesomeIcon icon={faDollar} className="h-4 w-4" aria-hidden="true" /> Salary: {salary}</p>
                    </div>
                </div>
                <Link to={`Job/${id}`}><button className='btn border-0 text-white bg-[#9379FF] ml-10'>View Details</button></Link>
            </div>

        </div>
    );
};

export default JobCard;