import Credential from '../../components/Credential';
import Education from '@/components/Education';

export default function AcademicCredentials(){

    const education = [
        {
            icon: <img src="/assets/icons/gbc-logo.png"  alt="George Brown" />,
            title: "BA Sociology",
            school: "Toronto Metropolitan University (TMU)",
            date: "2011",
        }
    ]


    const certificates = [
          { 
            // GB Dean's List
            icon: <img src="/assets/icons/gbc-logo.png"  alt="George Brown" />,
            title: "George Brown - Dean's List",
            date: "Fall 2025",
            fileName: "Dean_list_fall25.jpg",
            description: "Achieved a X.0 GPA for the semester.",
        },
                {
            // Linked In - Testing Q/A
            icon: <img src="/assets/icons/linkedin-logo.png"  alt="Google" />,
            title: "Hands-On Data Annotation: Applied Machine Learning",
            date: "Jan 2026",
            fileName: "LI-testing-qa.jpg",
            description: " learned fundamental programming concepts through using the Python programming language",
        },
        {
            // Linked In - Data Annotation
            icon: <img src="/assets/icons/linkedin-logo.png"  alt="Google" />,
            title: "Hands-On Data Annotation: Applied Machine Learning",
            date: "Jan 2026",
            fileName: "LI-hands-on-annotation.jpg",
            description: " learned fundamental programming concepts through using the Python programming language",
        },
        {
            // Google E-commerce
            icon: <img src="/assets/icons/google-logo.png" alt="Google" />,
            title: "Google - Digital Marketing & E-Commerce",
            date: "Fall 2024",
            fileName: "Google-DigitalMarketing&Ecommerce.jpg",
            description: "Learned all elements of E-Commerce.",
        },
         {
            icon: <img src="/assets/icons/UofM-logo.png"  alt="Google" />,
            title: "Python for Everybody",
            date: "Aug 2023",
            fileName: "UofMPythonForEverybody.jpg",
            description: " learned fundamental programming concepts through using the Python programming language",

        },
    ]


    return(
        <div >

            <h2 className="section-title">Education</h2>
             {/* ------------------ CERTIFICATES ------------------  */}

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


            <h2 className="section-title">Credentials</h2>

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
        </div>
    )
}

