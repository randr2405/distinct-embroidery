import { useEffect } from 'react';
import './Screenprinting.css';

const ScreenPrinting = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="screen-page">

      {/* ── HERO ── */}
      <section className="screen-hero">
        <div className="screen-hero-bg">
          <div className="screen-grid" />
          <div className="screen-overlay" />
          <div className="screen-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="screen-particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="screen-hero-content">
          <span className="screen-eyebrow aos">Our Services</span>
          <h1 className="screen-title aos" style={{ '--d': '0.1s' }}>
            The Art of <em>Screen Printing</em>
          </h1>
          <p className="screen-subtitle aos" style={{ '--d': '0.25s' }}>
            Screen printing is a method of printing designs onto clothing using a mesh screen, ink, 
            and a stencil. The ink is pressed through the screen onto the fabric, creating a bold, 
            vibrant, and long-lasting design. It's perfect for t-shirts, hoodies, and other garments, 
            especially for large orders or designs with solid colours.
          </p>
          <div className="screen-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="screen-hero-caption aos" style={{ '--d': '0.4s' }}>
            bold prints · vibrant colours · cost-effective bulk orders
          </p>
        </div>
        <div className="screen-hero-scroll">
          <div className="screen-scroll-line" />
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section className="screen-showcase-section">
        <div className="screen-showcase-inner">
          <div className="screen-showcase-photo">
            <img
              src="https://github.com/randr2405/ImagesforPOS/blob/main/screen%20printign.png?raw=true"
              alt="Screen Printing"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="screen-showcase-text">
            <span className="screen-showcase-tag">02</span>
            <h2 className="screen-showcase-title">Screen Printing</h2>
            <div className="screen-showcase-rule" />
            <p className="screen-showcase-desc">
              Screen printing is a classic method that uses mesh screens, stencils, and ink to transfer 
              bold designs onto fabric. Each colour requires its own screen, making it ideal for designs 
              with solid colours and simple graphics. The ink sits on top of the fabric, creating a thick, 
              durable print that feels slightly raised. This technique is perfect for large batch orders, 
              as it becomes more cost-effective with higher quantities while maintaining consistent, 
              vibrant results.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="screen-features-section">
        <div className="screen-features-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Why Choose Screen Printing</span>
            <h2 className="section-title">Bold <span className="gold-text">Prints</span>, Proven Technique</h2>
          </div>

          <div className="screen-features-grid">
            <div className="screen-feature-card aos" style={{ '--d': '0s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="20" r="3" fill="currentColor"/>
                  <circle cx="30" cy="20" r="3" fill="currentColor"/>
                  <circle cx="24" cy="28" r="3" fill="currentColor"/>
                  <path d="M15 32c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Bold, Vibrant Inks</h3>
              <p className="feature-desc">
                Thick, opaque inks create bold prints with rich, saturated colours that stand out beautifully.
              </p>
            </div>

            <div className="screen-feature-card aos" style={{ '--d': '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="feature-title">Extremely Durable</h3>
              <p className="feature-desc">
                Ink bonds deeply with fabric, resisting cracking, fading, and wear even after many washes.
              </p>
            </div>

            <div className="screen-feature-card aos" style={{ '--d': '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="10" y="12" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 18h16M16 24h16M16 30h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="34" cy="18" r="2" fill="currentColor"/>
                  <circle cx="34" cy="24" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Cost-Effective for Bulk</h3>
              <p className="feature-desc">
                Per-unit cost decreases significantly with larger orders, making it perfect for teams and events.
              </p>
            </div>

            <div className="screen-feature-card aos" style={{ '--d': '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 14l20 20M34 14L14 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
              <h3 className="feature-title">Wide Fabric Range</h3>
              <p className="feature-desc">
                Works excellently on cotton, polyester, blends, and most fabric types for versatile applications.
              </p>
            </div>

            <div className="screen-feature-card aos" style={{ '--d': '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="16" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 22h12M18 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 16V12M20 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Solid Colour Excellence</h3>
              <p className="feature-desc">
                Ideal for designs with solid colours and bold graphics that need consistent, uniform coverage.
              </p>
            </div>

            <div className="screen-feature-card aos" style={{ '--d': '0.5s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 16v8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2" fill="currentColor"/>
                  <circle cx="40" cy="8" r="2" fill="currentColor"/>
                  <circle cx="8" cy="40" r="2" fill="currentColor"/>
                  <circle cx="40" cy="40" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="feature-title">Time-Tested Method</h3>
              <p className="feature-desc">
                Proven technique used for decades, delivering reliable and professional results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="screen-applications-section">
        <div className="screen-applications-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Perfect For</span>
            <h2 className="section-title">Where <span className="gold-text">Screen Printing</span> Shines</h2>
          </div>

          <div className="screen-apps-grid">
            <div className="screen-app-card aos" style={{ '--d': '0s' }}>
              <div className="app-number">01</div>
              <h3 className="app-title">Bulk T-Shirt Orders</h3>
              <p className="app-desc">
                Perfect for large quantities of t-shirts for events, businesses, or organizations needing consistent quality.
              </p>
            </div>

            <div className="screen-app-card aos" style={{ '--d': '0.1s' }}>
              <div className="app-number">02</div>
              <h3 className="app-title">Team Uniforms</h3>
              <p className="app-desc">
                Ideal for sports teams, companies, and schools needing durable, matching apparel for entire groups.
              </p>
            </div>

            <div className="screen-app-card aos" style={{ '--d': '0.2s' }}>
              <div className="app-number">03</div>
              <h3 className="app-title">Simple Logo Designs</h3>
              <p className="app-desc">
                Excellent for bold company logos and branding with solid colours that need crisp, clean lines.
              </p>
            </div>

            <div className="screen-app-card aos" style={{ '--d': '0.3s' }}>
              <div className="app-number">04</div>
              <h3 className="app-title">Promotional Merchandise</h3>
              <p className="app-desc">
                Cost-effective solution for giveaways, promotional items, and branded merchandise in large batches.
              </p>
            </div>

            <div className="screen-app-card aos" style={{ '--d': '0.4s' }}>
              <div className="app-number">05</div>
              <h3 className="app-title">Classic Graphic Tees</h3>
              <p className="app-desc">
                Perfect for streetwear and fashion brands featuring bold graphics and simple, striking designs.
              </p>
            </div>

            <div className="screen-app-card aos" style={{ '--d': '0.5s' }}>
              <div className="app-number">06</div>
              <h3 className="app-title">Hoodies & Sweatshirts</h3>
              <p className="app-desc">
                Works beautifully on heavier fabrics, delivering thick, vibrant prints that last for years.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScreenPrinting;