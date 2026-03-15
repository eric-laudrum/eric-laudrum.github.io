export default function resume(){

    return(


        <div className="section-container" id="resume-container">

            <h2 className="section-title">
                Resume
            </h2>

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