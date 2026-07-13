#!/usr/bin/env node
/* Generates every static HTML page from content/data.js.
   Run: node build/build.js */

const fs = require("fs");
const path = require("path");
const { SITE, SECTORS, CONTACT } = require("../content/data.js");
const { STAT_ICONS } = require("./icons.js");

const ROOT = path.join(__dirname, "..");

const ARROW_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const CHEVRON_SVG = `<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
const LOGO_SVG = `<svg class="logo-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="16" cy="16" r="13"/><path d="M3 16h26M16 3c4 3.6 6 9.2 6 13s-2 9.4-6 13c-4-3.6-6-9.2-6-13s2-9.4 6-13Z"/></svg>`;

function head(title) {
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — ${SITE.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />`;
}

function header() {
  return `<header class="site-header">
    <div class="container">
      <a href="index.html" class="logo">${LOGO_SVG} ${SITE.name}</a>
      <nav class="site-nav">
        <a href="index.html">Home</a>
        <a href="index.html#sectors">Sectors</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <p><strong>${SITE.name}</strong> — United Kingdom</p>
      <p>&copy; 2026 ${SITE.name}. All rights reserved.</p>
    </div>
  </footer>`;
}

function page(title, body, extraScript) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${head(title)}
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
  ${extraScript || ""}
</body>
</html>
`;
}

function backLinkLeft(href, label) {
  return `<a href="${href}" class="arrow-link arrow-link-light back-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    ${label}
  </a>`;
}

function pageHero(image, title, back) {
  return `<section class="hero page-hero" style="background-image: url('${image}')">
    <div class="container hero-inner">
      ${back}
      <h1>${title}</h1>
    </div>
  </section>`;
}

function splitSection(heading, paragraphs, mainImage, secondaryImage, link, reverse) {
  const paras = paragraphs.map((p) => `<p>${p}</p>`).join("\n          ");
  return `<section class="split-section">
    <div class="container">
      <div class="split-grid${reverse ? " reverse" : ""}">
        <div class="split-text">
          <h2>${heading}</h2>
          ${paras}
          ${link ? `<a href="${link.href}" class="arrow-link">${link.label}${ARROW_SVG}</a>` : ""}
        </div>
        <div class="split-images">
          <div class="split-image-main" style="background-image: url('${mainImage}')"></div>
          <div class="split-image-secondary" style="background-image: url('${secondaryImage}')"></div>
        </div>
      </div>
    </div>
  </section>`;
}

function buildHome() {
  const stats = SITE.stats
    .map(
      (s) => `<div class="stat">${STAT_ICONS[s.key]}<div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div></div>`
    )
    .join("\n        ");

  const heroBody = `<section class="hero" style="background-image: url('${SITE.heroImage}')">
    <div class="container hero-inner">
      <div class="hero-content">
        <h1>${SITE.name}</h1>
        <p>${SITE.tagline}</p>
        <a href="#sectors" class="btn">Explore Our Sectors ${ARROW_SVG}</a>
      </div>
      <div class="stat-row">
        ${stats}
      </div>
    </div>
  </section>`;

  const about = splitSection(
    "About Doronax",
    SITE.aboutParagraphs,
    SITE.aboutImage,
    SITE.aboutImageSecondary,
    { href: "contact.html", label: "More Information" }
  );

  // Full rows of 3 use a 2-column span each (out of a 6-col grid); a
  // trailing partial row spreads its tiles evenly across all 6 columns
  // instead of leaving a gap, so 5 sectors reads as 3-then-2-centered.
  const remainder = SECTORS.length % 3;
  const fullRowCount = SECTORS.length - remainder;
  const wideSpan = remainder > 0 ? 6 / remainder : 2;

  const tiles = SECTORS.map((s, i) => {
    const isWide = i >= fullRowCount;
    const cls = isWide ? "sector-tile wide" : "sector-tile";
    const style = isWide
      ? `background-image: url('${s.tileImage}'); grid-column: span ${wideSpan}`
      : `background-image: url('${s.tileImage}')`;
    return `<a href="${s.slug}.html" class="${cls}" style="${style}">
          <div class="sector-tile-label">${s.name}</div>
        </a>`;
  }).join("\n        ");

  const sectors = `<section class="sectors-section" id="sectors">
    <div class="container">
      <div class="section-heading">
        <h2>Explore Our Sectors</h2>
      </div>
      <div class="sector-grid">
        ${tiles}
      </div>
    </div>
  </section>`;

  fs.writeFileSync(path.join(ROOT, "index.html"), page("Home", heroBody + sectors + about));
}

function buildSectorPage(sector) {
  const hero = pageHero(sector.heroImage, sector.name, backLinkLeft("index.html", "Back to Sectors"));

  const intro = `<section class="split-section compact">
    <div class="container">
      <p style="color: var(--gray); max-width: 720px; font-size: 1.02rem;">${sector.intro}</p>
    </div>
  </section>`;

  const chips = sector.services
    .map(
      (svc, i) =>
        `<button type="button" class="pill" data-index="${i}">${svc.name} ${CHEVRON_SVG}</button>`
    )
    .join("\n        ");

  const panels = sector.services
    .map(
      (svc, i) => `<div class="service-expand" data-panel="${i}">
        <div class="service-expand-grid">
          <div class="service-expand-image" style="background-image: url('${svc.heroImage}')"></div>
          <div class="service-expand-body">
            <h3>${svc.name}</h3>
            <p>${svc.intro}</p>
            <a href="${sector.slug}-${svc.slug}.html" class="arrow-link">View Full Page ${ARROW_SVG}</a>
          </div>
        </div>
      </div>`
    )
    .join("\n      ");

  const additional = sector.additionalServices
    ? `<div class="additional-services">
        <h2>Additional Services</h2>
        <div class="additional-grid">
          ${sector.additionalServices
            .map(
              (a) => `<div class="additional-card">
            <div class="additional-image" style="background-image: url('${a.image}')"></div>
            <h3>${a.name}</h3>
            <p>${a.description}</p>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>`
    : "";

  const services = `<section class="services-section front-and-center">
    <div class="container">
      <h2>Services</h2>
      <div class="pills-wrap" data-pills>
        ${chips}
      </div>
      ${panels}
      ${additional}
    </div>
  </section>`;

  const cta = `<section class="dark-section" style="padding: 72px 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px;">
        <h2>Interested in working with us?</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">Get in touch to learn more about ${sector.name}.</p>
      <a href="contact.html" class="btn btn-outline">Contact Us ${ARROW_SVG}</a>
    </div>
  </section>`;

  const script = `<script>
  function openPill(btn) {
    const index = btn.dataset.index;
    const panel = document.querySelector('.service-expand[data-panel="' + index + '"]');
    document.querySelectorAll('[data-pills] .pill').forEach((p) => p.classList.remove('active'));
    document.querySelectorAll('.service-expand').forEach((p) => p.classList.remove('visible'));
    btn.classList.add('active');
    panel.classList.add('visible');
  }
  document.querySelectorAll('[data-pills] .pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('active');
      document.querySelectorAll('[data-pills] .pill').forEach((p) => p.classList.remove('active'));
      document.querySelectorAll('.service-expand').forEach((p) => p.classList.remove('visible'));
      if (!isOpen) openPill(btn);
    });
  });
  const firstPill = document.querySelector('[data-pills] .pill');
  if (firstPill) openPill(firstPill);
  </script>`;

  fs.writeFileSync(
    path.join(ROOT, `${sector.slug}.html`),
    page(sector.name, hero + intro + services + cta, script)
  );
}

function buildServicePage(sector, svc) {
  const hero = pageHero(svc.heroImage, svc.name, backLinkLeft(`${sector.slug}.html`, `Back to ${sector.name}`));

  const body = `<section class="split-section" style="padding-bottom: 56px;">
    <div class="container">
      <div class="split-grid">
        <div class="split-text">
          <h2>${svc.name}</h2>
          <p>${svc.intro}</p>
        </div>
        <div class="split-images">
          <div class="split-image-main" style="background-image: url('${svc.gallery[0]}')"></div>
          <div class="split-image-secondary" style="background-image: url('${svc.gallery[1]}')"></div>
        </div>
      </div>
    </div>
  </section>`;

  const enquiry = `<section class="split-section service-enquiry">
    <div class="container">
      <h2>Contact Us About ${svc.name}</h2>
      <form class="contact-form" onsubmit="return false;">
        <label>Full Name<input type="text" name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Phone Number<input type="tel" name="phone" /></label>
        <label>Message<textarea name="message" rows="5" required></textarea></label>
        <button type="submit" class="btn">Submit ${ARROW_SVG}</button>
      </form>
    </div>
  </section>`;

  fs.writeFileSync(
    path.join(ROOT, `${sector.slug}-${svc.slug}.html`),
    page(`${svc.name} — ${sector.name}`, hero + body + enquiry)
  );
}

function buildContact() {
  const hero = pageHero(CONTACT.heroImage, "Contact", backLinkLeft("index.html", "Back to Home"));

  const body = `<section class="split-section contact-body">
    <div class="container">
      <p class="intro" style="color: var(--gray); max-width: 640px; font-size: 1.05rem; margin-bottom: 44px;">${CONTACT.intro}</p>

      <div class="contact-grid">
        <div class="contact-details">
          <h3>General Enquiries</h3>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <h3>Registered Office</h3>
          <p>${SITE.name} Ltd<br />United Kingdom</p>
        </div>
        <form class="contact-form" onsubmit="return false;">
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Sector of Interest
            <select name="sector">
              ${SECTORS.map((s) => `<option>${s.name}</option>`).join("\n              ")}
            </select>
          </label>
          <label>Message<textarea name="message" rows="5" required></textarea></label>
          <button type="submit" class="btn">Send Enquiry ${ARROW_SVG}</button>
        </form>
      </div>
    </div>
  </section>`;

  fs.writeFileSync(path.join(ROOT, "contact.html"), page("Contact", hero + body));
}

function run() {
  buildHome();
  SECTORS.forEach((sector) => {
    buildSectorPage(sector);
    sector.services.forEach((svc) => buildServicePage(sector, svc));
  });
  buildContact();

  const pageCount = 1 + SECTORS.length + SECTORS.reduce((n, s) => n + s.services.length, 0) + 1;
  console.log(`Built ${pageCount} pages.`);
}

run();
