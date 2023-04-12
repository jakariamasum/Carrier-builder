import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {

    const saved = [];
    const [job, setJob] = useState(getShoppingCart());
    const [allJob, setAllJob] = useState([]);
    const [selectedButton, setSelectedButton] = useState('all');

    useEffect(() => {
        fetch('/featuredJobsData.json')
            .then(res => res.json())
            .then(data => {
                setAllJob(data.jobs)
            })
    }, [])

    const jobInDb = []
    for (const single in job) {
        const newApplied = allJob.find(one => one.id == single)
        jobInDb.push(newApplied)
    }

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    }

    let filteredJobs = jobInDb;
    if (selectedButton === 'remote') {
        filteredJobs = jobInDb.filter(job => job.job_type.includes('Remote'));
    } else if (selectedButton === 'onsite') {
        filteredJobs = jobInDb.filter(job => job.job_type.includes('Onsite'));
    }

    return (
        <div>
            <div className='flex gap-8 justify-center mt-8'>
                <button className={`btn ${selectedButton === 'all' ? 'btn-primary' : 'btn-outline'} text-[#A4A3FF] border border-[#A4A3FF]`} onClick={() => handleButtonClick('all')}>All</button>
                <button className={`btn ${selectedButton === 'remote' ? 'btn-primary' : 'btn-outline'} text-[#A4A3FF] border border-[#A4A3FF]`} onClick={() => handleButtonClick('remote')}>Remote</button>
                <button className={`btn ${selectedButton === 'onsite' ? 'btn-primary' : 'btn-outline'} text-[#A4A3FF] border border-[#A4A3FF]`} onClick={() => handleButtonClick('onsite')}>Onsite</button>
            </div>
{
                filteredJobs.length === 0 ? (
                    <p className="text-center mt-8">No jobs found.</p>
                ) : (
                    filteredJobs.map(job => {
                        if (job) {
                            return (
                                <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
                            )
                        }
                    })
                )
            }
        </div>
    );
};

export default AppliedJobs;
