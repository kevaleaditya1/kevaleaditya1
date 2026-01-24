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
                // Fetch recent events to get last activity
                const eventsResponse = await fetch('https://api.github.com/users/kevaleaditya1/events/public');
                const events = await eventsResponse.json();

                console.log('GitHub Events:', events);
                console.log('Total events:', events?.length);

                if (events && events.length > 0) {
                    console.log('Latest event:', events[0]);
                    console.log('Event type:', events[0].type);
                    console.log('Event created_at:', events[0].created_at);

                    const lastActivity = new Date(events[0].created_at);
                    const now = new Date();
                    const diffInMs = now - lastActivity;
                    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
                    const diffInDays = Math.floor(diffInHours / 24);

                    console.log('Last activity:', lastActivity);
                    console.log('Current time:', now);
                    console.log('Difference in hours:', diffInHours);
                    console.log('Difference in days:', diffInDays);

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
                    console.log('No events found');
                    setGithubActivity('Active');
                }

                // Get commits for current month using GitHub Search API
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const firstDay = `${year}-${month}-01`;

                // Search for commits by author in current month
                const searchQuery = `author:kevaleaditya1 committer-date:>=${firstDay}`;
                const searchUrl = `https://api.github.com/search/commits?q=${encodeURIComponent(searchQuery)}&per_page=1`;

                console.log('Searching commits with query:', searchQuery);

                const searchResponse = await fetch(searchUrl, {
                    headers: {
                        'Accept': 'application/vnd.github.cloak-preview+json'
                    }
                });

                const searchData = await searchResponse.json();
                const commitCount = searchData.total_count || 0;

                console.log('Monthly commits from GitHub Search API:', commitCount);
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
                            Full-stack Web developer, passionate about building innovative Open Source solutions that solve real-world problems.
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
                            <a href="https://docs.google.com/document/d/1jwKJ87gIC88NY-b8obXYzs_dKZp4_DSWX4Dc25OfnjI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary-roni" download>
                                <FaFileDownload /> View Resume
                            </a>
                        </div>
                    </div>

                    {/* Right side - Profile image */}
                    <div className="hero-profile">
                        <div className="profile-image-wrapper">
                            <img
                                src="/aditya-pfp.png"
                                alt="Aditya Kevale"
                                className="profile-image"
                            />
                            <div
                                className="status-indicator"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                onClick={() => window.location.reload()}
                                title="Click to refresh"
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
