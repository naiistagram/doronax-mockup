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
const BED_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18v2M21 18v2"/><path d="M3 12V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`;
const CALENDAR_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`;
const LENGTH_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16"/><path d="M4 8v8M9 9v6M14 9v6M20 8v8"/></svg>`;
const BUILDER_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg>`;
const PERSON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>`;

function head(title) {
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — ${SITE.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />`;
}

function header() {
  return `<header class="site-header">
    <div class="container">
      <a href="index.html" class="logo"><img src="images/homepage/logo.png" alt="${SITE.name}" class="logo-mark" /> ${SITE.name}</a>
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
      <p><strong>${SITE.name}</strong> — ${SITE.address}</p>
      <p>&copy; 2026 ${SITE.name}. All rights reserved.</p>
    </div>
  </footer>`;
}

// Sector-scoped body class, plus the shared "old money" luxury theme for the
// individual item opted in via `luxuryTheme: true` (e.g. Private Members Club).
function pageBodyClass(sectorSlug, item) {
  const classes = [`sector-${sectorSlug}`];
  if (item && item.luxuryTheme) classes.push("theme-luxury");
  return classes.join(" ");
}

function page(title, body, extraScript, bodyClass) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${head(title)}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
  ${header()}
  ${body}
  ${footer()}
  ${extraScript || ""}
</body>
</html>
`;
}

// Renders a pill row + expand-panel section for a list of items (services on a
// sector page, or subServices on a service page). Shared so the same
// click-to-expand pattern works at either nesting level.
function buildPillSection(items, basePath) {
  // comingSoon may be `true` (static, disabled — no panel, no content, legacy
  // only) or `{ headline, body }` (enabled pill that expands in place to show
  // real placeholder copy instead of linking to a page).
  const chips = items
    .map((item) => {
      if (item.comingSoon === true) {
        return `<button type="button" class="pill pill-disabled" disabled>${item.name} <span class="badge-coming-soon">Coming Soon</span></button>`;
      }
      const badge = item.comingSoon ? ` <span class="badge-coming-soon">Coming Soon</span>` : "";
      return `<button type="button" class="pill" data-slug="${item.slug}">${item.name}${badge} ${CHEVRON_SVG}</button>`;
    })
    .join("\n        ");

  const panels = items
    .filter((item) => item.comingSoon !== true)
    .map((item) => {
      let link = "";
      if (item.comingSoon) {
        link = "";
      } else if (item.externalUrl) {
        link = `<a href="${item.externalUrl}" target="_blank" rel="noopener" class="arrow-link">Visit Website ${ARROW_SVG}</a>`;
      } else if (item.href) {
        link = `<a href="${item.href}" class="arrow-link">View Full Page ${ARROW_SVG}</a>`;
      } else if (!item.noPage) {
        link = `<a href="${basePath}-${item.slug}.html" class="arrow-link">View Full Page ${ARROW_SVG}</a>`;
      }
      const comingSoonBody = item.comingSoon
        ? `<p class="coming-soon-note"><strong>${item.comingSoon.headline || "Coming Soon"}.</strong> ${item.comingSoon.body}</p>`
        : "";
      const extraParas = item.panelBody
        ? item.panelBody.map((p) => (p.trim().startsWith("<") ? p : `<p>${p}</p>`)).join("\n            ")
        : "";
      const contactCard = item.contact ? contactCardHTML(item.contact) : "";
      const banner = item.comingSoon ? `<span class="coming-soon-banner">${item.comingSoon.headline || "Coming Soon"}</span>` : "";
      return `<div class="service-expand" data-panel="${item.slug}">
        <div class="service-expand-grid">
          <div class="service-expand-image" style="background-image: url('${item.heroImage}')">${banner}</div>
          <div class="service-expand-body">
            <h3>${item.name}</h3>
            <p>${item.intro}</p>
            ${comingSoonBody}
            ${extraParas}
            ${contactCard}
            ${link}
          </div>
        </div>
      </div>`;
    })
    .join("\n      ");

  return { chips, panels };
}

// Renders a large hero-style showcase block for any item flagged
// `featured: true`. Reusable across sector pages (services) and service
// pages (subServices) so any standout item can get this treatment.
function buildFeaturedShowcase(items, basePath) {
  return (items || [])
    .filter((item) => item.featured && !item.comingSoon)
    .map((item) => {
      const href = item.externalUrl || `${basePath}-${item.slug}.html`;
      const target = item.externalUrl ? ' target="_blank" rel="noopener"' : "";
      return `<section class="services-section featured-showcase-section">
    <div class="container">
      <div class="featured-showcase" style="background-image: url('${item.heroImage}')">
        <div class="featured-showcase-overlay"></div>
        <div class="featured-showcase-inner">
          <p class="featured-eyebrow">Featured</p>
          <h2>${item.name}</h2>
          <p>${item.intro}</p>
          <a href="${href}"${target} class="btn">View ${item.name} ${ARROW_SVG}</a>
        </div>
      </div>
    </div>
  </section>`;
    })
    .join("\n");
}

const PILLS_SCRIPT = `<script>
  function openPill(btn) {
    const slug = btn.dataset.slug;
    const panel = document.querySelector('.service-expand[data-panel="' + slug + '"]');
    document.querySelectorAll('[data-pills] .pill').forEach((p) => p.classList.remove('active'));
    document.querySelectorAll('.service-expand').forEach((p) => p.classList.remove('visible'));
    btn.classList.add('active');
    panel.classList.add('visible');
  }
  document.querySelectorAll('[data-pills] .pill[data-slug]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('active');
      document.querySelectorAll('[data-pills] .pill').forEach((p) => p.classList.remove('active'));
      document.querySelectorAll('.service-expand').forEach((p) => p.classList.remove('visible'));
      if (!isOpen) openPill(btn);
    });
  });
  const firstPill = document.querySelector('[data-pills] .pill[data-slug]');
  if (firstPill) openPill(firstPill);
  </script>`;

function backLinkLeft(href, label) {
  return `<a href="${href}" class="arrow-link arrow-link-light back-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    ${label}
  </a>`;
}

function pageHero(image, title, back, subheading, comingSoon) {
  const banner = comingSoon ? `<span class="coming-soon-banner">${comingSoon.headline || "Coming Soon"}</span>` : "";
  return `<section class="hero page-hero" style="background-image: url('${image}')">
    ${banner}
    <div class="container hero-inner">
      ${back}
      <h1>${title}</h1>
      ${subheading ? `<p class="page-hero-subheading">${subheading}</p>` : ""}
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
        <a href="#sectors" class="btn">Explore Our Groups ${ARROW_SVG}</a>
      </div>
      <div class="stat-row">
        ${stats}
      </div>
    </div>
  </section>`;

  const about = splitSection(
    "About Doranax Albion Holdings",
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

  const { chips, panels } = buildPillSection(sector.services, sector.slug);
  const featured = buildFeaturedShowcase(sector.services, sector.slug);

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

  const extra = (sector.extraBlocks || []).map((b) => RICH_BLOCK_RENDERERS[b.type](b)).join("\n");

  const cta = `<section class="dark-section" style="padding: 72px 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px;">
        <h2>Interested in working with us?</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">Get in touch to learn more about ${sector.name}.</p>
      <a href="contact.html" class="btn btn-outline">Contact Us ${ARROW_SVG}</a>
    </div>
  </section>`;

  fs.writeFileSync(
    path.join(ROOT, `${sector.slug}.html`),
    page(sector.name, hero + intro + featured + services + extra + cta, PILLS_SCRIPT, pageBodyClass(sector.slug, sector))
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

  let subServices = "";
  let featured = "";
  let script = "";
  if (svc.subServices && svc.subServices.length) {
    const { chips, panels } = buildPillSection(svc.subServices, `${sector.slug}-${svc.slug}`);
    featured = buildFeaturedShowcase(svc.subServices, `${sector.slug}-${svc.slug}`);
    subServices = `<section class="services-section front-and-center">
    <div class="container">
      <h2>${svc.name} Services</h2>
      <div class="pills-wrap" data-pills>
        ${chips}
      </div>
      ${panels}
    </div>
  </section>`;
    script = PILLS_SCRIPT;
  }

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
    page(`${svc.name} — ${sector.name}`, hero + featured + subServices + body + enquiry, script, pageBodyClass(sector.slug, svc))
  );
}

// ---------- Rich service pages ----------
// A richer, multi-block page layout for flagship services that need more
// than the standard hero + intro + enquiry template (product grids, process
// steps, extra copy). Content lives in svc.richPage as an ordered list of
// blocks so each page can mix sections in whatever order it needs.

function renderRichIntroBlock(block) {
  const paras = block.paragraphs.map((p) => `<p>${p}</p>`).join("\n          ");
  // No side images — paired placeholder photos here were frequently irrelevant
  // (random stock/press results from the loremflickr keyword match) and read
  // as unprofessional. Full-width text only.
  return `<section class="split-section rich-intro">
    <div class="container">
      <div class="rich-intro-text rich-intro-text-full">${paras}</div>
    </div>
  </section>`;
}

function renderRichFeaturesBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const imageClass = block.glow ? "feature-card-image feature-card-image-glow" : "feature-card-image";
  const items = block.items
    .map(
      (item) => `<div class="feature-card">
          ${
            item.video
              ? `<video class="${imageClass}" src="${item.video}" poster="${item.image || ""}" controls playsinline></video>`
              : `<div class="${imageClass}" style="background-image: url('${item.image}')"></div>`
          }
          <h3>${item.name}</h3>
          ${item.subheading ? `<p class="feature-card-subheading">${item.subheading}</p>` : ""}
          <p>${item.body}</p>
          ${
            item.clientPhotos
              ? `<div class="feature-card-client-photos">
            ${item.clientPhotos.map((src) => `<div class="feature-card-client-photo" style="background-image: url('${src}')"></div>`).join("\n            ")}
          </div>`
              : ""
          }
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <div class="feature-grid" style="--feature-cols: ${block.columns || 4}">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderRichProcessBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const steps = block.steps
    .map(
      (s, i) => `<div class="process-step">
          <div class="process-step-number">${s.step || i + 1}</div>
          <h3>${s.name}</h3>
          <p>${s.body}</p>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <div class="process-grid">
        ${steps}
      </div>
    </div>
  </section>`;
}

function renderRichDescriptionBlock(block) {
  const paras = block.paragraphs.map((p) => `<p>${p}</p>`).join("\n          ");
  return `<section class="split-section compact">
    <div class="container">
      <div class="rich-description">${paras}</div>
    </div>
  </section>`;
}

// Like productGrid, but no price row — for "shown to give a sense of the
// line" listings that aren't a live storefront (no prices, per client note).
function renderRichProductShowcaseBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const items = block.items
    .map(
      (p) => `<div class="product-card">
          <div class="product-card-image" style="background-image: url('${p.image}')"></div>
          <h3 class="product-card-name">${p.name}</h3>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <div class="product-grid">
        ${items}
      </div>
    </div>
  </section>`;
}

// A horizontally scrollable, snap-scrolling row of items — for a listing
// with too many variants to sensibly grid (e.g. bundle colourways).
function renderRichCarouselBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const items = block.items
    .map(
      (p) => `<div class="carousel-card">
          <div class="carousel-card-image" style="background-image: url('${p.image}')"></div>
          <h3 class="carousel-card-name">${p.name}</h3>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <div class="carousel-track">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderRichProductGridBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const items = block.items
    .map(
      (p) => `<div class="product-card">
          <div class="product-card-image" style="background-image: url('${p.image}')">
            ${p.soldOut ? `<span class="product-sold-out">Sold Out</span>` : ""}
          </div>
          <h3 class="product-card-name">${p.name}</h3>
          <p class="product-card-price">£${p.price.toFixed(2)} GBP</p>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <div class="product-grid">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderRichYachtGridBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const intro = block.intro ? `<p class="yacht-grid-intro">${block.intro}</p>` : "";
  const cards = block.items
    .map(
      (y) => `<div class="yacht-card">
          <div class="yacht-card-image" style="background-image: url('${y.image}')">
            <span class="yacht-card-badge">${y.badge}</span>
          </div>
          <div class="yacht-card-body">
            <p class="yacht-card-type">Motor Yacht</p>
            <p class="yacht-card-price">${y.priceDisplay}</p>
            <h3 class="yacht-card-name">${y.name}</h3>
            <p class="yacht-card-location">${y.location}</p>
            <div class="yacht-card-specs">
              <span class="yacht-spec">${BED_SVG} ${y.cabins}</span>
              <span class="yacht-spec">${CALENDAR_SVG} ${y.year}</span>
              <span class="yacht-spec">${LENGTH_SVG} ${y.length}</span>
              <span class="yacht-spec">${BUILDER_SVG} ${y.builder}</span>
            </div>
            <div class="yacht-card-actions">
              <a href="#broker-contact" class="btn btn-outline-navy">Contact</a>
              <span class="yacht-card-avatar">${PERSON_SVG}</span>
            </div>
          </div>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section">
    <div class="container">
      ${heading}
      ${intro}
      <div class="yacht-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderRichBrokerContactBlock(block) {
  const photo = block.photo
    ? `<div class="broker-photo" style="background-image: url('${block.photo}')"></div>`
    : `<div class="broker-photo-placeholder">${PERSON_SVG}<span>Photo Pending</span></div>`;
  return `<section class="broker-contact" id="broker-contact">
    <div class="container">
      <div class="broker-contact-grid">
        <div class="broker-card">
          ${photo}
          <h3>${block.name}</h3>
          <p class="broker-title">${block.title}</p>
          ${block.company ? `<p class="broker-company">${block.company}</p>` : ""}
          <div class="broker-details">
            <p>${block.location}</p>
            ${block.officePhone ? `<p>Office: ${block.officePhone}</p>` : ""}
            <p>Mobile: ${block.mobilePhone}</p>
            <p>${block.email ? `<a href="mailto:${block.email}">${block.email}</a>` : "Email — pending"}</p>
          </div>
        </div>
        <form class="contact-form broker-form" onsubmit="return false;">
          <h3>Send an Enquiry</h3>
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows="5" required></textarea></label>
          <button type="submit" class="btn">Send Message ${ARROW_SVG}</button>
        </form>
      </div>
    </div>
  </section>`;
}

function renderLogoGridBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const items = block.items
    .map(
      (i) => `<div class="logo-tile">
          <div class="logo-tile-image" style="background-image: url('${i.logo}')"></div>
          <p>${i.name}</p>
        </div>`
    )
    .join("\n        ");
  return `<section class="services-section logo-grid-section">
    <div class="container">
      ${heading}
      <div class="logo-grid">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderJobsCtaBlock(block) {
  return `<section class="dark-section jobs-cta" style="padding: 72px 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px;">
        <h2>${block.heading}</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">${block.body}</p>
      <a href="${block.buttonHref}" class="btn btn-outline">${block.buttonLabel} ${ARROW_SVG}</a>
    </div>
  </section>`;
}

const PLAY_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;

// Safe pattern for press/third-party video coverage: a styled thumbnail with
// a play affordance that opens the source article/player in a new tab,
// rather than embedding or rehosting a video file we don't have rights to.
// Shared markup for a small contact card (avatar or grey placeholder, name,
// role) — used both as its own richPage block and inline inside accordion
// panels wherever copy names a specific point of contact.
function contactCardHTML(contact) {
  const avatar = contact.image
    ? `<div class="contact-card-avatar-image" style="background-image: url('${contact.image}')"></div>`
    : `<div class="contact-card-avatar-fallback">${PERSON_SVG}</div>`;
  return `<div class="contact-card">
          ${avatar}
          <div class="contact-card-info">
            <p class="contact-card-name">${contact.name}</p>
            ${contact.role ? `<p class="contact-card-role">${contact.role}</p>` : ""}
          </div>
        </div>`;
}

function renderContactCardBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  return `<section class="services-section">
    <div class="container">
      ${heading}
      ${contactCardHTML(block)}
    </div>
  </section>`;
}

function renderVideoCardBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  return `<section class="services-section">
    <div class="container">
      ${heading}
      <a href="${block.href}" target="_blank" rel="noopener" class="video-card">
        <div class="video-card-thumb" style="background-image: url('${block.thumbnail}')">
          <span class="video-card-play">${PLAY_SVG}</span>
        </div>
        <div class="video-card-body">
          <p class="video-card-label">${block.label || "Watch"}</p>
          <p class="video-card-title">${block.title}</p>
        </div>
      </a>
    </div>
  </section>`;
}

// A non-functional mockup login screen for a gated area (e.g. Private
// Members Club) — design-only, no real authentication, form submit is a
// no-op like every other form on the site.
function renderLoginMockupBlock(block) {
  return `<section class="login-mockup-section">
    <div class="login-mockup-image" style="background-image: url('${block.image}')"></div>
    <div class="login-mockup-panel">
      <div class="login-mockup-card">
        <p class="login-mockup-eyebrow">${block.eyebrow || "Members Only"}</p>
        <h2>${block.heading}</h2>
        <p class="login-mockup-body">${block.body}</p>
        <form class="login-mockup-form" onsubmit="return false;">
          <label>${block.usernameLabel || "Membership Email"}<input type="email" name="email" required /></label>
          <label>${block.passwordLabel || "Password"}<input type="password" name="password" required /></label>
          <button type="submit" class="btn">${block.buttonLabel || "Sign In"}</button>
        </form>
        <p class="login-mockup-footnote">${block.footnote || ""}</p>
      </div>
    </div>
  </section>`;
}

const RICH_BLOCK_RENDERERS = {
  intro: renderRichIntroBlock,
  features: renderRichFeaturesBlock,
  process: renderRichProcessBlock,
  description: renderRichDescriptionBlock,
  productGrid: renderRichProductGridBlock,
  productShowcase: renderRichProductShowcaseBlock,
  carousel: renderRichCarouselBlock,
  yachtGrid: renderRichYachtGridBlock,
  brokerContact: renderRichBrokerContactBlock,
  logoGrid: renderLogoGridBlock,
  supplierGrid: renderLogoGridBlock,
  jobsCta: renderJobsCtaBlock,
  videoCard: renderVideoCardBlock,
  loginMockup: renderLoginMockupBlock,
  contactCard: renderContactCardBlock,
  categoryCards: renderRichCategoryCardsBlock,
};

function renderRichCta(cta) {
  if (cta.form) {
    return `<section class="split-section service-enquiry">
    <div class="container">
      <h2>${cta.heading}</h2>
      <p style="color: var(--gray); max-width: 520px; margin-bottom: 24px;">${cta.body}</p>
      <form class="contact-form" onsubmit="return false;">
        <label>Full Name<input type="text" name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" rows="5" required></textarea></label>
        <button type="submit" class="btn">${cta.buttonLabel} ${ARROW_SVG}</button>
      </form>
    </div>
  </section>`;
  }
  return `<section class="dark-section"${cta.id ? ` id="${cta.id}"` : ""} style="padding: 72px 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px;">
        <h2>${cta.heading}</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">${cta.body}</p>
      <a href="${cta.buttonHref}" class="btn btn-outline">${cta.buttonLabel} ${ARROW_SVG}</a>
    </div>
  </section>`;
}

const STAR8_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8z"/></svg>`;

function renderRichCategoryCardsBlock(block) {
  const heading = block.heading ? `<h2 class="category-cards-heading">${block.heading}</h2>` : "";
  const cards = block.cards
    .map(
      (card) => `<div class="category-card">
          <div class="category-card-icon">${STAR8_SVG}</div>
          <h3 class="category-card-title">${card.title}</h3>
          <ul class="category-card-list">
            ${card.items.map((i) => `<li>${i}</li>`).join("\n            ")}
          </ul>
        </div>`
    )
    .join("\n        ");
  const contact = block.contactHref
    ? `<a href="${block.contactHref}" class="arrow-link category-cards-contact">${block.contactLabel || "Contact Us"} ${ARROW_SVG}</a>`
    : "";
  return `<section class="services-section category-cards-section">
    <div class="container">
      ${heading}
      <div class="category-cards-grid">
        ${cards}
      </div>
      ${contact}
    </div>
  </section>`;
}

function buildRichPage(item, backHref, backLabel, outputSlug, titleContext, sectorSlug) {
  const rp = item.richPage;
  const hero = pageHero(item.heroImage, item.name, backLinkLeft(backHref, backLabel), rp.subheading, item.comingSoon);

  const blocks = rp.blocks.map((b) => RICH_BLOCK_RENDERERS[b.type](b)).join("\n");

  let subServices = "";
  let script = "";
  if (item.subServices && item.subServices.length) {
    const { chips, panels } = buildPillSection(item.subServices, outputSlug);
    subServices = `<section class="services-section front-and-center">
    <div class="container">
      <h2>${item.name} Services</h2>
      <div class="pills-wrap" data-pills>
        ${chips}
      </div>
      ${panels}
    </div>
  </section>`;
    script = PILLS_SCRIPT;
  }

  const cta = rp.cta ? renderRichCta(rp.cta) : "";

  const body = item.subServicesFirst ? hero + subServices + blocks + cta : hero + blocks + subServices + cta;

  fs.writeFileSync(
    path.join(ROOT, `${outputSlug}.html`),
    page(`${item.name} — ${titleContext}`, body, script, pageBodyClass(sectorSlug, item))
  );
}

function buildRichServicePage(sector, svc) {
  buildRichPage(
    svc,
    `${sector.slug}.html`,
    `Back to ${sector.name}`,
    `${sector.slug}-${svc.slug}`,
    sector.name,
    sector.slug
  );
}

function buildRichSubServicePage(sector, svc, sub) {
  buildRichPage(
    sub,
    `${sector.slug}-${svc.slug}.html`,
    `Back to ${svc.name}`,
    `${sector.slug}-${svc.slug}-${sub.slug}`,
    `${svc.name} — ${sector.name}`,
    sector.slug
  );
}

function buildSubServicePage(sector, svc, sub) {
  const hero = pageHero(sub.heroImage, sub.name, backLinkLeft(`${sector.slug}-${svc.slug}.html`, `Back to ${svc.name}`));

  const body = `<section class="split-section" style="padding-bottom: 56px;">
    <div class="container">
      <div class="split-grid">
        <div class="split-text">
          <h2>${sub.name}</h2>
          <p>${sub.intro}</p>
        </div>
        <div class="split-images">
          <div class="split-image-main" style="background-image: url('${sub.gallery[0]}')"></div>
          <div class="split-image-secondary" style="background-image: url('${sub.gallery[1]}')"></div>
        </div>
      </div>
    </div>
  </section>`;

  const enquiry = `<section class="split-section service-enquiry">
    <div class="container">
      <h2>Contact Us About ${sub.name}</h2>
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
    path.join(ROOT, `${sector.slug}-${svc.slug}-${sub.slug}.html`),
    page(`${sub.name} — ${svc.name} — ${sector.name}`, hero + body + enquiry, "", pageBodyClass(sector.slug, sub))
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
          <p>${SITE.name} Ltd<br />${SITE.address}</p>
        </div>
        <form class="contact-form" id="contact-form">
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Sector of Interest
            <select name="sector">
              ${SECTORS.map((s) => `<option>${s.name}</option>`).join("\n              ")}
            </select>
          </label>
          <label>Message<textarea name="message" rows="5" required></textarea></label>
          <button type="submit" class="btn">Send Enquiry ${ARROW_SVG}</button>
          <p class="form-status" data-form-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>`;

  const script = `<script>
  (function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = form.querySelector("[data-form-status]");
    const button = form.querySelector("button[type=submit]");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      button.disabled = true;
      status.textContent = "Sending...";
      status.className = "form-status";
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok || !result.ok) throw new Error(result.error || "Something went wrong");
        form.reset();
        status.textContent = "Thanks — someone will be in touch shortly.";
        status.className = "form-status form-status-success";
      } catch (err) {
        status.textContent = "Sorry, that didn't send. Please email us directly at ${SITE.email}.";
        status.className = "form-status form-status-error";
      } finally {
        button.disabled = false;
      }
    });
  })();
  </script>`;

  fs.writeFileSync(path.join(ROOT, "contact.html"), page("Contact", hero + body, script));
}

function run() {
  buildHome();
  let pageCount = 2; // index + contact

  const buildService = (sector, svc) => {
    if (svc.comingSoon === true || svc.externalUrl || svc.noPage) return;
    if (svc.richPage) {
      buildRichServicePage(sector, svc);
    } else {
      buildServicePage(sector, svc);
    }
    pageCount += 1;

    (svc.subServices || []).forEach((sub) => {
      if (sub.comingSoon === true || sub.externalUrl || sub.noPage) return;
      if (sub.richPage) {
        buildRichSubServicePage(sector, svc, sub);
      } else {
        buildSubServicePage(sector, svc, sub);
      }
      pageCount += 1;
    });
  };

  SECTORS.forEach((sector) => {
    buildSectorPage(sector);
    pageCount += 1;

    sector.services.forEach((svc) => buildService(sector, svc));
    // hiddenServices: pages that still get built (with their own full
    // subService pill navigation intact) but aren't shown as top-level pills
    // on the sector page — they're reached via a grouping page instead
    // (e.g. Vehicle Hire is now reached through the "Events" hub page).
    (sector.hiddenServices || []).forEach((svc) => buildService(sector, svc));
  });

  buildContact();

  console.log(`Built ${pageCount} pages.`);
}

run();
