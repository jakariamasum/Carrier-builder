import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {

    // const stored=getShoppingCart(); 
    const saved=[];
    const [job,setJob]=useState(getShoppingCart());  
    // console.log(job)

    // job.map(single=>console.log(single))
    const [allJob,setAllJob]=useState([]);
    
    useEffect(()=>{
        fetch('/featuredJobsData.json')
        .then(res=>res.json())
        .then(data=>{
            setAllJob(data.jobs)   
        })
    } ,[])
    // console.log(allJob)
    const jobInDb=[]
     for(const single in job){
        const newApplied=allJob.find(one=>one.id==single)
        jobInDb.push(newApplied)
     }
      console.log(jobInDb)
     





    // for(const id in stored)console.log(id)

    // const store=job.jobs.map(id=>console.log(id))
    // console.log(job.jobs)

    
    return (
        <div>
            {
                jobInDb.map(job=> console.log(job))
            }
        </div>
    );
};

export default AppliedJobs;