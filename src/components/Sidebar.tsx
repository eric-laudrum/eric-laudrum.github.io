export default function Sidebar(){

     return(

        <div className="left-sidebar" id="resume">

            <h2 className="section-title">Resume</h2>

            {/* ----- Personal Information ----- */}
            <div className="personal-info">

                <img className="resume-photo" src="assets/park.jpg" alt="no image" style={{ height:"8em"}}/>
                
                <h3 className="sub-title" style={{marginTop:"1em", fontSize:"1.5em"}}>Eric Laudrum</h3>
                <p>Web Developer</p>
                <p>Kitchener, ON, Canada</p>

                <div className="resume-nav" style={{ display:"flex", flexDirection:"column", marginTop: "1em"}}>

                    <a className="resume-link" href="#work-experience">Work Experience</a>
                    <a className="resume-link" href="#education">Education</a>
                    <a className="resume-link" href="#credentials">Credentials</a>

                </div>
                
            

            </div>   
        </div>


     )
}