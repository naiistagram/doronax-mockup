/* Doronax Holdings — single source of truth for site content.
   The build script (build/build.js) reads this file and generates every
   HTML page. Edit content here; page markup is generated, not hand-written. */

let lock = 1;
function img(keywords, w = 900, h = 650) {
  return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock++}`;
}

const SITE = {
  name: "Doronax Holdings Group",
  tagline: "A collective of businesses built on craft, trust, and growth.",
  email: "info@doronaxholdings.com",
  heroImage: img("globe,map", 1900, 1000),
  stats: [
    { key: "sectors", value: "5", label: "sectors" },
    { key: "services", value: "25+", label: "services" },
    { key: "hq", value: "UK", label: "headquartered" },
  ],
  aboutParagraphs: [
    "Doronax Holdings Group is a UK-based collective of businesses spanning advertising, consultancy, furniture, hospitality, and sport and wellness. Each sub-group operates independently, with its own leadership and specialism, while drawing on the strength and resources of the wider group.",
    "We back businesses built on genuine craft and long-term thinking rather than short-term returns. Our approach is hands-on where it counts and hands-off where it doesn't — giving each business the room to grow on its own terms.",
  ],
  aboutImage: img("office,building", 900, 1100),
  aboutImageSecondary: img("team,meeting", 700, 900),
};

const SECTORS = [
  {
    slug: "advertising",
    name: "Advertising",
    tileImage: img("billboard,advertising"),
    heroImage: img("advertising,agency", 1600, 700),
    intro: "Doronax Advertising delivers integrated campaigns across print, digital, and direct channels, helping brands reach the right audience with measurable impact. From concept through execution, our teams combine creative craft with performance-driven strategy.",
    services: [
      {
        slug: "print",
        name: "Print",
        heroImage: img("printing,press", 1400, 600),
        intro: "We produce large-format, packaging, and commercial print work to exacting brand standards, from initial proofing through to final delivery. Our press partnerships mean fast turnaround without compromising on colour accuracy or finish.",
        gallery: [img("print,shop"), img("printer,ink")],
      },
      {
        slug: "graphic-design",
        name: "Graphic Design",
        heroImage: img("design,studio", 1400, 600),
        intro: "Our design studio builds visual identities, brand guidelines, and campaign assets that hold up across every touchpoint. We work closely with clients to ensure design decisions serve business goals, not just aesthetics.",
        gallery: [img("graphicdesign,laptop"), img("branding,design")],
      },
      {
        slug: "digital-marketing",
        name: "Digital Marketing",
        heroImage: img("digitalmarketing,laptop", 1400, 600),
        intro: "We plan and run paid, organic, and social campaigns backed by clear reporting and iterative optimisation. Our approach prioritises measurable return over vanity metrics.",
        gallery: [img("socialmedia,marketing"), img("analytics,screen")],
      },
      {
        slug: "door-to-door-marketing",
        name: "Door to Door Marketing",
        heroImage: img("doorstep,delivery", 1400, 600),
        intro: "Our field teams deliver targeted door-to-door campaigns for clients who need direct, local engagement with prospective customers. Every route is planned using demographic and geographic data to maximise conversion.",
        gallery: [img("neighborhood,street"), img("flyers,marketing")],
      },
    ],
  },
  {
    slug: "consultancy",
    name: "Consultancy",
    tileImage: img("office,meeting"),
    heroImage: img("consulting,business", 1600, 700),
    intro: "Doronax Consultancy provides strategic and operational advisory services to businesses navigating growth, change, and international expansion. Our consultants bring hands-on sector experience rather than theoretical frameworks alone.",
    services: [
      {
        slug: "software",
        name: "Software",
        heroImage: img("coding,software", 1400, 600),
        intro: "We advise on and deliver bespoke software solutions, from systems architecture through to implementation and support. Our focus is on practical tools that solve real operational bottlenecks.",
        gallery: [img("developer,computer"), img("code,screen")],
      },
      {
        slug: "management-consultancy",
        name: "Management Consultancy",
        heroImage: img("boardroom,meeting", 1400, 600),
        intro: "We work alongside leadership teams to diagnose operational inefficiencies and implement structural change that sticks. Engagements are scoped around measurable outcomes, not lengthy reports.",
        gallery: [img("businessmeeting,office"), img("strategy,whiteboard")],
      },
      {
        slug: "recruitment",
        name: "Recruitment",
        heroImage: img("interview,office", 1400, 600),
        intro: "Our recruitment arm sources and places talent across executive, technical, and operational roles for clients in the UK and abroad. We prioritise long-term fit over speed of placement.",
        gallery: [img("handshake,business"), img("teamwork,office")],
      },
      {
        slug: "export-import",
        name: "Export/Import",
        heroImage: img("shippingport,cargo", 1400, 600),
        intro: "We manage the logistics, compliance, and supplier relationships required to move goods across borders efficiently. Clients rely on us to navigate customs and documentation with minimal disruption to their operations.",
        gallery: [img("container,ship"), img("logistics,warehouse")],
      },
    ],
    // Rendered as sections on the sector page, not linked to their own pages.
    additionalServices: [
      {
        name: "Concierge",
        description: "A dedicated concierge service for clients requiring bespoke arrangements — from travel and accommodation to specialist procurement — handled discreetly and efficiently.",
        image: img("concierge,hotel"),
      },
      {
        name: "China",
        description: "Our China desk supports clients sourcing, manufacturing, or expanding into the Chinese market, with on-the-ground relationships and language capability built in.",
        image: img("shanghai,china"),
      },
    ],
  },
  {
    slug: "furniture",
    name: "Furniture",
    tileImage: img("furniture,interior"),
    heroImage: img("furniture,showroom", 1600, 700),
    intro: "Doronax Furniture designs, sources, and manufactures pieces and materials for residential and commercial interiors. We work with natural materials and skilled makers to deliver furnishings built to last.",
    services: [
      {
        slug: "natural-stone",
        name: "Natural Stone",
        heroImage: img("marble,stone", 1400, 600),
        intro: "We supply natural stone for flooring, worktops, and architectural features, sourced from quarries we've worked with for years. Each slab is selected for consistency of grain and finish.",
        gallery: [img("granite,quarry"), img("stonework,texture")],
      },
      {
        slug: "lighting",
        name: "Lighting",
        heroImage: img("lamp,lighting", 1400, 600),
        intro: "Our lighting range spans statement fixtures to functional task lighting, specified to suit both residential and commercial interiors. We work with clients from concept through installation.",
        gallery: [img("chandelier,interior"), img("pendant,light")],
      },
      {
        slug: "interior-design",
        name: "Interior Design",
        heroImage: img("interiordesign,livingroom", 1400, 600),
        intro: "Our interior design team delivers full-scheme design for residential and commercial spaces, from spatial planning through to final styling. We manage the process end-to-end, including trade sourcing.",
        gallery: [img("modernhome,interior"), img("design,decor")],
      },
      {
        slug: "flooring",
        name: "Flooring",
        heroImage: img("hardwoodfloor,flooring", 1400, 600),
        intro: "We supply and install flooring across timber, stone, and engineered materials, matched to the demands of each space. Our installation teams are trained to the same standard as our design specifications.",
        gallery: [img("woodfloor,interior"), img("tile,flooring")],
      },
      {
        slug: "decor-wall",
        name: "Decor Wall",
        heroImage: img("wallpanel,decor", 1400, 600),
        intro: "Our decorative wall solutions — panelling, cladding, and feature finishes — are designed to add texture and character to interiors without compromising on durability.",
        gallery: [img("texturewall,interior"), img("cladding,wall")],
      },
      {
        slug: "custom-pieces",
        name: "Custom Pieces",
        heroImage: img("woodworking,carpenter", 1400, 600),
        intro: "We design and manufacture bespoke furniture and objects — coffee tables, wooden boxes, bronze fittings — built to client specification. Every piece is made by hand in small batches.",
        gallery: [img("handmade,furniture"), img("bronze,craft")],
      },
    ],
  },
  {
    slug: "hospitality-events",
    name: "Hospitality & Events",
    tileImage: img("event,hospitality"),
    heroImage: img("hotel,event", 1600, 700),
    intro: "Doronax Hospitality & Events operates across property, food & beverage, and live event production, delivering experiences that meet a consistently high standard. We manage every layer of an event or venue, from planning through to delivery.",
    services: [
      {
        slug: "property",
        name: "Property",
        heroImage: img("realestate,building", 1400, 600),
        intro: "We manage and develop hospitality properties, from acquisition through to day-to-day operation, with a focus on guest experience and long-term asset value.",
        gallery: [img("hotel,lobby"), img("architecture,building")],
      },
      {
        slug: "food-beverage",
        name: "Food & Beverage",
        heroImage: img("restaurant,dining", 1400, 600),
        intro: "Our F&B division designs and operates dining concepts, from menu development through to service standards, for venues and events alike.",
        gallery: [img("chef,kitchen"), img("cocktail,bar")],
      },
      {
        slug: "events",
        name: "Events",
        heroImage: img("conference,event", 1400, 600),
        intro: "We plan and produce corporate and private events end-to-end — venue, logistics, production, and on-the-day delivery — for clients who need it done right the first time.",
        gallery: [img("wedding,event"), img("stage,concert")],
      },
      {
        slug: "workwear",
        name: "Workwear",
        heroImage: img("uniform,staff", 1400, 600),
        intro: "We supply branded and functional workwear for hospitality teams, balancing durability with a presentation standard that reflects the venues we serve.",
        gallery: [img("chef,uniform"), img("hotelstaff,waiter")],
      },
    ],
  },
  {
    slug: "sports-wellness",
    name: "Sports & Wellness",
    tileImage: img("yoga,wellness"),
    heroImage: img("yoga,fitness", 1600, 700),
    intro: "Doronax Sports & Wellness brings together movement, nutrition, and self-care under one roof, built around a genuine wellbeing philosophy rather than a fitness trend. Our offering spans practice, product, and retreat experiences.",
    services: [
      {
        slug: "yoga",
        name: "Yoga",
        heroImage: img("yoga,studio", 1400, 600),
        intro: "We run yoga classes and teacher training across a range of styles and levels, led by instructors with years of teaching experience. Sessions are designed to be accessible without diluting the practice.",
        gallery: [img("yogamat,meditation"), img("stretching,fitness")],
      },
      {
        slug: "textiles-merch",
        name: "Textiles/Merch",
        heroImage: img("activewear,fashion", 1400, 600),
        intro: "Our textiles line produces performance and lifestyle apparel designed for movement, made from sustainably sourced materials wherever possible.",
        gallery: [img("fabric,textile"), img("sportswear,clothing")],
      },
      {
        slug: "skincare",
        name: "Skincare",
        heroImage: img("skincare,cosmetics", 1400, 600),
        intro: "Our skincare range is formulated around clean, effective ingredients suited to daily use, developed in partnership with formulation specialists.",
        gallery: [img("spa,beauty"), img("serum,skincare")],
      },
      {
        slug: "protein",
        name: "Protein",
        heroImage: img("proteinpowder,nutrition", 1400, 600),
        intro: "We produce protein and nutrition products aimed at supporting an active lifestyle, with a focus on ingredient transparency and taste.",
        gallery: [img("smoothie,health"), img("gym,fitness")],
      },
      {
        slug: "retreat",
        name: "Retreat",
        heroImage: img("retreat,nature", 1400, 600),
        intro: "We host wellness retreats that combine movement, rest, and nutrition in a small-group setting, designed for genuine recovery rather than a packed itinerary.",
        gallery: [img("mountains,retreat"), img("meditation,nature")],
      },
    ],
  },
];

const CONTACT = {
  heroImage: img("office,uk", 1600, 500),
  intro: "For enquiries across any of our sectors, get in touch and a member of the relevant team will respond directly.",
};

module.exports = { SITE, SECTORS, CONTACT };
