import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: '🥈',
            title: '1st Runner UP',
            event: 'National Level Hackathon',
            description: 'SYMBIoT Hackathon at VVCE, Mysore'
        },
        {
            icon: '🥇',
            title: '1st Prize',
            event: 'Science Day Competition',
            description: 'Won first prize at Science Day Competition at AGPIT'
        },
        {
            icon: '🥉',
            title: '3rd Prize',
            event: 'MSBTE Project Competition',
            description: 'Project Competition at Anantrao Pawar College of Engineering, Pune'
        },
        {
            icon: '✅',
            title: 'Smart India Hackathon',
            event: 'Selection',
            description: 'Selected at Internal Hackathon of Smart India Hackathon'
        },
    ];

    const leadership = [
        {
            role: 'Treasurer',
            organization: 'CESA Committee, AGPIT Solapur',
            period: 'Oct 2024 - Nov 2025',
            description: 'Led impactful tech & cultural events and workshops, increasing participation by 40%. Managed funds required for events.'
        },
        {
            role: 'Member',
            organization: 'Code Club AGPIT',
            period: 'Oct 2024 - Present',
            description: 'Pioneered strategies and workshops, engaging 100+ students. Coordinated Techathon - a 24-Hour National Level Hackathon.'
        }
    ];

    return (
        <section className="section achievements" id="achievements">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Awards & Achievements
                </motion.h2>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                        >
                            <div className="achievement-badge">Award</div>
                            <div className="achievement-icon">{achievement.icon}</div>
                            <h3>{achievement.title}</h3>
                            <p className="achievement-event">{achievement.event}</p>
                            <p className="achievement-description">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.h3
                    className="subsection-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Leadership & Responsibilities
                </motion.h3>

                <div className="leadership-grid">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={index}
                            className="leadership-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="leadership-meta">
                                <div className="leadership-period">{item.period}</div>
                                <div className="leadership-pill">Leadership</div>
                            </div>
                            <h4>{item.role}</h4>
                            <p className="leadership-org">{item.organization}</p>
                            <p className="leadership-description">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
