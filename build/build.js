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
      <p><strong>${SITE.name}</strong> — United Kingdom</p>
      <p>&copy; 2026 ${SITE.name}. All rights reserved.</p>
    </div>
  </footer>`;
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
      } else if (!item.noPage) {
        link = `<a href="${basePath}-${item.slug}.html" class="arrow-link">View Full Page ${ARROW_SVG}</a>`;
      }
      const comingSoonBody = item.comingSoon
        ? `<p class="coming-soon-note"><strong>${item.comingSoon.headline || "Coming Soon"}.</strong> ${item.comingSoon.body}</p>`
        : "";
      const extraParas = item.panelBody
        ? item.panelBody.map((p) => `<p>${p}</p>`).join("\n            ")
        : "";
      return `<div class="service-expand" data-panel="${item.slug}">
        <div class="service-expand-grid">
          <div class="service-expand-image" style="background-image: url('${item.heroImage}')"></div>
          <div class="service-expand-body">
            <h3>${item.name}</h3>
            <p>${item.intro}</p>
            ${comingSoonBody}
            ${extraParas}
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

function pageHero(image, title, back, subheading) {
  return `<section class="hero page-hero" style="background-image: url('${image}')">
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
    page(sector.name, hero + intro + featured + services + extra + cta, PILLS_SCRIPT, `sector-${sector.slug}`)
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
    page(`${svc.name} — ${sector.name}`, hero + featured + subServices + body + enquiry, script, `sector-${sector.slug}`)
  );
}

// ---------- Rich service pages ----------
// A richer, multi-block page layout for flagship services that need more
// than the standard hero + intro + enquiry template (product grids, process
// steps, extra copy). Content lives in svc.richPage as an ordered list of
// blocks so each page can mix sections in whatever order it needs.

function renderRichIntroBlock(block) {
  const paras = block.paragraphs.map((p) => `<p>${p}</p>`).join("\n          ");
  // Only ever show 2 images (main + secondary) — a 3rd used to force an
  // uneven "1 big + 2 stacked" layout with awkward leftover whitespace.
  const images = block.images
    .slice(0, 2)
    .map((src) => `<div class="rich-intro-image" style="background-image: url('${src}')"></div>`)
    .join("\n          ");
  return `<section class="split-section rich-intro">
    <div class="container">
      <div class="rich-intro-grid">
        <div class="rich-intro-text">${paras}</div>
        <div class="rich-intro-images">${images}</div>
      </div>
    </div>
  </section>`;
}

function renderRichFeaturesBlock(block) {
  const heading = block.heading ? `<h2>${block.heading}</h2>` : "";
  const items = block.items
    .map(
      (item) => `<div class="feature-card">
          <div class="feature-card-image" style="background-image: url('${item.image}')"></div>
          <h3>${item.name}</h3>
          ${item.subheading ? `<p class="feature-card-subheading">${item.subheading}</p>` : ""}
          <p>${item.body}</p>
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
              <button type="button" class="btn-compare">Add to Compare</button>
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
  return `<section class="broker-contact" id="broker-contact">
    <div class="container">
      <div class="broker-contact-grid">
        <div class="broker-card">
          <div class="broker-photo-placeholder">${PERSON_SVG}<span>Photo Pending</span></div>
          <h3>${block.name}</h3>
          <p class="broker-title">${block.title}</p>
          <p class="broker-company">${block.company}</p>
          <div class="broker-details">
            <p>${block.location}</p>
            <p>Office: ${block.officePhone}</p>
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

const RICH_BLOCK_RENDERERS = {
  intro: renderRichIntroBlock,
  features: renderRichFeaturesBlock,
  process: renderRichProcessBlock,
  description: renderRichDescriptionBlock,
  productGrid: renderRichProductGridBlock,
  yachtGrid: renderRichYachtGridBlock,
  brokerContact: renderRichBrokerContactBlock,
  logoGrid: renderLogoGridBlock,
  supplierGrid: renderLogoGridBlock,
  jobsCta: renderJobsCtaBlock,
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
  return `<section class="dark-section" style="padding: 72px 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px;">
        <h2>${cta.heading}</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">${cta.body}</p>
      <a href="${cta.buttonHref}" class="btn btn-outline">${cta.buttonLabel} ${ARROW_SVG}</a>
    </div>
  </section>`;
}

function buildRichPage(item, backHref, backLabel, outputSlug, titleContext, sectorSlug) {
  const rp = item.richPage;
  const hero = pageHero(item.heroImage, item.name, backLinkLeft(backHref, backLabel), rp.subheading);

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

  fs.writeFileSync(
    path.join(ROOT, `${outputSlug}.html`),
    page(`${item.name} — ${titleContext}`, hero + blocks + subServices + cta, script, `sector-${sectorSlug}`)
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
    page(`${sub.name} — ${svc.name} — ${sector.name}`, hero + body + enquiry, "", `sector-${sector.slug}`)
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
  let pageCount = 2; // index + contact

  SECTORS.forEach((sector) => {
    buildSectorPage(sector);
    pageCount += 1;

    sector.services.forEach((svc) => {
      if (svc.comingSoon || svc.externalUrl || svc.noPage) return;
      if (svc.richPage) {
        buildRichServicePage(sector, svc);
      } else {
        buildServicePage(sector, svc);
      }
      pageCount += 1;

      (svc.subServices || []).forEach((sub) => {
        if (sub.comingSoon || sub.externalUrl || sub.noPage) return;
        if (sub.richPage) {
          buildRichSubServicePage(sector, svc, sub);
        } else {
          buildSubServicePage(sector, svc, sub);
        }
        pageCount += 1;
      });
    });
  });

  buildContact();

  console.log(`Built ${pageCount} pages.`);
}

run();
