import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState({});

    const projects = [
        {
            title: 'CredVerify',
            period: 'SEP 2024 - PRESENT',
            description: 'A blockchain-based Academic Credential Verification platform using Ethereum technology. Built blockchain-based platforms to verify academic credentials securely. Integrated RFIs with smart contracts to issue 1000+ credentials securely. Achieved 70% faster verification with smart contract logic.',
            fullDescription: 'Developed a comprehensive blockchain solution for academic credential verification. The platform leverages Ethereum smart contracts to ensure tamper-proof credential issuance and verification. Implemented IPFS for decentralized storage and created an intuitive React-based interface for institutions and verifiers.',
            tech: ['React.js', 'Node.js', 'Prisma', 'BlockChain', 'IPFS'],
            github: 'https://github.com/kevaleaditya1/CredVerify',
            website: 'https://dacv-1.netlify.app/'
        },
        {
            title: 'Detectify',
            period: 'JAN 2024 - FEB 2024',
            description: 'Python-based AI system to detect pneumonia from chest X-ray images using CNN. Developed CNN model with 95%+ accuracy. Processed and augmented 5,000+ images. Enabled real-time classification using OpenCV.',
            fullDescription: 'Built a deep learning system using TensorFlow and Keras for automated pneumonia detection. The CNN model was trained on a large dataset of chest X-rays with extensive data augmentation techniques. Implemented real-time prediction capabilities with OpenCV integration.',
            tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
            github: 'https://github.com/kevaleaditya1/Detectify',
            website: null
        },
        {
            title: 'Musify',
            period: 'JAN 2023 - FEB 2023',
            description: 'Emotion-Based Music Recommendation System using AI and Deep Learning. Trained CNN model on facial emotion datasets. Integrated OpenCV for real-time webcam detection. Automated emotion-based music suggestions.',
            fullDescription: 'Created an intelligent music recommendation system that analyzes user emotions through facial recognition. The system uses a trained CNN model to detect emotions in real-time and suggests appropriate music from a curated database based on the detected mood.',
            tech: ['Python', 'Flutter', 'CNN', 'OpenCV', 'Deep Learning'],
            github: 'https://github.com/kevaleaditya1/Musify',
            website: null
        }
    ];

    const toggleExpand = (index) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="section projects-roni" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    projects
                </motion.h2>

                <div className="projects-grid-roni">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card-roni"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-period">{project.period}</span>
                            </div>

                            <p className="project-description">
                                {expandedProjects[index] ? project.fullDescription : project.description}
                            </p>

                            {project.fullDescription && (
                                <button
                                    className="read-more-btn"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expandedProjects[index] ? 'Read less' : 'Read more'}
                                </button>
                            )}

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.website && (
                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        <FaExternalLinkAlt /> Website
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
