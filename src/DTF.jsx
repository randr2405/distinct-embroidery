import { useEffect } from 'react';
import './DTF.css';

const DTF = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dtf-page">

      {/* ── HERO ── */}
      <section className="dtf-hero">
        <div className="dtf-hero-bg">
          <div className="dtf-grid" />
          <div className="dtf-overlay" />
          <div className="dtf-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="dtf-particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="dtf-hero-content">
          <span className="dtf-eyebrow aos">Our Services</span>
          <h1 className="dtf-title aos" style={{ '--d': '0.1s' }}>
            The Precision of <em>DTF Printing</em>
          </h1>
          <p className="dtf-subtitle aos" style={{ '--d': '0.25s' }}>
            DTF printing is a high-quality way of putting designs onto clothing. It works on almost 
            any fabric and doesn't crack or peel easily, so your clothing looks new for longer.
          </p>
          <div className="dtf-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="dtf-hero-caption aos" style={{ '--d': '0.4s' }}>
            vibrant colours · smooth finish · long-lasting durability
          </p>
        </div>
        <div className="dtf-hero-scroll">
          <div className="dtf-scroll-line" />
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section className="dtf-showcase-section">
        <div className="dtf-showcase-inner">
          <div className="dtf-showcase-photo">
            <img
              src="https://github.com/randr2405/ImagesforPOS/blob/main/DTF.png?raw=true"
              alt="DTF Printing"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="dtf-showcase-text">
            <span className="dtf-showcase-tag">01</span>
            <h2 className="dtf-showcase-title">DTF Printing</h2>
            <div className="dtf-showcase-rule" />
            <p className="dtf-showcase-desc">
              DTF printing is a high-quality way of putting designs onto clothing. It works on almost 
              any fabric and doesn't crack or peel easily, so your clothing looks new for longer. 
              It's perfect for detailed logos, photos, and custom designs.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="dtf-features-section">
        <div className="dtf-features-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Why Choose DTF</span>
            <h2 className="section-title">Superior <span className="gold-text">Print</span>, Lasting Quality</h2>
          </div>

          <div className="dtf-features-grid">
            <div className="dtf-feature-card aos" style={{ '--d': '0s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="20" r="3" fill="currentColor"/>
                  <circle cx="30" cy="20" r="3" fill="currentColor"/>
                  <circle cx="24" cy="28" r="3" fill="currentColor"/>
                  <path d="M15 32c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Vibrant Colours</h3>
              <p className="feature-desc">
                Delivers exceptionally bright, rich colours that make designs pop and stand out beautifully.
              </p>
            </div>

            <div className="dtf-feature-card aos" style={{ '--d': '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 20h16M16 24h16M16 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M34 10l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Smooth Finish</h3>
              <p className="feature-desc">
                Creates a professional, smooth texture that feels soft and looks seamless on any garment.
              </p>
            </div>

            <div className="dtf-feature-card aos" style={{ '--d': '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 14l20 20M34 14L14 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
              <h3 className="feature-title">Universal Fabric</h3>
              <p className="feature-desc">
                Works perfectly on cotton, polyester, blends, and almost any fabric type you choose.
              </p>
            </div>

            <div className="dtf-feature-card aos" style={{ '--d': '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="feature-title">Long-Lasting</h3>
              <p className="feature-desc">
                Won't crack, peel, or fade easily—keeps your designs looking fresh wash after wash.
              </p>
            </div>

            <div className="dtf-feature-card aos" style={{ '--d': '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="33" cy="33" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Fine Details</h3>
              <p className="feature-desc">
                Perfect for intricate logos, detailed photos, and complex custom designs with precision.
              </p>
            </div>

            <div className="dtf-feature-card aos" style={{ '--d': '0.5s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 16l8 8-8 8M32 16l-8 8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="8" r="2" fill="currentColor"/>
                  <circle cx="24" cy="40" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Fast Production</h3>
              <p className="feature-desc">
                Quick turnaround times without compromising on quality or design complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="dtf-applications-section">
        <div className="dtf-applications-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Perfect For</span>
            <h2 className="section-title">Where <span className="gold-text">DTF</span> Excels</h2>
          </div>

          <div className="dtf-apps-grid">
            <div className="dtf-app-card aos" style={{ '--d': '0s' }}>
              <div className="app-number">01</div>
              <h3 className="app-title">Custom Logos</h3>
              <p className="app-desc">
                Perfect for detailed company logos and branding with vibrant, accurate colour reproduction.
              </p>
            </div>

            <div className="dtf-app-card aos" style={{ '--d': '0.1s' }}>
              <div className="app-number">02</div>
              <h3 className="app-title">Photo Prints</h3>
              <p className="app-desc">
                Brings high-resolution photos to life on fabric with exceptional clarity and detail.
              </p>
            </div>

            <div className="dtf-app-card aos" style={{ '--d': '0.2s' }}>
              <div className="app-number">03</div>
              <h3 className="app-title">Sports Teams</h3>
              <p className="app-desc">
                Durable enough for athletic wear with vibrant team colours that withstand heavy use.
              </p>
            </div>

            <div className="dtf-app-card aos" style={{ '--d': '0.3s' }}>
              <div className="app-number">04</div>
              <h3 className="app-title">Fashion Designs</h3>
              <p className="app-desc">
                Creates trendy, complex patterns and artwork with smooth, professional finishes.
              </p>
            </div>

            <div className="dtf-app-card aos" style={{ '--d': '0.4s' }}>
              <div className="app-number">05</div>
              <h3 className="app-title">Event Merchandise</h3>
              <p className="app-desc">
                Ideal for concerts, festivals, and events requiring high-quality custom merchandise.
              </p>
            </div>

            <div className="dtf-app-card aos" style={{ '--d': '0.5s' }}>
              <div className="app-number">06</div>
              <h3 className="app-title">Small Batch Orders</h3>
              <p className="app-desc">
                Cost-effective for small quantities without sacrificing quality or detail.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DTF;