import Job from "@/components/Job"
import Sidebar from "@/components/Sidebar"
import AcademicCredentials from "../academic-credentials/page"

export default function resume(){

    // List of Jobs
    const jobs = [{
        // DA
            icon: <img src="/assets/icons/DA-logo.jpg" alt="Data Annotation" />,
            title: "AI Specialist",
            employer: "Data Annotation",
            location: "Remote",
            date: "Apr 2025 - Present",
            description: "Trained AI models with prompt engineering and response evaluation."
        },
        {
        // PW Inc.
            icon: <img src="/assets/icons/psych-water-logo.jpg"  alt="George Brown" />,
            title: "Customer Success Manager",
            employer: "Psychedelic Water, Inc.",
            location: "Toronto, ON",
            date: "Nov 2021 - Jun 2023",
            description: "Managed all customer inquiries and orders. Including working with the distribution company to manage orders. I also worked with the sales team to expand our reach to over 1,000 physical locations."
        },
        {
        // The Aviary
            icon: <img src="/assets/icons/the-aviary-logo.jpg"  alt="Data Annotation" />,
            title: "Assistant Manager, FOH",
            employer: "The Aviary Brewpub",
            location: "Toronto, ON",
            date: "Aug 2018 - Jul 2020",
            description: "Manage front of house operations including ordering, scheduling, and team leadership."
        },
         {
            // Sloane Fine Tea Merchants
            icon: <img src="/assets/icons/sloane-logo.jpg"  alt="Data Annotation" />,
            title: "Manager, Operations",
            employer: "CPA Ontario",
            location: "Toronto, ON",
            date: "Jul 2012 - Nov 2015",
            description: "Oversaw day to day operations including inventory management, product packaging, and wholesale oder fulfillment."
        },
        {
            // CPA Ontario
            icon: <img src="/assets/icons/cpa-logo.jpg"  alt="Data Annotation" />,
            title: "Coordinator, Business Development",
            employer: "CPA Ontario",
            location: "Toronto, ON",
            date: "Jul 2012 - Nov 2015",
            description: "Promote the Professional Development Institute wing of CMA Ontario."
        },
        {
            // CMA Ontario
            icon: <img src="/assets/icons/cma-logo.jpg"  alt="Data Annotation" />,
            title: "Concierge",
            employer: "CMA Ontario",
            location: "Toronto, ON",
            date: "Jul 2009 - Jul 2012",
            description: "Facilitate events for continuing education, and other speaking engagement. Roles include setting up any technological requirements for the room, and being the first point of contact for instructors and attendees."
        }
    ]


    return(

        <div className="section-container" id="resume-container">

            
            <Sidebar />
            
             {/* ----- Jobs ----- */}
            <div className="jobs-container">
                <h2 className="section-title">Experience</h2>

                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        title={job.title}
                        employer={job.employer}
                        location={job.location}
                        date={job.date}

                        description={job.description}
                        icon={job.icon}
                        
                    />
                ))}


                 <AcademicCredentials />

            </div>    

             
            
                    
        </div>
    )
}