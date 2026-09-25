import "./Barbers.css";
import { Link } from "react-router-dom";
import barberImage from "../assets/img/ladies2.jpg";

import barber1 from "../assets/img/barber1.jpg";
import barber2 from "../assets/img/barber2.jpg";
import barber3 from "../assets/img/barber3.jpg";
import barber4 from "../assets/img/barber4.jpg";
import Navbar from "../components/Navbar";

const barbers = [
  {
    number: "01",
    name: "Lunga Maseko",
    role: "Master Barber",
    specialty: "Fades · Precision Cuts · Line-Ups",
    image: barber1,
    description:
      "Known for clean fades, sharp finishes and an eye for the details that make a cut feel personal.",
  },
  {
    number: "02",
    name: "Thabo Nkosi",
    role: "Style & Colour Specialist",
    specialty: "Colour · Designs · Creative Styles",
    image: barber2,
    description:
      "Brings creativity to the chair through bold colour, expressive designs and modern styling.",
  },
  {
    number: "03",
    name: "Siyabonga Dlamini",
    role: "Braids & Loc Specialist",
    specialty: "Braids · Cornrows · Dreads",
    image: barber3,
    description:
      "Combines traditional techniques with contemporary styling to create looks rooted in culture.",
  },
  {
    number: "04",
    name: "Andile Mbeki",
    role: "Grooming Specialist",
    specialty: "Beards · Brows · Shaves",
    image: barber4,
    description:
      "Focused on the finishing details — from defined beards to clean brows and classic shaves.",
  },
];

function Barbers() {
  return (
    <main className="barbers-page">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="barbers-hero">
        <div className="about-hero-image">
          <img src={barberImage} alt="Barber at The Gentlemen's Quarters" />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content"></div>
        <div className="barbers-hero-content">
          <p className="eyebrow">THE TEAM</p>

          <h1>
            Meet the
            <em> barbers.</em>
          </h1>

          <p>
            The hands, creativity and attention to detail behind every cut at
            The Gentlemen's Quarters.
          </p>
        </div>

        <span className="barbers-hero-number">04 / THE TEAM</span>
      </section>

      {/* INTRO */}
      <section className="barbers-intro">
        <p className="eyebrow">THE QUARTERS</p>

        <h2>
          Your style.
          <br />
          <em>Our craft.</em>
        </h2>

        <p>
          Every barber brings their own speciality, personality and perspective
          to the chair. Together, we create a space where classic barbering
          meets modern South African style.
        </p>
      </section>

      {/* BARBER GRID */}
      <section className="barbers-grid-section">
        <div className="barbers-grid">
          {barbers.map((barber) => (
            <article className="barber-card" key={barber.number}>
              <div className="barber-image">
                <img src={barber.image} alt={barber.name} />

                <span className="barber-number">{barber.number}</span>

                <div className="barber-image-overlay"></div>
              </div>

              <div className="barber-content">
                <p className="barber-role">{barber.role}</p>

                <h3>{barber.name}</h3>

                <p className="barber-specialty">{barber.specialty}</p>

                <p className="barber-description">{barber.description}</p>

                <Link
                  to="/booking"
                  state={{ barber: barber.name }}
                  className="barber-book"
                >
                  Book with {barber.name.split(" ")[0]}
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM CTA */}
      <section className="barbers-cta">
        <p className="eyebrow">YOUR CHAIR AWAITS</p>

        <h2>
          Find your
          <em> barber.</em>
        </h2>

        <p>Choose your specialist and let us take care of the rest.</p>

        <Link to="/booking" className="primary-button">
          Book Your Appointment
        </Link>
      </section>
    </main>
  );
}

export default Barbers;
