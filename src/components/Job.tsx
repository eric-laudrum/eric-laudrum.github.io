"use client";

import React, { useState } from 'react';


interface JobProps{ 
    title: string;
    employer: string;
    date: string;
    location: string;
    description: string;
    bulletPoints?: string[];
    icon?: React.ReactNode;
}

const Job: React.FC<JobProps> = ({ 
    title, employer, date, location, description, bulletPoints, icon }) =>{
const [isExpanded, setIsExpanded] = useState(false);

    return(
        <div className="credential">

            {icon && (
                <div className="cred-icon-container">
                    {icon}
                </div>
            )}

            <div className="job-container">

                
                <div className="job-header">
                    <div className="job-info">
                        <h3 className="cred-title">{title}</h3>
                        <h4>{employer}</h4>
                        <h4 style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{location}</h4>
                        <h4 style={{ fontWeight: 'bold' }}>{date}</h4>
                    </div>
                    
                </div>

                {/* Bullet Points */}
                <div className={`bullet-tray ${isExpanded ? 'open' : ''}`}>
                    <div className="bullet-content">
                        <ul className="job-bullets">
                            {bulletPoints?.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                 {/* Expand for description */}
                    {bulletPoints && bulletPoints.length > 0 && (
                        <button 
                            className="expand-btn" 
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "Show Less ↑" : "View Details ↓"}
                        </button>
                    )}
            </div>
        </div>
    )
}


export default Job;