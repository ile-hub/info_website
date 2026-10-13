import { Handshake } from "lucide-react";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import "./about.css";

function Label({ children }) {
  return <div className="about-label">{children}</div>;
}

function Neighbourhood() {
  return (
    <svg className="about-village" viewBox="0 0 480 300" fill="none" aria-hidden="true">
      <circle cx="158" cy="112" r="47" fill="#FFE7A6" opacity=".8" />
      <path d="M349 204C310 213 300 178 314 165C297 148 313 127 327 130C328 104 353 102 360 124C381 117 395 140 381 156C406 178 384 205 349 204Z" fill="#4E9470" />
      <g stroke="#073631" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 205C42 204 67 231 114 238C172 241 200 243 246 261C302 280 351 290 394 284C432 278 454 266 480 269" />
        <path d="M62 228L61 180M61 193L48 181M62 202L77 186" />
        <path d="M60 189C34 190 27 171 35 160C21 147 32 131 41 132C36 112 57 106 63 118C77 106 92 118 88 133C105 143 96 161 88 165C94 181 78 192 60 189Z" fill="#E5F1E4" />
        <path d="M119 237L120 153L111 158L158 116L204 155L196 150L197 247M120 153L158 120L196 153" fill="#FAF9F2" />
        <path d="M143 239L144 209Q154 197 165 209L165 241M211 251L211 200L203 203L235 170L266 202L260 199L261 267M225 257L226 232Q235 224 242 232L242 262" fill="#FAF9F2" />
        <path d="M293 276L294 186L285 192L329 150L371 191L363 185L365 287M316 282L316 249Q327 235 340 248L340 286M391 285L392 234L385 238L418 208L449 236L442 233L442 277M410 283L410 257Q420 248 429 257L429 280" fill="#FAF9F2" />
        <path d="M61 228L61 180M349 183L349 164" />
        <path d="M194 157C240 147 288 114 297 79C308 38 261 44 254 72C242 31 208 35 210 72C212 102 252 130 270 155C286 179 279 193 272 205" />
        <path d="M90 108L77 88M108 95L101 71M391 144L403 124M410 158L431 150M395 184L418 186" />
      </g>
      <g fill="#FFD055" stroke="#073631" strokeWidth="2.5" strokeLinejoin="round">
        <rect x="137" y="162" width="12" height="15" rx="2" /><rect x="165" y="162" width="12" height="15" rx="2" />
        <rect x="138" y="185" width="12" height="14" rx="2" /><rect x="220" y="209" width="10" height="13" rx="2" /><rect x="241" y="209" width="10" height="13" rx="2" />
        <rect x="309" y="198" width="12" height="15" rx="2" /><rect x="336" y="198" width="12" height="15" rx="2" />
        <rect x="402" y="239" width="9" height="11" rx="2" /><rect x="423" y="239" width="9" height="11" rx="2" />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-container about-intro">
        <Reveal>
          <Label>About Léri</Label>
          <div className="about-copy">
            <p>Léri started with pockets of frustration. Renters struggling because they don’t fit traditional checklists. Landlords struggling to find suitable people they can trust.</p>
            <p>The more we listened, the more we realised that both sides often want the same thing: <strong>a good match, a successful tenancy and peace of mind.</strong></p>
            <p>So we’re building a better way to bring them together through personalised matching, flexible evidence and meaningful connections.</p>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="about-quote">
            <svg className="about-quote-shape" viewBox="0 0 400 340" preserveAspectRatio="none" aria-hidden="true">
              <path d="M24 136C6 83 20 40 68 22C115 3 155 14 197 40C242 70 267 58 309 81C351 104 385 153 390 197C399 252 367 301 319 306C276 311 249 299 209 306C163 313 113 326 70 309C18 289 2 249 13 205C20 178 31 162 24 136Z" fill="#FFE9B4" stroke="#073631" strokeWidth="2" />
            </svg>
            <h1>Renting is more than a transaction. It’s a mutual commitment.</h1>
          </div>
        </Reveal>
      </section>

      <section className="about-band">
        <div className="about-container about-split">
          <Reveal className="about-handshake">
            <div className="about-handshake-halo" />
            <Handshake size={230} strokeWidth={1.1} aria-hidden="true" />
          </Reveal>
          <Reveal from="right">
            <Label>Our vision</Label>
            <h2>In a world that puts property first, we’re putting people first.</h2>
            <p className="about-caption">Where trust goes both ways. And renting works better for everyone.</p>
          </Reveal>
        </div>
      </section>

      <section className="about-container about-founder">
        <Reveal>
          <Label>Meet the founder</Label>
          <h2>Hi, I’m Tom Tom.</h2>
          <div className="about-copy about-founder-copy">
            <p>I’ve been the renter who didn’t tick the boxes.<br />I’ve represented thousands of people in higher education, campaigned nationally for better housing and researched how perceptions of risk, trust and labels shape access to housing in the private rental sector.</p>
            <p>I’m a former two-term Student President at Glasgow Caledonian University, with an MSc in Social Innovation with Distinction.</p>
            <p>My journey building Léri has been recognised through the Global Changemaker Award, Magnusson Fund, First Minister’s Start-Up Challenge and, most recently, the Professional Rising Star Award at the Black Scottish Awards.</p>
            <p>Today, I’m building Léri alongside my team, turning lived experience, research and bold ideas into technology that puts people first.</p>
            <p><strong>Because I believe the best innovation happens when people aren’t just the problem we’re solving for, but the heart of how we design the solution.</strong></p>
          </div>
        </Reveal>
        <Reveal from="right" className="about-portrait-wrap">
          <div className="about-portrait">
            <svg className="about-portrait-backdrop" viewBox="0 0 440 540" aria-hidden="true">
              <path fill="#FFE3A0" d="M75 235C18 157 43 62 123 28C210-9 279 52 301 124C319 186 391 200 423 270C466 361 387 389 382 442C380 501 352 530 294 519L91 484C14 471-3 389 35 324C55 290 91 273 75 235Z" />
            </svg>
            <img src="/founder-cutout.png" alt="Tom Tom, founder of Léri" width="1073" height="1466" loading="lazy" />
            <svg className="about-portrait-doodles" viewBox="0 0 440 540" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M300 66l-19-18 8-14 4 15 14-13-3 19 18-4-10 20Z M314 26l12-21 M334 44l15-12 M342 63l20-6 M379 133l23-38 M399 153l24-12 M399 179l23 10" />
            </svg>
          </div>
        </Reveal>
      </section>

      <section className="about-band about-community">
        <div className="about-container about-split">
          <Reveal><Neighbourhood /></Reveal>
          <Reveal from="right">
            <Label>This is your space</Label>
            <h2>We’re building Léri with you.</h2>
            <div className="about-copy">
              <p>Not just for you.</p>
              <p>For renters ready to be seen. For landlords ready to see the fuller picture.</p>
              <p><strong>We’re a community built on trust, and you can help shape it.</strong></p>
            </div>
            <Button to="/waitlist" icon className="mt-5 !rounded-full">Join our waitlist</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
