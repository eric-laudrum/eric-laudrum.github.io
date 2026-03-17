import Education from '../../components/Education';

export default function AcademicCredentials(){

    const education = [
        {
            icon: <img src="/assets/icons/gbc-logo.png"  alt="George Brown" />,
            title: "BA Sociology",
            school: "Toronto Metropolitan University (TMU)",
            date: "2011",
        }
    ]
    


    return(
        <div >

            <h2 className="section-title">Credentials</h2>

            <div className="credentials-grid">
                {education.map((education, index) => (
                    <Education
                        key={index}
                        title={education.title}
                        school={education.school}
                        date={education.date}
                      
                        icon={education.icon}
                        
                    />
                ))}
            </div>
            <h3>Notes</h3>

          

        </div>
    )
}