import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication, saveJobApplication } from '../../Utility/localStorage';

const AppliedJobs = () => {
    // na chaiteo amra shob data peye jabo
    const jobs = useLoaderData()
    // jei jei data gula stored ase shegula dorkar. jehetu baire thke data load korbo tai side effect ase, use korbo useeffect. and jobs er data ta check korbo
    useEffect(() => {
        //id ta pabo
        const storedJobIds = getStoredJobApplication() 
        //check korbo-jobs e jodi data thake (>0 chaile dite pari), 

        if(jobs.length > 0){

            //idea ta hosse: dhori amar job ase 10 ta but storedJobIds e ase 3 ta then jobs e loop kore job er moddhe job.id ta paisi etar shathe amar storedJobIds mile kina/ase kina ba include kore kina jodi thake taile niye nao

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // jobsApplied er man passe na bcz jobs er id ase integer e , storeJobIds e id gula passi string hishebe tai
            //solution holo: storedJobIds er man integer kore deya so JobDetails e jeye getStored er id take integer boshay dile hoye jabe.
            // console.log(jobs, storedJobIds, jobsApplied)
            //2nd options
            const  jobsApplied = [] ;
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            console.log(jobs, storedJobIds, jobsApplied)
        }

    },[] )

    return (
        <div>
            <h2>I applied for this job</h2>
        </div>
    );
};

export default AppliedJobs;