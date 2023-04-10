import React from 'react';

const JobCard = (props) => {
    const { job_title, job_type, salary, address, company_contact, logo } = props.job;
    return (
        <div >
            <div className="card w-full bg-base-100 shadow-xl">
                <img src={logo} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className='text-[#757575] font-semibold text-xl mt-2 pb-4'>{company_contact.name}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-accent">{job_type[0]}</button>
                        <button className="btn btn-outline btn-accent">{job_type[1]}</button>
                    </div>
                    <div className='flex text-[#757575]'>
                        <p>{company_contact.address}</p>
                        <p>{salary}</p>
                    </div>
                </div>
                    <button className='btn btn-accent'>View Details</button>
            </div>

        </div>
    );
};

export default JobCard;