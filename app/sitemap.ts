import { getAbsoluteUrl } from "../lib/siteData";

const routes = [
  "",
  "/about",
  "/blog",
  "/cleaning-process",
  "/contact",
  "/services",
  "/services/commercial-cleaning",
  "/services/fumigation-pest-control",
  "/services/mattress-cleaning",
  "/services/post-construction-cleaning",
  "/services/pressure-washing",
  "/services/residential-cleaning",
  "/services/rug-carpet-cleaning",
  "/services/upholstery-cleaning"
];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/services" ? 0.9 : 0.8
  }));
}
