import React from 'react';

const ApplyJob = () => {

    const [job,setJob]=useState({});  

    useEffect(()=>{
        fetch('/featuredJobsData.json')
        .then(res=>res.json())
        .then(data=>{
            const jobId=data.jobs.find(job=>job.id==JobDetail.id);
             setJob(jobId)
             
        })
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default ApplyJob;