import { useEffect, useState } from 'react';
import './Embroidery.css';

const Embroidery = () => {
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
      id: 'normal',
      name: 'Normal',
      tag: '01',
      shortDesc: 'Classic thread stitching for clean, durable designs.',
      fullDesc: 'Normal embroidery uses regular thread to stitch simple, clean designs onto fabric. It\'s durable, neat, and perfect for everyday logos and names.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/embroidery6.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M8 24c0-8.84 7.16-16 16-16s16 7.16 16 16-7.16 16-16 16S8 32.84 8 24z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'hd',
      name: 'HD',
      tag: '02',
      shortDesc: 'Raised stitching that lifts your design off the fabric.',
      fullDesc: 'HD embroidery uses foam padding beneath the stitching to create a raised, dimensional look that lifts your design off the fabric. It\'s bold, detailed, and perfect for standout logos.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/HD%20emb.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="14" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 20h32M8 28h32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M16 14v20M32 14v20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M14 8l4 6M34 8l-4 6M14 40l4-6M34 40l-4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'metallic',
      name: 'Metallic (Lurex)',
      tag: '03',
      shortDesc: 'Shiny, reflective thread for a premium luxurious sparkle.',
      fullDesc: 'Metallic (Lurex) embroidery uses shiny thread to give designs a bright, luxurious sparkle. It\'s perfect for adding a premium, eye-catching finish.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/Lurex.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M10 38l4-4M38 38l-4-4M10 10l4 4M38 10l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'fringing',
      name: 'Fringing',
      tag: '04',
      shortDesc: 'Long loose threads creating flowing movement and 3D flair.',
      fullDesc: 'Fringing embroidery uses long, loose threads that extend beyond the fabric, creating a flowing fringe effect. It adds movement, texture, and a playful 3D look, making any design stand out with extra flair and style.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/Fringing.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M10 12h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 12v24M18 12v20M22 12v26M26 12v22M30 12v24M34 12v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'applique',
      name: 'Appliqué',
      tag: '05',
      shortDesc: 'Fabric shapes stitched onto garments for bold texture.',
      fullDesc: 'Normal appliqué is when a piece of fabric is cut into a shape and stitched onto the garment to create a design. It adds texture, colour, and a bold look while keeping the stitching neat and clean.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/Applique.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 18h32M18 8v32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.5"/>
        </svg>
      ),
    },
    {
      id: 'window-applique',
      name: 'Window Appliqué',
      tag: '06',
      shortDesc: 'Cut-out fabric sections creating a unique "window" depth effect.',
      fullDesc: 'Window appliqué is when a section of the fabric is cut out and replaced with another material from behind, then stitched around the edges. This creates a "window" effect that adds depth, contrast, and a unique finish to the design.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/window%20applique.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="16" y="16" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M16 16l16 16M32 16L16 32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        </svg>
      ),
    },
    {
      id: 'printed-applique',
      name: 'Printed Appliqué',
      tag: '07',
      shortDesc: 'Printed fabric pieces combined with embroidery for mixed-media looks.',
      fullDesc: 'Printed appliqué is when a printed piece of fabric is cut into a shape and stitched onto the garment. It combines detailed printed designs with embroidery outlines, giving a bold, colourful look with added texture.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/printed%20applique.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M14 20h8M14 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="30" cy="23" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 38h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'sequins',
      name: 'Sequins',
      tag: '08',
      shortDesc: 'Stitched sequins adding sparkle, shine, and glamorous texture.',
      fullDesc: 'Sequins embroidery is when sequins are stitched onto fabric as part of the design. It adds sparkle, shine, and texture, making the design eye-catching and perfect for glamorous or festive looks.',
      image: 'https://github.com/randr2405/ImagesforPOS/blob/main/Sequins%20emb.png?raw=true',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="34" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="34" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="10" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="38" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="embroidery-page">

      {/* ── HERO ── */}
      <section className="emb-hero">
        <div className="emb-hero-bg">
          <div className="emb-grid" />
          <div className="emb-overlay" />
          <div className="emb-threads">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="emb-thread" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="emb-hero-content">
          <span className="emb-eyebrow aos">Our Services</span>
          <h1 className="emb-title aos" style={{ '--d': '0.1s' }}>
            The Art of <em>Embroidery</em>
          </h1>
          <p className="emb-subtitle aos" style={{ '--d': '0.25s' }}>
            Embroidery is the process of stitching designs onto fabric using thread to create
            a high-quality, textured finish. From classic thread work to metallic shimmer,
            raised effects to decorative sequins — every technique tells a different story.
          </p>
          <div className="emb-hero-divider aos" style={{ '--d': '0.35s' }} />
          <p className="emb-hero-caption aos" style={{ '--d': '0.4s' }}>
            8 specialist techniques · retail-grade quality · export compliant
          </p>
        </div>
        <div className="emb-hero-scroll">
          <div className="emb-scroll-line" />
        </div>
      </section>

      {/* ── TYPE NAVIGATOR ── */}
      <section className="emb-nav-section">
        <div className="emb-nav-inner">
          {types.map((t, i) => (
            <button
              key={t.id}
              className={`emb-nav-btn ${activeType === i ? 'active' : ''}`}
              onClick={() => setActiveType(i)}
            >
              <span className="nav-btn-tag">{t.tag}</span>
              <span className="nav-btn-name">{t.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── TYPE DETAIL ── */}
      <section className="emb-detail-section">
        {types.map((t, i) => (
          <div
            key={t.id}
            className={`emb-detail ${activeType === i ? 'emb-detail--active' : ''}`}
          >
            <div className="emb-detail-inner">
              <div className="emb-detail-photo">
                {t.image ? (
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                ) : (
                  <div className="emb-photo-placeholder">
                    <div className="photo-placeholder-icon">{t.icon}</div>
                    <span className="photo-placeholder-label">Photo Coming Soon</span>
                    <span className="photo-placeholder-sub">{t.name} · Replace with actual image</span>
                  </div>
                )}
              </div>
              <div className="emb-detail-text">
                <span className="emb-detail-tag">{t.tag}</span>
                <h2 className="emb-detail-title">{t.name}</h2>
                <div className="emb-detail-rule" />
                <p className="emb-detail-desc">{t.fullDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── ALL TYPES GRID ── */}
      <section className="emb-grid-section">
        <div className="emb-grid-container">
          <div className="section-header aos">
            <span className="section-eyebrow">All Techniques</span>
            <h2 className="section-title">Every <span className="gold-text">Stitch</span>, a Craft</h2>
          </div>

          <div className="emb-cards-grid">
            {types.map((t, i) => (
              <div
                key={t.id}
                className={`emb-card aos ${activeType === i ? 'emb-card--active' : ''}`}
                style={{ '--d': `${i * 0.08}s` }}
                onClick={() => {
                  setActiveType(i);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="emb-card-photo">
                  {t.image ? (
                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="card-photo-placeholder">
                      <div className="card-photo-icon">{t.icon}</div>
                      <span>Photo Coming Soon</span>
                    </div>
                  )}
                  <div className="emb-card-overlay">
                    <span className="card-overlay-tag">{t.tag}</span>
                  </div>
                </div>

                <div className="emb-card-body">
                  <h3 className="emb-card-name">{t.name}</h3>
                  <p className="emb-card-desc">{t.shortDesc}</p>
                  <button className="emb-card-cta">
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

export default Embroidery;