import { useEffect } from 'react';
import './Laserprofiling.css';

const Laserprofiling = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="laser-page">

      {/* ── HERO ── */}
      <section className="laser-hero">
        <div className="laser-hero-bg">
          <div className="laser-grid" />
          <div className="laser-overlay" />
          <div className="laser-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="laser-particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="laser-hero-content">
          <span className="laser-eyebrow aos">Our Services</span>
          <h1 className="laser-title aos" style={{ '--d': '0.1s' }}>
            The Precision of <em>Laser Cutting</em>
          </h1>
          <p className="laser-subtitle aos" style={{ '--d': '0.25s' }}>
            Laser cutting is a precise method of cutting or engraving designs using a powerful laser 
            beam. It creates clean, sharp edges and allows for very detailed shapes that can't be done 
            by hand. Laser cutting is perfect for logos, patterns, fabric pieces, acrylics, and custom 
            designs because it's fast, accurate, and leaves a smooth, professional finish.
          </p>
          <div className="laser-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="laser-hero-caption aos" style={{ '--d': '0.4s' }}>
            clean edges · intricate detail · unmatched precision
          </p>
        </div>
        <div className="laser-hero-scroll">
          <div className="laser-scroll-line" />
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section className="laser-showcase-section">
        <div className="laser-showcase-inner">
          <div className="laser-showcase-photo">
            <img
              src="https://github.com/randr2405/ImagesforPOS/blob/main/Lazer.png?raw=true"
              alt="Laser Cutting"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="laser-showcase-text">
            <span className="laser-showcase-tag">03</span>
            <h2 className="laser-showcase-title">Advanced Laser Cutting</h2>
            <div className="laser-showcase-rule" />
            <p className="laser-showcase-desc">
              Advanced laser cutting uses cutting-edge laser technology to cut and engrave with 
              microscopic precision. The focused laser beam vaporizes material along predetermined 
              paths, creating incredibly clean edges and allowing for intricate patterns impossible 
              to achieve manually. This computer-controlled process ensures perfect repeatability, 
              making it ideal for complex logos, detailed patterns, delicate fabric work, and 
              custom acrylic pieces that demand professional-grade accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="laser-features-section">
        <div className="laser-features-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Why Choose Laser Cutting</span>
            <h2 className="section-title">Exceptional <span className="gold-text">Precision</span>, Every Time</h2>
          </div>

          <div className="laser-features-grid">
            <div className="laser-feature-card aos" style={{ '--d': '0s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 8l4 4-4 4M24 8v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 30l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Microscopic Precision</h3>
              <p className="feature-desc">
                Achieves accuracy down to fractions of a millimeter for incredibly detailed and intricate designs.
              </p>
            </div>

            <div className="laser-feature-card aos" style={{ '--d': '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 20h16M16 24h16M16 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M34 10l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Clean, Sharp Edges</h3>
              <p className="feature-desc">
                Creates perfectly smooth cuts with no fraying, rough edges, or material distortion.
              </p>
            </div>

            <div className="laser-feature-card aos" style={{ '--d': '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M12 12l24 24M36 12L12 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Complex Patterns</h3>
              <p className="feature-desc">
                Handles intricate details and complex shapes that are impossible to achieve by hand.
              </p>
            </div>

            <div className="laser-feature-card aos" style={{ '--d': '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <rect x="16" y="16" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 20h8M20 24h8M20 28h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Perfect Repeatability</h3>
              <p className="feature-desc">
                Computer-controlled precision ensures every piece is identical for consistent, professional results.
              </p>
            </div>

            <div className="laser-feature-card aos" style={{ '--d': '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 16l8 8-8 8M32 16l-8 8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="8" r="2" fill="currentColor"/>
                  <circle cx="24" cy="40" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Fast Turnaround</h3>
              <p className="feature-desc">
                Rapid processing speeds allow for quick completion without sacrificing quality or detail.
              </p>
            </div>

            <div className="laser-feature-card aos" style={{ '--d': '0.5s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 12l8 8M12 24l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Multiple Materials</h3>
              <p className="feature-desc">
                Works on fabric, acrylic, leather, wood, and many other materials with equal precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="laser-applications-section">
        <div className="laser-applications-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Perfect For</span>
            <h2 className="section-title">Where <span className="gold-text">Laser Cutting</span> Excels</h2>
          </div>

          <div className="laser-apps-grid">
            <div className="laser-app-card aos" style={{ '--d': '0s' }}>
              <div className="app-number">01</div>
              <h3 className="app-title">Intricate Logos</h3>
              <p className="app-desc">
                Perfect for detailed company logos and branding that require precision cutting and clean edges.
              </p>
            </div>

            <div className="laser-app-card aos" style={{ '--d': '0.1s' }}>
              <div className="app-number">02</div>
              <h3 className="app-title">Custom Patterns</h3>
              <p className="app-desc">
                Creates complex geometric and decorative patterns with microscopic accuracy and consistency.
              </p>
            </div>

            <div className="laser-app-card aos" style={{ '--d': '0.2s' }}>
              <div className="app-number">03</div>
              <h3 className="app-title">Fabric Appliqués</h3>
              <p className="app-desc">
                Cuts delicate fabric pieces for appliqué work with no fraying or rough edges.
              </p>
            </div>

            <div className="laser-app-card aos" style={{ '--d': '0.3s' }}>
              <div className="app-number">04</div>
              <h3 className="app-title">Acrylic Products</h3>
              <p className="app-desc">
                Engraves and cuts acrylic materials for signs, displays, and custom decorative pieces.
              </p>
            </div>

            <div className="laser-app-card aos" style={{ '--d': '0.4s' }}>
              <div className="app-number">05</div>
              <h3 className="app-title">Leather Goods</h3>
              <p className="app-desc">
                Precisely cuts and engraves leather for fashion items, accessories, and custom designs.
              </p>
            </div>

            <div className="laser-app-card aos" style={{ '--d': '0.5s' }}>
              <div className="app-number">06</div>
              <h3 className="app-title">Prototype Development</h3>
              <p className="app-desc">
                Rapidly creates prototypes and samples with exact specifications for testing and refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Laserprofiling;