import { useState, useEffect } from "react";
import { C, REDUCE_MOTION } from "./lib/theme";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageFade from "./components/PageFade";
import Home from "./pages/Home";
import Renters from "./pages/Renters";
import Landlords from "./pages/Landlords";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";

// Simple client-side "page" state rather than a router — fine at this
// scale. Swap in react-router-dom (or Next.js file routing, if this
// gets moved into a Next app) if/when real URLs per page are needed
// for SEO or deep-linking.
export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? "auto" : "smooth" });
  }, [page]);

  const pages = {
    home: <Home setPage={setPage} />,
    renters: <Renters setPage={setPage} />,
    landlords: <Landlords setPage={setPage} />,
    how: <HowItWorks setPage={setPage} />,
    about: <About setPage={setPage} />,
    waitlist: <Waitlist />,
  };

  return (
    <div style={{ backgroundColor: C.paper, minHeight: "100vh" }} className="font-sans">
      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <Nav page={page} setPage={setPage} />
        <PageFade pageKey={page}>{pages[page]}</PageFade>
        <Footer setPage={setPage} />
      </div>
    </div>
  );
}
