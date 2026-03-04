import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2006', title: 'Company Founded', desc: 'Distinct Embroidery began operations in Durban, KZN, with a commitment to quality craftsmanship and exceptional service.' },
    { year: '2010', title: 'Service Expansion', desc: 'Added sequins and advanced printing capabilities to meet growing client demands.' },
    { year: '2015', title: 'Major Retail Partnerships', desc: 'Became an approved supplier to leading chain stores nationwide, establishing ourselves as an industry leader.' },
    { year: '2020', title: 'Technology Upgrade', desc: 'Invested in state-of-the-art DTF and modern screen printing equipment to deliver even better results.' },
    { year: '2025', title: 'Expanding Our Craft', desc: 'Added cording to our service offering, further elevating the quality and dimensionality of our garment decoration.' },
  ];

  const team = [
    { name: 'N Govender' },
    { name: 'R Govender' },
    { name: 'D Govender' },
  ];

  const capabilities = [
    { icon: '⚡', text: '24-hour production facility' },
    { icon: '📦', text: 'Up to 15 000 units per day' },
    { icon: '🎨', text: 'Field sizes up to 750mm depth, 9 colours' },
    { icon: '✂️', text: 'Caps, Promotional Items, Appliqués' },
    { icon: '🔬', text: 'Laser Cutting & Engraving' },
    { icon: '🌍', text: 'Export compliant' },
    { icon: '💡', text: 'In-house digitising service' },
    { icon: '🏆', text: 'Highest standard of quality' },
    { icon: '🔄', text: 'Continuous international trend updates' },
    { icon: '✅', text: 'GAP Approved · MON VISO (FIFA) Approved' },
    { icon: '🏭', text: '324m² dedicated facility' },
    { icon: '👨‍🎨', text: 'Designers with years of measurable experience' },
  ];

  return (
    <div className="about">

      {/* ── HERO BANNER ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="ab-pattern" />
          <div className="ab-overlay" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="ab-thread" style={{ '--i': i }} />
          ))}
        </div>
        <div className="about-hero-content">
          <p className="ab-eyebrow aos">Our Story</p>
          <h1 className="ab-title aos" style={{ '--d': '0.1s' }}>
            Crafted with <em>Purpose</em>,<br />Delivered with <em>Pride</em>
          </h1>
          <p className="ab-tagline aos" style={{ '--d': '0.25s' }}>
            EMBROIDERY WITH A DIFFERENCE
          </p>
        </div>
        <div className="ab-scroll-line" />
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-accent aos" />
          <p className="intro-text aos" style={{ '--d': '0.05s' }}>
            For over <strong>20 years</strong>, Distinct Embroidery has been setting the standard
            in garment decoration across South Africa. Our comprehensive services — including
            embroidery, sequins, cording, DTF printing, and screen printing — bring fashion
            brands to life with precision and artistry. As a trusted supplier to major retail
            chains nationwide, we combine cutting-edge technology with expert craftsmanship
            to deliver retail-grade quality on every piece. From branded apparel to complete
            fashion collections, we're the partner that leading retailers rely on for
            exceptional results and dependable delivery.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section">
        <div className="tl-container">
          <div className="section-header aos">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Milestones That <span className="gold-text">Define Us</span></h2>
          </div>

          <div className="timeline">
            <div className="tl-spine" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`tl-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'} aos`}
                style={{ '--d': `${i * 0.15}s` }}
              >
                <div className="tl-card">
                  <div className="tl-year">{item.year}</div>
                  <h3 className="tl-title">{item.title}</h3>
                  <p className="tl-desc">{item.desc}</p>
                </div>
                <div className="tl-dot">
                  <div className="tl-dot-inner" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="certs-section">
        <div className="certs-bg" />
        <div className="certs-inner">
          <div className="section-header aos">
            <span className="section-eyebrow">Credentials</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Certified. <span className="gold-text">Approved.</span> Trusted.</h2>
          </div>
          <div className="certs-badges aos" style={{ '--d': '0.2s' }}>
            <div className="cert-badge">
              <div className="cert-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13 20l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong>GAP Approved</strong>
                <span>Full approval status since 28 June 2007</span>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M20 4l4 8 9 1.5-6.5 6.5 1.5 9L20 25l-8 4 1.5-9L7 13.5 16 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong>MON VISO Approved</strong>
                <span>FIFA certified supplier</span>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 16h32M12 8v4M28 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <strong>National Chain Supplier</strong>
                <span>Woolworths · Truworths · Ackermans · Mr Price</span>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <strong>Export Compliant</strong>
                <span>International standard garment decoration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="capabilities-section">
        <div className="cap-container">
          <div className="cap-left aos">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">In-House <span className="gold-text">Services</span></h2>
            <p className="cap-body">
              Our comprehensive in-house manufacturing service allows for reduced costs,
              faster turnaround, and uncompromised quality control at every stage of
              production. From first stitch to final dispatch.
            </p>
            <div className="cap-slogan">
              <span>E M B R O I D E R Y</span>
              <span className="slogan-divider">·</span>
              <span>W I T H &nbsp; A</span>
              <span className="slogan-divider">·</span>
              <span>D I F F E R E N C E</span>
            </div>
          </div>
          <div className="cap-right">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="cap-item aos"
                style={{ '--d': `${i * 0.05}s` }}
              >
                <span className="cap-icon">{c.icon}</span>
                <span className="cap-text">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-header aos">
            <span className="section-eyebrow">The People Behind It</span>
            <h2 className="section-title">Meet the <span className="gold-text">Team</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div
                key={i}
                className="team-card aos"
                style={{ '--d': `${i * 0.15}s` }}
              >
                <div className="team-avatar">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  <div className="team-avatar-ring" />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;