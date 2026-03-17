"use client";

import React, { useState } from 'react';


interface EducationProps{ 
    title: string;
    school: string;
    date: string;
    icon?: React.ReactNode;
}


const Education: React.FC<EducationProps> = ({ title, school, date, icon }) =>{

    return(
        <div className="credential">

            {icon && (
                <div className="cred-icon-container">
                    {icon}
                </div>
            )}

            <div className="education-container">

                <h3 className="cred-title">{title}</h3>
                <h4 >{school}</h4>
                <h4>{date}</h4>
            
            </div>
        </div>
    )
}


export default Education;