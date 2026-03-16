import Job from "@/components/Job"

export default function resume(){


    const jobs = [{
            icon: <img src="/assets/icons/data-brown.png" style={{ width: '40px', height: '40px' }} alt="Data Annotation" />,
            title: "AI Training",
            employer: "Data Annotation",
            location: "Remote",
            date: "Apr 2025 - Present",
            fileName: "george-brown-college.jpg",
            description: "Evaluate AI models and create criteria to evaluate models."
        },
        {
            icon: <img src="/assets/icons/george-brown-college.png" style={{ width: '40px', height: '30px' }} alt="George Brown" />,
            title: "Customer Success Manager",
            employer: "Psychedelic Water, Inc.",
            location: "Toronto, ON",
            date: "Nov 2021 - Jun 2023",
            fileName: "psychedelic-water.jpg",
            description: "Manage customer success and business operations."
        },
        {
            icon: <img src="/assets/icons/george-brown-college.jpg" style={{ width: '40px', height: '40px' }} alt="Aviary" />,
            title: "Assistant Manager, FOH",
            employer: "The Aviary Brewpub",
            location: "Toronto, ON",
            date: "Aug 2018 - Jul 2020",
            fileName: "aviary-job.jpg",
            description: "Manage front of house operations including ordering, scheduling, and team leadership."
        }

    ]


    return(


        <div className="section-container" id="resume-container">

            <h2 className="section-title">
                Resume
            </h2>


            <div className="jobs-container">

                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        title={job.title}
                        employer={job.employer}
                        location={job.description}
                        date={job.date}

                        
                        fileName={job.fileName}
                        description={job.description}
                        icon={job.icon}
                        
                    />
                ))}

            </div>




            {/* ----- Personal Information ----- */}
            <div className="personal-info">

                <img className="resume-photo" src="assets/park.jpg" alt="no image" style={{ height:"8em"}}/>
                <h3 className="sub-title">
                    Eric Laudrum
                </h3>

                <p>Web Developer</p>
                <p>Kitchener, Ontario, Canada</p>

            </div>   



            

            <div className="job-section">


                {/* ----- Data Annotation ----- */}
                <div className="job-container">
                    <h4 className="job-title">
                        AI Training
                    </h4>
                    <h5 className="employer-name">
                        Data Annotation
                    </h5>
                    <p className="job-dates">
                        Apr 2025 - Present
                    </p>
                    <p className="job-location">
                        Remote                    
                    </p>
                    <p className="job-description">
                        Evaluate AI models and create criteria to evaluate models. 
                    </p>
                </div>


                {/* ----- Psychedelic Water ----- */}
                <div className="job-container">
                    <h4 className="job-title">
                        Customer Success Manager
                    </h4>
                    <h5 className="employer-name">
                        Psychedelic Water Inc.
                    </h5>
                    <p className="job-dates">
                        Nov 2021 - Jun 2023
                    </p>
                    <p className="job-location">
                        Toronto, ON                       
                    </p>
                    <p className="job-description">
                        Manage customer success tbd lorem ipsum and so on
                    </p>
                </div>

                 {/* ----- The Aviary ----- */}
                <div className="job-container">
                    <h4 className="job-title">
                        Assistant Manager, FOH
                    </h4>
                    <h5 className="employer-name">
                        The Aviary Brewpub
                    </h5>
                    <p className="job-dates">
                        Aug 2018 - Jul 2020
                    </p>
                    <p className="job-location">
                        Toronto, ON                       
                    </p>
                    <p className="job-description">
                        Manage front of house operations including ordering, scheduling, bottle shop program, bartending,team lead.
                    </p>
                </div>


                 {/* ----- CPA Onatrio ----- */}
                <div className="job-container">
                    <h4 className="job-title">
                        Coordinator, Business Development
                    </h4>
                    <h5 className="employer-name">
                        Chartered Professional Accountants (CPA Ontario)
                    </h5>
                    <p className="job-dates">
                        Jul 2012 - Nov 2015
                    </p>
                    <p className="job-location">
                        Toronto, ON                       
                    </p>
                    <p className="job-description">
                        Promote the Professional Development Institute wing of CMA Ontario.
                        Aid Continuing Education department in facilitating events of 20-200 attendees
                    </p>
                </div>


                 <div className="job-container">
                    <h4 className="job-title">
                        Concierge
                    </h4>
                    <h5 className="employer-name">
                        Certified Management Accountants (CMA Ontario)
                    </h5>
                    <p className="job-dates">
                        2009 - Jul 2012
                    </p>
                    <p className="job-location">
                        Toronto, ON                       
                    </p>
                    <p className="job-description">
                        Run the Professional Development Institute facility. Set up meeting rooms for physical and technological requirements.
                    </p>
                </div>

                            
            </div>
                
        </div>
    )
}