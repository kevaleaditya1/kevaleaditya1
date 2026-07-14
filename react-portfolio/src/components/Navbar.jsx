import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact'];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    AK
                </motion.div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
