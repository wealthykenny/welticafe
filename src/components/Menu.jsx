import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const menuData = {
  coffee: [
    {
      name: 'Lagos Espresso',
      price: '₦1,200',
      desc: 'Bold double shot with Ethiopian Yirgacheffe beans, rich crema finish',
      tags: ['Bold', 'Single Origin'],
      emoji: '☕',
      badge: 'popular',
    },
    {
      name: 'Caramel Macchiato Royale',
      price: '₦2,800',
      desc: 'Velvety steamed milk, vanilla, house-made caramel, espresso art',
      tags: ['Sweet', 'Signature'],
      emoji: '🥛',
      badge: 'signature',
    },
    {
      name: 'Cold Brew Reserve',
      price: '₦2,200',
      desc: '18-hour steeped Colombian beans, served over crystal ice with cream',
      tags: ['Cold', 'Smooth'],
      emoji: '🧊',
      badge: 'new',
    },
    {
      name: 'Matcha Latte Luxe',
      price: '₦2,500',
      desc: 'Ceremonial grade Uji matcha, oat milk, honey drizzle',
      tags: ['Matcha', 'Healthy'],
      emoji: '🍵',
    },
    {
      name: 'Turkish Delight',
      price: '₦1,800',
      desc: 'Traditional ibrik-brewed coffee with cardamom and raw sugar',
      tags: ['Traditional', 'Spiced'],
      emoji: '🫖',
    },
    {
      name: 'Affogato Supreme',
      price: '₦3,200',
      desc: 'Double espresso over vanilla bean gelato with dark chocolate shavings',
      tags: ['Dessert', 'Indulgent'],
      emoji: '🍨',
      badge: 'popular',
    },
  ],
  specialty: [
    {
      name: 'Eko Chai Latte',
      price: '₦2,000',
      desc: 'Spiced masala chai with Lagos honey and frothed milk',
      tags: ['Spiced', 'Warm'],
      emoji: '🫖',
      badge: 'popular',
    },
    {
      name: 'Golden Turmeric Latte',
      price: '₦2,200',
      desc: 'Anti-inflammatory turmeric, ginger, oat milk, agave nectar',
      tags: ['Wellness', 'Caffeine-Free'],
      emoji: '✨',
      badge: 'new',
    },
    {
      name: 'Rose Petal Mocha',
      price: '₦3,000',
      desc: 'Dark chocolate, rose water, espresso, topped with edible flowers',
      tags: ['Floral', 'Luxe'],
      emoji: '🌹',
      badge: 'signature',
    },
  ],
  classics: [
    {
      name: 'Americano',
      price: '₦850',
      desc: 'Clean, simple, bold — the everyday essential',
      tags: ['Classic', 'Bold'],
      emoji: '☕',
    },
    {
      name: 'Cappuccino',
      price: '₦1,500',
      desc: 'Equal parts espresso, steamed milk, and microfoam',
      tags: ['Classic', 'Balanced'],
      emoji: '☕',
      badge: 'popular',
    },
    {
      name: 'Flat White',
      price: '₦1,600',
      desc: 'Velvety microfoam with ristretto shots, Melbourne style',
      tags: ['Smooth', 'Creamy'],
      emoji: '🥛',
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffee');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const tabs = [
    { key: 'coffee', label: 'Signature Coffee' },
    { key: 'specialty', label: 'Specialty Drinks' },
    { key: 'classics', label: 'Classics' },
  ];

  return (
    <section className="section menu" id="menu" ref={ref}>
      <div className="container">
        <motion.div
          className="menu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Our Menu
          </div>
          <h2 className="section-title">Exceptional Brews,<br />Unforgettable Flavors</h2>
          <p className="section-subtitle">
            Every cup tells a story of origin, craft, and passion. From our signature 
            blends to timeless classics, discover your new favorite.
          </p>
        </motion.div>

        <motion.div
          className="menu-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`menu-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="menu-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                className="glass-card menu-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.badge && (
                  <span className={`menu-card-badge badge-${item.badge}`}>
                    {item.badge}
                  </span>
                )}
                <div className="menu-card-image">
                  <div className="menu-card-image-placeholder">
                    {item.emoji}
                  </div>
                </div>
                <div className="menu-card-top">
                  <h3 className="menu-card-name">{item.name}</h3>
                  <span className="menu-card-price">{item.price}</span>
                </div>
                <p className="menu-card-desc">{item.desc}</p>
                <div className="menu-card-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="menu-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
