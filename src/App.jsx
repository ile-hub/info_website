import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { C, REDUCE_MOTION } from "./lib/theme";
import { ROUTES } from "./data/site";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageFade from "./components/PageFade";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Renters from "./pages/Renters";
import Landlords from "./pages/Landlords";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const PAGES = { home: Home, renters: Renters, landlords: Landlords, how: HowItWorks, about: About, waitlist: Waitlist, privacy: Privacy };

// Each page has its own URL (see data/site.js). At build time every route
// is prerendered to static HTML (scripts/prerender.js) and hydrated here.
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? "auto" : "smooth" });
  }, [pathname]);

  return (
    <div style={{ backgroundColor: C.paper, minHeight: "100vh", overflowX: "clip" }} className="font-sans">
      <Seo />
      <Nav />
      <main>
        <PageFade pageKey={pathname}>
          <Routes>
            {ROUTES.map(({ key, path }) => {
              const Page = PAGES[key];
              return <Route key={key} path={path} element={<Page />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageFade>
      </main>
      <Footer />
    </div>
  );
}
