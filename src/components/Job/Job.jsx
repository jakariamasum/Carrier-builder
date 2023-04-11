import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Job = () => {
    const JobDetail=useParams();
    //  console.log(JobDetail)
    const jobs=useLoaderData(); 
    const [job,setJob]=useState({});  

    useEffect(()=>{
        fetch('/featuredJobsData.json')
        .then(res=>res.json())
        .then(data=>{
            //  console.log(data)
            const jobId=data.jobs.find(job=>job.id==JobDetail.id);
            //  console.log(jobId)
             setJob(jobId)
             
        })
    } ,[])
      console.log(job)
      const {job_title,salary,company_name,company_email,company_phone,company_address,educational_requirements,job_description,experience,job_responsibilities}=job;
    return (
        <div className='flex mt-32'>
            <div className='w-[65%]'>
                <div className='text-[#757575] font-semibold'>
                    <p className='mb-6'><span className='text-[#1A1919] font-bold'>Job Description:</span> {job_description}</p>
                    <p className='mb-6'><span className='text-[#1A1919] font-bold'>Job Responsibilities:</span> {job_responsibilities}</p>
                    <p className='text-[#1A1919] font-bold mb-4'>Educational Requirement</p>
                    <p className='mb-6'>{educational_requirements}</p>
                    <p className='text-[#1A1919] font-bold mb-4'>Experiences</p>
                    <p className='mb-6'>{experience}</p>
                </div>
            </div>
                <div>
                   <div className='bg-[#F3F2FF] pl-7 ml-3 font-semibold text-xl text-[#757575]'>
                   <h1 className='border border-b-2 border-b-green-950 text-[#1A1919] font-bold pt-3'>Job Details</h1>
                    <hr className='text-red-500 bg-red-700'/>
                    <p><span className='text-[#474747]'>Salary: </span>{salary}K (Per Month)</p>
                    <p><span className='text-[#474747]'>Job title: </span>{job_title}</p>
                    <h1 className='text-[#1A1919] font-bold mb-6 mt-8'>Contact Information</h1>
                     <p><span className='text-[#474747]'>Phone: </span>{company_phone}</p>
                    <p><span className='text-[#474747]'>Email: </span>{company_email}</p>
                    <p><span className='text-[#474747]'>Address: </span>{company_address}</p>
                   </div>
                <Link><button className='btn bg-[#9379FF]  border-0 mt-6 w-[500px] mx-auto'>Apply Now</button></Link>
                </div>
        </div>
    );
};

export default Job;