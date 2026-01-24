import { motion } from 'framer-motion';
import './About.css';
import GitHubActivity from './GitHubActivity';

const About = () => {
    return (
        <section className="section about-roni" id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    about
                </motion.h2>

                <motion.div
                    className="about-content-roni"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p>
                        I'm a <strong>scalable, open-source systems</strong> empowering communities and solving real-world problems, impact-first.
                    </p>

                    <p>
                        <strong>Founder + Aanaa.blog:</strong> A Blogging Site for sharing my thoughts , experiences and projects.
                    </p>

                    <div className="about-stack">
                        <p><strong>Stack:</strong></p>
                        <div className="stack-tags">
                            <span className="stack-tag">Python</span>
                            <span className="stack-tag">JavaScript</span>
                            <span className="stack-tag">TypeScript</span>
                            <span className="stack-tag">React</span>
                            <span className="stack-tag">Node.js</span>
                            <span className="stack-tag">MongoDB</span>
                            <span className="stack-tag">Blockchain</span>
                            <span className="stack-tag">AI/ML</span>
                        </div>
                    </div>
                </motion.div>

                <GitHubActivity />
            </div>
        </section>
    );
};

export default About;
