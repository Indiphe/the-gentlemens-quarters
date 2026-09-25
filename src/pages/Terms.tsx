import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-page">
      <Navbar />

      <section className="terms-hero">
        <p className="eyebrow">THE GENTLEMEN'S QUARTERS</p>
        <h1>Terms & Conditions</h1>
        <p>
          A clear understanding of how appointments and our services work.
        </p>
      </section>

      <main className="terms-content">
        <section>
          <p className="terms-number">01</p>
          <h2>Appointments</h2>
          <p>
            Appointments are subject to availability and are confirmed once
            successfully submitted through our online booking system. Please
            provide accurate contact information when making a booking.
          </p>
        </section>

        <section>
          <p className="terms-number">02</p>
          <h2>Arrival & Punctuality</h2>
          <p>
            Please arrive on time for your appointment. Arriving late may
            reduce the available service time or require the appointment to
            be rescheduled, depending on the day's schedule.
          </p>
        </section>

        <section>
          <p className="terms-number">03</p>
          <h2>Cancellations & Rescheduling</h2>
          <p>
            If you are unable to attend your appointment, please contact the
            shop as soon as possible so that the appointment can be
            rescheduled and the time made available to another client.
          </p>
        </section>

        <section>
          <p className="terms-number">04</p>
          <h2>Services & Pricing</h2>
          <p>
            Service prices displayed on this website are provided for
            informational and booking purposes. Services marked "From" may
            vary depending on hair length, style complexity and the work
            required.
          </p>
        </section>

        <section>
          <p className="terms-number">05</p>
          <h2>Children's Appointments</h2>
          <p>
            Children must be accompanied by a parent or responsible adult
            where appropriate. The booking time should be selected according
            to the service required.
          </p>
        </section>

        <section>
          <p className="terms-number">06</p>
          <h2>Personal Information</h2>
          <p>
            Information provided during booking is used to manage
            appointments and communicate with clients regarding their
            bookings. We do not request unnecessary personal information
            through the booking form.
          </p>
        </section>

        <section>
          <p className="terms-number">07</p>
          <h2>Website Information</h2>
          <p>
            We aim to keep service descriptions, prices, opening hours and
            other information accurate. Information may be updated from time
            to time to reflect changes to our services.
          </p>
        </section>

        <section>
          <p className="terms-number">08</p>
          <h2>Contact</h2>
          <p>
            For questions about an appointment or our services, please
            contact The Gentlemen's Quarters at{" "}
            <a href="mailto:hello@thegentlemensquarters.co.za">
              hello@thegentlemensquarters.co.za
            </a>{" "}
            or call +27 21 555 0147.
          </p>
        </section>

        <div className="terms-back">
          <Link to="/booking">Back to Booking</Link>
        </div>
      </main>
    </div>
  );
}

export default Terms;