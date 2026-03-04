import { useEffect } from 'react';
import './Cording.css';

const Cording = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cording-page">

      {/* ── HERO ── */}
      <section className="cord-hero">
        <div className="cord-hero-bg">
          <div className="cord-grid" />
          <div className="cord-overlay" />
          <div className="cord-lines">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="cord-line" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="cord-hero-content">
          <span className="cord-eyebrow aos">Our Services</span>
          <h1 className="cord-title aos" style={{ '--d': '0.1s' }}>
            The Elegance of <em>Cording</em>
          </h1>
          <p className="cord-subtitle aos" style={{ '--d': '0.25s' }}>
            Cording is a decorative technique where a thin, raised cord is sewn onto fabric
            to create patterns, outlines, or textures. It adds a 3D effect and elegance to
            clothing, making designs look more detailed and stylish. Cording is often used
            on traditional outfits, embroidery, or for highlighting certain parts of a design.
          </p>
          <div className="cord-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="cord-hero-caption aos" style={{ '--d': '0.4s' }}>
            precise raised detailing · traditional elegance · 3d textured finish
          </p>
        </div>
        <div className="cord-hero-scroll">
          <div className="cord-scroll-line" />
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section className="cord-showcase-section">
        <div className="cord-showcase-inner">
          <div className="cord-showcase-photo">
            <img
              src="https://github.com/randr2405/ImagesforPOS/blob/main/Cording.png?raw=true"
              alt="Cording"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
            />
          </div>
          <div className="cord-showcase-text">
            <span className="cord-showcase-tag">01</span>
            <h2 className="cord-showcase-title">Cording</h2>
            <div className="cord-showcase-rule" />
            <p className="cord-showcase-desc">
              Cording is a decorative technique where a thin, raised cord is sewn onto fabric
              to create patterns, outlines, or textures. It adds a 3D effect and elegance to
              clothing, making designs look more detailed and stylish. Cording is often used
              on traditional outfits, embroidery, or for highlighting certain parts of a design.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="cord-features-section">
        <div className="cord-features-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Why Choose Cording</span>
            <h2 className="section-title">Raised <span className="gold-text">Detail</span>, Refined Look</h2>
          </div>

          <div className="cord-features-grid">
            <div className="cord-feature-card aos" style={{ '--d': '0s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 20h24M12 28h24" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 12v24M28 12v24" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="feature-title">3D Texture</h3>
              <p className="feature-desc">
                Creates a raised, dimensional effect that adds depth and visual interest to any design.
              </p>
            </div>

            <div className="cord-feature-card aos" style={{ '--d': '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Elegant Detailing</h3>
              <p className="feature-desc">
                Adds sophistication and refinement, perfect for traditional and premium garments.
              </p>
            </div>

            <div className="cord-feature-card aos" style={{ '--d': '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 16v8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Versatile Application</h3>
              <p className="feature-desc">
                Works beautifully on clothing for various styles and occasions.
              </p>
            </div>

            <div className="cord-feature-card aos" style={{ '--d': '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 24c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
                  <circle cx="24" cy="24" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Pattern Precision</h3>
              <p className="feature-desc">
                Creates clean outlines and intricate patterns with consistent, professional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="cord-applications-section">
        <div className="cord-applications-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Perfect For</span>
            <h2 className="section-title">Where <span className="gold-text">Cording</span> Shines</h2>
          </div>

          <div className="cord-apps-grid">
            <div className="cord-app-card aos" style={{ '--d': '0s' }}>
              <div className="app-number">01</div>
              <h3 className="app-title">Traditional Outfits</h3>
              <p className="app-desc">
                Enhances ethnic wear and cultural garments with elegant raised borders and intricate patterns.
              </p>
            </div>

            <div className="cord-app-card aos" style={{ '--d': '0.1s' }}>
              <div className="app-number">02</div>
              <h3 className="app-title">Embroidery Accents</h3>
              <p className="app-desc">
                Complements embroidered designs by adding definition and highlighting key elements.
              </p>
            </div>

            <div className="cord-app-card aos" style={{ '--d': '0.2s' }}>
              <div className="app-number">03</div>
              <h3 className="app-title">Design Outlining</h3>
              <p className="app-desc">
                Creates crisp borders around logos, motifs, and patterns for a polished finish.
              </p>
            </div>

            <div className="cord-app-card aos" style={{ '--d': '0.3s' }}>
              <div className="app-number">04</div>
              <h3 className="app-title">Premium Garments</h3>
              <p className="app-desc">
                Perfect for high-end fashion pieces that demand attention to detail and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cording;