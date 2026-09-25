import "./App.css";
import cutsImage from "./assets/img/beard2.jpg";
import colourImage from "./assets/img/dyecut2.jpg";
import braidsImage from "./assets/img/dreadcut.jpg";
import beardImage from "./assets/img/beard.jpg";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="site">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">EST. 2026 · MEN'S GROOMING</p>

            <h1>
              The Art of
              <span>Looking Sharp.</span>
            </h1>

            <p className="hero-text">
              Precision cuts, timeless grooming and an experience designed for
              the modern gentleman.
            </p>

            <div className="hero-actions">
              <Link to="/booking" className="primary-button">
                Book an Appointment
              </Link>

              <Link to="/services" className="secondary-button">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-scroll">
            <span></span>
            Scroll to explore
          </div>
        </section>

        {/* INTRO */}
        <section className="intro" id="about">
          <div className="intro-content">
            <p className="eyebrow">WELCOME TO THE QUARTERS</p>

            <h2>
              Where craftsmanship
              <em> meets character.</em>
            </h2>

            <p className="intro-text">
              Gentlemen's Quarters is a modern grooming destination built around
              precision, personal style and the timeless ritual of looking your
              best.
            </p>

            <p className="intro-text">
              From the first consultation to the final finish, every detail is
              considered. We combine traditional barbering craftsmanship with a
              contemporary approach to men's grooming.
            </p>

            <a href="#barbers" className="text-link dark-link">
              Discover our story <span>→</span>
            </a>
          </div>

          <div className="intro-details">
            <div className="intro-line"></div>

            <div className="intro-year">
              <span>EST.</span>
              <strong>2026</strong>
            </div>

            <p>
              Precision grooming.
              <br />
              Personal style.
              <br />
              Timeless character.
            </p>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="services-preview" id="services-preview">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR SERVICES</p>

              <h2>
                Crafted for <em>you.</em>
              </h2>
            </div>

            <a href="/services" className="text-link">
              View all services →
            </a>
          </div>

          <div className="service-grid">
            <article className="service-card featured">
              <div className="service-card-image">
                <img src={colourImage} alt="Cuts and fades" />
                <span>01</span>
              </div>

              <div className="service-card-content">
                <h3>Colour & Style</h3>
                <p>Bold colour, creative styles and personal expression.</p>
                <a href="/services">Explore →</a>
              </div>
            </article>
            <article className="service-card">
              <div className="service-card-image">
                <img src={cutsImage} alt="Cuts and fades" /> <span>02</span>
              </div>

              <div className="service-card-content">
                <h3>Cuts & Fades</h3>
                <p>Sharp cuts. Clean fades. Precision finishing.</p>
                <a href="/services">Explore →</a>
              </div>
            </article>
            <article className="service-card">
              <div className="service-card-image">
                <img src={braidsImage} alt="Cuts and fades" />
                <span>03</span>
              </div>

              <div className="service-card-content">
                <h3>Braids & Dreads</h3>
                <p>Culture, creativity and modern craftsmanship.</p>
                <a href="/services">Explore →</a>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card-image">
                <img src={beardImage} alt="Cuts and fades" />

                <span>04</span>
              </div>

              <div className="service-card-content">
                <h3>Beard & Detail</h3>
                <p>Sharp edges, defined beards and finishing details.</p>
                <a href="/services">Explore →</a>
              </div>
            </article>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="booking-cta" id="booking">
          <p className="eyebrow">YOUR CHAIR AWAITS</p>

          <h2>
            Ready to look <em>sharp?</em>
          </h2>

          <a href="/booking" className="primary-button">
            Book Your Appointment
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home;
