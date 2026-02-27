import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pastriesData = [
  {
    name: 'Croissant au Beurre',
    desc: 'Flaky French butter croissant, 72-hour laminated dough',
    price: '₦1,800',
    emoji: '🥐',
  },
  {
    name: 'Pistachio Danish',
    desc: 'Cream cheese filling, crushed pistachios, honey glaze',
    price: '₦2,200',
    emoji: '🍩',
  },
  {
    name: 'Chocolate Fondant',
    desc: 'Warm center, single-origin Valrhona dark chocolate',
    price: '₦3,500',
    emoji: '🍫',
  },
  {
    name: 'Lagos Chin Chin Parfait',
    desc: 'Traditional chin chin, vanilla mousse, tropical compote',
    price: '₦2,800',
    emoji: '🧁',
  },
  {
    name: 'Almond Financier',
    desc: 'Brown butter almond cake, powdered sugar, berry coulis',
    price: '₦2,000',
    emoji: '🍰',
  },
  {
    name: 'Matcha Tiramisu',
    desc: 'Japanese matcha layered mascarpone, cocoa dust',
    price: '₦3,200',
    emoji: '🍵',
  },
  {
    name: 'Cinnamon Roll Supreme',
    desc: 'Soft brioche, Ceylon cinnamon, cream cheese frosting',
    price: '₦2,400',
    emoji: '🍥',
  },
  {
    name: 'Passion Fruit Tart',
    desc: 'Buttery shortcrust, tangy curd, Italian meringue torch',
    price: '₦2,600',
    emoji: '🥧',
  },
];

const Pastries = () => {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -380 : 380,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section pastries" id="pastries" ref={ref}>
      <div className="container">
        <motion.div
          className="pastries-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Fresh Daily
          </div>
          <h2 className="section-title">Artisan Pastries &<br />Sweet Indulgences</h2>
          <p className="section-subtitle">
            Baked fresh every morning by our pastry chef trained in Paris. 
            The perfect companion to your cup.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '16px' }}>
            <button
              onClick={() => scroll('left')}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--espresso)',
                color: 'var(--cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--espresso)',
                color: 'var(--cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              →
            </button>
          </div>

          <div className="pastries-scroll" ref={scrollRef}>
            {pastriesData.map((pastry, index) => (
              <motion.div
                key={pastry.name}
                className="glass-card pastry-card"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <div className="pastry-card-image">
                  <div className="pastry-image-placeholder">
                    {pastry.emoji}
                  </div>
                </div>
                <div className="pastry-card-info">
                  <h3 className="pastry-card-name">{pastry.name}</h3>
                  <p className="pastry-card-desc">{pastry.desc}</p>
                  <div className="pastry-card-bottom">
                    <span className="pastry-price">{pastry.price}</span>
                    <motion.button
                      className="pastry-add-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pastries;
