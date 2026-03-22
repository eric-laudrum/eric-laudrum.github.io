import ImageCarousel from "@/components/ImageCarousel";

export default function ContractorConnect(){

    const projectSummaryPDF = "/assets/pdf/ProjectSummary.pdf"
    const projectPlanPDF = "/assets/pdf/ProjectPlan.pdf"
    const projectVisionPDF = "/assets/pdf/ProjectVision.pdf"
    const softwareRequirementsPDF = "/assets/pdf/softwareRequirementsAnalysis.pdf"
    const statusReportPDF = "/assets/pdf/statusReport.pdf"

    const activityDiagramPDF = "/assets/pdf/activityDiagram.pdf"
    const dataFlowPDF = "/assets/pdf/dataFlowDiagram.pdf"
    const normalizedDataModelPDF = "/assets/pdf/normalizedDataModel.pdf"
    const sequenceDiagramPDF = "/assets/pdf/sequenceDiagram.pdf"
    const umlDiagramPDF = "/assets/pdf/umlDiagram.pdf"

    const systemImplementation = "https://georgebrowncollege.sharepoint.com/:p:/r/sites/Capstone_jabeab/Shared%20Documents/General/Project%20Documents/in%20progress/System%20Implementation%201%20.pptx?d=wd6257991cc8f428091d131f3d3b8b5e1&csf=1&web=1&e=L652nz"

    const figmaLink = "https://www.figma.com/proto/3oCa6OhkkkkVvA9YbuAmgZ/Contractor-Connect--Copy-?node-id=0-1&t=YKylebIu3parvFDt-1"

    const ccMockupImages = [
        "/assets/mockups/CC-1.jpg",
        "/assets/mockups/CC-2.jpg",
        "/assets/mockups/contractor-connect-mockup1.jpg",
        "/assets/mockups/contractor-connect-mockup2.jpg",
        "/assets/mockups/cc-new-project.jpg",
        "/assets/mockups/cc-bids.jpg",
        "/assets/mockups/cc-compare.jpg",
        "/assets/mockups/cc-contractor.jpg",
        "/assets/mockups/cc-con-projects.jpg",
        "/assets/mockups/cc-con-project-details.jpg",
        "/assets/mockups/cc-con-browse.jpg",
        "/assets/mockups/cc-con-bids.jpg",
        "/assets/mockups/cc-con-bid-details.jpg",
        "/assets/mockups/cc-con-make-bid.jpg",
        "/assets/mockups/cc-con-place-bid.jpg"
    ];
    
    return(

        <div className="section-container" id="cc_overview">

            {/* ----- 1 Intro ----- */}


            <div className="right-container">
                <img className="solo-project-img" src="/assets/mockups/CC-2.jpg" />
            </div>






            {/* ----- 3 Project Summary ----- */}



            <p style={{marginTop:"2rem"}}>
                Contractor Connect is a software website designed to create a direct channel between contractors, 
                skilled labor workers, and clients. 
                It helps workers gain steady access to projects while enabling customers to avoid the hassle of shopping around for prices. 
                By simplifying and automating the estimating process, Contractor Connect ensures timely, accurate, and transparent project quotes. 

            </p>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={projectSummaryPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"   
                >
                    View Project Summary (PDF)
                </a>
            </div>




            {/* ----- 3 Project Plan ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_project-plan">Project Plan</h3>

            <p>Contractor Connect is a digital marketplace designed to streamline the process for homeowners to connect and engage with local service professionals. 
                By creating a centralized system for contractor information, peer reviews, and job-bidding, the platform removes the difficulties of researching contractors and gathering quotes. 
                Our mission is to create a welcome and easily accessible environment to provide value for both homeowners and contractors. 
            </p>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={projectPlanPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"   
                >
                    View Project Plan (PDF)
                </a>
            </div>
        

            {/* ----- 4 Project Vision ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_project-vision">Project Vision</h3>

            <p>
                The goal of this project is to build an online platform that connects people with local
                contractors to get their job done quickly and professionally.
                Users can choose their contractor from the available bidders on their task to ensure that they are connected
                with the right person. Contractors can provide their estimates for various tasks. In addition, people receive
                the best deals and services from local contractors.
            </p>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={projectVisionPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Project Vision (PDF)
                </a>
            </div>


            {/* ----- 5 Technological Requirements ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_project-requirements">Software Requirements Analysis and Design</h3>

            <p>
                 Contractor Connect is a new, self-contained web application that matches homeowners with local contractors. 
                 Today, most people rely on word of mouth, scattered social posts, phone calls, spreadsheets or email to request quotes and keep track of work. 
                 Our app replaces that messy process. Compared with local listing boards and gig platforms, Contractor Connect focuses on small and medium home projects, uses structured bids so prices are easy to compare, keeps reviews simple, and includes basic in-app payments. 
                 The main stakeholders are homeowners, contractors, an administrator for moderation, the instructor, teaching assistants for review, and our development team. 
                 In this release, we will deliver the essentials: user accounts, project posting, project browsing and search, bidding, bid review and selection, a simple dashboard, reviews, and basic payment handling.
            </p>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={softwareRequirementsPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Project Requirements (PDF)
                </a>
            </div>




            {/* ----- 6 Diagrams ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_diagrams">Diagrams</h3>

           <div className="image-carousel" 
                style={{ maxWidth: '800px', margin: '0 auto' }}>
                <ImageCarousel imageUrls={[
                    <img key="1" src="/assets/diagrams/umlDiagram.jpg" alt="UML" />,
                    <img key="2" src="/assets/diagrams/activityDiagram.jpg" alt="Activity" />,
                    <img key="3" src="/assets/diagrams/dataFlowDiagram.jpg" alt="Data Flow" />,
                    <img key="4" src="/assets/diagrams/normalizedDataModel.jpg" alt="Data Model" />,
                    <img key="5" src="/assets/diagrams/sequenceDiagram.jpg" alt="Sequence" />,
                ]} />

            </div>


            {/* Show PDF Buttons */}


            {/* UML */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={umlDiagramPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View UML Diagram (PDF)
                </a>
            </div>
            {/* Activity Diagram */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={activityDiagramPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Activity Diagram (PDF)
                </a>
            </div>
            {/* Data Flow Diagram */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={dataFlowPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Data Flow Diagram (PDF)
                </a>
            </div>
            {/* Normalized Data Model Diagram */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={ normalizedDataModelPDF } 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Normalized Data Model (PDF)
                </a>
            </div>

            {/* Sequence Diagram */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={ sequenceDiagramPDF } 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Sequence Diagram (PDF)
                </a>
            </div>







            {/* ----- 7 Figma ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_prototype">Prototype</h3>

            <div className="image-carousel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <ImageCarousel imageUrls={ccMockupImages.map((src, i) => (
                    <img key={i} src={src} alt={`Mockup ${i + 1}`} />
                ))} />
            </div>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={figmaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Prototype (Figma)
                </a>
            </div>

            {/* ----- 8 System Implementation ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_system-implementation">System Implementation</h3>

            <div className="project-img-container">
                <img 
                    className="solo-project-img" id="mockup"
                    src="/assets/mockups/system-implementation-ppt.jpg" 
                    style={{
                        width: "50vw",
                        display: "flex",
                        flexShrink: 0,

                    }}
                />

            </div>
            
            <p>
                 Contractor Connect is a new, self-contained web application that matches homeowners with local contractors. 
                 Today, most people rely on word of mouth, scattered social posts, phone calls, spreadsheets or email to request quotes and keep track of work. 
                 Our app replaces that messy process. Compared with local listing boards and gig platforms, Contractor Connect focuses on small and medium home projects, uses structured bids so prices are easy to compare, keeps reviews simple, and includes basic in-app payments. 
                 The main stakeholders are homeowners, contractors, an administrator for moderation, the instructor, teaching assistants for review, and our development team. 
                 In this release, we will deliver the essentials: user accounts, project posting, project browsing and search, bidding, bid review and selection, a simple dashboard, reviews, and basic payment handling.
            </p>

            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={ systemImplementation } 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View System Implementation (PPT)
                </a>
            </div>
            



            {/* ----- 8 Status Report ----- */}
            <hr style={{margin: "3em"}}/>
            <h3 className="solo-project-title" id="cc_status-report">Status Report</h3>

            <p>This document outlines the vision, goals, and scope for the Contractor Connect project developed by The Four Group. 
                The goal of this project is to build an online platform that connects people with local contractors to get their job done quickly and professionally.  
                Users can choose their contractor from the available bidders on their task to ensure that they are connected with the right person. 
                Contractors can provide their estimates for various tasks. In addition, people receive the best deals and services from local contractors. 
                The document serves as a guide to align all stakeholders and team members on the purpose, expectations, and boundaries of the project. 
            </p>
            
            {/* Show PDF */}
            <div className='pdf-btn-container'>
                <a className="view-pdf-button"
                    href={statusReportPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Status Report (PDF)
                </a>
            </div>



        
        </div>
    )
}