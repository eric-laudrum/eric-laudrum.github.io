import Credential from '../../components/Credential';

export default function AcademicCredentials(){

    const academics = [
        { 
            icon: <img src="/assets/icons/george-brown-college.png" style={{ width: '40px', height: '30px' }} alt="George Brown" />,
            title: "George Brown - Dean's List",
            date: "Fall 2025",
            fileName: "Dean_list_fall25.jpg",
            description: "Achieved a X.0 GPA for the semester.",

        },
            {
            icon: <img src="/assets/icons/google.png" style={{ width: '30px', height: '30px' }} alt="Google" />,
            title: "Google - Digital Marketing & E-Commerce",
            date: "Fall 2024",
            fileName: "Google-DigitalMarketing&Ecommerce.jpg",
            description: "Learned all elements of E-Commerce.",

        },

    ]


    


    return(
        <div className="section-container" id="academic-credentials">

            <h2 className="section-title">Academic Credentials</h2>

            <h3 className="section-sub-title">College / University</h3>


            {/* ------------------ COLLEGE / UNIVERSITY ------------------  */}
            <div className="credential">
                <div className="cred-left">
                    <h3 className="cred-title">Computer Programming & Analysis</h3>
                    <ul>
                        <li className="cred-detail">George Brown Polytechnic</li>
                        <li className="cred-detail">2024 - 2026</li>
                    </ul>
                </div>
                    <button className="cred-button">
                         <img className="cred-img" src="assets/park.jpg" alt="no image"/>
                    </button>
                <div className="pop-up">
                    <img className="cred-img" src="assets/park.jpg" alt="no image"/>
                    <button className="back-button"/>
                </div>
            </div>



            <div className="credential">
                <div className="cred-left">
                    <h3 className="cred-title">Data Science, Certificate</h3>
                    <ul>
                        <li className="cred-detail">University of Toronto</li>
                        <li className="cred-detail">2020 - 2022</li>
                    </ul>
                </div>
                <div className="cred-right">
                    <div className="cred-frame">
                        <button className="cred-button">
                            <img className="cred-img" src="assets/park.jpg" alt="no image"/>
                        </button>
                    </div>
                </div>
            </div>



            <div className="credential">
                <div className="cred-left">
                    <h3 className="cred-title">BA (Hons.), Sociology</h3>
                    <ul>
                        <li className="cred-detail">Toronto Metropolitan University</li>
                        <li className="cred-detail">2008-2012</li>
                    </ul>
                </div>
                <div className="cred-right">
                    <div className="cred-frame">
                        <button className="cred-button">
                            <img className="cred-img" src="assets/park.jpg" alt="no image"/>
                        </button>
                    </div>
                </div>
            </div>


             {/* ------------------ CERTIFICATES ------------------  */}

            <h2 className="section-sub-title">Certificates</h2>

            <div className="credentials-grid">
                {academics.map((cert, index) => (
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