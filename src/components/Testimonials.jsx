import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    text: "LUXE BREW changed my morning routine completely. The Lagos Espresso is absolutely world-class. I've had coffee in Milan, Melbourne, and Tokyo — this rivals them all.",
    author: 'Adaeze Okonkwo',
    role: 'CEO, Meridian Capital',
    initials: 'AO',
    stars: 5,
  },
  {
    text: "What I love most is the atmosphere. It feels premium without being pretentious. As a startup founder, it's become my second office. The Wi-Fi is blazing too!",
    author: 'Tunde Adeyemi',
    role: 'Founder, TechLagos',
    initials: 'TA',
    stars: 5,
  },
  {
    text: "The pastries are divine — the Pistachio Danish is worth crossing the bridge for. And at these prices? They've made luxury genuinely accessible. Genius brand.",
    author: 'Chioma Eze',
    role: 'Food Blogger, @LagosEats',
    initials: 'CE',
    stars: 5,
  },
  {
    text: "I bring all my clients here for meetings. The ambiance speaks volumes before I even start talking business. LUXE BREW elevates everything.",
    author: 'Emeka Nwosu',
    role: 'Managing Partner, ENJ Law',
    initials: 'EN',
    stars: 5,
  },
  {
    text: "As a teacher, I never thought I'd be a regular at a 'luxury' coffee spot. But their Americano at ₦850 is genuinely the best in Lagos. They mean it — for everyone.",
    author: 'Funke Balogun',
    role: 'Secondary School Teacher',
    initials: 'FB',
    stars: 5,
  },
  {
    text: "The Cold Brew Reserve on a hot Lagos afternoon? Life-changing. The staff remember your name by your second visit. That's the real luxury.",
    author: 'Yusuf Abdullahi',
    role: 'Creative Director, Pulse',
    initials: 'YA',
    stars: 5,
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What Lagos<br />Is Saying</h2>
          <p className="section-subtitle">
            From boardrooms to classrooms, LUXE BREW has become the city's favorite brew spot.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="testimonial-stars">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="testimonial-star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.initials}</div>
                <div>
                  <div className="testimonial-author-name">{item.author}</div>
                  <div className="testimonial-author-role">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
