import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMicrochip, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "PyTorch",
    "MMDetection3D",
    "OpenPCDet",
    "Open3D",
    "Waymo/nuScenes Datasets",
];

const labelsSecond = [
    "C++",
    "CUDA",
    "TensorRT",
    "ONNX",
    "CMake",
    "Eigen",
];

const labelsThird = [
    "PCL (Point Cloud Library)",
    "OpenCV",
    "Kalman Filters",
    "Protobuf",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>3D Computer Vision Research & Training</h3>
                    <p>I conduct advanced research and development for spatial perception systems, specializing in 3D Object Detection and Semantic Segmentation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>High-Performance C++ Deployment</h3>
                    <p>To bridge the gap between research and production, I specialize in implementing AI models within high-efficiency C++ environments. I focus on low-latency execution, meticulous memory management, and high-performance data structures to ensure the perception stack meets the rigorous real-time requirements of autonomous systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x"/>
                    <h3>Multi-Sensor Fusion & Perception Pipelines</h3>
                    <p>I design and implement specialized pipelines for individual sensor modalities, including LiDAR-only 3D detection and Camera-only monocular/stereo vision. My work involves end-to-end data handling—from raw sensor input and extrinsic/intrinsic calibration to 3D feature extraction and temporal tracking—ensuring high-fidelity spatial awareness.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;