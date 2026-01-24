import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaXTwitter } from 'react-icons/fa6';
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
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-statement">
                        Open to opportunities in <span className="highlight">full-stack development</span>, <span className="highlight">blockchain</span>, or <span className="highlight">AI/ML</span>. 
                        DM me on <motion.a href="https://linkedin.com/in/kevaleaditya1/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="contact-link">LinkedIn</motion.a> or <motion.a href="mailto:kevaleaditya1@gmail.com" whileHover={{ scale: 1.1 }} className="contact-link">email me</motion.a>.
                    </p>

                    <div className="contact-icons">
                        {[
                            { icon: <FaGithub />, link: 'https://github.com/kevaleaditya1', label: 'GitHub' },
                            { icon: <FaLinkedin />, link: 'https://linkedin.com/in/kevaleaditya1/', label: 'LinkedIn' },
                            { icon: <FaXTwitter />, link: 'https://twitter.com/kevaleaditya1i ', label: 'Twitter' },
                            { icon: <FaEnvelope />, link: 'mailto:kevaleaditya1@gmail.com', label: 'Email' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target={social.label !== 'Email' ? '_blank' : undefined}
                                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="contact-icon-link"
                                whileHover={{ y: -6, scale: 1.2 }}
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
