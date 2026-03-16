import Job from "@/components/Job"

export default function resume(){


    const jobs = [{
            icon: <img src="/assets/icons/DA-logo.jpg" alt="Data Annotation" />,
            title: "AI Training",
            employer: "Data Annotation",
            location: "Remote",
            date: "Apr 2025 - Present",
            description: "Evaluate AI models and create criteria to evaluate models."
        },
        {
            icon: <img src="/assets/icons/psych-water-logo.jpg"  alt="George Brown" />,
            title: "Customer Success Manager",
            employer: "Psychedelic Water, Inc.",
            location: "Toronto, ON",
            date: "Nov 2021 - Jun 2023",
            description: "Manage customer success and business operations."
        },
        {
            icon: <img src="/assets/icons/the-aviary-logo.jpg"  alt="Data Annotation" />,
            title: "Assistant Manager, FOH",
            employer: "The Aviary Brewpub",
            location: "Toronto, ON",
            date: "Aug 2018 - Jul 2020",
            description: "Manage front of house operations including ordering, scheduling, and team leadership."
        },
        {
            icon: <img src="/assets/icons/cpa-logo.jpg"  alt="Data Annotation" />,
            title: "Coordinator, Business Development",
            employer: "CPA Ontario",
            location: "Toronto, ON",
            date: "Jul 2012 - Nov 2015",
            description: "Promote the Professional Development Institute wing of CMA Ontario."
        }

    ]


    return(


        <div className="section-container" id="resume-container">


            <h2 className="section-title">Resume</h2>

            {/* ----- Personal Information ----- */}
            <div className="personal-info">

                <img className="resume-photo" src="assets/park.jpg" alt="no image" style={{ height:"8em"}}/>
                <h3 className="sub-title">
                    Eric Laudrum
                </h3>

                <p>Web Developer</p>
                <p>Kitchener, Ontario, Canada</p>

            </div>   


             {/* ----- Jobs ----- */}
            <div className="jobs-container">

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

            </div>            
        </div>
    )
}