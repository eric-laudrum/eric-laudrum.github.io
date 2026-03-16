import React, { useState } from 'react';
import Image from 'next/image';

interface CredentialProps{ 
    title: string;
    date: string;
    fileName: string;
}

const Credential: React.FC<CredentialProps> = ({ title, date, fileName }) =>{

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);

    // Image path
    const imagePath = `/assets/certificates/${fileName}`;

    return(
        <div className="credential">
            <div className="cred-text">
                <div className="cred-left">
                    <h3 className="cred-title">
                        {title}
                    </h3>
                    <ul>
                        <li className="cred-detail">{date}</li>
                    </ul>
                </div>
            </div>

            <div className="cred-right">
                <button className="view-doc" onClick={ togglePopup }>View</button>

                <div className={`pop-up ${isOpen ? 'active' : ''}`} onClick={togglePopup}>
                    <div className="pop-up-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            className="cred-img" 
                            src={imagePath} 
                            alt={title} 
                        />
                        <button className="back-button" onClick={togglePopup}>Close</button>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default Credential;