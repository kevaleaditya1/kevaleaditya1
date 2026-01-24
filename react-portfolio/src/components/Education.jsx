import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const education = [
        {
            period: '2023 - 2026',
            degree: 'B. Tech in Computer Science and Engineering',
            institution: 'A.G. Patil Institute of Technology, Solapur',
            score: 'Currently pursuing final year'
        },
        {
            period: '2020 - 2023',
            degree: 'Diploma in Computer Technology',
            institution: 'A.G. Patil Polytechnic Institute, Solapur',
            score: '77.26%'
        },
        {
            period: '2019 - 2020',
            degree: 'Class X (ICSE Board)',
            institution: 'St. Thomas English Medium School, Solapur',
            score: '76.4%'
        }
    ];

    return (
        <section className="section education" id="education">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.45 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                        >
                            <div className="education-top">
                                <div className="education-period">{edu.period}</div>
                                <div className={`education-pill ${index === 0 ? 'current' : 'completed'}`}>
                                    {index === 0 ? 'Current' : 'Completed'}
                                </div>
                            </div>
                            <div className="education-body">
                                <h3 className="education-title">{edu.degree}</h3>
                                <p className="education-institution">{edu.institution}</p>
                                <p className="education-score">{edu.score}</p>
                            </div>
                            <div className="education-footer">
                                <span className="education-dot" />
                                <span className="education-note">{index === 0 ? 'Actively studying' : 'Program completed'}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
