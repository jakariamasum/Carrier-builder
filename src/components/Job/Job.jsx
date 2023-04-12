import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar,faLocationDot,faMessage,faPhone,faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Job = () => {
    const JobDetail=useParams();
    //  console.log(JobDetail)
    const jobs=useLoaderData(); 
    const [job,setJob]=useState({});  

    const [cart,setCart]=useState([]);
    const applied=(apply)=>{
        let shoppingCart = getShoppingCart();
    const quantity = shoppingCart[apply.id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        toast.error('You have already applied !'); 
    }
        const newCart=[...cart,apply];
        setCart(newCart);
        addToDb(apply.id)
    }


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


    useEffect(()=>{
        const stored=getShoppingCart(); 
        for(const id in stored) 
        console.log(id)
    } ,[])

    //   console.log(job)
      const {job_title,salary,company_name,company_email,company_phone,company_address,educational_requirements,job_description,experience,job_responsibilities}=job;
      return (
        <div>
            <div>
            <img src="https://i.ibb.co/9ZbFHzb/banner.png" className="absolute top-[15.12%] bottom-[77.77%] right-[ 81.82%] left-0 w-[240px] h-[100px]" />
            <h1 className='text-center my-8 font-bold text-5xl'>Job Details</h1>
            <img src="https://i.ibb.co/5v8dy8x/Vector.png" className=" absolute left-[87%] right-[-5.47%] top-0 bottom-[79.43%] float-right w-[240px] h-[100px]" />
            </div>
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
                   <div className='bg-[#F3F2FF] pl-7 ml-3 font-semibold text-xl text-[#757575] pb-3'>
                   <h1 className='border-b border-b-1 border-b-green-950 text-[#1A1919] font-bold pt-3 mb-6'>Job Details</h1>
                    <p className='mb-4'><span className='text-[#474747]'><FontAwesomeIcon icon={faDollar} className="h-4 w-4 mr-1 text-[#9379FF]" aria-hidden="true" />Salary: </span>{salary}K (Per Month)</p>
                    <p className='mb-4'><span className='text-[#474747]'><FontAwesomeIcon icon={faCalendarDay} className="h-4 w-4 mr-1 text-[#9379FF]" aria-hidden="true" />Job title: </span>{job_title}</p>
                    <h1 className='text-[#1A1919] font-bold mb-6 mt-8 border-b border-b-1 border-b-green-950 '>Contact Information</h1>
                     <p className='mb-4'><span className='text-[#474747]'><FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-1 text-[#9379FF]" aria-hidden="true" />Phone: </span>{company_phone}</p>
                    <p className='mb-4'><span className='text-[#474747]'><FontAwesomeIcon icon={faMessage} className="h-4 w-4 mr-1 text-[#9379FF]" aria-hidden="true" />Email: </span>{company_email}</p>
                    <p className='mb-4'><span className='text-[#474747]'><FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-1 text-[#9379FF]" aria-hidden="true" />Address: </span>{company_address}</p>
                   </div>
                <Link><button className='btn bg-[#9379FF]  border-0 mt-6 w-[500px] mx-auto text-white' onClick={()=>applied(job)}>Apply Now</button></Link>
                </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Job;