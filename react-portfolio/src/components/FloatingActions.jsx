import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import './FloatingActions.css';

const FloatingActions = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Book a Call Button */}
            <motion.a
                href="mailto:adityakevale1@gmail.com"
                className="book-call-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaCalendarAlt />
                <span>Book a Call</span>
            </motion.a>

            {/* Back to Top Button */}
            <motion.button
                className="back-to-top-btn"
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ↑
            </motion.button>
        </>
    );
};

export default FloatingActions;
