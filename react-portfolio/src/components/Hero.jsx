import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const Hero = () => {
    const [githubActivity, setGithubActivity] = useState('Loading...');
    const [monthlyCommits, setMonthlyCommits] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    const fetchGithubData = useCallback(async () => {
        try {
            // Fetch recent events to get last public activity.
            const eventsUrl = `https://api.github.com/users/kevaleaditya1/events/public?t=${Date.now()}`;
            const eventsResponse = await fetch(eventsUrl, {
                cache: 'no-store',
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Cache-Control': 'no-cache'
                }
            });

            if (!eventsResponse.ok) {
                throw new Error(`GitHub events request failed: ${eventsResponse.status}`);
            }

            const events = await eventsResponse.json();

            if (Array.isArray(events) && events.length > 0) {
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
                setGithubActivity('Active');
            }

            // Get commits for current month using GitHub Search API.
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const firstDay = `${year}-${month}-01`;
            const searchQuery = `author:kevaleaditya1 committer-date:>=${firstDay}`;
            const searchUrl = `https://api.github.com/search/commits?q=${encodeURIComponent(searchQuery)}&per_page=1&t=${Date.now()}`;

            const searchResponse = await fetch(searchUrl, {
                cache: 'no-store',
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Cache-Control': 'no-cache'
                }
            });

            if (searchResponse.ok) {
                const searchData = await searchResponse.json();
                setMonthlyCommits(searchData.total_count || 0);
            } else {
                setMonthlyCommits(0);
            }
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            setGithubActivity('Active');
            setMonthlyCommits(0);
        }
    }, []);

    useEffect(() => {
        fetchGithubData();

        // Keep activity fresh while page stays open.
        const interval = setInterval(fetchGithubData, 5 * 60 * 1000);

        const handleFocus = () => fetchGithubData();
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                fetchGithubData();
            }
        };

        window.addEventListener('focus', handleFocus);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            window.removeEventListener('focus', handleFocus);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [fetchGithubData]);

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
                                <FaEnvelope /> E-mail
                            </a>
                        </div>

                        <div className="hero-buttons">
                            <a href="https://docs.google.com/document/d/1jwKJ87gIC88NY-b8obXYzs_dKZp4_DSWX4Dc25OfnjI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary-roni" download>
                                <FaFileDownload /> View Resume
                            </a>
                            <a href="https://cal.com/kevaleaditya1" target="_blank" rel="noopener noreferrer" className="btn-secondary-roni">
                                <FaCalendarAlt /> Book a Call
                            </a>
                        </div>
                    </div>

                    {/* Right side - Profile image */}
                    <div className="hero-profile">
                        <div className="profile-image-wrapper">
                            <img
                                src="/OG.png"
                                alt="Aditya Kevale"
                                className="profile-image"
                            />
                            <div
                                className="status-indicator"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                onClick={fetchGithubData}
                                title="Click to refresh activity"
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
