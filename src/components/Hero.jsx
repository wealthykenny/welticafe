import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-shapes">
        <motion.div
          className="hero-shape hero-shape-1"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-shape hero-shape-2"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-shape hero-shape-3"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="hero-badge-dot" />
              Now Open in Victoria Island
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where Coffee<br />
              Meets <span className="hero-title-accent">Lagos</span><br />
              Luxury
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Experience handcrafted coffee from the world's finest beans, artisan pastries, 
              and an atmosphere designed for those who appreciate the extraordinary. 
              Premium taste, accessible to all.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="btn-primary">
                <span>Explore Menu</span>
              </button>
              <button className="btn-secondary">
                Book a Table
              </button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="hero-stat">
                <div className="hero-stat-number">12+</div>
                <div className="hero-stat-label">Coffee Origins</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">4.9★</div>
                <div className="hero-stat-label">Customer Rating</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">₦850</div>
                <div className="hero-stat-label">Starting From</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="hero-image-container">
              <div className="hero-main-image">
                <div className="hero-main-image-placeholder">
                  ☕
                  <span className="hero-placeholder-text">LUXE BREW</span>
                </div>
              </div>

              <motion.div
                className="hero-float-card hero-float-card-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="float-card-row">
                  <div className="float-card-icon green">🌿</div>
                  <div>
                    <div className="float-card-text">100% Organic</div>
                    <div className="float-card-subtext">Single Origin Beans</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-float-card hero-float-card-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="float-card-row">
                  <div className="float-card-icon gold">⭐</div>
                  <div>
                    <div className="float-card-text">2,400+ Reviews</div>
                    <div className="float-card-subtext">Lagos' Top Rated</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-float-card hero-float-card-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                animate2={{ y: [0, -8, 0] }}
              >
                <div className="float-card-row">
                  <div className="float-card-icon purple">🎯</div>
                  <div>
                    <div className="float-card-text">For Everyone</div>
                    <div className="float-card-subtext">Luxury Made Accessible</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
