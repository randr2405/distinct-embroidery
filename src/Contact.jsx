import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("R1jD4sGjn_eJYazoA");
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs.sendForm(
      'service_mqt4wz2',      // Your Service ID
      'template_78i3k8f',     // Your Template ID
      form.current,
      'R1jD4sGjn_eJYazoA'     // Your Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-grid" />
          <div className="contact-overlay" />
          <div className="contact-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="contact-particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        <div className="contact-hero-content">
          <span className="contact-eyebrow aos">Contact</span>
          <h1 className="contact-title aos" style={{ '--d': '0.1s' }}>
            Get in Touch <em>With Us!</em>
          </h1>
          <p className="contact-subtitle aos" style={{ '--d': '0.25s' }}>
            We're here to help with all your embroidery and printing needs. Whether you're placing 
            a large order for a retail chain or have questions about our services, our team is ready 
            to assist. Contact us today and experience the quality and professionalism that has made 
            us a trusted partner for over three decades.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="contact-content-section">
        <div className="contact-content-container">
          
          {/* Contact Form */}
          <div className="contact-form-wrapper aos" style={{ '--d': '0s' }}>
            <div className="form-header">
              <h2 className="form-title">Contact Us</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 123 456 789"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            
            {/* Contact Details */}
            <div className="info-card aos" style={{ '--d': '0.1s' }}>
              <div className="info-card-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Contact Details</h3>
              </div>
              <div className="info-details">
                <div className="info-item">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:emb@distinctembroider.co.za" className="info-link">
                    emb@distinctembroider.co.za
                  </a>
                </div>
                <div className="info-item">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:0325330643" className="info-link">032 533 0643</a>
                </div>
                <div className="info-item">
                  <strong>Mervin:</strong>{' '}
                  <a href="tel:0844770008" className="info-link">084 477 0008</a>
                </div>
                <div className="info-item">
                  <strong>Nerisha:</strong>{' '}
                  <a href="tel:0845557552" className="info-link">084 555 7552</a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="info-card aos" style={{ '--d': '0.2s' }}>
              <div className="info-card-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Business Hours</h3>
              </div>
              <div className="hours-grid">
                <div className="hour-row">
                  <span className="hour-day">Monday</span>
                  <span className="hour-time">7:30 am – 4:30 pm</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Tuesday</span>
                  <span className="hour-time">7:30 am – 4:30 pm</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Wednesday</span>
                  <span className="hour-time">7:30 am – 4:30 pm</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Thursday</span>
                  <span className="hour-time">7:30 am – 4:30 pm</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Friday</span>
                  <span className="hour-time">7:30 am – 3:30 pm</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Saturday</span>
                  <span className="hour-time closed">Closed</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Sunday</span>
                  <span className="hour-time closed">Closed</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="info-card aos" style={{ '--d': '0.3s' }}>
              <div className="info-card-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Visit Us</h3>
              </div>
              <div className="info-details">
                <div className="info-item">
                  SBDC Building, 2 Columbus Road<br />
                  Unit 3 and 4, Verulam<br />
                  KwaZulu-Natal, South Africa
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;