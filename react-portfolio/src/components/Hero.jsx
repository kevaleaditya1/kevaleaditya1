import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [githubActivity, setGithubActivity] = useState('Loading...');
    const [monthlyCommits, setMonthlyCommits] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Fetch GitHub activity and monthly commits
        const fetchGithubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/kevaleaditya1/events/public');
                const events = await response.json();

                if (events && events.length > 0) {
                    const lastActivity = new Date(events[0].created_at);
                    const now = new Date();
                    const diffInMs = now - lastActivity;
                    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
                    const diffInDays = Math.floor(diffInHours / 24);

                    if (diffInHours < 1) {
                        setGithubActivity('Just now');
                    } else if (diffInHours < 24) {
                        setGithubActivity(`${diffInHours}h ago`);
                    } else if (diffInDays === 1) {
                        setGithubActivity('1d ago');
                    } else {
                        setGithubActivity(`${diffInDays}d ago`);
                    }
                } else {
                    setGithubActivity('Recently');
                }

                // Count commits in current month
                const now = new Date();
                const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

                let commitCount = 0;
                for (const event of events) {
                    if (event.type === 'PushEvent') {
                        const eventDate = new Date(event.created_at);
                        if (eventDate >= firstDayOfMonth) {
                            commitCount += event.payload.commits ? event.payload.commits.length : 0;
                        }
                    }
                }
                setMonthlyCommits(commitCount);

            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setGithubActivity('Active');
                setMonthlyCommits(0);
            }
        };

        fetchGithubData();
    }, []);

    return (
        <section className="hero-roni" id="home">
            <div className="hero-container">
                <motion.div
                    className="hero-content-roni"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Left side - Text content */}
                    <div className="hero-text">
                        <h1 className="hero-name">Aditya Kevale</h1>
                        <p className="hero-bio">
                            Full-stack developer, passionate about building innovative Open Source solutions that solve real-world problems.
                        </p>

                        <div className="hero-status">
                            <span className="status-icon">›</span>
                            <a href="https://aanaa.blog" target="_blank" rel="noopener noreferrer" className="status-text">Currently building @aanaa.blog</a>
                        </div>

                        <div className="hero-links">
                            <a href="https://github.com/kevaleaditya1" target="_blank" rel="noopener noreferrer" className="hero-link">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/kevaleaditya1" target="_blank" rel="noopener noreferrer" className="hero-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="mailto:kevaleaditya1@gmail.com" className="hero-link">
                                <FaEnvelope /> Contact
                            </a>
                        </div>

                        <div className="hero-buttons">
                            <a href="../Resume.pdf" className="btn-primary-roni" download>
                                <FaFileDownload /> View Resume
                            </a>
                        </div>
                    </div>

                    {/* Right side - Profile image */}
                    <div className="hero-profile">
                        <div className="profile-image-wrapper">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya"
                                alt="Aditya Kevale"
                                className="profile-image"
                            />
                            <div
                                className="status-indicator"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <span className="status-dot"></span>
                                <span className="status-time">{githubActivity}</span>
                                {showTooltip && (
                                    <div className="status-tooltip">
                                        {monthlyCommits} commits this month
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
