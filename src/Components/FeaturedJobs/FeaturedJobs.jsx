import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    // this is not the best way to load show all data
    //ekhane initially datar poriman hosse 4ta
    const [dataLength, setDataLength]=useState(4 )
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='mt-8'>
                <h2 className="text-5xl font-extrabold text-center">Featured Jobs: {jobs.length}</h2>
                <p className='text-base text-center font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map((job, idx) => <Job key={idx} job={job}></Job> )
                }
            </div>
            {/* event handler set korsi setDataLength ke,
                kivabe data length she setkorbe .jobs er moddhe jotogula data load kora hoise otogula */}
            <div className={dataLength === jobs.length ? 'hidden': ''}>
                
                <button onClick={()=> setDataLength(jobs.length)}
                className="btn btn-primary ">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;