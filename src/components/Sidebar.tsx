export default function Sidebar(){

     return(

        <div className="left-sidebar" id="resume">

            <h2 className="section-title">Resume</h2>

            {/* ----- Personal Information ----- */}
            <div className="personal-info">

                <img className="resume-photo" src="assets/park.jpg" alt="no image" style={{ height:"8em"}}/>
                
                <h3 className="sub-title" style={{marginTop:"1em"}}>Eric Laudrum</h3>
                <p>Web Developer</p>
                <p>Kitchener, ON, Canada</p>
            

            </div>   
        </div>


     )
}