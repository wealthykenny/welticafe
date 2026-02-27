import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    { icon: '🫘', title: 'Single Origin', desc: 'Beans from Ethiopia, Colombia & Kenya' },
    { icon: '👨‍🍳', title: 'Master Baristas', desc: 'Trained in Milan & Melbourne' },
    { icon: '🏛️', title: 'Luxury Space', desc: 'Designed by Lagos top architects' },
    { icon: '💰', title: 'Fair Pricing', desc: 'Premium taste, honest prices' },
  ];

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-block"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-main">
              <div className="about-image-placeholder">🏪</div>
            </div>
            <motion.div
              className="about-accent-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="about-accent-number">2023</div>
              <div className="about-accent-text">Est. Lagos</div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Crafted for the Bold,<br />
              Brewed for All
            </h2>
            <p className="section-subtitle">
              LUXE BREW was born from a simple belief — that extraordinary coffee 
              shouldn't be reserved for the few. We source the world's finest beans, 
              roast them to perfection, and serve them in a space that makes everyone 
              feel like royalty. From the corner office executive to the hustling 
              entrepreneur, this is your sanctuary.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="about-feature-icon">{feature.icon}</div>
                  <div className="about-feature-title">{feature.title}</div>
                  <div className="about-feature-desc">{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
