import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);
    const numOfJobsToShow = 4;

    useEffect(() => {
        fetch("/featuredJobsData.json")
            .then((response) => response.json())
            .then((data) => setJobs(data.jobs));
    }, []);

    const toggleShowAllJobs = () => {
        setShowAllJobs(!showAllJobs);
    }

    const displayedJobs = showAllJobs ? jobs : jobs.slice(0, numOfJobsToShow);

    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl mb-4 text-[#1A1919]'>Featured Jobs</h1>
                <p className='mb-8 font-semibold text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols1 lg:grid-cols-2 gap-3'>
                {displayedJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
            {!showAllJobs && jobs.length > numOfJobsToShow && <button className='btn border-0 text-white bg-[#9379FF] mt-10 mx-auto block' onClick={toggleShowAllJobs}>See All</button>}
        </div>
    );
};

export default FeaturedJobs;
