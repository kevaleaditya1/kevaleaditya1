import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
        },
        {
            title: 'Web Development',
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack']
        },
        {
            title: 'Databases',
            skills: ['Prisma', 'MySQL', 'PostgreSQL']
        },
        {
            title: 'Technologies',
            skills: ['Blockchain', 'IPFS', 'TensorFlow', 'Keras', 'OpenCV', 'Deep Learning']
        }
    ];
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.45 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                        >
                            <div className="skill-head">
                                <h3>{category.title}</h3>
                                <span className="skill-count">{category.skills.length} skills</span>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.06, y: -2 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
