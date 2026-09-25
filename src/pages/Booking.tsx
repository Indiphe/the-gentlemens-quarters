import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";
import "./Booking.css";

type Service = {
  name: string;
  price: number;
  duration: number;
};

type BookedSlot = {
  appointment_time: string;
  duration: number;
};

const services: Service[] = [
  { name: "Classic Cut", price: 250, duration: 45 },
  { name: "Low Fade", price: 280, duration: 60 },
  { name: "Mid Fade", price: 280, duration: 60 },
  { name: "High Fade", price: 300, duration: 60 },
  { name: "Taper Fade", price: 280, duration: 60 },
  { name: "Afro Shape-Up", price: 220, duration: 45 },
  { name: "Hair Dye", price: 300, duration: 90 },
  { name: "Blonde / Platinum", price: 450, duration: 120 },
  { name: "S-Curl", price: 300, duration: 90 },
  { name: "Colour Refresh", price: 250, duration: 60 },
  { name: "Hair Design", price: 80, duration: 30 },
  { name: "Line Design", price: 50, duration: 30 },
  { name: "Cornrows", price: 300, duration: 120 },
  { name: "Braids", price: 350, duration: 120 },
  { name: "Dread Maintenance", price: 350, duration: 90 },
  { name: "Dread Styling", price: 300, duration: 90 },
  { name: "Twist Styles", price: 300, duration: 90 },
  { name: "Beard Trim", price: 180, duration: 30 },
  { name: "Beard Shape-Up", price: 150, duration: 30 },
  { name: "Full Shave", price: 180, duration: 45 },
  { name: "Eyebrow Design", price: 80, duration: 20 },
  { name: "Edge-Up / Line-Up", price: 80, duration: 20 },
  {
    name: "The Gentlemen's Signature",
    price: 550,
    duration: 120,
  },
  { name: "Kids Cut", price: 200, duration: 45 },
];

const barbers = [
  "Lunga Maseko",
  "Thabo Nkosi",
  "Siyabonga Dlamini",
  "Andile Mbeki",
];

const allTimeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const shopLocation = "24 Long Street, Cape Town, South Africa";

const getLocalDateString = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const timeToMinutes = (timeValue: string) => {
  const [hours, minutes] = timeValue.split(":").map(Number);
  return hours * 60 + minutes;
};

function Booking() {
  const location = useLocation();

  const barberFromState = (location.state as { barber?: string } | null)
    ?.barber;

  const [serviceName, setServiceName] = useState("");
  const [barber, setBarber] = useState(barberFromState || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedService = useMemo(
    () => services.find((service) => service.name === serviceName),
    [serviceName],
  );

  const minDate = getLocalDateString();

  const selectedDay = date ? new Date(`${date}T12:00:00`).getDay() : null;

  const getOpeningHours = () => {
    switch (selectedDay) {
      case 0:
        return { opening: 10 * 60, closing: 15 * 60 };

      case 6:
        return { opening: 8 * 60, closing: 16 * 60 };

      default:
        return { opening: 9 * 60, closing: 18 * 60 };
    }
  };

  const openingHours = getOpeningHours();

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!barber || !date) {
        setBookedSlots([]);
        return;
      }

      setLoadingAvailability(true);
      setBookingError("");

      const { data, error } = await supabase.rpc("get_booked_slots", {
        p_barber: barber,
        p_date: date,
      });

      if (error) {
        console.error("Availability error:", error);
        setBookingError(
          "We couldn't load availability. Please refresh and try again.",
        );
        setBookedSlots([]);
      } else {
        setBookedSlots(data || []);
      }

      setLoadingAvailability(false);
    };

    fetchAvailability();
  }, [barber, date]);

  const isTimeAvailable = (timeSlot: string) => {
    if (!selectedService) return true;

    const start = timeToMinutes(timeSlot);
    const end = start + selectedService.duration;

    if (start < openingHours.opening || end > openingHours.closing) {
      return false;
    }

    const requestedEnd = start + selectedService.duration;

    return !bookedSlots.some((booking) => {
      const bookedStart = timeToMinutes(booking.appointment_time.slice(0, 5));

      const bookedEnd = bookedStart + booking.duration;

      return start < bookedEnd && requestedEnd > bookedStart;
    });
  };

  const availableTimes = selectedService
    ? allTimeSlots.filter(isTimeAvailable)
    : allTimeSlots.filter(
        (slot) =>
          timeToMinutes(slot) >= openingHours.opening &&
          timeToMinutes(slot) < openingHours.closing,
      );

  const canSubmit =
    serviceName &&
    barber &&
    date &&
    time &&
    name.trim() &&
    email.trim() &&
    phone.trim() &&
    termsAccepted &&
    !submitting;

  const formatDate = (value: string) => {
    if (!value) return "";

    return new Date(`${value}T12:00:00`).toLocaleDateString("en-ZA", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0,
    }).format(price);

  const createCalendarDates = () => {
    if (!selectedService || !date || !time) return null;

    const start = new Date(`${date}T${time}:00`);

    const end = new Date(
      start.getTime() + selectedService.duration * 60 * 1000,
    );

    return { start, end };
  };

  const formatCalendarDate = (dateValue: Date) => {
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    const hours = String(dateValue.getHours()).padStart(2, "0");
    const minutes = String(dateValue.getMinutes()).padStart(2, "0");
    const seconds = String(dateValue.getSeconds()).padStart(2, "0");

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const googleCalendarUrl = () => {
    const calendarDates = createCalendarDates();

    if (!calendarDates || !selectedService) return "#";

    const details = [
      `Service: ${selectedService.name}`,
      `Barber: ${barber}`,
      `Customer: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
    ].join("\n");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `The Gentlemen's Quarters — ${selectedService.name}`,
      dates: `${formatCalendarDate(
        calendarDates.start,
      )}/${formatCalendarDate(calendarDates.end)}`,
      details,
      location: shopLocation,
      ctz: "Africa/Johannesburg",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const downloadAppleCalendar = () => {
    const calendarDates = createCalendarDates();

    if (!calendarDates || !selectedService) return;

    const start = formatCalendarDate(calendarDates.start);
    const end = formatCalendarDate(calendarDates.end);

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Gentlemen's Quarters//Booking//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@thegentlemensquarters.co.za`,
      `DTSTART;TZID=Africa/Johannesburg:${start}`,
      `DTEND;TZID=Africa/Johannesburg:${end}`,
      `SUMMARY:The Gentlemen's Quarters — ${selectedService.name}`,
      `LOCATION:${shopLocation}`,
      `DESCRIPTION:Service: ${selectedService.name}\\nBarber: ${barber}\\nCustomer: ${name}\\nPhone: ${phone}\\nEmail: ${email}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "gentlemens-quarters-appointment.ics";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit || !selectedService) return;

    setSubmitting(true);
    setBookingError("");

    const { error } = await supabase.rpc("book_appointment", {
      p_customer_name: name.trim(),
      p_customer_email: email.trim(),
      p_customer_phone: phone.trim(),
      p_service: selectedService.name,
      p_barber: barber,
      p_appointment_date: date,
      p_appointment_time: time,
      p_duration: selectedService.duration,
    });

    if (error) {
      console.error("Booking error:", error);

      if (error.message.toLowerCase().includes("already booked")) {
        setBookingError(
          "That barber is no longer available for this time. Please choose another time.",
        );

        setTime("");

        const { data } = await supabase.rpc("get_booked_slots", {
          p_barber: barber,
          p_date: date,
        });

        setBookedSlots(data || []);
      } else {
        setBookingError("We couldn't complete your booking. Please try again.");
      }

      setSubmitting(false);
      return;
    }

    setConfirmed(true);
    setSubmitting(false);
  };

  return (
    <main className="booking-page">
      <Navbar />

      <section className="booking-hero">
        <div className="booking-hero-content">
          <p className="eyebrow">THE QUARTERS</p>

          <h1>
            Reserve your<em> chair.</em>
          </h1>

          <p>Choose your service, your barber and a time that works for you.</p>
        </div>

        <span className="booking-hero-number">06 / BOOKING</span>
      </section>

      <section className="booking-section">
        <div className="booking-intro">
          <p className="eyebrow">BOOK AN APPOINTMENT</p>

          <h2>
            Your next<em> look starts here.</em>
          </h2>

          <p>
            Complete the details below to reserve your appointment at The
            Gentlemen's Quarters.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-step">
            <div className="step-heading">
              <span>01</span>

              <div>
                <p className="eyebrow">YOUR SERVICE</p>
                <h3>What are we doing?</h3>
              </div>
            </div>

            <div className="service-options">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.name}
                  className={`service-option ${
                    serviceName === service.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setServiceName(service.name);
                    setTime("");
                  }}
                >
                  <span>{service.name}</span>

                  <strong>{formatPrice(service.price)}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="booking-step">
            <div className="step-heading">
              <span>02</span>

              <div>
                <p className="eyebrow">YOUR BARBER</p>
                <h3>Who would you like?</h3>
              </div>
            </div>

            <div className="barber-options">
              {barbers.map((barberName) => (
                <button
                  type="button"
                  key={barberName}
                  className={`barber-option ${
                    barber === barberName ? "selected" : ""
                  }`}
                  onClick={() => {
                    setBarber(barberName);
                    setTime("");
                  }}
                >
                  {barberName}
                </button>
              ))}
            </div>
          </div>

          <div className="booking-step">
            <div className="step-heading">
              <span>03</span>

              <div>
                <p className="eyebrow">DATE & TIME</p>
                <h3>When should we expect you?</h3>
              </div>
            </div>

            <div className="date-time-grid">
              <label>
                <span>Date</span>

                <input
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                    setTime("");
                  }}
                  required
                />
              </label>

              <label>
                <span>Time</span>

                <select
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                  disabled={!date || !selectedService}
                >
                  <option value="">
                    {!date
                      ? "Choose a date first"
                      : !selectedService
                        ? "Choose a service first"
                        : loadingAvailability
                          ? "Checking availability..."
                          : "Select a time"}
                  </option>

                  {availableTimes.map((timeSlot) => (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {date && (
              <p className="booking-note">
                {selectedDay === 0
                  ? "Sunday appointments are available between 10:00 and 15:00."
                  : selectedDay === 6
                    ? "Saturday appointments are available between 08:00 and 16:00."
                    : "Monday–Friday appointments are available between 09:00 and 18:00."}
              </p>
            )}

            {barber && date && !loadingAvailability && (
              <p className="booking-note">
                Available times are based on {barber}'s current schedule.
              </p>
            )}
          </div>

          <div className="booking-step">
            <div className="step-heading">
              <span>04</span>

              <div>
                <p className="eyebrow">YOUR DETAILS</p>
                <h3>Tell us who's coming.</h3>
              </div>
            </div>

            <div className="customer-grid">
              <label>
                <span>Full name</span>

                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>

              <label>
                <span>Phone number</span>

                <input
                  type="tel"
                  placeholder="+27 00 000 0000"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </label>

              <label className="full-width">
                <span>Email address</span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="booking-summary">
            <div>
              <p className="eyebrow">APPOINTMENT SUMMARY</p>

              <h3>
                {selectedService ? selectedService.name : "Choose your service"}
              </h3>

              <div className="summary-details">
                <span>
                  Barber: <strong>{barber || "Not selected"}</strong>
                </span>

                <span>
                  Date:{" "}
                  <strong>{date ? formatDate(date) : "Not selected"}</strong>
                </span>

                <span>
                  Time: <strong>{time || "Not selected"}</strong>
                </span>
              </div>
            </div>

            <strong className="summary-price">
              {selectedService ? formatPrice(selectedService.price) : "—"}
            </strong>
          </div>

          {bookingError && (
            <p className="booking-note booking-error">{bookingError}</p>
          )}

          <label className="terms-check">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
            />

            <span>
              I agree to the{" "}
              <Link to="/terms" target="_blank">
                Terms & Conditions
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            className="booking-submit"
            disabled={!canSubmit}
          >
            {submitting ? "Confirming Appointment..." : "Confirm Appointment"}

            <span>→</span>
          </button>
        </form>
      </section>

      {confirmed && selectedService && (
        <div className="booking-modal-backdrop">
          <div className="booking-modal">
            <button
              type="button"
              className="modal-close"
              onClick={() => setConfirmed(false)}
              aria-label="Close confirmation"
            >
              ×
            </button>

            <p className="eyebrow">APPOINTMENT CONFIRMED</p>

            <h2>
              You're booked,
              <em> {name.split(" ")[0]}.</em>
            </h2>

            <p className="confirmation-copy">
              Your appointment at The Gentlemen's Quarters has been prepared.
              Add it to your calendar so you don't miss your chair.
            </p>

            <div className="confirmation-details">
              <div>
                <span>Service</span>
                <strong>{selectedService.name}</strong>
              </div>

              <div>
                <span>Barber</span>
                <strong>{barber}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{formatDate(date)}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{time}</strong>
              </div>
            </div>

            <div className="calendar-actions">
              <a
                href={googleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-button"
              >
                Add to Google Calendar
              </a>

              <button
                type="button"
                onClick={downloadAppleCalendar}
                className="calendar-button secondary"
              >
                Add to Apple Calendar
              </button>
            </div>

            <p className="confirmation-location">{shopLocation}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Booking;
