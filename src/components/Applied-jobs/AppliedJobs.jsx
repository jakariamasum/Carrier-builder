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
            <div>
            <img src="https://i.ibb.co/9ZbFHzb/banner.png" className="absolute top-[15.12%] bottom-[77.77%] right-[ 81.82%] left-0 w-[240px] h-[100px]" />
            <h1 className='text-center my-8 font-bold text-3xl'>Applied Jobs</h1>
            <img src="https://i.ibb.co/5v8dy8x/Vector.png" className=" absolute left-[87%] right-[-5.47%] top-0 bottom-[79.43%] float-right w-[240px] h-[100px]" />
            </div>
            <div className='flex gap-8 justify-center mt-28'>
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
