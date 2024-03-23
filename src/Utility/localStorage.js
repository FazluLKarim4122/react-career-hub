// import { json } from "react-router-dom"

//step-2: jodi aage thekei kono application thake sheta joma kore rakhbo
const getStoredJobApplication =()=>{
    // step-3: local storage theke data niye eshe object e transfer korbo
    const storedJobApplication = localStorage.getItem('job-applications');
    // jodi storedJob thake 
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

//step-1:jokhon save korbo kono 1ta id dhorei save korbo
const saveJobApplication = (id) =>{
    //step-4: jokhon save korte jabo tokhon uporer function ke call kore dibo
    const storedJobApplications = getStoredJobApplication()

    //step-5: duplicate check(1ta id te 1bari apply korte parbo)
    // na exist korle amra add korbo ar jodi exist kore tahole korbo na,sheta find korbo storedJobApp e, j shekhane aage theke ase kina, mane protita jobId er jonno ami jei id ta dilam same kina

    const exists = storedJobApplications.find(jobId => jobId === id)

    //step-6:: ei exist jodi na thake(!exist), thakle true na thakle nai,tokhon ei id, jake add korte chassi take push kore dibo storedJobApplication array er moddhe.
    
    if(!exists){
        storedJobApplications.push(id)

        //step-7: then set kore dibo local storage e stringify kore.

        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))

    }

}

//step-8: eita ke dekhate chaile browser console e. tahole saveJobApp ke add korte hobe 'apply now' button er on click function e then useParams er id ta parameter e dite hobe.

export {getStoredJobApplication, saveJobApplication}