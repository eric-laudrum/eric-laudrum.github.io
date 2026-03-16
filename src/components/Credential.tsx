"use client";

import React, { useState } from 'react';


interface CredentialProps{ 
    title: string;
    date: string;
    fileName: string;
    description: string;
    icon?: React.ReactNode;
}

const Credential: React.FC<CredentialProps> = ({ title, date, fileName, description, icon }) =>{

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);
    const imagePath = `/assets/certificates/${fileName}`;

    return(
        <div className="credential">

            {icon && (
                <div className="cred-icon-container">
                    {icon}
                </div>
            )}

            <div className="cred-left">

                <h3 className="cred-title">{title}</h3>
            

                <p className="cred-description">{description}</p>

                <ul>
                    <li className="cred-detail">{date}</li>
                </ul>

            </div>
            

            <div className="cred-right">

                <button className="view-doc" onClick={ togglePopup }>
                    <img 
                        className="cred-img-thumb"
                        src={ imagePath }
                        alt="Preview"
                    />
                </button>

                {/* Pop-up */}
                <div className={`pop-up ${isOpen ? 'active' : ''}`} onClick={togglePopup}>
                    <div className="pop-up-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            className="pop-up-img" 
                            src={imagePath} 
                            alt={title} 
                        />
                        <div className="pop-up-footer">
                            <button className="back-button" onClick={togglePopup}>Close</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Credential;