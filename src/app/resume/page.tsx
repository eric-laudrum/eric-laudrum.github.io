import Sidebar from "@/components/Sidebar"
import Education from "@/components/Education"
import Job from "@/components/Job"
import Credential from "@/components/Credential"
import Recommendations from "@/components/Recommendations/Recommendations"
import styles from './resume.module.css'

export default function Resume(){


    const education = [
        {
            icon: <img src="/assets/icons/gbc-logo.png"  alt="George Brown" />,
            title: "Computer Programming & Analysis",
            school: "George Brown Polytechnic",
            date: "2026",
        },
        {
            icon: <img src="/assets/icons/tmu-logo.jpg"  alt="TMU-logo" />,
            title: "BA Sociology",
            school: "Toronto Metropolitan University (TMU)",
            date: "2011",
        },

    ]

    const certificates = [
          { 
            // GB Dean's List
            icon: <img src="/assets/icons/gbc-logo.png"  alt="George Brown" />,
            title: "George Brown - Dean's List",
            date: "Fall 2025",
            fileName: "Dean_list_fall25.jpg",
            description: "Achieved a 3.5 GPA for the semester.",
        },
                {
            // Linked In - Testing Q/A
            icon: <img src="/assets/icons/linkedin-logo.png"  alt="LinkedIn-logo" />,
            title: "Programming Foundations: Software Testing/ QA",
            date: "Jan 2026",
            fileName: "LI-testing-qa.jpg",
            description: "Learned fundamentals of software testing and quality analysis",
        },
        {
            // Linked In - Data Annotation
            icon: <img src="/assets/icons/linkedin-logo.png"  alt="Google-logo" />,
            title: "Hands-On Data Annotation: Applied Machine Learning",
            date: "Jan 2026",
            fileName: "LI-hands-on-annotation.jpg",
            description: " learned fundamental programming concepts through using the Python programming language",
        },
        {
            // Google E-commerce
            icon: <img src="/assets/icons/google-logo.png" alt="Google-logo" />,
            title: "Google - Digital Marketing & E-Commerce",
            date: "Fall 2024",
            fileName: "Google-DigitalMarketing&Ecommerce.jpg",
            description: "Learned all elements of E-Commerce.",
        },
         {
            icon: <img src="/assets/icons/UofM-logo.png"  alt="UofM-logo" />,
            title: "Python for Everybody",
            date: "Aug 2023",
            fileName: "UofMPythonForEverybody.jpg",
            description: " learned fundamental programming concepts through using the Python programming language",

        },
    ]

    const jobs = [{
        // DA
            icon: <img src="/assets/icons/DA-logo.jpg" alt="Data Annotation" />,
            title: "AI Specialist",
            employer: "Data Annotation",
            location: "Remote",
            date: "Apr 2025 - Present",
            description: "Trained AI models with prompt engineering and response evaluation.",
            bulletPoints: [
                "Trained and refined AI models through prompt engineering and rubric-based evaluation", 
                "Tested AI outputs with APIs and CLI tools, catching edge cases and unclear requirements.",
                "Delivered accurate, consistent assessments independently, improving real AI products used by millions.",
                "Questioned assumptions and flagged gaps to strengthen model logic and data quality."]


        },
        {
        // PW Inc.
            icon: <img src="/assets/icons/psych-water-logo.jpg"  alt="PW Inc." />,
            title: "Customer Success Manager",
            employer: "PW, Inc.",
            location: "Toronto, ON",
            date: "Nov 2021 - Jun 2023",
            description: "Managed all customer inquiries and orders. Including working with the distribution company to manage orders. I also worked with the sales team to expand our reach to over 1,000 physical locations.",
            bulletPoints: [
            
                "Developed a python script to quickly analyse sales patterns and identify potential areas of expansion.",
                "Maintained the Amazon Store page to ensure good standing and a positive customer experience.",
                "Worked directly with the distribution company to manage the fulfillment orders.",
                "Supported the sales team to expand our reach to over 1,000 physical locations, including all Ubran Outfitters locations in the U.S..",
                "Led customer support communications to ensure a positive customer experience.", 
                "Coordinated shipping and fulfillment with product feedback.", 
                "Worked with the team to test and develop new flavors and products, including a powdered drink version to minimize the cost of shipping liquids.",
                
            ]
        },
        {
        // The Aviary
            icon: <img src="/assets/icons/the-aviary-logo.jpg"  alt="The Aviary" />,
            title: "Assistant Manager, FOH",
            employer: "The Aviary Brewpub",
            location: "Toronto, ON",
            date: "Aug 2018 - Jul 2020",
            description: "Manage front of house operations including ordering, scheduling, and team leadership.",
            bulletPoints: [
                "Responsible for hiring, scheduling, and training front-of-house staff on procedures and workplace culture.",
                "Oversaw and trained employees in the sanitation proceedures for the bottle shop growler return program ",
                "Daily operations include opening/closing procedures, inventory management, and local deliveries."
            ]
        },
         {
            // Sloane Fine Tea Merchants
            icon: <img src="/assets/icons/sloane-logo.jpg"  alt="Sloane Fine Tea Merchants" />,
            title: "Manager, Operations",
            employer: "Sloane Fine Tea Merchants",
            location: "Toronto, ON",
            date: "Nov 2015 - Aug 2016",
            description: "Oversaw day to day operations including inventory management, product packaging, and wholesale oder fulfillment.",
            bulletPoints: [
                "Managed a team of 3 to pack product, and maintain warehouse facility",
                "Responsible for customer service as the primary point of contact for customers and business clients.",
                "Ensured all orders are fulfilled accurately and in a timely manner.", 
                "Managed inventory,including shipping, receiving, and supervising product packaging.",
            ]
        },
        {
            // CPA Ontario
            icon: <img src="/assets/icons/cpa-logo.jpg"  alt="CPA Ontario" />,
            title: "Coordinator, Business Development",
            employer: "CPA Ontario",
            location: "Toronto, ON",
            date: "Jul 2012 - Nov 2015",
            description: "Promote the Professional Development Institute wing of CMA Ontario.",
            bulletPoints: [
                "Organized and coordinated corporate events for 20 - 200+ attendees.",
                "Secured sponsorships of up to 5k for speaking events.",
                "Promoted the Professional Development Institute to external organizations to take continuding education programs, or to host their own events in a state of the art meeting and presentation facility.",
            ]
        },
        {
            // CMA Ontario
            icon: <img src="/assets/icons/cma-logo.jpg"  alt="CMA Ontario" />,
            title: "Concierge",
            employer: "CMA Ontario",
            location: "Toronto, ON",
            date: "Jul 2009 - Jul 2012",
            description: "Facilitate events for continuing education, and other speaking engagement. Roles include setting up any technological requirements for the room, and being the first point of contact for instructors and attendees.",
            bulletPoints: [
                "Set up conference rooms with Crestron automation.",
                "Troubleshoot any technical problems (Audio / Video / Internet connection).",
                "Required to be highly adaptable to last minute bookings and accomodations. ",
                "Ensure food and beverage stations are stocked and ready in a timely manner, and ensure health and safety mesaures are followed accurately."

            ]
        
        }
    ]


    return(

        <div className={styles.resumeContainer} id="resume-container">

            
        <Sidebar 
                title="Resume" 
                sections={["Work Experience", "Education", "Credentials", "Recommendations"]} 
                repo="https://github.com/eric-laudrum"
                repoText="GitHub"
                resumeUrl="/assets/pdf/Eric-Laudrum-Resume-2026.pdf"
                customClassName={styles.resumeSidebar} 
            />
            
             {/* ------------------ Jobs ------------------ */}
            <div className={styles.jobsContent}>
                <h2 className="section-title" id="work-experience">Work Experience</h2>

                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        title={job.title}
                        employer={job.employer}
                        location={job.location}
                        date={job.date}

                        description={job.description}
                        icon={job.icon}

                        bulletPoints={job.bulletPoints}
                        
                    />
                ))}

                
                {/*  ------------------ Education ------------------ */}
                <h2 className="section-title" id="education">Education</h2>

                <div className="credentials-grid">
                    {education.map((edu, index) => (
                        <Education
                            key={index}
                            title={edu.title}
                            school={edu.school}
                            date={edu.date}
                            icon={edu.icon}
                            
                        />
                    ))}
                </div>



                {/*  ----- Credentials ----- */}
                <h2 className="section-title" id="credentials">Credentials</h2>

                <div className="credentials-grid">
                    {certificates.map((cert, index) => (
                        <Credential
                            key={index}
                            title={cert.title}
                            date={cert.date}
                            fileName={cert.fileName}
                            description={cert.description}
                            icon={cert.icon}
                            
                        />
                    ))}
                </div>

                <div>
                    <Recommendations />
                </div>

            </div>                
        </div>
    )
}