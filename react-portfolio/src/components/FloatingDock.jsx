import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaTrophy, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import './FloatingDock.css';

const FloatingDock = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const dockItems = [
        { icon: <FaHome />, label: 'Home', href: '#home' },
        { icon: <FaUser />, label: 'About', href: '#about' },
        { icon: <FaCode />, label: 'Skills', href: '#skills' },
        { icon: <FaBriefcase />, label: 'Projects', href: '#projects' },
        { icon: <FaGraduationCap />, label: 'Education', href: '#education' },
        { icon: <FaTrophy />, label: 'Achievements', href: '#achievements' },
        { icon: <FaEnvelope />, label: 'Contact', href: '#contact' }
    ];

    return (
        <motion.div
            className="floating-dock"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <div className="dock-container">
                {dockItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        className="dock-item"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{
                            y: hoveredIndex === index ? -20 : 0,
                            scale: hoveredIndex === index ? 1.4 : 1
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default FloatingDock;
