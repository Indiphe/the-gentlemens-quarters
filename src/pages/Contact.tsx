import "./Contact.css";
import { Link } from "react-router-dom";
import barberImage from "../assets/img/Hero.jpg";

function Contact() {
  return (
    <main className="contact-page">
      {/* NAVBAR */}
      <header className="navbar">
        <Link to="/" className="brand">
          <span className="brand-mark">GQ</span>

          <span className="brand-name">
            THE GENTLEMEN'S
            <strong>QUARTERS</strong>
          </span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/barbers">Barbers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/booking" className="header-book">
          Book Now
        </Link>
      </header>

      {/* HERO */}
      <section className="contact-hero">
        <div className="about-hero-image">
          <img src={barberImage} alt="Barber at The Gentlemen's Quarters" />
        </div>
        <div className="contact-hero-content">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>
            Come through.
            <em> Sit down.</em>
          </h1>

          <p>
            Your chair is waiting. Visit The Gentlemen's Quarters or get in
            touch with the team.
          </p>
        </div>

        <span className="contact-hero-number">05 / CONTACT</span>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-intro">
          <p className="eyebrow">VISIT THE QUARTERS</p>

          <h2>
            Your next
            <em> look starts here.</em>
          </h2>

          <p>
            Step into a space where modern barbering meets South African style,
            culture and personal expression.
          </p>
        </div>

        <div className="contact-details-grid">
          <div className="contact-detail">
            <span className="contact-detail-number">01</span>

            <h3>Visit us</h3>

            <p>
              24 Long Street
              <br />
              Cape Town
              <br />
              South Africa
            </p>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">02</span>

            <h3>Call us</h3>

            <a href="tel:+27215550147">+27 21 555 0147</a>

            <p>For appointments and general enquiries.</p>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">03</span>

            <h3>Email</h3>

            <a href="mailto:hello@thegentlemensquarters.co.za">
              hello@thegentlemensquarters.co.za
            </a>

            <p>We'd love to hear from you.</p>
          </div>
        </div>
      </section>

      {/* MAP + HOURS */}
      <section className="location-section">
        <div className="location-map">
          <iframe
            title="The Gentlemen's Quarters location"
            src="https://www.google.com/maps?q=24+Long+Street,+Cape+Town,+South+Africa&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="hours-panel">
          <p className="eyebrow">OPENING HOURS</p>

          <h2>
            Find us
            <em> in the city.</em>
          </h2>

          <div className="hours-list">
            <div>
              <span>Monday — Friday</span>
              <strong>09:00 — 18:00</strong>
            </div>

            <div>
              <span>Saturday</span>
              <strong>08:00 — 16:00</strong>
            </div>

            <div>
              <span>Sunday</span>
              <strong>10:00 — 15:00</strong>
            </div>
          </div>

          <p className="hours-note">
            Walk-ins are welcome when availability allows. For guaranteed
            service, we recommend booking ahead.
          </p>

          <Link to="/booking" className="primary-button">
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* SOCIAL / CONNECTION */}
      <section className="contact-social-section">
        <p className="eyebrow">STAY CONNECTED</p>

        <h2>
          Follow the
          <em> Quarters.</em>
        </h2>

        <p>
          Keep up with fresh cuts, new styles, barbering culture and what's
          happening in the chair.
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            Instagram
          </a>

          <a href="https://www.facebook.com/" aria-label="Facebook">
            Facebook
          </a>

          <a href="https://www.whatsapp.com/" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <p className="eyebrow">YOUR CHAIR AWAITS</p>

        <h2>
          Ready to look
          <em> sharp?</em>
        </h2>

        <Link to="/booking" className="primary-button">
          Book Your Appointment
        </Link>
      </section>
    </main>
  );
}

export default Contact;
