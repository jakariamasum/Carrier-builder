import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJobs = () => {

    const saved = [];
    const [job, setJob] = useState(getShoppingCart());
    const [allJob, setAllJob] = useState([]);

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

    return (
        <div>
            {
                jobInDb.map(job => {
                    if (job) {
                        return (
                            <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
                        )
                    }
                })
            }
        </div>
    );
};

export default AppliedJobs;
