import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/featuredJobsData.json")
            .then((response) => response.json())
            .then((data) => setJobs(data.jobs));
    }, []);
    //   console.log( jobs)
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl mb-4 text-[#1A1919]'>Featured Jobs</h1>
                <p className='mb-8 font-semibold text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                {
                       jobs.map(job=> <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;