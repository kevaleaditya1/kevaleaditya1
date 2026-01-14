import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactMethods = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'kevaleaditya1@gmail.com',
            link: 'mailto:kevaleaditya1@gmail.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91-7385055199',
            link: 'https://wa.me/+917385055199'
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, link: 'https://linkedin.com/in/kevaleaditya1/', label: 'LinkedIn' },
        { icon: <FaGithub />, link: 'https://github.com/kevaleaditya1', label: 'GitHub' }
    ];

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    className="contact-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-intro">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        Feel free to reach out!
                    </p>

                    <div className="contact-methods">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                className="contact-method glass-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="contact-icon">{method.icon}</div>
                                <h3>{method.title}</h3>
                                <p>{method.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ y: -5, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <footer className="footer">
                <p>&copy; 2026 Aditya Kevale. Built with React & passion.</p>
            </footer>
        </section>
    );
};

export default Contact;
