import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    console.log(jobs,id)
    const idInteger = parseInt(id)
    const job = jobs.find(job => job.id === idInteger)
    // const [id, logo,job_title, location, company_name, salary, job_description, job_type, remote_or_onsite ] = job
    // console.log(job)
    console.log(jobs,idInteger)
    return (
        <div>
            <h2 className="text-center text-5xl">Job Details of: {job.job_title}</h2>
            <div className="border grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3 p-2">
                    <h1>Details coming here</h1>
                    <h2 className="text-base font-extrabold">Job Description: <span className="text-base font-medium text-[#757575]">{job.job_description}</span></h2>
                    <p className="text-base font-extrabold">Job Responsibility: <span className="text-base font-medium text-[#757575]">{job.job_responsibility}</span></p>
                </div>
                <div className="border p-2">
                    <h2 className="text-2xl">Side bar</h2>
                    <button className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails; 