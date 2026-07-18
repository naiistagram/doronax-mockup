/* Doranax Albion Holdings — single source of truth for site content.
   The build script (build/build.js) reads this file and generates every
   HTML page. Edit content here; page markup is generated, not hand-written. */

let lock = 1;
function img(keywords, w = 900, h = 650) {
  return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock++}`;
}

const SITE = {
  name: "Doranax Albion Holdings",
  tagline: "A collective of businesses built on craft, trust, and growth.",
  email: "info@doranaxalbionholdings.com",
  heroImage: "images/homepage/globe-hero.jpg",
  stats: [
    { key: "sectors", value: "5", label: "sectors" },
    { key: "services", value: "25+", label: "services" },
    { key: "hq", value: "UK", label: "headquartered" },
  ],
  aboutParagraphs: [
    "Doranax Albion Holdings is a UK-based collective of businesses spanning advertising, consultancy, design and furniture, hospitality and events, and sport and wellness. Each group operates independently, with its own leadership and specialism, while drawing on the strength and resources of the wider holdings.",
    "We back businesses built on genuine craft and long-term thinking rather than short-term returns. Our approach is hands-on where it counts and hands-off where it doesn't — giving each business the room to grow on its own terms.",
  ],
  aboutImage: img("office,building", 900, 1100),
  aboutImageSecondary: img("team,meeting", 700, 900),
};

const SECTORS = [
  {
    slug: "advertising",
    name: "Doranax Advertising Group",
    tileImage: img("billboard,advertising"),
    heroImage: img("advertising,agency", 1600, 700),
    intro: "Doranax Advertising delivers integrated campaigns across print, digital, and direct channels, helping brands reach the right audience with measurable impact. From concept through execution, our teams combine creative craft with performance-driven strategy.",
    extraBlocks: [
      {
        type: "logoGrid",
        heading: "Sectors We Work With",
        items: [
          { name: "Retail", logo: img("retaillogo,brand", 300, 160) },
          { name: "Hospitality", logo: img("hospitalitylogo,brand", 300, 160) },
          { name: "Property", logo: img("propertylogo,brand", 300, 160) },
          { name: "Finance", logo: img("financelogo,brand", 300, 160) },
          { name: "Automotive", logo: img("automotivelogo,brand", 300, 160) },
          { name: "Healthcare", logo: img("healthcarelogo,brand", 300, 160) },
          { name: "Technology", logo: img("technologylogo,brand", 300, 160) },
          { name: "Manufacturing", logo: img("manufacturinglogo,brand", 300, 160) },
        ],
      },
      {
        type: "supplierGrid",
        heading: "Our Suppliers",
        items: [
          { name: "Print Partners", logo: img("printsupplier,logo", 300, 160) },
          { name: "Signage Fabricators", logo: img("signagesupplier,logo", 300, 160) },
          { name: "Media Buying", logo: img("mediasupplier,logo", 300, 160) },
          { name: "Fleet Graphics", logo: img("fleetsupplier,logo", 300, 160) },
        ],
      },
      {
        type: "jobsCta",
        heading: "Work With Doranax Advertising",
        body: "We're always looking for people who take craft and client work seriously. Get in touch to see what's currently open.",
        buttonLabel: "View Opportunities",
        buttonHref: "contact.html",
      },
    ],
    services: [
      {
        slug: "print",
        name: "Print",
        heroImage: img("printing,press", 1400, 600),
        intro: "We produce large-format, packaging, and commercial print work to exacting brand standards, from initial proofing through to final delivery. Our press partnerships mean fast turnaround without compromising on colour accuracy or finish.",
        richPage: {
          subheading: "Professional print solutions that put your brand in people's hands",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "Doranax Advertising offers full-service print production — from concept to finished product — for businesses that need physical, tangible marketing materials to back up their digital presence. Every job runs through our own design and production process, so the finish you see in the proof is the finish you get on delivery.",
                "We work with high-quality materials and press partners who turn work around fast without cutting corners on colour accuracy or finish, and our in-house design support means clients without a finished artwork file can still get a professional result. Whether it's a single business card run or a large-format storefront install, the standard doesn't change.",
                "Print still does something digital can't: it puts a brand in someone's hands, on their wall, or on their street corner, and that physical presence builds a kind of trust and recall that a banner ad doesn't. We handle everything from small business essentials to large-format signage, all under one roof.",
              ],
              images: [
                img("printingpress,factory", 900, 650),
                img("businesscards,print", 900, 650),
                img("signage,storefront", 900, 650),
              ],
            },
            {
              type: "features",
              heading: "Our Print Products",
              columns: 4,
              items: [
                {
                  name: "Business Cards",
                  subheading: "First impressions, printed properly",
                  body: "Premium stock and finishes — matte, gloss, or textured — printed to a standard that matches the rest of your brand collateral.",
                  image: "images/advertising/print/business-cards.png",
                },
                {
                  name: "Flyers",
                  subheading: "Fast, affordable, effective",
                  body: "Single and double-sided flyers for promotions, events, and campaigns, produced at volume without a drop in quality.",
                  image: "images/advertising/print/flyers.png",
                },
                {
                  name: "Cards",
                  subheading: "Greeting and general purpose",
                  body: "Greeting, invitation, and general-purpose cards printed on quality stock, finished to order for retail or bespoke runs.",
                  image: "images/advertising/print/cards.png",
                },
                {
                  name: "Folded Cards",
                  subheading: "More space, same finish",
                  body: "Bi-fold and tri-fold cards for menus, programmes, and invites, scored and folded to a clean, consistent edge.",
                  image: "images/advertising/print/folded-cards.png",
                },
                {
                  name: "PVC Banners",
                  subheading: "Built for the outdoors",
                  body: "Weatherproof PVC banners for events, storefronts, and construction sites, printed to hold colour and shape through wind, rain, and daily wear.",
                  image: img("pvcbanner,outdoor", 700, 525),
                },
                {
                  name: "Window Vinyl",
                  subheading: "Storefront branding that lasts",
                  body: "Cut and printed window vinyl for storefronts and vehicles, applied to turn glass and panels into permanent brand real estate.",
                  image: "images/advertising/print/window-vinyl.png",
                },
                {
                  name: "Stretch Fabric Display Stands (Straight)",
                  subheading: "Reusable event presence",
                  body: "Portable, straight-format fabric stands that pack down small and set up fast, built for repeat use across trade shows and events.",
                  image: "images/advertising/print/display-stand.png",
                },
                {
                  name: "Water Base & A-Board Pavement Signs",
                  subheading: "Street-level visibility",
                  body: "Weighted water-base and folding A-board signs built to stand firm outdoors, putting your message right where foot traffic passes.",
                  image: "images/advertising/print/pavement-sign.png",
                },
              ],
            },
          ],
          cta: {
            heading: "Ready to Bring Your Brand to Print?",
            body: "Get in touch and our print team will help you choose the right materials and finish for your project.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "graphic-design",
        name: "Graphic Design",
        heroImage: "images/advertising/graphic-design/vehicle-wraps.png",
        intro: "With years of experience in vehicle graphics, Doranax Advertising helps businesses turn everyday vehicles into moving brand assets. From single-van jobs to full fleet rollouts, every wrap and graphic is designed, printed, and applied in-house to a consistent standard, because a van driving past someone's window is often the only ad impression you get.",
        richPage: {
          subheading: "Turning everyday vehicles into moving brand assets",
          blocks: [
            {
              type: "features",
              heading: "Vehicle Graphics",
              columns: 3,
              items: [
                {
                  name: "Custom Vehicle Wraps",
                  subheading: "Turn your vehicle into a billboard",
                  body: "Full and partial wraps designed, printed, and applied in-house, so what's on screen at proof stage is what ends up on the road.",
                  image: "images/advertising/graphic-design/vehicle-wraps.png",
                },
                {
                  name: "Van Graphics",
                  subheading: "Make your van work for your brand",
                  body: "Full-design van graphics that carry your brand and logo clearly at speed and from a distance, not just up close.",
                  image: "images/advertising/graphic-design/van-graphics.png",
                },
                {
                  name: "Logo and Branding Design",
                  subheading: "Your identity, applied properly",
                  body: "Logo and brand design built to translate cleanly onto a vehicle panel, not just a screen or a business card.",
                  image: "images/advertising/graphic-design/logo-branding.jpg",
                },
                {
                  name: "Window Graphics",
                  subheading: "Style without sacrificing visibility",
                  body: "Perforated and cut window graphics that carry your branding without blocking the view in or out.",
                  image: "images/advertising/graphic-design/window-graphics.png",
                },
                {
                  name: "Fleet Graphics",
                  subheading: "One brand, every vehicle",
                  body: "Consistent, matching designs applied across an entire fleet, so every vehicle reads as the same brand on the road.",
                  image: "images/advertising/graphic-design/fleet-graphics.png",
                },
              ],
            },
          ],
          cta: {
            heading: "Ready to Wrap Your Fleet?",
            body: "Get in touch and our team will help you plan a wrap or graphics job for a single vehicle or a full fleet.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "digital-marketing",
        name: "Digital Marketing",
        heroImage: "images/advertising/digital-marketing/hero-people.jpg",
        intro: "Doranax Advertising creates scroll-stopping content for your social channels — photography, video, graphics, and copy built to look native on the platform it's landing on, not like an ad that snuck in. Every piece is shot, edited, and designed in-house, so what you post is consistent with the rest of your brand.",
        richPage: {
          subheading: "Content and creative strategy built for the platform it lands on",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We cover the full content mix: product and lifestyle shoots, short-form video, branded graphics, captions, and campaign creative — ready to upload, however your team runs the page. Whether it's a one-off shoot or an ongoing content pipeline, the quality bar stays the same.",
                "Great content is the raw material good marketing runs on. We make sure you've always got some in the tank.",
              ],
              images: [
                "images/advertising/digital-marketing/hero-people.jpg",
                "images/advertising/digital-marketing/video-marketing.png",
                img("contentcreation,filming", 900, 650),
              ],
            },
            {
              type: "features",
              heading: "Design Strategy",
              columns: 3,
              items: [
                {
                  name: "Design Strategy",
                  body: "We build the thinking before the visuals — brand positioning, market fit, and creative direction that gives every design decision a reason behind it. Nothing gets designed until we know why it needs to exist.",
                  image: img("designstrategy,brainstorm", 700, 525),
                },
                {
                  name: "Branding + Visual Identity",
                  body: "Logos, colour systems, typography, and brand guidelines built to hold up across every touchpoint — print, digital, signage, packaging. One identity, applied consistently everywhere your brand shows up.",
                  image: img("brandguidelines,identity", 700, 525),
                },
                {
                  name: "Experience + Interior Design",
                  body: "Physical spaces — retail, office, hospitality — designed so the brand shows up in the room, not just on the page. From concept through to fit-out, the space becomes part of the identity.",
                  image: img("retaildesign,interior", 700, 525),
                },
              ],
            },
          ],
          cta: {
            heading: "Need Content That Actually Gets Used?",
            body: "Get in touch and our team will scope a shoot or content pipeline around your channels.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "door-to-door-marketing",
        name: "Door to Door Marketing",
        heroImage: img("doorstep,delivery", 1400, 600),
        intro: "Doranax Advertising delivers direct, face-to-face marketing campaigns that put your brand in front of real people, on their doorstep, in person. It's one of the oldest forms of advertising for a reason — nothing builds trust and recall quite like a genuine human conversation.",
        richPage: {
          subheading: "Direct, face-to-face marketing that gets your brand through the front door",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "In a world saturated with digital ads that get scrolled past in half a second, direct engagement still cuts through. A conversation on a doorstep still converts in a way a scrolled-past ad rarely does, and it's why door-to-door remains one of the most cost-effective ways to build genuine local awareness.",
              ],
              images: [
                img("doortodoor,salesperson", 900, 650),
                img("fieldmarketing,uniform", 900, 650),
                img("doorstep,conversation", 900, 650),
              ],
            },
            {
              type: "features",
              heading: "How It Works",
              columns: 3,
              items: [
                {
                  name: "Our Approach",
                  body: "Every campaign starts with strategy, not just a knock on a door. We map target areas based on demographics, location, and campaign goals, then build a route and messaging plan designed to reach the right households and businesses, not just the nearest ones. Our field teams are trained, briefed, and equipped to represent your brand professionally at every single interaction, because every conversation on the doorstep is a reflection of your business.",
                  image: img("territorymap,planning", 700, 525),
                },
                {
                  name: "What We Offer",
                  body: "Our door to door service covers the full campaign lifecycle: strategic planning and area targeting, route mapping and scheduling, trained brand representatives for on-the-ground delivery, real-time campaign tracking, and post-campaign reporting so you can see exactly where your message landed and how it performed. Whether you need a tightly targeted local push or a wider regional rollout, we scale the campaign to match.",
                  image: img("fieldmarketing,uniform", 700, 525),
                },
                {
                  name: "Why It Works",
                  body: "Door to door marketing builds a level of trust and local presence that digital channels simply can't replicate. It puts a face to your brand, opens a two-way conversation, and lets potential customers ask questions and get answers on the spot — combined with the right targeting, one of the most effective ways to drive measurable results.",
                  image: img("doorstep,conversation", 700, 525),
                },
              ],
            },
          ],
          cta: {
            heading: "Ready to Take Your Brand to the Doorstep?",
            body: "Get in touch and our field marketing team will help you plan a campaign for your target area.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "content-writing",
        name: "Content Writing",
        heroImage: "images/advertising/content-writing/website-copy.png",
        intro: "Doranax Advertising provides copywriting across every format a brand needs to communicate — web, print, digital, and beyond. Every piece is written in-house, tailored to your brand voice, and built to actually get read, not just fill space.",
        richPage: {
          subheading: "Words that convert, written by people who understand your brand",
          blocks: [
            {
              type: "features",
              heading: "What We Write",
              columns: 3,
              items: [
                {
                  name: "Website Copy",
                  subheading: "Words that convert, not just fill space",
                  body: "Homepage, service pages, and landing page copy written to guide visitors toward a decision, not just describe what you do.",
                  image: "images/advertising/content-writing/website-copy.png",
                },
                {
                  name: "Blog & Article Writing",
                  subheading: "Content that builds authority",
                  body: "Long-form articles and blog posts that position your brand as the go-to voice in your space, written to inform and engage.",
                  image: "images/advertising/content-writing/blog-article-writing.png",
                },
                {
                  name: "SEO Content",
                  subheading: "Written to rank, built to read well",
                  body: "Keyword-researched, search-optimised copy that works for algorithms and humans equally, no keyword-stuffed filler.",
                  image: "images/advertising/content-writing/seo-content.png",
                },
                {
                  name: "Email & Newsletter Copy",
                  subheading: "Inboxes people actually open",
                  body: "Campaign and newsletter copy written to earn the open, hold attention, and drive action, without sounding like spam.",
                  image: "images/advertising/content-writing/email-newsletter-copy.png",
                },
                {
                  name: "Ad & Social Copy",
                  subheading: "Short copy, sharp impact",
                  body: "Punchy, platform-native copy for paid ads and social posts, written to stop the scroll and land the message fast.",
                  image: "images/advertising/content-writing/ad-social-copy.png",
                },
                {
                  name: "Product Descriptions",
                  subheading: "Copy that sells the product, not just lists it",
                  body: "E-commerce and catalogue copy that highlights benefits, not just specs, written to match your brand tone at scale.",
                  image: "images/advertising/content-writing/product-descriptions.png",
                },
              ],
            },
          ],
          cta: {
            heading: "Ready for Content That Actually Converts?",
            body: "Get in touch and our content team will scope a package around your brand and goals.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing",
        heroImage: "images/advertising/social-media-marketing/hero.png",
        intro: "Doranax Advertising manages the full social media journey — from strategy and content through to community, growth, and advertising spend. Whether you need someone to run your channels end-to-end or support in one specific area, everything is handled in-house to a consistent standard.",
        richPage: {
          subheading: "Proactive, creative campaigns built to move the numbers that matter",
          blocks: [
            {
              type: "intro",
              paragraphs: [],
              images: ["images/advertising/social-media-marketing/hero.png"],
            },
            {
              type: "features",
              heading: "Our Social Media Services",
              columns: 3,
              items: [
                {
                  name: "Management",
                  subheading: "Your channels, fully handled",
                  body: "End-to-end social media management covering scheduling, posting, platform optimisation, and ongoing strategy, so your channels stay active, consistent, and on-brand without you having to lift a finger.",
                  image: img("socialmanagement,phone", 700, 525),
                },
                {
                  name: "Advertising",
                  subheading: "Paid campaigns that actually perform",
                  body: "Targeted paid social campaigns across platforms, from audience research and ad creative through to budget management and performance tracking, built to deliver real return, not just impressions.",
                  image: img("socialads,targeting", 700, 525),
                },
                {
                  name: "Content Creation",
                  subheading: "Scroll-stopping content, made in-house",
                  body: "Photography, video, graphics, and copy created specifically for social, so every post looks native to the platform it's landing on rather than like an ad that snuck in.",
                  image: img("contentcreation,filming", 700, 525),
                },
                {
                  name: "Community Management",
                  subheading: "Real engagement, not silence",
                  body: "Active monitoring and response across comments, messages, and mentions, keeping your audience engaged and your brand's voice consistent in every interaction, good or bad.",
                  image: img("communitymanagement,chat", 700, 525),
                },
                {
                  name: "Influencer Marketing",
                  subheading: "The right voices, not just the biggest ones",
                  body: "Influencer identification, outreach, and campaign management matched to your brand and audience, focused on genuine fit and results over follower count alone.",
                  image: img("influencer,collaboration", 700, 525),
                },
                {
                  name: "Training",
                  subheading: "Bring it in-house, done properly",
                  body: "Hands-on social media training for your internal team, covering platform best practice, content strategy, and tools, so you're equipped to manage more of it yourselves if that's the goal.",
                  image: img("socialtraining,workshop", 700, 525),
                },
              ],
            },
          ],
          cta: {
            heading: "Get In Touch",
            body: "Tell us about your brand and one of our social media strategists will be in touch to arrange a consultation.",
            buttonLabel: "Book a Consultation",
            buttonHref: "contact.html",
            form: true,
          },
        },
      },
      {
        slug: "doranax-media",
        name: "Doranax Media",
        heroImage: img("stockmarketchart,finance", 1400, 600),
        intro: "Coming Soon. Doranax Media is building an economic news app designed to keep you ahead of the market — real-time financial news, market analysis, and economic updates, delivered in one place and built for people who need to stay informed, fast.",
        richPage: {
          subheading: "Real-time financial news and market analysis, built for people who need to stay informed, fast",
          blocks: [
            {
              type: "features",
              heading: "What's Coming",
              columns: 3,
              items: [
                { name: "Real-Time Financial News", body: "Market-moving news delivered as it happens, not hours later.", image: img("financialnews,stockticker", 700, 525) },
                { name: "Market Analysis", body: "Analysis built to help you understand the move, not just see the number.", image: img("marketanalysis,tradingfloor", 700, 525) },
                { name: "Economic Updates", body: "The economic data that actually moves markets, in one focused feed.", image: img("economicdata,chart", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Want to Know When We Launch?",
            body: "Get in touch and we'll let you know as soon as Doranax Media is live.",
            buttonLabel: "Notify Me",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "doranax-booster",
        name: "Doranax Booster",
        heroImage: img("websitetraffic,growth", 1400, 600),
        intro: "Doranax Booster increases the traffic and visibility of online companies through targeted paid traffic strategies — helping businesses get seen by the right audience, drive qualified visitors to their site, and grow their online presence with campaigns built for real, measurable results.",
        richPage: {
          subheading: "Increasing the traffic and visibility of online companies",
          blocks: [
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Targeted Paid Traffic", body: "Paid traffic strategies built around the audience most likely to convert, not just clicks.", image: img("paidtraffic,digitalads", 700, 525) },
                { name: "Visibility Strategy", body: "Getting your business seen where the right audience is already looking.", image: img("onlinevisibility,search", 700, 525) },
                { name: "Measurable Results", body: "Campaigns built and reported against real numbers, not vanity metrics.", image: img("analyticsdashboard,growth", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Ready to Boost Your Traffic?",
            body: "Get in touch and our team will scope a campaign around your business.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
    ],
  },
  {
    slug: "consultancy",
    name: "Doranax Consultancy Group",
    tileImage: img("office,meeting"),
    heroImage: img("consulting,business", 1600, 700),
    intro: "Doranax Consultancy provides strategic and operational advisory services to businesses navigating growth, change, and international expansion. Our consultants bring hands-on sector experience rather than theoretical frameworks alone.",
    services: [
      {
        slug: "software",
        name: "Software",
        heroImage: img("softwareteam,office", 1400, 600),
        intro: "We advise on and deliver bespoke software solutions, from systems architecture through to implementation and support. Our focus is on practical tools that solve real operational bottlenecks.",
        richPage: {
          subheading: "Bespoke software, built around real operational bottlenecks",
          blocks: [
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Systems Architecture", body: "Architecture decisions made around how the business actually operates, not a generic tech-stack default.", image: img("systemsarchitecture,whiteboard", 700, 525) },
                { name: "Bespoke Development", body: "Custom-built tools scoped to solve a specific operational problem, not an off-the-shelf compromise.", image: img("softwaredeveloper,coding", 700, 525) },
                { name: "Implementation & Support", body: "Hands-on delivery and ongoing support once a tool is live, not a handover and disappearance.", image: img("techsupport,office", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Have a Software Problem to Solve?",
            body: "Get in touch and our team will scope the technical approach with you.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "management-consultancy",
        name: "Management Consultancy",
        heroImage: "images/consultancy/management-consultancy/squiggly-line.svg",
        intro: "Strategic clarity. Measurable results. Doranax Consultancy Group partners with ambitious organisations to solve their toughest strategic and operational challenges, combining deep industry expertise with a hands-on, no-fluff approach.",
        richPage: {
          subheading: "Strategic clarity. Measurable results.",
          blocks: [
            {
              type: "description",
              paragraphs: [
                "Doranax Consultancy Group partners with ambitious organisations to solve their toughest strategic and operational challenges. We combine deep industry expertise with a hands-on, no-fluff approach — helping leadership teams cut through complexity, sharpen decision-making, and unlock sustainable growth. From operating model redesign to performance transformation, our consultants embed alongside your team to deliver change that actually sticks, not just another slide deck.",
              ],
            },
            {
              type: "features",
              heading: "Services",
              columns: 3,
              items: [
                { name: "Strategy & Business Planning", body: "Clear, actionable strategy work grounded in your business and your data, not a generic framework.", image: img("strategyplanning,office", 700, 525) },
                { name: "Organisational Design & Change Management", body: "Structural and cultural change managed to actually land, not just get signed off.", image: img("orgdesign,team", 700, 525) },
                { name: "Operational Efficiency & Process Improvement", body: "Diagnosing and fixing the operational bottlenecks that quietly cost the most.", image: img("processimprovement,workflow", 700, 525) },
                { name: "Digital & Technology Transformation", body: "Technology change scoped around business outcomes, not the technology itself.", image: img("digitaltransformation,tech", 700, 525) },
                { name: "Leadership Advisory & Executive Coaching", body: "Senior leadership support that pairs commercial experience with coaching discipline.", image: img("leadershipadvisory,meeting", 700, 525) },
                { name: "Market Entry & Growth Strategy", body: "Practical market entry and growth planning for businesses scaling into new territory.", image: img("marketentry,growth", 700, 525) },
              ],
            },
            {
              type: "description",
              paragraphs: [
                "Why Doranax: we don't do generic playbooks. Every engagement is built around your business, your data, and your goals — with senior consultants in the room from day one, not just at the pitch.",
              ],
            },
            {
              type: "features",
              heading: "Your Contact",
              columns: 1,
              items: [
                {
                  name: "Paul Baker",
                  subheading: "Doranax Consultancy Group",
                  body: "Get in touch with Paul to discuss a Management Consultancy engagement.",
                  image: "images/consultancy/management-consultancy/paul-baker.jpeg",
                },
              ],
            },
          ],
          cta: {
            heading: "Ready to Talk Strategy?",
            body: "Get in touch and a senior consultant will scope the engagement around your goals.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "recruitment",
        name: "Recruitment",
        heroImage: img("interview,office", 1400, 600),
        intro: "The right people, faster. Doranax's Recruitment practice helps organisations find, attract, and secure the talent that drives real business impact, going beyond CV-matching to understand the culture and outcomes you need.",
        richPage: {
          subheading: "The right people, faster",
          blocks: [
            {
              type: "features",
              heading: "Services",
              columns: 3,
              items: [
                { name: "Executive Search", body: "Senior and leadership-level search run with discretion and a rigorous shortlist process.", image: img("executivesearch,interview", 700, 525) },
                { name: "Permanent & Contract Recruitment", body: "Permanent and contract hiring across roles, matched to your team's actual working style.", image: img("permanenthire,office", 700, 525) },
                { name: "Volume/Bulk Hiring Campaigns", body: "Structured campaigns for high-volume hiring without a drop in candidate quality.", image: img("bulkhiring,recruitment", 700, 525) },
                { name: "Talent Mapping & Market Insights", body: "Market and talent-pool mapping to inform hiring strategy before a search opens.", image: img("talentmapping,research", 700, 525) },
                { name: "Employer Branding Support", body: "Positioning support to help you compete for talent in a tight market.", image: img("employerbranding,culture", 700, 525) },
                { name: "Onboarding & Retention Advisory", body: "Advisory support past the offer stage, so placements actually stick.", image: img("onboarding,newhire", 700, 525) },
              ],
            },
            {
              type: "description",
              paragraphs: [
                "Why Doranax: we take the time to understand your business before we open a single search — so every shortlist is relevant, not just available.",
              ],
            },
          ],
          cta: {
            heading: "Hiring?",
            body: "Get in touch and our recruitment team will scope the search around your role and culture.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
        subServices: [
          {
            slug: "it-sector-recruitment",
            name: "IT Sector Recruitment",
            noPage: true,
            heroImage: img("techinterview,coding", 1400, 600),
            intro: "Tech talent, hired right. Doranax's IT Recruitment specialists connect businesses with the technical talent that keeps them competitive — from software engineers and data specialists to CTOs and IT leadership.",
            panelBody: [
              "Services: Software Development & Engineering Recruitment, Data, Cloud & Infrastructure Hiring, Cybersecurity Recruitment, IT Leadership & CTO Search, Contract/Interim Tech Staffing, and Tech Team Scaling for Startups & Scale-ups.",
              "Why Doranax: our consultants speak tech fluently — we know the difference between a good developer and the right developer for your stack and your culture.",
            ],
          },
        ],
      },
      {
        slug: "export-import",
        name: "Export/Import",
        heroImage: img("shippingport,cargo", 1400, 600),
        intro: "Global trade, navigated with confidence. Doranax Consultancy Group helps businesses trade internationally with confidence — from first-time exporters testing a new market to established companies scaling operations across multiple regions.",
        richPage: {
          subheading: "Global trade, navigated with confidence",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We support clients at every stage of the international trade lifecycle: identifying and validating new markets, structuring compliant entry strategies, and managing the ongoing operational risk that comes with doing business across borders. Our approach is hands-on and embedded — we work as closely with your operations team as we do with your leadership, so trade decisions are informed, compliant, and commercially sound from day one.",
                "Our consultants bring together regulatory expertise and real commercial insight to help clients reduce cost, avoid compliance pitfalls, and move goods efficiently across international borders. Whether you're exporting for the first time or expanding an established international footprint, Doranax gives you the practical knowledge and on-the-ground support to grow with fewer surprises.",
              ],
              images: [img("cargoship,port", 900, 650), img("customsdocuments,trade", 900, 650), img("warehouse,logistics", 900, 650)],
            },
            {
              type: "features",
              heading: "Core Service Areas",
              columns: 3,
              items: [
                { name: "Trade Regulations & Compliance", body: "Understanding and meeting the legal obligations tied to international trade — export controls, licensing, and sector-specific requirements — identifying risk before it becomes a problem.", image: img("traderegulation,legal", 700, 525) },
                { name: "Tariffs & Duty Management", body: "Understanding applicable tariffs and duties, identifying legitimate cost-saving opportunities, and applying correct classifications to reduce unnecessary spend.", image: img("tariffs,customs", 700, 525) },
                { name: "Trade Agreements & Preferential Access", body: "Advising on how to make the most of existing trade agreements and preferential tariff schemes to access reduced duty rates and stronger terms.", image: img("tradeagreement,handshake", 700, 525) },
                { name: "Global Logistics & Supply Chain", body: "Supporting the practical side of moving goods internationally — freight routing, supplier and distribution networks — to build resilient, cost-effective logistics.", image: img("globallogistics,freight", 700, 525) },
                { name: "Trade Finance Strategy", body: "Advising on structuring trade finance to support international growth — payment terms, risk mitigation, and funding options that protect cash flow.", image: img("tradefinance,strategy", 700, 525) },
              ],
            },
            {
              type: "description",
              paragraphs: [
                "Why Doranax: we combine a tailored, client-specific approach with deep regulatory knowledge and genuine commercial experience — helping businesses enter, operate in, and grow across global markets smoothly. The result is better-informed decisions, stronger compliance, and faster success in international trade.",
              ],
            },
            {
              type: "features",
              heading: "Country Coverage — Regional Representatives",
              columns: 4,
              items: [
                { name: "Poland", subheading: "Anna", body: "Our Poland-based representative for regional sourcing, compliance, and logistics coordination.", image: img("poland,warsaw", 700, 525) },
                { name: "Lithuania", subheading: "Adriana", body: "Our Lithuania-based representative supporting Baltic trade routes and customs coordination.", image: img("lithuania,vilnius", 700, 525) },
                { name: "Estonia", subheading: "Anastacia", body: "Our Estonia-based representative for Baltic and Nordic-adjacent trade support.", image: img("estonia,tallinn", 700, 525) },
                { name: "Peru", subheading: "Ariana", body: "Our Peru-based representative supporting South American sourcing and export logistics.", image: img("peru,lima", 700, 525) },
                { name: "South Korea", subheading: "Lee", body: "Our South Korea-based representative for East Asian trade relationships and manufacturing sourcing.", image: img("southkorea,seoul", 700, 525) },
                { name: "Portugal", subheading: "Sedat", body: "Our Portugal-based representative supporting Iberian and Southern European trade routes.", image: img("portugal,lisbon", 700, 525) },
                { name: "Morocco", subheading: "Becky", body: "Our Morocco-based representative for North African sourcing and cross-Mediterranean logistics.", image: img("morocco,casablanca", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Trading Across Borders?",
            body: "Get in touch and our export/import team will scope the regulatory and logistics picture for your target market.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "executive-coaching",
        name: "Executive Coaching",
        heroImage: img("executivecoaching,office", 1400, 600),
        intro: "Unlock your leadership potential. Doranax's Executive Coaching helps senior leaders sharpen their impact, navigate pivotal career moments, and lead with greater clarity and confidence.",
        richPage: {
          subheading: "Unlock your leadership potential",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "Through confidential, one-to-one coaching, we work with executives to build self-awareness, strengthen decision-making under pressure, and develop the mindset and skills needed to lead high-performing teams. Whether stepping into a new role, driving major change, or preparing for the next level, our coaches provide the honest challenge and structured support to help leaders perform at their best.",
              ],
              images: [img("mentorship,office", 900, 650), img("leadership,discussion", 900, 650), img("executivemeeting,coaching", 900, 650)],
            },
            {
              type: "features",
              heading: "Services",
              columns: 3,
              items: [
                { name: "One-to-One Executive Coaching", body: "Confidential, individual coaching built around the leader's own goals and challenges.", image: img("onetoonecoaching,meeting", 700, 525) },
                { name: "New Leader / Transition Coaching", body: "Structured support for leaders stepping into a new role or a step up in responsibility.", image: img("newleader,transition", 700, 525) },
                { name: "High-Potential & Succession Coaching", body: "Coaching for rising leaders being developed for future senior roles.", image: img("succession,leadership", 700, 525) },
                { name: "Team & Peer Coaching", body: "Coaching extended to leadership teams and peer groups, not just individuals.", image: img("teamcoaching,group", 700, 525) },
                { name: "360 Feedback & Leadership Assessments", body: "Structured feedback and assessment to ground coaching in a clear starting point.", image: img("feedback,assessment", 700, 525) },
                { name: "Ongoing Performance & Accountability Coaching", body: "Continued coaching support to keep leaders accountable to what they set out to change.", image: img("performancecoaching,accountability", 700, 525) },
              ],
            },
            {
              type: "description",
              paragraphs: [
                "Why Doranax: our coaches are seasoned former operators, not theorists — pairing real business experience with proven coaching frameworks to help leaders make decisions that stick.",
              ],
            },
          ],
          cta: {
            heading: "Ready to Invest in Your Leadership?",
            body: "Get in touch and we'll match you with a coach suited to your role and goals.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "concierge",
        name: "Concierge",
        heroImage: img("conciergedesk,luxuryhotel", 1400, 600),
        intro: "A dedicated concierge service for clients requiring bespoke arrangements — travel, accommodation, and specialist procurement — handled discreetly and efficiently by a single point of contact.",
        richPage: {
          subheading: "Bespoke arrangements, handled discreetly by a single point of contact",
          blocks: [
            {
              type: "features",
              heading: "What We Arrange",
              columns: 3,
              items: [
                { name: "Travel & Accommodation", body: "Itineraries and accommodation arranged around the client, not a fixed package.", image: img("privatevilla,luxurytravel", 700, 525) },
                { name: "Specialist Procurement", body: "Sourcing for hard-to-find items and services, handled quietly and efficiently.", image: img("personalshopper,luxury", 700, 525) },
                { name: "Ongoing Requests", body: "A single point of contact for whatever comes up next, not a one-off booking service.", image: img("conciergecall,service", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Need Something Arranged?",
            body: "Get in touch and our concierge team will take it from there.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "china",
        name: "China",
        heroImage: img("shanghai,skyline", 1400, 600),
        intro: "Our China desk supports clients sourcing, manufacturing, or expanding into the Chinese market, backed by on-the-ground relationships and language capability rather than a remote advisory service.",
        richPage: {
          subheading: "On-the-ground support for sourcing, manufacturing, and market entry",
          blocks: [
            {
              type: "features",
              heading: "What We Support",
              columns: 3,
              items: [
                { name: "Sourcing & Manufacturing", body: "On-the-ground supplier and factory relationships, not a directory of contacts.", image: img("chinafactory,manufacturing", 700, 525) },
                { name: "Market Entry", body: "Practical support for businesses entering the Chinese market for the first time.", image: img("chinabusiness,meeting", 700, 525) },
                { name: "Language & Relationships", body: "Language capability and existing relationships that a remote advisory desk can't replicate.", image: img("shenzhen,businessdistrict", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Looking to Enter the Chinese Market?",
            body: "Get in touch and our China desk will scope the approach with you.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
    ],
  },
  {
    slug: "design-and-furniture",
    name: "Doranax Design and Furniture Group",
    tileImage: img("furniture,interior"),
    heroImage: img("furniture,showroom", 1600, 700),
    intro: "Doranax Design and Furniture designs, sources, and manufactures materials and pieces for residential and commercial interiors. We work with natural materials and skilled makers to deliver furnishings and finishes built to last.",
    services: [
      {
        slug: "natural-stone",
        name: "Natural Stone",
        heroImage: img("marble,quarry", 1400, 600),
        intro: "Doranax sources natural stone as the bedrock of every enduring interior — quarried marble, limestone, travertine, and granite selected for character as much as durability. Each slab is chosen for its veining, patina, and provenance.",
        richPage: {
          subheading: "Stone selected for character as much as durability",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "Whether destined for a hallway floor, a kitchen island, or a hand-carved chimneypiece, we work with stone the way antiques dealers work with furniture: nothing is uniform, and the imperfections are the point. From honed Carrara to reclaimed flagstone with centuries of wear already built in, our stone selections are matched to the scale, light, and use of the room before a single piece is cut.",
              ],
              images: [img("marblehallway,stone", 900, 650), img("stonefireplace,chimneypiece", 900, 650), img("stoneworktop,kitchen", 900, 650)],
            },
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Fireplace Surrounds & Chimneypieces", body: "Bespoke, hand-carved stone chimneypieces and surrounds built to the scale of the room.", image: img("chimneypiece,stone", 700, 525) },
                { name: "Worktops, Islands & Splashbacks", body: "Kitchen stone specified for grain and finish, not just slab availability.", image: img("stonecounter,kitchen", 700, 525) },
                { name: "Flooring, Hearths & Staircases", body: "Stone flooring and staircases selected to age well underfoot, not just look good on day one.", image: img("stonestaircase,flooring", 700, 525) },
                { name: "Reclaimed & Antique Stone Sourcing", body: "Genuine reclaimed and antique stone, sourced with the wear and character already built in.", image: img("reclaimedstone,antique", 700, 525) },
                { name: "Specification, Templating & Installation", body: "Full specification and templating through to installation management, handled end to end.", image: img("stonetemplating,installation", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Specifying Stone for a Project?",
            body: "Get in touch and our team will talk through selection, sourcing, and installation.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "lighting",
        name: "Lighting",
        heroImage: img("chandelier,interior", 1400, 600),
        intro: "Lighting is treated as jewellery for the room — the detail that transforms good design into something felt rather than simply seen. Doranax curates and commissions lighting across every scale, from statement chandeliers to the quiet glow of a hand-thrown ceramic lamp base.",
        richPage: {
          subheading: "The detail that transforms good design into something felt",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We favour warmth over brightness, layering ambient, task, and accent sources so that no room relies on a single switch to set its mood. Where a client's brief calls for it, we source genuine antique fixtures and rewire them to modern safety standards, preserving age and character without compromise.",
              ],
              images: [img("chandelier,giltwood", 900, 650), img("wallsconce,interior", 900, 650), img("ceramiclamp,warm", 900, 650)],
            },
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Chandeliers, Sconces & Pendants", body: "Statement fittings sourced and commissioned across every scale and period.", image: img("chandelier,pendant", 700, 525) },
                { name: "Antique & Reproduction Fixtures", body: "Genuine antique fixtures rewired and restored to modern safety standards without losing their character.", image: img("antiquelamp,restoration", 700, 525) },
                { name: "Layered Lighting Plans", body: "Ambient, task, and accent lighting layered so a room never depends on one switch.", image: img("lightingplan,interior", 700, 525) },
                { name: "Bespoke Shades & Fabrication", body: "Custom lampshades and fittings fabricated to match a scheme exactly.", image: img("lampshade,bespoke", 700, 525) },
                { name: "Dimming & Smart Integration", body: "Dimming, circuiting, and smart-lighting integration specified alongside the fixtures themselves.", image: img("dimmerswitch,smartlighting", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Planning a Lighting Scheme?",
            body: "Get in touch and our team will talk through fixtures, sourcing, and installation.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "interior-design",
        name: "Interior Design",
        heroImage: img("interiordesign,livingroom", 1400, 600),
        intro: "Doranax Interior Design creates timeless transformations and unique designs for residential and commercial projects. Our comprehensive design vision ensures that every detail — from spatial flow to material selection — contributes to a unified, elevated environment.",
        richPage: {
          subheading: "Timeless transformations, from spatial flow to material selection",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We deliver full-scheme design for residential and commercial spaces, from spatial planning through to final styling, managed end-to-end including trade sourcing. Every project is treated as bespoke — we don't run a house style that gets applied regardless of the brief.",
              ],
              images: [img("interiordesign,sketch", 900, 650), img("furnishedliving,interior", 900, 650), img("materialsamples,swatch", 900, 650)],
            },
            {
              type: "process",
              heading: "Our Process",
              steps: [
                { step: "1", name: "Discover", body: "We spend time in the space and with the client to understand how it's actually lived in or used before any design work starts." },
                { step: "2", name: "Define", body: "We set the brief, budget, and scope in writing, so every later decision is measured against an agreed starting point." },
                { step: "3", name: "Design", body: "Spatial planning, material palette, and furnishing scheme are developed together, not as separate sign-offs." },
                { step: "4", name: "Develop", body: "Drawings are refined into a buildable specification, with trade sourcing and procurement running in parallel." },
                { step: "5", name: "Deliver", body: "We manage installation and styling on-site through to handover, so the scheme is finished to the standard it was designed to." },
              ],
            },
            {
              type: "features",
              heading: "Our People",
              columns: 2,
              items: [
                {
                  name: "Christopher Hodsoll",
                  subheading: "Interior Designer & Antiques Dealer",
                  body: "Christopher Hodsoll is a highly acclaimed London-based interior designer and antiques dealer, widely recognised for his idiosyncratic English country house grandeur aesthetic. Over a career spanning four decades he has cultivated a strong reputation among design circles and a wealthy, high-profile clientele, including the late Duke of Edinburgh, Princess Firyal of Jordan, Mick Jagger, Elton John, Sting, and the Rothschild family. He trained under the celebrated decorator Geoffrey Bennison before opening his own shop on Pimlico Road in 1982, and co-founded Soane Britain with Lulu Lytle, named in honour of Sir John Soane. Today, working alongside Alice Constable Maxwell at Studio Hodsoll on Portobello Road, he takes on a small, carefully chosen number of projects, from advising on a single room through to large-scale residential projects across London, the English countryside, and internationally. He is frequently featured in publications including House & Garden, The World of Interiors, and 1stDibs Introspective, and is widely regarded as one of the most respected decorators of his generation. Doranax Design and Furniture works with Christopher on select residential projects, drawing on his eye for proportion, material, and detail.",
                  image: "images/design-and-furniture/interior-design/christopher-hodsoll.jpeg",
                },
                {
                  name: "Anna Sobolewska",
                  subheading: "Interior Designer, Food & Beverage",
                  body: "Anna Sobolewska is an interior designer specialising in the food & beverage sector, with nine years of experience shaping some of Birmingham's most talked-about new venues. Her work includes The Rolling Mill in the Jewellery Quarter, transforming a grand industrial space into a vibrant, comfortable bar while honouring its heritage, achieved through authentic materials and considered lighting that let the space's industrial past and its new life sit comfortably together. She also designed the interiors for a striking 1920s-inspired venue, using set-dressing, materiality, and lighting to transport guests into an immersive, era-defined atmosphere.",
                  image: img("interiordesigner,portrait", 700, 525),
                },
              ],
            },
            {
              // Source docx flagged this as needing a real embeddable video URL
              // (iframe/mp4), which the article page itself doesn't provide — using
              // the doc's own recommended safe fallback: a thumbnail link-out card
              // rather than embedding or rehosting Reach plc's video file.
              type: "videoCard",
              heading: "In the Press",
              label: "Watch — Birmingham Mail",
              title: "First Look Inside the New 1920s Venue",
              thumbnail: img("1920svenue,interior", 1000, 560),
              href: "https://www.birminghammail.co.uk/whats-on/food-drink-news/first-look-inside-new-1920s-22276734",
            },
          ],
          cta: {
            heading: "Planning an Interior Design Project?",
            body: "Get in touch and our team will talk through scope, timeline, and budget for your space.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "flooring",
        name: "Flooring",
        heroImage: img("reclaimedoak,flooring", 1400, 600),
        intro: "From reclaimed oak boards to hand-knotted Sultanabad carpets, flooring sets the tone before a client has even chosen where to sit. Doranax specifies and sources flooring as a design decision in its own right — considering grain, colour, underfoot warmth, and how a surface will age over decades rather than seasons.",
        richPage: {
          subheading: "Flooring specified as a design decision, not an afterthought",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We work across timber, stone, and antique and vintage rugs and carpets, often mixing periods and materials within a single space in the manner of the great English decorators: a 19th-century Sultanabad in a contemporary room, or reclaimed parquet beneath a resolutely modern scheme.",
              ],
              images: [img("reclaimedoak,flooring", 900, 650), img("antiquerug,carpet", 900, 650), img("parquetfloor,timber", 900, 650)],
            },
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Timber Flooring", body: "Solid, engineered, and reclaimed timber flooring specified for grain and how it will wear.", image: img("timberfloor,wood", 700, 525) },
                { name: "Natural Stone & Tiled Flooring", body: "Stone and tiled flooring matched to the light and use of the room.", image: img("stonetile,flooring", 700, 525) },
                { name: "Antique & Bespoke Rugs", body: "Antique, vintage, and bespoke rugs and carpets sourced and specified as design pieces.", image: img("antiquecarpet,rug", 700, 525) },
                { name: "Underfloor Heating", body: "Underfloor heating specification and integration alongside the flooring choice.", image: img("underfloorheating,installation", 700, 525) },
                { name: "Period Floor Restoration", body: "Restoration of existing period floors, preserving character rather than replacing it.", image: img("floorrestoration,period", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Specifying Flooring for a Project?",
            body: "Get in touch and our team will talk through materials, sourcing, and installation.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "furniture",
        name: "Furniture",
        heroImage: img("furniture,showroom", 1400, 600),
        intro: "Explore our full furniture range, crafted and curated by Doranax Furniture, on our dedicated site.",
        gallery: [img("furniture,interior"), img("furniture,design")],
        externalUrl: "https://doranaxfurniture.co.uk/",
      },
      {
        slug: "yacht-and-private-jet-interior-design",
        name: "Yacht and Private Jet Interior Design",
        heroImage: img("yachtinterior,luxurycabin", 1400, 600),
        intro: "We design interiors for yachts and private jets, applying the same standard of material selection and spatial planning as our residential work to spaces with far tighter constraints.",
        richPage: {
          subheading: "Residential-standard material selection, applied to far tighter constraints",
          blocks: [
            {
              type: "features",
              heading: "What We Do",
              columns: 3,
              items: [
                { name: "Yacht Interiors", body: "Cabin and saloon interiors designed around weight, space, and marine-grade material constraints.", image: img("yachtsaloon,interior", 700, 525) },
                { name: "Private Jet Interiors", body: "Cabin schemes built for a space where every inch and every gram is accounted for.", image: img("privatejetcabin,luxury", 700, 525) },
                { name: "Material Specification", body: "Materials selected for durability at altitude or at sea, without looking like it.", image: img("marinematerials,upholstery", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Planning a Yacht or Jet Interior?",
            body: "Get in touch and our team will talk through scope and constraints for your project.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "drinks-cabinet",
        name: "Drinks Cabinet",
        heroImage: img("barcabinet,woodfurniture", 1400, 600),
        intro: "Our bespoke drinks cabinets are designed and built to order, from compact home-bar pieces to full entertaining units finished in a choice of woods and metals.",
        richPage: {
          subheading: "Built to order, from compact home-bar pieces to full entertaining units",
          blocks: [
            {
              type: "features",
              heading: "What We Build",
              columns: 3,
              items: [
                { name: "Compact Home-Bar Pieces", body: "Smaller cabinets built to fit a specific corner or alcove without compromising on finish.", image: img("homebar,cabinet", 700, 525) },
                { name: "Full Entertaining Units", body: "Larger drinks cabinets built as a genuine piece of furniture, not an afterthought.", image: img("entertainingunit,furniture", 700, 525) },
                { name: "Wood & Metal Finishes", body: "A choice of timbers and metal detailing, matched to the room it's going into.", image: img("woodmetalfinish,furniture", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Commissioning a Drinks Cabinet?",
            body: "Get in touch and our team will talk through size, finish, and timeline.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "bronze-coffee-tables-wooden-boxes",
        name: "Bronze, Coffee Tables & Wooden Boxes",
        heroImage: img("bronzesculpture,coffeetable", 1400, 600),
        intro: "This collection sits apart from architectural fittings — it's where Doranax's collector's eye takes over. In the spirit of a Pimlico Road antiques shop as much as a design studio, this is the corner of the business devoted to the object: the piece that makes a room, the thing a guest picks up and asks about.",
        gallery: [img("bronzefigure,sculpture"), img("antiqueshop,curated")],
        subServices: [
          {
            slug: "bronze",
            name: "Bronze",
            noPage: true,
            heroImage: img("bronzesculpture,art", 1400, 600),
            intro: "Cast bronze pieces — sculptural forms, console bases, decorative hardware, and one-off commissioned objects — bringing weight, patina, and permanence to a scheme.",
            panelBody: [
              "Bronze is worked both as functional furniture (table bases, fittings) and as pure decorative sculpture, aged and finished to sit comfortably beside genuine antiques.",
            ],
          },
          {
            slug: "coffee-tables",
            name: "Coffee Tables",
            noPage: true,
            heroImage: img("coffeetable,design", 1400, 600),
            intro: "A mix of antique, vintage, and bespoke coffee tables spanning periods and materials: solid ebony and Anglo-Indian pieces, draped-and-skirted forms in unexpected materials such as wicker, and custom-made contemporary designs.",
            panelBody: [
              "Pieces are built to Doranax specification in timber, stone, and metal, or sourced as genuine antique and vintage finds.",
            ],
          },
          {
            slug: "custom-wooden-boxes",
            name: "Custom Wood Boxes",
            noPage: true,
            heroImage: img("woodenbox,craftsmanship", 1400, 600),
            intro: "Hand-built and hand-finished boxes in solid timber — from small keepsake and jewellery boxes to larger trunks and blanket boxes — often inlaid, ebonised, or fitted with brass or bronze hardware.",
            panelBody: [
              "Each piece is commissioned to size and finish for a specific room, shelf, or client. Each item in this collection is either sourced as a genuine antique, commissioned from British craftsmen, or cast and finished in-house — available to view via the Doranax showroom and by appointment.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "hospitality-events",
    name: "Doranax Hospitality & Events Group",
    tileImage: img("event,hospitality"),
    heroImage: img("hotel,event", 1600, 700),
    intro: "Doranax Hospitality & Events operates across property, food & beverage, and live event production, delivering experiences that meet a consistently high standard. We manage every layer of an event or venue, from planning through to delivery.",
    services: [
      {
        slug: "property",
        name: "Property",
        heroImage: "images/hospitality-events/property/hero.png",
        intro: "Space, service, and everything in between, handled from one place. From the first booking to the last clean, our team manages the details across every property in your portfolio, so nothing falls through the cracks and nothing needs your constant attention.",
        gallery: ["images/hospitality-events/property/venue-hire.png", "images/hospitality-events/property/office-sharing.png"],
        subServices: [
          {
            slug: "venue-hire",
            name: "Venue Hire",
            noPage: true,
            heroImage: "images/hospitality-events/property/venue-hire.png",
            intro: "Space for the occasion. We source and manage venue hire for events of every scale, from intimate private dinners to large-scale corporate functions.",
            panelBody: ["Our venue network spans hotels, private estates, and dedicated event spaces, matched to the brief and guest count."],
          },
          {
            slug: "office-sharing",
            name: "Office Sharing",
            noPage: true,
            heroImage: "images/hospitality-events/property/office-sharing.png",
            intro: "Desk space, on demand. Flexible shared office space for businesses that want a professional base without committing to a full lease.",
            panelBody: ["Desks, private offices, and meeting rooms are available on flexible terms, with reception and facilities managed for you."],
          },
          {
            slug: "dark-kitchen-hire",
            name: "Dark Kitchen Hire",
            noPage: true,
            heroImage: "images/hospitality-events/property/dark-kitchen-hire.png",
            intro: "Coming Soon. Kitchens built to work. Commercial kitchen space for delivery-only food brands, fitted and ready to operate without the overhead of a full restaurant site.",
            panelBody: ["Space is available on flexible terms, sized for single operators through to multi-brand kitchens. Full details coming soon."],
          },
          {
            slug: "bnb-management",
            name: "BnB Management",
            noPage: true,
            heroImage: "images/hospitality-events/property/bnb-management.png",
            intro: "Your listing, fully run. Professional Airbnb management typically runs 15-25% commission. We handle everything that fee is supposed to cover: pricing strategy, listing optimisation, guest vetting and 24/7 messaging, cleaning coordination, and maintenance, all in one place.",
            panelBody: ["You keep the income, we keep the headaches."],
          },
          {
            slug: "property-service",
            name: "Property Service",
            noPage: true,
            heroImage: "images/hospitality-events/property/property-service.png",
            intro: "Upkeep, handled. General property services for owners and managers, maintenance, inspections, and day-to-day upkeep, coordinated through a single point of contact.",
            panelBody: ["Scheduled and on-demand visits are arranged directly with our property team, with reporting back to the owner after every visit."],
          },
          {
            slug: "brum-real-estate",
            name: "Brum Real Estate",
            noPage: true,
            heroImage: "images/hospitality-events/property/brum-real-estate.png",
            intro: "Local ground, known well. Our Birmingham-focused real estate arm handles acquisition, letting, and management for residential and commercial property across the city.",
            panelBody: ["Local market knowledge sits at the centre of every instruction, from sourcing through to ongoing management."],
          },
          {
            slug: "cleaning",
            name: "Cleaning",
            noPage: true,
            heroImage: "images/hospitality-events/property/cleaning.png",
            intro: "Spotless, on schedule. Professional cleaning services for hospitality and residential properties, scheduled around occupancy and turnaround times.",
            panelBody: ["Teams are trained to hospitality-grade standards, with turnaround cleans built around check-in/check-out schedules where needed."],
          },
        ],
      },
      {
        slug: "vehicle-hire",
        name: "Vehicle Hire",
        heroImage: "images/hospitality-events/vehicle-hire/yacht-hire.png",
        intro: "Doranax Hospitality and Events puts the whole luxury fleet on speed dial: yachts, cars, helicopters, and jets, all vetted and ready whenever you are. However you want to arrive, we've already got the keys.",
        gallery: ["images/hospitality-events/vehicle-hire/car-hire.png", "images/hospitality-events/vehicle-hire/helicopter.png"],
        subServices: [
          {
            slug: "yacht-hire",
            name: "Yacht Hire",
            noPage: true,
            heroImage: "images/hospitality-events/vehicle-hire/yacht-hire.png",
            intro: "Your own stretch of sea. Fully crewed luxury yachts for a day, a weekend, or a full escape, none of the ownership headaches, all of the good bits.",
            panelBody: ["Available across our partner fleet, matched to guest numbers and route."],
          },
          {
            slug: "yacht-share",
            name: "Yacht Share",
            noPage: true,
            heroImage: "images/hospitality-events/vehicle-hire/yacht-share.png",
            intro: "All the yacht, none of the hassle. Flexible shared access to premium yachts, split the cost and skip the maintenance bill entirely.",
            panelBody: ["Membership covers scheduled access, crew, and maintenance, so owners get the yacht without carrying it as a full-time asset."],
          },
          {
            slug: "car-hire",
            name: "Car Hire",
            noPage: true,
            heroImage: "images/hospitality-events/vehicle-hire/car-hire.png",
            intro: "Arrive like you mean it. Supercars, chauffeured rides, and everything in between, ready whenever the occasion calls for an entrance.",
            panelBody: ["Chauffeur-driven or self-drive options are available, with a fleet ranging from executive saloons to occasion vehicles."],
          },
          {
            slug: "helicopter",
            name: "Helicopter",
            noPage: true,
            heroImage: "images/hospitality-events/vehicle-hire/helicopter.png",
            intro: "Skip the traffic entirely. Private charters for events, transfers, or days when the road is simply beneath you.",
            panelBody: ["Booked point-to-point or as part of a wider travel itinerary, subject to routing and availability."],
          },
          {
            slug: "private-jets",
            name: "Private Jets",
            noPage: true,
            heroImage: "images/hospitality-events/vehicle-hire/private-jets.png",
            intro: "Wheels up, worries down. On-demand jet charters for the trips commercial just can't handle.",
            panelBody: ["Aircraft are matched to party size and route, with full itinerary planning handled on your behalf."],
          },
        ],
      },
      {
        slug: "yacht-sale",
        name: "Yacht Sale",
        heroImage: img("yachtforsale,marina", 1400, 600),
        intro: "Browse a selection of yachts currently available through our network, and get in touch with our brokerage to discuss options.",
        richPage: {
              subheading: "Browse our broker's current yacht listings across the Turkish Riviera",
              blocks: [
                {
                  type: "yachtGrid",
                  heading: "Broker's Yachts for Sale",
                  intro: "A selection of motor yachts currently available through our brokerage, from recent-build models ready for immediate handover to long-standing favourites. Get in touch with the broker below to discuss any listing.",
                  items: [
                    {
                      name: "Inspiration",
                      priceDisplay: "€4,900,000",
                      location: "Marmaris, Mugla, Turkey",
                      cabins: 4,
                      year: 2024,
                      length: `85' 4" ft`,
                      builder: "Numarine",
                      badge: `2024 NUMARINE 85' 4"`,
                      image: img("motoryacht,numarine", 1000, 650),
                    },
                    {
                      name: "Honey Badger",
                      priceDisplay: "€3,150,000",
                      location: "Bodrum, Mugla, Turkey",
                      cabins: 4,
                      year: 2012,
                      length: `91' 9" ft`,
                      builder: "Pershing",
                      badge: `2012 PERSHING 91' 9"`,
                      image: img("motoryacht,pershing", 1000, 650),
                    },
                    {
                      name: "Virtus",
                      priceDisplay: "€2,000,000",
                      location: "Marmaris, Mugla, Turkey",
                      cabins: 4,
                      year: 2021,
                      length: `72' 11" ft`,
                      builder: "Galeon Yachts",
                      badge: `2021 GALEON YACHTS 72' 11"`,
                      image: img("motoryacht,galeon", 1000, 650),
                    },
                    {
                      name: "Nine Nine Wine",
                      priceDisplay: "€1,750,000",
                      location: "Gocek, Mugla, Turkey",
                      cabins: 4,
                      year: 2016,
                      length: `66' 2" ft`,
                      builder: "Azimut Yachts",
                      badge: `2016 AZIMUT YACHTS 66' 2"`,
                      image: img("motoryacht,azimut", 1000, 650),
                    },
                    {
                      name: "Twins PC",
                      priceDisplay: "€700,000",
                      location: "Marmaris, Mugla, Turkey",
                      cabins: 4,
                      year: 1996,
                      length: `81' 11" ft`,
                      builder: "Sanlorenzo Yachts",
                      badge: `1996 SANLORENZO YACHTS 81' 11"`,
                      image: img("motoryacht,sanlorenzo", 1000, 650),
                    },
                    {
                      name: "Hakuna Matata",
                      priceDisplay: "€275,000",
                      location: "Gocek, Mugla, Turkey",
                      cabins: 3,
                      year: 2004,
                      length: `58' 10" ft`,
                      builder: "Fairline",
                      badge: `2004 FAIRLINE 58' 10"`,
                      image: img("motoryacht,fairline", 1000, 650),
                    },
                  ],
                },
                {
                  type: "brokerContact",
                  name: "Haluk Gundogdu",
                  title: "Naval Architect / Yacht Broker",
                  company: "Yacht Sales Center AS",
                  location: "Kadikoy, Istanbul, Turkey",
                  officePhone: "+90 216 755 8080",
                  mobilePhone: "+90 542 643 3873",
                  email: null,
                },
              ],
            },
          },
      {
        slug: "talent-management",
        name: "Talent Management",
        heroImage: img("talentagency,management", 1400, 600),
        intro: "Whether it's the music that carries a night or the voice that opens it, the right talent changes how an event feels. We source, vet, and manage DJs, speakers, hosts, and models for events of every scale, matching the act to the room, not just filling a slot on the run sheet.",
        gallery: [img("talent,agency"), img("performer,management")],
        subServices: [
          {
            slug: "bruce-daisley",
            name: "Bruce Daisley",
            noPage: true,
            heroImage: img("keynotespeaker,conference", 1400, 600),
            intro: "Bruce Daisley — former Twitter EMEA VP, author, and speaker on workplace culture — is represented for speaking engagements through Doranax Talent Management.",
            panelBody: [
              "Bruce speaks on culture, leadership, and the future of work, drawing on his time leading Twitter's European business and his ongoing research and writing on workplace culture. Doranax Talent Management handles booking, logistics, and coordination for his speaking engagements.",
            ],
          },
          {
            slug: "dj-hire",
            name: "DJ Hire",
            noPage: true,
            heroImage: img("dj,nightclub", 1400, 600),
            intro: "We provide professional DJ hire for events of every size, from intimate private parties to full-scale corporate launches and festival stages. Every DJ we place comes with the technical setup, genre range, and read-the-room instinct to hold a set together from the first guest through to last dance.",
            panelBody: [
              "Bookings are briefed properly before the day: venue layout, audience profile, key moments in the run sheet, and any must-play or do-not-play lists. Includes full sound and lighting-compatible DJ setup, genre-matched talent, backup equipment, and flexible set lengths.",
            ],
          },
          {
            slug: "speakers",
            name: "Speakers & Hosts",
            noPage: true,
            heroImage: img("conferencespeaker,stage", 1400, 600),
            intro: "From keynote speakers to confident hosts and MCs, we source talent that fits the tone of your event precisely, driving energy through a product launch, guiding a formal awards dinner, or keeping a wedding reception moving. Every speaker and host is briefed on your agenda, audience, and objectives before they set foot on stage.",
            panelBody: [
              "We handle the parts that usually go wrong: timing, transitions, and tone. Includes rehearsal and briefing calls ahead of the event, and on-the-day coordination with your event manager.",
            ],
          },
          {
            slug: "model-management",
            name: "Model Management",
            noPage: true,
            heroImage: img("fashionmodel,agency", 1400, 600),
            intro: "Our model management arm represents and books models for campaigns, shows, and events, with casting handled in-house.",
            panelBody: ["Casting is run directly by our team, matched to brief, market, and shoot or show requirements."],
          },
        ],
      },
      {
        slug: "events-production",
        name: "Events Management",
        heroImage: "images/hospitality-events/events-production/events-management.png",
        intro: "From first concept to last guest out the door, we plan and run events that don't need you standing over them. Events fail in the gaps — the vendor who's late, the timeline nobody actually follows, the moment nobody owns. We manage every one of those gaps ourselves.",
        richPage: {
          subheading: "From first concept to last guest out the door",
          blocks: [
            {
              type: "features",
              heading: "How We Work",
              columns: 3,
              items: [
                {
                  name: "Planning & Production",
                  body: "Every event starts with a proper brief — objectives, guest profile, budget, and the non-negotiables — before a single supplier gets a call. We build the full production plan around that brief: run sheet, timings, contingency points, and one dedicated lead who owns the whole thing end to end.",
                  image: img("eventbrief,planning", 700, 525),
                },
                {
                  name: "Venue & Vendor Coordination",
                  body: "We source and manage every supplier your event needs — venue, catering, AV, décor, security, talent — and hold each one to the same brief and the same timeline, so nothing arrives on its own schedule.",
                  image: img("venuesourcing,vendor", 700, 525),
                },
                {
                  name: "On the Day",
                  body: "Our team runs the floor so you don't have to — managing timings, troubleshooting in real time, and keeping every moving part on schedule from load-in to strike-out.",
                  image: img("eventmanagement,onsite", 700, 525),
                },
              ],
            },
          ],
          cta: {
            heading: "Planning an Event?",
            body: "Get in touch and our events team will scope the brief with you.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
        subServices: [
          {
            slug: "event-organisation",
            name: "Event Organisation",
            noPage: true,
            heroImage: img("eventplanning,organisation", 1400, 600),
            intro: "The planning side of the event, handled from first concept through to a finished brief your team can act on. Before anything gets executed, it has to be organised properly — concept, guest experience, budget, timeline, and every supplier that needs booking against it.",
            panelBody: [
              "We build that plan from scratch or take over one that's already half-formed, and hand over something a venue, a caterer, or our own events team can run against without guesswork.",
            ],
          },
          {
            slug: "event-hostess",
            name: "Event Hostess",
            noPage: true,
            heroImage: img("eventhostess,greeting", 1400, 600),
            intro: "Front-of-house staff who represent your event properly, not just stand near the door. We provide professional hostesses for corporate events, product launches, and private functions, briefed on your brand, your guest list, and the tone you want at the door.",
            panelBody: ["Every hostess is selected and trained for the specific event, not sent over from a generic staffing pool."],
          },
          {
            slug: "event-photography",
            name: "Event Photography",
            noPage: true,
            heroImage: "images/hospitality-events/events-production/event-photography-1.jpg",
            intro: "Coverage that captures the event as it actually happened, not a staged version of it. We provide professional photographers for events of every kind, briefed on your run sheet so the key moments are never missed.",
            panelBody: ["Discreet on the day, thorough in the edit, delivered fast enough to still feel relevant. Contact Monika to book."],
          },
        ],
      },
      {
        slug: "events-lifestyle",
        name: "Lifestyle & Leisure",
        heroImage: img("luxurytravel,resort", 1400, 600),
        intro: "First-class, chauffeur-driven journeys and private jet transfers, arranged the moment you need them, handled the whole way through — plus dance, photography, and members' access for private clients.",
        gallery: ["images/hospitality-events/events-lifestyle/dance.jpg", "images/hospitality-events/events-lifestyle/photography-courses.webp"],
        subServices: [
          {
            slug: "luxury-travel",
            name: "Luxury Travel",
            noPage: true,
            heroImage: img("luxurytravel,resort", 1400, 600),
            intro: "Every journey starts with a driver who's already there and ends with you stepping straight off — no queue, no hunting for a car, no second-guessing the details. We handle chauffeur transfers, private jet transfers, and everything that sits around a serious trip.",
            panelBody: [
              "Airport Transfers: door-to-door with live flight monitoring and meet-and-greet on arrival. Chauffeur Service: a dedicated driver booked by the hour or the journey. Private Jet Transfers: chauffeur and jet coordinated as one journey, tarmac-side pickup and drop-off. Corporate Travel: dedicated account management with priority booking. Special Events: multi-vehicle coordination for weddings and launches. City Tours: a private driver and a route built around what you actually want to see.",
              "Our most senior travel arrangements sit outside the standard booking flow, available to existing clients and by referral — get in touch and we'll take it from there.",
            ],
          },
          {
            slug: "gourmet-travels",
            name: "Gourmet Travels",
            noPage: true,
            heroImage: img("gourmettravel,foodie", 1400, 600),
            intro: "Trips built around the table — chef-led, destination-driven, and planned around what's actually worth eating there. We plan travel around food the way other people plan it around landmarks: vineyard regions, chef's table experiences, markets and producers most visitors never find.",
            panelBody: ["Includes chef-led experiences and private tastings, itineraries built around regional food and wine, and access to producers, vineyards, and kitchens not open to the public."],
          },
          {
            slug: "dance",
            name: "Dance",
            noPage: true,
            heroImage: "images/hospitality-events/events-lifestyle/dance.jpg",
            intro: "We run dance classes for private and corporate groups, from beginner sessions to choreographed routines for events. Please contact Anna for dance.",
            panelBody: ["Sessions run for individuals, private groups, or as part of a wider event booking."],
          },
          {
            slug: "photography-courses",
            name: "Photography Courses",
            noPage: true,
            heroImage: "images/hospitality-events/events-lifestyle/photography-courses.webp",
            intro: "Practical training for anyone who wants their images to look intentional, not accidental. Our photography courses are built around real shooting scenarios, not classroom theory — composition, lighting, and editing taught the way you'll actually use them.",
            panelBody: ["Small group sizes, hands-on throughout, beginner through to advanced tracks, with equipment guidance for phone, mirrorless, and studio setups."],
          },
          {
            slug: "coffee-courses",
            name: "Coffee Courses",
            noPage: true,
            heroImage: img("coffeeclass,beginner", 1400, 600),
            intro: "Our beginner coffee courses introduce guests to brewing fundamentals, tasting, and basic latte art in a relaxed setting.",
            panelBody: ["A relaxed introduction to brewing and tasting, aimed at enthusiasts rather than trade professionals."],
          },
        ],
      },
      {
        slug: "food-beverage",
        name: "Food & Beverage",
        heroImage: "images/hospitality-events/food-beverage/cake.png",
        intro: "We've curated a dynamic food and beverage portfolio, ranging from restaurants, bars, cafes, beach clubs, lounges, and in-room dining. We are part of Suntory, one of the world's leading beverage and food companies, based in Japan, with more than 40,000 employees globally.",
        richPage: {
          subheading: "Capitalising on opportunities across the food and beverage landscape",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "The food and beverage landscape demands more than just speed; it requires established connections and a deep understanding of the market to navigate properly. Our team brings years of specialised experience and an international perspective to every project, delivering the precise solutions needed to facilitate expansion, manage refinancing, or handle the complexities of a business sale with efficiency.",
              ],
              images: ["images/hospitality-events/food-beverage/cake.png", "images/hospitality-events/food-beverage/burger.png", "images/hospitality-events/food-beverage/coffee-beans.png"],
            },
          ],
        },
        subServices: [
          {
            slug: "spirits",
            name: "Spirits (Gin, Rum and Vodka)",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/spirits.png",
            intro: "Coming Soon. A small-batch spirits line covering gin, rum, and vodka, currently in development with a distillery partner.",
            panelBody: ["Product details and launch timing will follow once the partnership and recipes are confirmed."],
          },
          {
            slug: "food-advisor",
            name: "Food Advisor",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/food-advisor.png",
            intro: "Our food advisory service helps venues and operators refine menus, sourcing, and kitchen operations, drawing on hands-on F&B experience across the group.",
            panelBody: ["Engagements range from a single menu review through to a full operational audit of a kitchen or venue."],
          },
          {
            slug: "recruitment",
            name: "Recruitment for Food & Beverage",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/recruitment.png",
            intro: "We source and place chefs, front-of-house staff, and management for restaurants, bars, and hotels, matching candidates to the standard each venue demands.",
            panelBody: ["Coverage spans permanent and temporary hires, from kitchen porters through to head chef and general manager roles."],
          },
          {
            slug: "hamburger-pizza-app",
            name: "Hamburger and Pizza App",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/hamburger-pizza-app.png",
            intro: "Coming Soon: Something Tasty Is Cooking. Our Hamburger & Pizza app is currently in the oven — we're cooking up something great, check back soon for the full serving.",
            panelBody: ["Want to be first to know when it launches? Get in touch."],
          },
          {
            slug: "coffee-and-barista-courses",
            name: "Coffee and Barista Courses",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/coffee-barista-courses.png",
            intro: "Our barista training programme covers espresso extraction, milk texturing, and bar service standards, run by working baristas for staff who need to hit a professional standard fast.",
            panelBody: ["Courses are run for individual trainees or as a full staff onboarding programme for a new venue."],
          },
          {
            slug: "coffee-beans",
            name: "Coffee Beans",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/coffee-beans.png",
            intro: "Sourced for how it's actually served. We select coffee the way it should be selected, around how it's going to be used, not just how it tastes on its own. Roast profile, grind consistency, and origin are all matched to the brewing method and the pace of service.",
            panelBody: ["Every bean is chosen with the venue in mind first, the flavour profile second, so what ends up in the cup is right for the place serving it."],
          },
          {
            slug: "cake",
            name: "Cake",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/cake.png",
            intro: "Made to order, made for the moment. Every cake starts with a conversation — flavour, finish, and the occasion it's marking, whether that's a birthday, a wedding, a christening, or a corporate milestone worth celebrating properly.",
            panelBody: [
              "We bake and decorate each one from scratch, working from a flavour range that spans the classics through to something a little more adventurous. Orders need a minimum of three days' notice, and every cake can be collected or delivered city-wide.",
            ],
          },
          {
            slug: "burger",
            name: "Burger",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/burger.png",
            intro: "No frills, just done properly. We build burger menus around a simple idea: fewer ingredients, chosen well, cooked with precision, and served without unnecessary complication.",
            panelBody: [
              "Every element earns its place on the bun, and the kitchen workflow is built to hold that standard whether an order's eaten in, taken away, or sent out for delivery. A model built for consistency over spectacle — the same burger, done right, every single time.",
            ],
          },
          {
            slug: "breakfast-club",
            name: "Breakfast Club",
            noPage: true,
            heroImage: "images/hospitality-events/food-beverage/breakfast-club.png",
            intro: "Coming Soon. A breakfast and brunch concept currently in development for our F&B portfolio.",
            panelBody: ["Menu and venue details will be confirmed closer to launch."],
          },
          {
            slug: "protein-powder",
            name: "Protein Powder",
            noPage: true,
            heroImage: img("proteinshake,cafe", 1400, 600),
            intro: "A protein powder line for our cafes and venues, designed to go straight into shakes and smoothies at the counter rather than as a take-home retail product.",
            panelBody: [
              "This sits alongside, and is distinct from, the performance nutrition range under Doranax Sports & Wellness — this line is built for in-venue use, not home training.",
            ],
          },
        ],
      },
      {
        slug: "workwear",
        name: "Workwear",
        heroImage: img("hospitalitystaff,uniform", 1400, 600),
        intro: "We supply branded and functional workwear for hospitality teams, balancing durability with a presentation standard that reflects the venues we serve.",
        richPage: {
          subheading: "Durability and presentation standard that reflects the venues we serve",
          blocks: [
            {
              type: "features",
              heading: "What We Supply",
              columns: 3,
              items: [
                { name: "Kitchen & Chef Wear", body: "Durable, heat- and stain-resistant kitchen wear built for a full service, not a photoshoot.", image: img("chefwhites,kitchen", 700, 525) },
                { name: "Front-of-House Uniform", body: "Presentation-standard uniform for guest-facing teams, branded to the venue.", image: img("hotelstaff,uniform", 700, 525) },
                { name: "Branded Workwear", body: "Custom branding applied to workwear across a team, consistent venue to venue.", image: img("brandeduniform,staff", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Outfitting a Team?",
            body: "Get in touch and our team will scope sizing, branding, and turnaround.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "private-members-club",
        name: "Private Members Club",
        luxuryTheme: true,
        heroImage: img("membersclub,library", 1400, 600),
        intro: "A discreet space and calendar of events for members, with reciprocal access across partner venues.",
        richPage: {
          subheading: "A discreet space for members, with reciprocal access across partner venues",
          blocks: [
            {
              type: "loginMockup",
              eyebrow: "Members Only",
              heading: "Welcome Back",
              body: "Sign in with your membership details to view upcoming events, reciprocal venues, and your reservations.",
              image: img("gentlemensclub,library", 1400, 1400),
              usernameLabel: "Membership Email",
              passwordLabel: "Password",
              buttonLabel: "Sign In",
              footnote: "Not a member? Get in touch to enquire about membership.",
            },
          ],
          cta: {
            heading: "Interested in Membership?",
            body: "Get in touch to find out more about joining the Private Members Club.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
    ],
  },
  {
    slug: "sports-wellness",
    name: "Doranax Sports & Wellness Group",
    tileImage: img("yoga,wellness"),
    heroImage: img("yoga,fitness", 1600, 700),
    intro: "Doranax Sports & Wellness brings together movement, nutrition, and self-care under one roof, built around a genuine wellbeing philosophy rather than a fitness trend. Our offering spans practice, product, and retreat experiences.",
    services: [
      {
        slug: "yoga",
        name: "Yoga",
        heroImage: "images/sports-wellness/yoga/mat-green.png",
        intro: "We give Yoga Lessons. Our classes and teacher training run across a range of styles and levels, led by instructors with years of teaching experience, designed to be accessible without diluting the practice.",
        richPage: {
          subheading: "Every practice starts with a solid foundation",
          blocks: [
            {
              type: "productShowcase",
              heading: "Yoga Mats",
              items: [
                { name: "Yoga Mat — Green", image: "images/sports-wellness/yoga/mat-green.png" },
                { name: "Yoga Mat — Blue", image: "images/sports-wellness/yoga/mat-blue.png" },
                { name: "Yoga Mat — Blue (Single)", image: "images/sports-wellness/yoga/mat-blue-single.png" },
                { name: "Yoga Mat — Purple", image: "images/sports-wellness/yoga/mat-purple.png" },
              ],
            },
            {
              type: "carousel",
              heading: "Yoga Mat Bundles",
              items: [
                { name: "Multi-Colour Bundle", image: "images/sports-wellness/yoga/mat-bundle-multi.png" },
                { name: "Cool Tones Bundle", image: "images/sports-wellness/yoga/mat-bundle-cool.png" },
                { name: "Bundle Set — 2", image: "images/sports-wellness/yoga/mat-bundle-2.png" },
                { name: "Bundle Set — 3", image: "images/sports-wellness/yoga/mat-bundle-3.png" },
                { name: "Bundle Set — 4", image: "images/sports-wellness/yoga/mat-bundle-4.png" },
              ],
            },
          ],
          cta: {
            heading: "Looking for a Bulk or Studio Order?",
            body: "Get in touch and our team will help you find the right mats for your studio or event.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
        subServices: [
          {
            slug: "yoga-blocks",
            name: "Yoga Blocks",
            noPage: true,
            heroImage: "images/sports-wellness/yoga/block-single.png",
            intro: "Support is the foundation of every strong practice. Crafted from dense, sustainably sourced cork, each block offers a naturally grippy, non-slip surface that stays stable under pressure, whether modifying a standing pose, deepening a stretch, or supporting restorative work.",
            panelBody: [
              "Sold as a Single block or as a matched Pair for balanced practice, finished with the debossed Doranax wolf shield.",
            ],
          },
        ],
      },
      {
        slug: "doranax-athletics",
        name: "Doranax Athletics",
        heroImage: img("activewear,fashion", 1400, 600),
        intro: "Doranax Athletics was built on one simple belief: the way you show up in training reflects the way you show up in life. Performance and lifestyle apparel and merchandise, designed for movement and finished with the signature Doranax wolf shield.",
        richPage: {
          subheading: "The way you show up in training reflects the way you show up in life",
          blocks: [
            {
              type: "features",
              heading: "The Collection",
              columns: 4,
              items: [
                {
                  name: "Hoodie (Black)",
                  body: "A heavyweight fleece hoodie in a relaxed, athletic fit, with a brushed interior lining, ribbed cuffs, and an embroidered wolf shield at the chest.",
                  image: "images/sports-wellness/doranax-athletics/hoodie-black.png",
                },
                {
                  name: "Travel Mug (Silver)",
                  body: "A double-wall vacuum insulated stainless steel travel mug that keeps drinks hot or cold for hours, with a secure screw-on lid.",
                  image: "images/sports-wellness/doranax-athletics/travel-mug-silver.png",
                },
                {
                  name: "Travel Mug (White)",
                  body: "The same double-wall vacuum insulation in a crisp matte-white finish, with a comfortable side handle and spill-resistant lid.",
                  image: "images/sports-wellness/doranax-athletics/travel-mug-white.png",
                },
                {
                  name: "Water Bottle (White Flask)",
                  body: "A lightweight stainless steel bottle with double-wall vacuum insulation, keeping water ice-cold for up to 24 hours.",
                  image: "images/sports-wellness/doranax-athletics/water-bottle-white.png",
                },
                {
                  name: "T-Shirt (Grey)",
                  body: "A soft, heathered cotton-blend everyday tee in a relaxed, true-to-size fit, with a subtle embroidered wolf shield at the chest.",
                  image: "images/sports-wellness/doranax-athletics/tshirt-grey.png",
                },
                {
                  name: "Performance Tee (White)",
                  body: "A lightweight, moisture-wicking performance tee with four-way stretch, a tailored athletic fit, and flatlock seams.",
                  image: "images/sports-wellness/doranax-athletics/tee-white-performance.png",
                },
                {
                  name: "Tote Bag (Natural Canvas)",
                  body: "A heavyweight cotton canvas tote with reinforced handles, finished with a bold black wolf shield print.",
                  image: "images/sports-wellness/doranax-athletics/tote-natural.png",
                },
                {
                  name: "Tote Bag (Black)",
                  body: "The same heavyweight canvas construction in black, with a bold white wolf shield print for a sharper, more elevated look.",
                  image: "images/sports-wellness/doranax-athletics/tote-black.png",
                },
              ],
            },
          ],
          cta: {
            heading: "Interested in Doranax Athletics Merchandise?",
            body: "Get in touch to find out more about the collection.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "skincare",
        name: "Skincare",
        heroImage: "images/sports-wellness/skincare/hero.png",
        intro: "We partner with carefully selected, purpose-driven skincare brands from around the world, brands that share our commitment to natural, ethical, and sustainable formulations that genuinely work. Our mission is simple: connect the best in luxury skincare with the professionals who bring it to life, exclusively through salons, skin clinics, and spas across the UK.",
        richPage: {
          subheading: "Connecting the best in luxury skincare with the professionals who bring it to life",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "We believe skincare professionals deserve more than just stock on a shelf. That's why every brand we bring to market is chosen for its clean formulation, proven efficacy, and alignment with the values our partners and their clients care about: sustainability, ethics, and real results.",
                "We don't believe in one size fits all distribution. Every brand we work with receives a tailored, brand by brand strategy built around its unique identity, audience, and goals, with an established network of trusted partners across the UK's key regions. Beauty salons, skin clinics, and spas should never have to compete with a brand's own online store, so we protect exclusivity for our professional partners, giving them genuine competitive advantage, not just another product line.",
              ],
              images: [
                "images/sports-wellness/skincare/lifestyle-2.png",
                "images/sports-wellness/skincare/product-sage-1.png",
                "images/sports-wellness/skincare/product-sage-2.png",
              ],
            },
            {
              type: "features",
              heading: "Why Partner With Us",
              columns: 3,
              items: [
                { name: "Exclusive Access", body: "Our professional partners get access that online shoppers simply don't.", image: "images/sports-wellness/skincare/product-sage-3.png" },
                { name: "Tailored Strategy", body: "No generic playbooks, every brand gets a distribution approach built around it.", image: img("brandstrategy,skincare", 700, 525) },
                { name: "Full-Service Support", body: "Training, marketing, brand assets, and our proprietary FLOW scheme, all included.", image: img("skincaretraining,support", 700, 525) },
                { name: "Trusted Relationships", body: "Built on regular contact, transparency, and a genuine understanding of each partner's goals.", image: img("partnershipmeeting,trust", 700, 525) },
                { name: "Values-Led Curation", body: "Every brand we represent is chosen for its ethics, sustainability, and efficacy, never just its margins.", image: img("sustainableskincare,ethics", 700, 525) },
              ],
            },
          ],
          cta: {
            heading: "Are You a Salon, Clinic, or Spa?",
            body: "Get in touch to find out which brands in our portfolio would suit your business.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "protein",
        name: "Protein",
        heroImage: "images/sports-wellness/protein/product-1.png",
        intro: "Recovery is where the real gains happen, and Doranax Athletics Whey Protein was formulated to support exactly that. Packed with a high-quality protein blend per serving, it's designed to help repair and rebuild muscle after even the toughest sessions, without unnecessary fillers, artificial junk, or a chalky aftertaste.",
        richPage: {
          subheading: "Train hard, recover harder",
          blocks: [
            {
              type: "intro",
              paragraphs: [
                "Mixes smooth in water or milk, dissolves fast, and delivers the fuel your body needs to keep showing up stronger. Finished with the signature wolf shield, this is the same standard of discipline and consistency that runs through the entire Doranax range, now in your shaker bottle.",
              ],
              images: ["images/sports-wellness/protein/product-1.png", "images/sports-wellness/protein/product-2.png", img("shakerbottle,gym", 900, 650)],
            },
          ],
          cta: {
            heading: "Want to Stock Doranax Athletics Whey Protein?",
            body: "Get in touch to find out more.",
            buttonLabel: "Contact Us",
            buttonHref: "contact.html",
            form: false,
          },
        },
      },
      {
        slug: "retreat",
        name: "Retreat",
        heroImage: "images/sports-wellness/retreat/retreat-1.png",
        intro: "Training doesn't end at the gym door, it's a mindset that deserves space to breathe. Doranax Athletics retreats bring together movement, recovery, and community in carefully chosen locations designed to reset both body and mind.",
        gallery: ["images/sports-wellness/retreat/retreat-2.png", "images/sports-wellness/retreat/retreat-3.png"],
        subServices: [
          {
            slug: "morocco",
            name: "Morocco",
            noPage: true,
            heroImage: img("morocco,retreat", 1400, 600),
            intro: "Our Morocco retreat combines desert and riad settings with daily movement and rest, run in small groups for a genuinely restorative pace.",
            panelBody: [
              "Days are built around morning practice, guided rest, and communal meals, with the desert and riad settings doing the rest of the work.",
            ],
          },
          {
            slug: "turkiye",
            name: "Turkiye",
            noPage: true,
            heroImage: img("turkey,retreat", 1400, 600),
            intro: "Our Turkiye retreat pairs coastal and Cappadocia settings with a programme of movement, rest, and nutrition in a small-group format.",
            panelBody: [
              "The itinerary moves between coast and Cappadocia across the retreat, balancing structured sessions with genuine unstructured downtime.",
            ],
          },
        ],
      },
    ],
  },
];

const CONTACT = {
  heroImage: img("office,uk", 1600, 500),
  intro: "For enquiries across any of our sectors, get in touch and a member of the relevant team will respond directly.",
};

module.exports = { SITE, SECTORS, CONTACT };
