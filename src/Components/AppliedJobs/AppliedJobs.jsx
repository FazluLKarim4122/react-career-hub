import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication, saveJobApplication } from '../../Utility/localStorage';

const AppliedJobs = () => {
    // na chaiteo amra shob data peye jabo
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    //filter kore kisu job dekhabo 
    //1st- data gula shob load korla state as usual
    const [displayJobs, setDisplayJobs]=useState([])
    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    // jei jei data gula stored ase shegula dorkar. jehetu baire thke data load korbo tai side effect ase, use korbo useeffect. and jobs er data ta check korbo
    useEffect(() => {
        //id ta pabo
        const storedJobIds = getStoredJobApplication()
        //check korbo-jobs e jodi data thake (>0 chaile dite pari), 

        if (jobs.length > 0) {

            //idea ta hosse: dhori amar job ase 10 ta but storedJobIds e ase 3 ta then jobs e loop kore job er moddhe job.id ta paisi etar shathe amar storedJobIds mile kina/ase kina ba include kore kina jodi thake taile niye nao

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // jobsApplied er man passe na bcz jobs er id ase integer e , storeJobIds e id gula passi string hishebe tai
            //solution holo: storedJobIds er man integer kore deya so JobDetails e jeye getStored er id take integer boshay dile hoye jabe.
            // console.log(jobs, storedJobIds, jobsApplied)


            //2nd options
            /**
              storedJobIds joto gula id store ase loop kore protita id er jonno jobs theke id take khujbo, mane 1ta id er jonono 1ta khujbo, jodi match kore peye jai tahole jobsApplied e push kore dibo
             */
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied)
            // ekhon jobsApplied ke dynamically dekhate chaile 1ta state declare kore tar moddhe pathay dile man gula state e peye jabo
            setAppliedJobs(jobsApplied)
            //filter-jotogula apply korsi shobgula dekhabo
            setDisplayJobs(jobsApplied)
        }

    }, [])

    return (
        <div>
            <h2 className='text-5xl font-extrabold text-center'>Jobs I applied : {appliedJobs.length} </h2>
            {/* Filter dropdown */}
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {/* ui te jotogula apply korsi shobgula dekhabe */}
                {/* {
                    appliedJobs.map((job, idx) => <li key={idx} className='underline'>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span> 
                    </li>)
                } */}


                {/*shurute ui te jotogula apply korsi shobgula dekhabe, then jodi sheta na chai tahole handler declare kore sheta filter er li te boshate hobe */}
                {
                    displayJobs.map((job, idx) => <li key={idx} className='underline'>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span> 
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;