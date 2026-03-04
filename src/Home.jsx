import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = document.querySelectorAll('.animate-on-scroll');
    animatedEls.forEach((el) => observer.observe(el));

    const counters = document.querySelectorAll('.stat-number[data-target]');
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const suffix = entry.target.getAttribute('data-suffix') || '';
            animateCounter(entry.target, target, suffix);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObserver.observe(el));

    return () => {
      observer.disconnect();
      countObserver.disconnect();
    };
  }, []);

  const animateCounter = (el, target, suffix) => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 25);
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Over 30 Years Experience',
      description: 'Three decades of mastery in embroidery and garment decoration, building lasting partnerships with South Africa\'s leading fashion retailers.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 24h4M22 20h4M30 26h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M6 18h36" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      ),
      title: 'Modern Equipment',
      description: 'State-of-the-art embroidery and printing technology delivering precision, consistency, and superior results on every single order.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6l4.5 9.5L40 17.5l-8 7.5 1.9 11L24 31l-9.9 5 1.9-11-8-7.5 11.5-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Retail-Grade Quality',
      description: 'Trusted by major fashion brands and clothing manufacturers. Every piece meets the exacting standards of national retail chains.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 34l6-14 8 6 6-10 8 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 12H32M40 12V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      ),
      title: 'Reliable Delivery',
      description: 'Efficient production processes and disciplined scheduling ensure your orders are completed on time, every time — no excuses.'
    }
  ];

  const retailers = [
    { name: 'Woolworths', initial: 'W' },
    { name: 'Truworths', initial: 'T' },
    { name: 'Ackermans', initial: 'A' },
    { name: 'Mr Price', initial: 'MP' },
  ];

  const services = [
    { name: 'Embroidery', desc: 'Precision thread work for logos, crests & custom designs', path: '/services/embroidery' },
    { name: 'Sequins', desc: 'High-glamour embellishments for fashion-forward collections', path: '/services/sequins' },
    { name: 'Cording', desc: 'Raised dimensional textures that elevate garment quality', path: '/services/cording' },
    { name: 'DTF Printing', desc: 'Direct-to-film transfers with vibrant, wash-fast results', path: '/services/dtf' },
    { name: 'Screen Printing', desc: 'Bold, durable prints ideal for large-run production', path: '/services/screen-printing' },
    { name: 'Laser Profiling', desc: 'Advanced laser cutting and etching for precision detailing', path: '/services/advanced-laser-profiling' },
  ];

  return (
    <div className="home">

      {/* ─── HERO ─── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-fabric-pattern" />
          <div className="hero-gradient-overlay" />
          <div className="hero-thread-lines">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="thread-line" style={{ '--i': i }} />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge animate-hero">
            <span className="badge-dot" />
            Certified Supplier · National Retail Chains
          </div>

          <h1 className="hero-title animate-hero" style={{ '--delay': '0.1s' }}>
            <span className="title-line">Crafting</span>
            <span className="title-line title-gold">Excellence</span>
            <span className="title-line">in Every Thread</span>
          </h1>

          <p className="hero-subtitle animate-hero" style={{ '--delay': '0.3s' }}>
            Specializing in embroidery, DTF printing, laser cutting, and garment
            decoration for the retail fashion industry. From branded apparel to full
            fashion collections — precision craftsmanship for clothing lines
            distributed nationwide.
          </p>

          <div className="hero-actions animate-hero" style={{ '--delay': '0.45s' }}>
            <a href="/contact" className="btn-primary">
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/services" className="btn-ghost">View Our Services</a>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hero-stats animate-hero" style={{ '--delay': '0.6s' }}>
          <div className="hero-stat-card">
            <span className="stat-number" data-target="30" data-suffix="+">0+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-card">
            <span className="stat-number" data-target="4" data-suffix="">0</span>
            <span className="stat-label">National Retailers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-card">
            <span className="stat-number" data-target="6" data-suffix="">0</span>
            <span className="stat-label">Service Types</span>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ─── CERTIFIED RETAILERS MARQUEE ─── */}
      <section className="retailers-bar">
        <div className="retailers-bar-inner">
          <span className="retailers-label">Certified Supplier to</span>
          <div className="retailers-track">
            <div className="retailers-scroll">
              {[...retailers, ...retailers].map((r, i) => (
                <div key={i} className="retailer-chip">
                  <span className="retailer-initial">{r.initial}</span>
                  <span className="retailer-name">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Built on Decades of <span className="text-gold">Trust</span></h2>
            <p className="section-subtitle">
              When national retailers need garment decoration they can count on —
              from precision embroidery to DTF printing and laser cutting —
              Distinct Embroidery delivers.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card animate-on-scroll"
                style={{ '--card-delay': `${i * 0.12}s` }}
              >
                <div className="feature-icon-wrap">
                  {f.icon}
                  <div className="feature-icon-glow" />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
                <div className="feature-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES STRIP ─── */}
      <section className="services-section">
        <div className="services-bg-pattern" />
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.path}
                className="service-card animate-on-scroll"
                style={{ '--card-delay': `${i * 0.1}s` }}
              >
                <div className="service-number">0{i + 1}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;