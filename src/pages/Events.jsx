import { useState } from "react";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import "./events.css";

const ticketUrl = "https://www.eventbrite.co.uk/e/is-this-a-safe-house-tickets-2002955229008?aff=oddtdtcreator";
const pastEvents = [
  { title: "Student Housing and Financial Precarity", detail: "University of Glasgow · Sep 2026", position: "first" },
  { title: "Not Your Student Documentary Premiere", detail: "The Social Hub · May 2026", position: "second" },
  { title: "UNIFORCE Programme", detail: "Five universities · Jan–Mar 2026", position: "third" },
];
function Label({ children }) { return <div className="events-label">{children}</div>; }
export default function Events() {
  const [pastIndex, setPastIndex] = useState(0);
  const orderedEvents = [...pastEvents.slice(pastIndex), ...pastEvents.slice(0, pastIndex)];
  return (
    <div className="events-page">
      <section className="events-container events-hero">
        <Reveal>
          <Label>What’s on</Label>
          <h1>Big ideas. Real conversations.<br />Better renting.</h1>
          <p>We bring renters, landlords and changemakers together<br className="hidden lg:block" /> to rethink how renting works.</p>
        </Reveal>
        <svg viewBox="0 0 480 200" fill="none" className="events-calendar" aria-hidden="true">
          <g stroke="#073631" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M134 122C205 79 225 207 326 145C386 108 319 77 331 128C348 190 401 47 480 79" />
            <g transform="translate(32 35) rotate(-9 55 60)">
              <rect x="0" y="20" width="110" height="110" rx="15" fill="#FAF9F2" />
              <path d="M0 53V35Q0 20 15 20H95Q110 20 110 35V53Z" fill="#FFD055" />
              <path d="M25 33V7Q30-3 33 7V33M77 33V7Q82-3 85 7V33" />
              <path d="M25 76H35V86H25ZM51 76H61V86H51ZM77 76H87V86H77ZM25 102H35V112H25ZM51 102H61V112H51Z" fill="#A8C8B4" strokeWidth="1" />
            </g>
            <path d="M15 32L3 15M153 35L167 12M172 57L190 45" />
          </g>
        </svg>
      </section>
      <section className="events-feature-band">
        <div className="events-container">
          <Reveal>
            <article className="events-feature">
              <div className="events-poster" role="img" aria-label="Is this a Safe House? Event poster" />
              <div className="events-feature-copy">
                <Label>Upcoming event</Label>
                <h2>Is this a Safe House?</h2>
                <p className="events-subtitle">Rethinking the Rental Landscape:<br />Policy, Trust, Technology, Innovation &amp; Compliance.</p>
                <div className="events-meta">
                  <span><CalendarDays size={21} /><time dateTime="2026-10-29">29 October 2026</time></span>
                  <span><Clock size={21} /><time dateTime="17:00">5:00 PM</time></span>
                  <span><MapPin size={21} />Glasgow</span>
                </div>
                <p>Join us for honest conversations about the future of renting, meet people shaping the housing sector and get an exclusive first look at Léri’s live demo.</p>
                <div className="events-actions">
                  <Button href={ticketUrl} target="_blank" icon className="!rounded-full">Get your ticket</Button>
                  <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="events-details">View event details</a>
                </div>
              </div>
              <div className="events-note" aria-hidden="true">
                <span className="events-note-word">Policy</span>
                <span className="events-note-word">People</span>
                <span className="events-note-word">Technology</span>
                <span className="events-note-word events-note-final">Real change.</span>
                <span className="events-note-underline" />
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      {/* <section className="events-container events-past">
        <Reveal><Label>Past events</Label><p>A look back at some of the conversations, people and progress.</p></Reveal>
        <div className="events-past-carousel">
        <div className="events-past-grid" aria-live="polite" aria-atomic="true">
          {orderedEvents.map((event) => (
            <Reveal key={event.title}>
              <article>
                <div className={`events-photo events-photo-${event.position}`} role="img" aria-label={event.title} />
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <button
          type="button"
          className="events-next"
          aria-label="Show next past event"
          onClick={() => setPastIndex((index) => (index + 1) % pastEvents.length)}
        >
          <ArrowRight size={24} aria-hidden="true" />
        </button>
        </div>
      </section> */}
    </div>
  );
}
