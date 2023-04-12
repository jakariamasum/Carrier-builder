import React from 'react';

const AppliedJobCard = ({job}) => {
    const {logo,job_title,salary,job_type,company_name,company_address}=job;
    return (
        <div>
            <div>
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <h1>{job_title}</h1>
                        <p>{company_name}</p>
                        <button className='btn btn-outline btn-accent'>{job_type[0]}</button>
                        <button className='btn btn-outline btn-accent'>{job_type[1]}</button>
                        <p>{company_address}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default AppliedJobCard;