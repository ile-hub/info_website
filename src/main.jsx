import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ROUTER_FUTURE } from "./lib/router";
// Fonts are self-hosted (bundled from @fontsource) rather than loaded from
// Google Fonts, so visitors' browsers never contact a third party.
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/inter/latin-900.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";
import "./styles/globals.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter future={ROUTER_FUTURE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages arrive prerendered (scripts/prerender.js), so hydrate
// them; the dev server serves an empty root, so render from scratch.
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
