import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">
              Visit Us or<br />
              Say Hello
            </h2>
            <p className="section-subtitle">
              Whether you want to book a private tasting, reserve a table for your team, 
              or simply ask about our beans — we'd love to hear from you.
            </p>

            <div className="contact-info-cards">
              <motion.div
                className="contact-info-card"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="contact-info-icon bg-gold">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">
                    24 Adeola Odeku Street, Victoria Island, Lagos
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="contact-info-card"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="contact-info-icon bg-green">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">+234 901 234 5678</div>
                </div>
              </motion.div>

              <motion.div
                className="contact-info-card"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="contact-info-icon bg-purple">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">hello@luxebrew.ng</div>
                </div>
              </motion.div>

              <motion.div
                className="contact-info-card"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="contact-info-icon bg-gold">🕐</div>
                <div>
                  <div className="contact-info-label">Hours</div>
                  <div className="contact-info-value">
                    Mon–Fri: 6AM–10PM | Sat–Sun: 7AM–11PM
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {!submitted ? (
              <>
                <h3 className="contact-form-title">Send us a Message</h3>
                <p className="contact-form-desc">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="Adaeze"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocused('firstName')}
                        onBlur={() => setFocused('')}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Okonkwo"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+234 901 234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="tasting">Private Tasting</option>
                      <option value="events">Events & Catering</option>
                      <option value="careers">Careers</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message ✨</span>
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="form-success-icon">✅</div>
                <h3 className="form-success-title">Message Sent!</h3>
                <p className="form-success-text">
                  Thank you for reaching out. Our team will respond within 24 hours.
                  In the meantime, come grab a coffee! ☕
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
