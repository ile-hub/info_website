import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeMeta, SITE_URL } from "../lib/seo";

// Keeps <title>, description, canonical and social tags in sync on
// client-side navigation. The initial values for each page are baked into
// the prerendered HTML, so crawlers never depend on this running.
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, path, noindex } = routeMeta(pathname);
    const url = SITE_URL + (path === "/" ? "/" : path);
    document.title = title;
    const set = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]', "content", url);
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
    set('link[rel="canonical"]', "href", url);
    set('meta[name="robots"]', "content", noindex ? "noindex" : "index, follow");
  }, [pathname]);

  return null;
}
