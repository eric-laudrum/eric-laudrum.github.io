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

            <div className="job-container">

                <h3 className="cred-title">{title}</h3>
                <h4 >{employer}</h4>
                
         
                <h4 style={{ fontStyle: 'italic' }}>{location}</h4>
                <h4>{date}</h4>
            
        

                <p className="cred-description">
                    {description}
                </p>
            </div>
        </div>
    )
}


export default Job;