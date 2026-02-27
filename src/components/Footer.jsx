import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="nav-logo-icon">☕</div>
              <span className="nav-logo-text" style={{ color: 'var(--cream)' }}>
                LUXE BREW
              </span>
            </div>
            <p className="footer-brand-desc">
              Lagos' premier coffee experience. Where every cup is a celebration 
              of craft, origin, and community. Premium coffee, accessible to all.
            </p>
            <div className="footer-socials">
              {['📸', '🐦', '📘', '🎵'].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="footer-social"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#pastries">Pastries</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Private Tastings</a></li>
              <li><a href="#">Events & Catering</a></li>
              <li><a href="#">Corporate Orders</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Bean Subscriptions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Visit Us</h4>
            <ul className="footer-links">
              <li><a href="#">24 Adeola Odeku St,</a></li>
              <li><a href="#">Victoria Island, Lagos</a></li>
              <li><a href="#">Nigeria</a></li>
              <li style={{ marginTop: '12px' }}>
                <a href="#">Mon–Fri: 6AM–10PM</a>
              </li>
              <li><a href="#">Sat–Sun: 7AM–11PM</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2024 LUXE BREW Lagos. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
