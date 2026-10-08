// Build step: render every route in src/data/site.js to its own static
// HTML file (with per-page <head> tags), plus 404.html and sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, ROUTES, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

function page(url) {
  const { html, head } = render(url);
  return template.replace("<!--head-->", head).replace("<!--app-->", html);
}

for (const { path: route } of ROUTES) {
  const file = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(route));
  console.log(`prerendered ${route} -> dist/${file}`);
}

fs.writeFileSync(path.join(dist, "404.html"), page("/404"));
console.log("prerendered 404 -> dist/404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log(`wrote dist/sitemap.xml (${ROUTES.length} urls)`);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
