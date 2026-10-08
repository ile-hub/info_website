import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { ROUTER_FUTURE } from "./lib/router";
import { headTags } from "./lib/seo";
import { ROUTES, SITE_URL } from "./data/site";

export { ROUTES, SITE_URL };

// Used at build time only, to turn each route into static HTML.
export function render(url) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url} future={ROUTER_FUTURE}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html, head: headTags(url) };
}
