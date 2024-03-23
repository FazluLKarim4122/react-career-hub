import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo,job_title, location, company_name, salary, job_description, job_type, remote_or_onsite } = job
    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl">
                <figure><img className="w-[117px] h-[50px]" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF]">{job_type}</button>
                    </div>
                    <div className="mt-4 flex gap-2 ">
                        <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                        <h2 className="flex"><CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h2>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;