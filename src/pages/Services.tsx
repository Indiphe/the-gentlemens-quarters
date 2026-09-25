import "./Services.css";
import { Link } from "react-router-dom";

import cutsImage from "../assets/img/buzzcut.jpg";
import colourImage from "../assets/img/dyecut.jpg";
import braidsImage from "../assets/img/braid.jpg";
import beardImage from "../assets/img/beard1.jpg";
import signatureImage from "../assets/img/beard3.jpg";
import kidsImage from "../assets/img/kid2.jpg";
import Navbar from "../components/Navbar";

const categories = [
  {
    number: "01",
    name: "Cuts & Fades",
    description:
      "From timeless cuts to modern fades, every style is finished with precision and attention to detail.",
    image: cutsImage,
    services: [
      ["Classic Cut", "R250"],
      ["Low Fade", "R280"],
      ["Mid Fade", "R280"],
      ["High Fade", "R300"],
      ["Taper Fade", "R280"],
      ["Afro Shape-Up", "R220"],
    ],
  },
  {
    number: "02",
    name: "Colour & Style",
    description:
      "Express yourself through colour, texture and creative barbering designed around your personal style.",
    image: colourImage,
    services: [
      ["Hair Dye", "R300"],
      ["Blonde / Platinum", "R450"],
      ["S-Curl", "R300"],
      ["Colour Refresh", "R250"],
      ["Hair Design", "R80"],
      ["Line Design", "R50"],
    ],
  },
  {
    number: "03",
    name: "Braids & Dreads",
    description:
      "Rooted in culture and finished with modern craftsmanship. Styles made to represent you.",
    image: braidsImage,
    services: [
      ["Cornrows", "From R300"],
      ["Braids", "From R350"],
      ["Dread Maintenance", "From R350"],
      ["Dread Styling", "From R300"],
      ["Twist Styles", "From R300"],
    ],
  },
  {
    number: "04",
    name: "Beard & Detail",
    description:
      "The details make the difference. Sharp edges, defined beards and clean finishing touches.",
    image: beardImage,
    services: [
      ["Beard Trim", "R180"],
      ["Beard Shape-Up", "R150"],
      ["Full Shave", "R180"],
      ["Eyebrow Design", "R80"],
      ["Edge-Up / Line-Up", "R80"],
    ],
  },
];

const collections = [
  {
    number: "01",
    name: "The Classic",
    description: "Cuts, fades and clean finishes.",
    image: cutsImage,
  },
  {
    number: "02",
    name: "The Culture",
    description: "Braids, dreads, colour and designs.",
    image: braidsImage,
  },
  {
    number: "03",
    name: "The Young Gentleman",
    description: "Fresh cuts for the next generation.",
    image: kidsImage,
  },
];
function Services() {
  return (
    <main className="services-page">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <h1>
            The art of
            <em> the cut.</em>
          </h1>

          <p>Sharp cuts. Bold styles. Personal expression.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro-section">
        <div className="services-intro-heading">
          <p className="eyebrow">OUR SERVICES</p>

          <h2>
            More than
            <em> a haircut.</em>
          </h2>
        </div>

        <div className="services-intro-copy">
          <p>
            At The Gentlemen's Quarters, barbering is about more than the chair.
            It is about personal style, confidence and the culture that shapes
            how we show up.
          </p>

          <p>
            From clean fades and sharp line-ups to colour, braids, dreads and
            detailed grooming, every service is designed to help you leave
            looking like yourself — only sharper.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE QUARTERS COLLECTION</p>

            <h2>
              Find your
              <em> style.</em>
            </h2>
          </div>

          <p>
            Three signature experiences built around the way you want to look
            and feel.
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <article className="collection-card" key={collection.number}>
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />

                <div className="collection-overlay"></div>

                <span>{collection.number}</span>
              </div>

              <div className="collection-content">
                <h3>{collection.name}</h3>

                <p>{collection.description}</p>

                <Link to="/booking">
                  Explore <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="category-section">
        {categories.map((category, index) => (
          <article
            className={`category-block ${
              index % 2 !== 0 ? "category-reverse" : ""
            }`}
            key={category.number}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />

              <span className="category-number">{category.number}</span>
            </div>

            <div className="category-content">
              <p className="eyebrow">{category.number} / THE QUARTERS</p>

              <h2>{category.name}</h2>

              <p className="category-description">{category.description}</p>

              <div className="category-services">
                {category.services.map(([service, price]) => (
                  <div className="category-service" key={service}>
                    <span>{service}</span>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>

              <Link to="/booking" className="category-book">
                Book a service <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* SIGNATURE EXPERIENCE */}
      <section className="signature-section">
        <div className="signature-image">
          <img
            src={signatureImage}
            alt="The Gentlemen's Signature grooming experience"
          />

          <div className="signature-overlay"></div>
        </div>

        <div className="signature-content">
          <p className="eyebrow">THE ULTIMATE GROOMING EXPERIENCE</p>

          <h2>
            The Gentlemen's
            <em> Signature.</em>
          </h2>

          <p>Hair. Beard. Brows. Complete.</p>

          <div className="signature-details">
            <span>Haircut of your choice</span>
            <span>Beard trim & shaping</span>
            <span>Eyebrow design</span>
            <span>Detailed line-up</span>
            <span>Styling finish</span>
          </div>

          <div className="signature-bottom">
            <strong>R550</strong>

            <a href="/booking">
              Book the Signature <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* KIDS */}
      <section className="kids-section">
        <div className="kids-image">
          <img src={kidsImage} alt="Young gentleman getting a fresh haircut" />
        </div>

        <div className="kids-content">
          <p className="eyebrow">THE NEXT GENERATION</p>

          <h2>
            Young gentlemen,
            <em> fresh style.</em>
          </h2>

          <p>
            Great style starts young. Our kids' cuts are designed to keep things
            fresh, comfortable and confidence-ready.
          </p>

          <a href="/booking" className="category-book">
            Book a kids cut <span>→</span>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="services-cta">
        <p className="eyebrow">YOUR CHAIR AWAITS</p>

        <h2>
          Ready to look
          <em> sharp?</em>
        </h2>

        <a href="/booking" className="primary-button">
          Book Your Appointment
        </a>
      </section>
    </main>
  );
}

export default Services;
