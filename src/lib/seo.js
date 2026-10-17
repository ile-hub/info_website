import { ROUTES, NOT_FOUND, SITE_URL, SITE_NAME, SOCIAL_IMAGE } from "../data/site";

export { SITE_URL, SITE_NAME };

const normalise = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

export function routeMeta(pathname) {
  const route = ROUTES.find((r) => r.path === normalise(pathname));
  return route ? { ...route, noindex: false } : { ...NOT_FOUND, path: normalise(pathname), noindex: true };
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// <head> tags for a given page, injected into the HTML at build time.
export function headTags(pathname) {
  const { title, description, path, noindex } = routeMeta(pathname);
  const url = SITE_URL + (path === "/" ? "/" : path);
  const image = `${SITE_URL}${SOCIAL_IMAGE.path}`;
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${noindex ? "noindex" : "index, follow"}" />`,
    noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="${SOCIAL_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${SOCIAL_IMAGE.height}" />`,
    `<meta property="og:image:alt" content="${esc(SOCIAL_IMAGE.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${esc(SOCIAL_IMAGE.alt)}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");
}
