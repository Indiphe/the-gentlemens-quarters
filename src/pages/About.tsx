import "./About.css";
import { Link } from "react-router-dom";

import barberImage from "../assets/img/barber.jpg";

const philosophy = [
  {
    number: "01",
    title: "Precision",
    text: "Every cut, line-up and finish is approached with patience, detail and intention.",
  },
  {
    number: "02",
    title: "Identity",
    text: "Your style should feel like you. We create looks that reflect personality, confidence and individuality.",
  },
  {
    number: "03",
    title: "Culture",
    text: "Rooted in Mzantsi culture and modern South African style, we celebrate the looks that make us who we are.",
  },
];

const styles = ["Fades", "Braids", "Dreads", "Colour", "Designs", "Beards"];

function About() {
  return (
    <main className="about-page">
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
      <section className="about-hero">
        <div className="about-hero-image">
          <img src={barberImage} alt="Barber at The Gentlemen's Quarters" />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="eyebrow">THE QUARTERS</p>

          <h1>
            Where style
            <em> meets identity.</em>
          </h1>

          <p>
            A modern South African barbershop built around culture, confidence
            and the art of looking sharp.
          </p>
        </div>

        <span className="about-hero-number">01 / ABOUT</span>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-label">
          <p className="eyebrow">OUR STORY</p>
          <span>02</span>
        </div>

        <div className="about-story-content">
          <h2>
            More than
            <em> a barber shop.</em>
          </h2>

          <p>
            The Gentlemen's Quarters was created for men and young gentlemen who
            see grooming as part of who they are.
          </p>

          <p>
            From the precision of a fresh fade to the creativity of braids,
            colour, designs and dreads, our space celebrates the many ways South
            African men express themselves.
          </p>

          <p>
            We believe a great barber experience should leave you looking
            sharper, feeling confident and completely yourself.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="philosophy-heading">
          <p className="eyebrow">THE QUARTERS PHILOSOPHY</p>

          <h2>
            Sharp by design.
            <em> True by nature.</em>
          </h2>
        </div>

        <div className="philosophy-grid">
          {philosophy.map((item) => (
            <article className="philosophy-card" key={item.number}>
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SOUTH AFRICAN STYLE */}
      <section className="culture-section">
        <div className="culture-image">
          <img src={barberImage} alt="South African barbering and grooming" />

          <div className="culture-image-overlay"></div>

          <span>03 / CULTURE</span>
        </div>

        <div className="culture-content">
          <p className="eyebrow">SOUTH AFRICAN STYLE, REIMAGINED</p>

          <h2>
            Culture in every
            <em> detail.</em>
          </h2>

          <p>
            South African style is diverse, expressive and constantly evolving.
            The Quarters brings that energy into the chair.
          </p>

          <p>
            Whether it is a clean fade, intricate cornrows, maintained dreads,
            bold colour, a creative design or a perfectly shaped beard, every
            look has its own story.
          </p>

          <div className="style-list">
            {styles.map((style, index) => (
              <span key={style}>
                <small>0{index + 1}</small>
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="experience-inner">
          <p className="eyebrow">THE EXPERIENCE</p>

          <h2>
            Come for the
            <em> cut.</em>
            <br />
            Stay for the
            <em> confidence.</em>
          </h2>

          <p>
            This is your time in the chair. Your style, your identity, your
            moment.
          </p>

          <Link to="/booking" className="primary-button">
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="about-final">
        <p className="eyebrow">THE GENTLEMEN'S QUARTERS</p>

        <h2>
          Look sharp.
          <br />
          <em>Stay true to yourself.</em>
        </h2>

        <Link to="/booking" className="text-link">
          Enter the Quarters →
        </Link>
      </section>
    </main>
  );
}

export default About;
