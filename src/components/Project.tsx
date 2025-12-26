import React from "react";
import dolphin from '../assets/images/Dolphin_santafe.png';
import Student from '../assets/images/Student_Web.png';
import rental  from '../assets/images/rentroom_web.png';
import fer     from '../assets/images/Emotion_Cam_Detect.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://phenikaa-x.com/perception-data" target="_blank" rel="noreferrer"><img src={dolphin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://phenikaa-x.com/perception-data" target="_blank" rel="noreferrer"><h2>Phenikaa-X Autonomous Vehicle</h2></a>
                <p>Developed and optimized high-performance 3D detection models for LiDAR and Camera sensors. 
        Focused on engineering neural network architectures that achieve real-time inference and high precision in complex urban environments, 
        directly deployed on autonomous vehicle platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/VinhQuaan/FER_ELIM" target="_blank" rel="noreferrer"><img src={fer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VinhQuaan/FER_ELIM" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>Engineered an end-to-end Facial Expression Recognition (FER) pipeline focused on identity-invariant analysis. 
        Developed custom scripts for image preprocessing, automated dataset splitting, and deep learning model training, 
        culminating in a real-time inference demo for live emotion detection.</p>
            </div>
            <div className="project">
                <a href="https://github.com/VinhQuaan/StudentManagement" target="_blank" rel="noreferrer"><img src={Student} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VinhQuaan/StudentManagement" target="_blank" rel="noreferrer"><h2>Student Management System</h2></a>
                <p>Developed a full-stack academic platform using Laravel and MySQL. 
        Implemented a robust Role-Based Access Control (RBAC) system to manage course enrollments, 
        grade tracking, and secure user permissions for students, faculty, and administrators.</p>
            </div>
            <div className="project">
                <a href="https://github.com/VinhQuaan/CSE702025-N04-Nhom04" target="_blank" rel="noreferrer"><img src={rental} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VinhQuaan/CSE702025-N04-Nhom04" target="_blank" rel="noreferrer"><h2>Room Rental Marketplace</h2></a>
                <p>Developed a comprehensive property rental platform using Spring Boot and SQL Server. 
        The system features advanced filtering for location and price, Google Maps API integration 
        for spatial visualization, and a complete listing management workflow for landlords and tenants.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;