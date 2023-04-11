import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJobs = () => {

    const [job,setJob]=useState({});  

    useEffect(()=>{
        fetch('/featuredJobsData.json')
        .then(res=>res.json())
        .then(data=>{
             setJob(data)
             
        })
    } ,[])




    const stored=getShoppingCart(); 
    const saved=[];

    for(const id in stored)console.log(id)

    // const store=job.jobs.map(id=>console.log(id))
    // console.log(job.jobs)

    
    return (
        <div>
            {
                // saved.map(id=>console.log(id))s
            }
        </div>
    );
};

export default AppliedJobs;