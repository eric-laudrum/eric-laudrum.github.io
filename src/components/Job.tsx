"use client";

import React, { useState } from 'react';


interface JobProps{ 
    title: string;
    employer: string;
    date: string;
    location: string;
    description: string;
    icon?: React.ReactNode;
}

const Job: React.FC<JobProps> = ({ title, employer, date, location, description, icon }) =>{


    return(
        <div className="credential">

            {icon && (
                <div className="cred-icon-container">
                    {icon}
                </div>
            )}

            <div className="cred-left">

                <h3 className="cred-title">{title}</h3>
                <h4 className="emp-name">{employer}</h4>
                
                <ul>
                    <li className="cred-detail" style={{ fontStyle: 'italic' }}>{location}</li>
                    <li className="cred-detail">{date}</li>
                </ul>

                <p className="cred-description">
                    {description}
                </p>
            </div>
        </div>
    )
}


export default Job;