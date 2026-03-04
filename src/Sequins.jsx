import { useEffect, useState } from 'react';
import './Sequins.css';

const Sequins = () => {
  const [activeType, setActiveType] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const types = [
    {
      id: 'sequins',
      name: 'Sequins',
      tag: '01',
      shortDesc: 'Shiny decorative discs adding sparkle, texture, and glamour.',
      fullDesc: 'Sequins are small, shiny decorative discs that are embroidered onto clothing to add sparkle and texture. They catch the light beautifully, giving outfits a glittery or shimmering effect. Sequins can be used for full designs, borders, logos, or to create eye-catching patterns. They\'re perfect for outfits that need a high fashion, standout look, especially for events, dancewear, kids\' fashion, or anything that needs a little extra shine.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/sequins.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="32" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24 14l2 4-2 4-2-4z" fill="currentColor" opacity="0.3"/>
          <path d="M32 24l4 2-4 2-4-2z" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
    },
    {
      id: 'double-sequins',
      name: 'Double Sequins',
      tag: '02',
      shortDesc: 'Layered sequins creating fuller, richer, textured shimmer.',
      fullDesc: 'Double sequins are sequins that are layered or stitched closely together to give a fuller, richer, and more textured look on clothing. 5mm sequins are slightly larger and create a bold, noticeable sparkle, while 3mm sequins are smaller and give a finer, more delicate shimmer. Using different sizes or double layering adds depth and makes designs stand out beautifully.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/double%20sequins.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="28" cy="28" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="34" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 10l4 4M38 10l-4 4M10 38l4-4M38 38l-4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        </svg>
      ),
    },
    {
      id: 'single-sequins',
      name: 'Single Sequins',
      tag: '03',
      shortDesc: 'Uniform sequins delivering consistent, classic sparkle.',
      fullDesc: 'Single sequins are sequins that are all the same size, giving a uniform and consistent sparkle across a design. They create a clean, classic look and are perfect when you want even shine and texture without any variation in size.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/ChatGPT%20Image%20Mar%204,%202026,%2010_38_45%20PM.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="24" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="24" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="18" cy="36" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="30" cy="36" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 16l-2-2M32 16l2-2M16 32l-2 2M32 32l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="sequins-page">

      {/* ── HERO ── */}
      <section className="seq-hero">
        <div className="seq-hero-bg">
          <div className="seq-grid" />
          <div className="seq-overlay" />
          <div className="seq-sparkles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="seq-sparkle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="seq-hero-content">
          <span className="seq-eyebrow aos">Our Services</span>
          <h1 className="seq-title aos" style={{ '--d': '0.1s' }}>
            The Sparkle of <em>Sequins</em>
          </h1>
          <p className="seq-subtitle aos" style={{ '--d': '0.25s' }}>
            Sequins are small, shiny decorative discs that transform ordinary garments into
            eye-catching masterpieces. From uniform single sequins to richly layered double sequins —
            each technique adds its own unique shimmer and glamour to your designs.
          </p>
          <div className="seq-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="seq-hero-caption aos" style={{ '--d': '0.4s' }}>
            3 specialist techniques · premium shine · dance & event ready
          </p>
        </div>
        <div className="seq-hero-scroll">
          <div className="seq-scroll-line" />
        </div>
      </section>

      {/* ── TYPE NAVIGATOR ── */}
      <section className="seq-nav-section">
        <div className="seq-nav-inner">
          {types.map((t, i) => (
            <button
              key={t.id}
              className={`seq-nav-btn ${activeType === i ? 'active' : ''}`}
              onClick={() => setActiveType(i)}
            >
              <span className="nav-btn-tag">{t.tag}</span>
              <span className="nav-btn-name">{t.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── TYPE DETAIL ── */}
      <section className="seq-detail-section">
        {types.map((t, i) => (
          <div
            key={t.id}
            className={`seq-detail ${activeType === i ? 'seq-detail--active' : ''}`}
          >
            <div className="seq-detail-inner">
              <div className="seq-detail-photo">
                {t.image ? (
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                ) : (
                  <div className="seq-photo-placeholder">
                    <div className="photo-placeholder-icon">{t.icon}</div>
                    <span className="photo-placeholder-label">Photo Coming Soon</span>
                    <span className="photo-placeholder-sub">{t.name} · Replace with actual image</span>
                  </div>
                )}
              </div>
              <div className="seq-detail-text">
                <span className="seq-detail-tag">{t.tag}</span>
                <h2 className="seq-detail-title">{t.name}</h2>
                <div className="seq-detail-rule" />
                <p className="seq-detail-desc">{t.fullDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── ALL TYPES GRID ── */}
      <section className="seq-grid-section">
        <div className="seq-grid-container">
          <div className="section-header aos">
            <span className="section-eyebrow">All Techniques</span>
            <h2 className="section-title">Every <span className="gold-text">Sparkle</span>, a Statement</h2>
          </div>

          <div className="seq-cards-grid">
            {types.map((t, i) => (
              <div
                key={t.id}
                className={`seq-card aos ${activeType === i ? 'seq-card--active' : ''}`}
                style={{ '--d': `${i * 0.08}s` }}
                onClick={() => {
                  setActiveType(i);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="seq-card-photo">
                  {t.image ? (
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="card-photo-placeholder">
                      <div className="card-photo-icon">{t.icon}</div>
                      <span>Photo Coming Soon</span>
                    </div>
                  )}
                  <div className="seq-card-overlay">
                    <span className="card-overlay-tag">{t.tag}</span>
                  </div>
                </div>

                <div className="seq-card-body">
                  <h3 className="seq-card-name">{t.name}</h3>
                  <p className="seq-card-desc">{t.shortDesc}</p>
                  <button className="seq-card-cta">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sequins;