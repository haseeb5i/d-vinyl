import { CDN } from "@/lib/constants";

export const SERVICES_MARQUEE = [
  "Commercial Vehicle Wraps",
  "Color Change Wraps",
  "Window Tint",
  "Paint Protection Film",
  "Fleet Branding",
  "Wall Wraps",
  "Storefront Graphics",
  "Architectural Tint",
];

export interface HeadlinePart {
  text: string;
  cls: string;
  block?: boolean;
}

export interface Tab {
  id: string;
  name: string;
  short: string;
  href?: string;
  images: { main: string; detail: string };
  headlineParts: HeadlinePart[];
  body: string;
  chipsLabel: string;
  chips: string[];
  features: [string, string, string][];
  tiers?: [string, string, string, string][];
  vehicleLabel: string;
  detailLabel: string;
  tag: string;
  cta: string;
  count: string;
}

export const TABS: Tab[] = [
  {
    id: "commercial",
    name: "Commercial Wraps",
    short: "Commercial Wraps",
    href: "/commercial-wraps",
    images: {
      main: `${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`,
      detail: `${CDN}/2a192e6a-003a-47ca-9a34-91600edc9345/High-Tech-Plumbing----Vehicle-Wrap.png`,
    },
    headlineParts: [
      { text: "Branded ", cls: "" },
      { text: "On Wheels.", cls: "accent" },
      { text: " Built In Marin.", cls: "sky", block: true },
    ],
    body: "Premium commercial vehicle wraps for businesses throughout Marin County and the Bay Area. Graphic design, print production, and professional installation — all in-house, all in a climate-controlled bay. From a single service van to a full fleet rollout.",
    chipsLabel: "Vehicles We Wrap",
    chips: [
      "Plumbing Vans","HVAC Trucks","Electrical Service","Construction Trucks",
      "Landscaping","Food Trucks","Box Trucks","Fleet Vehicles",
      "Utility Trucks","Sprinter Vans","Ford Transit","Cargo Vans",
      "Trailers","Dump Trucks","Delivery Vehicles","Commercial SUVs",
    ],
    features: [
      ["01", "In-House Design", "Concept, layout and proof from our design team."],
      ["02", "In-House Print", "Latex production on premium cast vinyl."],
      ["03", "Climate Bay", "Controlled-environment installation, every job."],
      ["04", "Fleet Rollouts", "Templated, repeatable, scalable across vehicles."],
    ],
    vehicleLabel: "SPRINTER FLEET / FULL WRAP",
    detailLabel: "EDGE TUCK · PRINT DETAIL",
    tag: "Featured · HVAC Fleet Rebrand",
    cta: "View Commercial Wraps",
    count: "16 vehicle types",
  },
  {
    id: "color",
    name: "Color Change",
    short: "Color Change",
    href: "/color-change",
    images: {
      main: `${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`,
      detail: `${CDN}/6e9a89e5-b24b-4389-8fe4-635eb56b6261/Wrapping+a+vinyal+car+wrap.JPG`,
    },
    headlineParts: [
      { text: "100+ Colors. ", cls: "accent" },
      { text: "One Paint-Like Finish.", cls: "", block: true },
    ],
    body: "Transform a new build or rescue a tired daily. Gloss, satin, matte, metallic, chrome-effect and specialty films from 3M, KPMF, Avery Dennison and XPEL. We disassemble where it matters for cleaner edges and a true paint-like result — installed by certified pros in a controlled bay.",
    chipsLabel: "Finishes Available",
    chips: [
      "Gloss","Satin","Matte","Metallic","Pearlescent","Chrome-Effect",
      "Color-Shift","Brushed","Carbon Fiber","Textured","Color PPF","Custom Blends",
    ],
    features: [
      ["01", "Cast Vinyl Films", "Long-life conformable films, not calendared."],
      ["02", "Edge Treatment", "Disassembly for paint-like, wrapped edges."],
      ["03", "Paint Preservation", "Wrap protects OEM finish underneath."],
      ["04", "Color Match", "Sample boards, in-person color review."],
    ],
    vehicleLabel: "TESLA MODEL 3 / SATIN FROZEN BLUE",
    detailLabel: "EDGE WRAP · DOOR JAMB",
    tag: "Featured · Tesla Model 3",
    cta: "View Color Change",
    count: "100+ finishes",
  },
  {
    id: "tint",
    name: "Window Tint",
    short: "Window Tint",
    href: "/window-tint",
    images: {
      main: `${CDN}/e59f6da4-c6d9-483c-87f7-50bdb64d8959/Tesla+Custom+Christmas+Wrap.jpg`,
      detail: `${CDN}/6e9a89e5-b24b-4389-8fe4-635eb56b6261/Wrapping+a+vinyal+car+wrap.JPG`,
    },
    headlineParts: [
      { text: "Cooler Drives. ", cls: "" },
      { text: "Cleaner Look.", cls: "accent", block: true },
    ],
    body: "Authorized XPEL window tint installation for automotive, residential and commercial. Three performance tiers, professional installation, and a finish that holds up to California sun. Tesla-trained installers; signal-safe non-metallic films.",
    chipsLabel: "Applications",
    chips: [
      "Automotive","Tesla","Luxury Vehicles","Commercial Fleets",
      "Residential","Office Glass","Storefront","Privacy Film",
      "UV Block","Heat Rejection",
    ],
    features: [],
    tiers: [
      ["good", "Good", "XPEL CS", "Entry-level dyed film for privacy, appearance and basic heat rejection."],
      ["better", "Better", "XPEL Black", "Carbon-based film. Stronger heat rejection, no signal interference."],
      ["best", "Best", "XPEL XR Plus", "Nano-ceramic. Maximum heat rejection, superior clarity, advanced UV."],
    ],
    vehicleLabel: "PORSCHE TAYCAN / XR PLUS 20%",
    detailLabel: "CERAMIC TINT · UV READING",
    tag: "Featured · XPEL XR Plus",
    cta: "View Window Tint",
    count: "3 tiers · XPEL",
  },
  {
    id: "ppf",
    name: "Paint Protection",
    short: "Paint Protection",
    href: "/paint-protection",
    images: {
      main: `${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`,
      detail: `${CDN}/2fd6af27-018e-4d2d-9aef-4f7406ba7d32/WhatsApp+Image+2025-01-09+at+5.35.12+PM.jpeg`,
    },
    headlineParts: [
      { text: "Invisible Armor ", cls: "accent" },
      { text: "For The Daily.", cls: "", block: true },
    ],
    body: "XPEL paint protection film for luxury, exotic, performance and daily-driven vehicles. Software-cut precision, climate-controlled install, and films that shrug off rock chips, road debris, scratches, bug acids and the long road north on the 101.",
    chipsLabel: "Coverage Packages",
    chips: [
      "Front Bumper","Partial Front","Full Front","Full Vehicle PPF",
      "Gloss PPF","Stealth / Satin PPF","Track Package","Headlights & Pillars",
      "Tesla PPF","Ceramic Coating Add-On",
    ],
    features: [
      ["01", "XPEL Films", "Self-healing, hydrophobic, high optical clarity."],
      ["02", "Plotter-Cut", "Software-precise templates for every panel."],
      ["03", "Wrapped Edges", "Tucked, not exposed — long-life adhesion."],
      ["04", "Warranty", "Backed by XPEL's 10-year manufacturer warranty."],
    ],
    vehicleLabel: "PORSCHE MACAN / FULL FRONT PPF",
    detailLabel: "ROCK CHIP · SELF-HEAL",
    tag: "Featured · XPEL Ultimate Plus",
    cta: "View Paint Protection",
    count: "10+ packages",
  },
];

export interface PortfolioItem {
  id: string;
  cat: string;
  catLabel: string;
  img: string;
  title: string;
  subtitle: string;
  material: string;
  duration: string;
  location: string;
  blurb: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "cyber",
    cat: "color",
    catLabel: "Color Change",
    img: `${CDN}/66c669df-1afd-4294-b62e-09316bdfd32b/Tesla%2BCyber%2BTruck%2BCamouflage%2BWrap-min.jpg`,
    title: "Tesla Cybertruck",
    subtitle: "Custom Camouflage Wrap",
    material: "3M Cast Vinyl",
    duration: "4 days in the bay",
    location: "Novato, CA",
    blurb: "Full custom camouflage pattern on the Cybertruck's stainless panels — designed in-house, plotter-cut for body lines, wrapped edges and door jambs.",
  },
  {
    id: "rocky",
    cat: "commercial",
    catLabel: "Commercial Wrap",
    img: `${CDN}/03b4fb3a-f9cd-481c-8047-aa83f9a7f6bc/Rocky+Hill+Electric+Commercial+Wrap.jpg`,
    title: "Rocky Hill Electric",
    subtitle: "Service Van Rebrand",
    material: "3M IJ180Cv3 + 8519",
    duration: "3 days",
    location: "Marin County",
    blurb: "Full van rebrand for a Marin electrical contractor. Bold typography, contact info legible at 60ft, color-matched to brand identity.",
  },
  {
    id: "hightech",
    cat: "commercial",
    catLabel: "Commercial Wrap",
    img: `${CDN}/2a192e6a-003a-47ca-9a34-91600edc9345/High-Tech-Plumbing----Vehicle-Wrap.png`,
    title: "High Tech Plumbing",
    subtitle: "Branded Service Vehicle",
    material: "Avery Dennison MPI 1105",
    duration: "2 days",
    location: "Bay Area",
    blurb: "Full-color illustration and brand identity wrapped across the van. Designed to convert 40k+ daily impressions into real bookings.",
  },
  {
    id: "tesla-red",
    cat: "color",
    catLabel: "Color Change",
    img: `${CDN}/22f0d7ec-2998-43d9-80ba-04b4ccb8f750/Tesla+Car+Red+Color+Change+Wrap.jpg`,
    title: "Tesla Model 3",
    subtitle: "Gloss Red Color Change",
    material: "3M 2080 Gloss",
    duration: "5 days",
    location: "Novato, CA",
    blurb: "Full color change from white to a deep gloss red. Mirror caps, door jambs and edges wrapped — indistinguishable from a respray.",
  },
  {
    id: "porsche",
    cat: "ppf",
    catLabel: "PPF + Tint",
    img: `${CDN}/4ae9e7fe-0c28-4dca-89c6-a50cb605eba2/Yellow+Porsche+Car+Paint+Protection+Film+and+Window+Tint.JPG`,
    title: "Yellow Porsche",
    subtitle: "Full PPF + Ceramic Tint",
    material: "XPEL Ultimate Plus + XR",
    duration: "6 days",
    location: "San Rafael",
    blurb: "Full-vehicle XPEL paint protection film with ceramic window tint. Self-healing, hydrophobic, 10-year manufacturer warranty.",
  },
  {
    id: "tacos",
    cat: "food",
    catLabel: "Food Truck",
    img: `${CDN}/e086da1f-45af-480d-a378-7f2e5f1d7f7b/Tacos+Truck+Wrap.jpg`,
    title: "Tacos Truck",
    subtitle: "Full Custom Food Truck Wrap",
    material: "3M IJ180Cv3 + Cast Vinyl",
    duration: "7 days",
    location: "Bay Area",
    blurb: "Custom illustration and dimensional graphics for a mobile taco kitchen. Holds up to two summers of food-service abuse and still looks fresh.",
  },
  {
    id: "boxtruck",
    cat: "commercial",
    catLabel: "Commercial Wrap",
    img: `${CDN}/e9348d45-d1b4-44d3-ae7a-7f02856f6bd7/Box+Truck+Full+Wrap.jpg`,
    title: "Box Truck · Full Wrap",
    subtitle: "Maximum Brand Real-Estate",
    material: "3M Premium Cast",
    duration: "4 days",
    location: "Bay Area",
    blurb: "Full-coverage wrap on a 26ft box truck. Every panel a billboard — designed for high-impression freeway corridors.",
  },
  {
    id: "mexican",
    cat: "food",
    catLabel: "Food Truck",
    img: `${CDN}/23f5e668-a29d-4167-b44c-fcd03f68ae62/Maxican+Food+Truck+Wrap.JPG`,
    title: "Mexican Food Truck",
    subtitle: "Vibrant Branded Wrap",
    material: "Cast Vinyl, Latex Print",
    duration: "6 days",
    location: "Novato, CA",
    blurb: "Saturated color, custom illustration, and full menu legibility. Designed to turn heads at lunch rush from 50 feet away.",
  },
  {
    id: "boat",
    cat: "specialty",
    catLabel: "Specialty",
    img: `${CDN}/d0193d01-8fd6-43ba-9384-da147c34761c/Custom_fishing_boat_wrap_3M_gold_glitter.jpg`,
    title: "Custom Fishing Boat",
    subtitle: "3M Gold Glitter Specialty",
    material: "3M Gold Glitter Film",
    duration: "8 days",
    location: "Marin",
    blurb: "Marine-grade specialty wrap with metallic glitter finish. Engineered for saltwater, sun and the long haul on open water.",
  },
  {
    id: "tesla-xmas",
    cat: "color",
    catLabel: "Custom",
    img: `${CDN}/e59f6da4-c6d9-483c-87f7-50bdb64d8959/Tesla+Custom+Christmas+Wrap.jpg`,
    title: "Tesla · Holiday Edition",
    subtitle: "Custom Seasonal Wrap",
    material: "Removable Cast Vinyl",
    duration: "3 days",
    location: "Novato, CA",
    blurb: "Temporary holiday wrap, designed to come off cleanly. A complete personality change without committing the paint underneath.",
  },
  {
    id: "nissan",
    cat: "commercial",
    catLabel: "Commercial Wrap",
    img: `${CDN}/64011f1a-c502-49a1-b84c-5e795c3d80bb/Nissan+Van+Full+Wrap.JPG`,
    title: "Nissan Van · Full Wrap",
    subtitle: "Service Fleet Vehicle",
    material: "3M IJ180Cv3",
    duration: "2 days",
    location: "Bay Area",
    blurb: "Tight schedule turnaround on a Nissan NV. Full coverage, brand-consistent typography, and back on the route in 48 hours.",
  },
  {
    id: "ford-maverick",
    cat: "commercial",
    catLabel: "Partial Wrap",
    img: `${CDN}/ff1cd10f-b4ad-490a-a878-e20b317d0ad4/Ford+Maverick+Truck+Partial+Wrap.png`,
    title: "Ford Maverick",
    subtitle: "Partial Commercial Wrap",
    material: "Cast Vinyl, Plotter Cut",
    duration: "1 day",
    location: "Marin",
    blurb: "Budget-friendly partial wrap that preserves the OEM color while delivering 80% of the brand impact at 30% of the cost.",
  },
];

export const PORTFOLIO_FILTERS = [
  { id: "all", label: "All Work", count: 12 },
  { id: "commercial", label: "Commercial", count: 5 },
  { id: "color", label: "Color Change", count: 3 },
  { id: "ppf", label: "PPF + Tint", count: 1 },
  { id: "food", label: "Food Trucks", count: 2 },
  { id: "specialty", label: "Specialty", count: 1 },
];

export const ADDITIONAL_SERVICES: [string, string, string][] = [
  ["01", "Commercial Window Tinting", "Heat rejection, glare control and privacy for offices and storefronts."],
  ["02", "Residential Window Tint", "Comfort, UV protection and energy efficiency for homes."],
  ["03", "Wall Wraps", "Large-format wall graphics for lobbies, conference rooms and showrooms."],
  ["04", "Fleet Branding & Graphics", "Unified visual identity across an entire fleet of vehicles."],
  ["05", "Storefront Graphics", "Window vinyl, frosted privacy bands and signage for retail."],
  ["06", "Custom Business Branding", "Logos, environmental graphics, custom interior installations."],
  ["07", "Vinyl Graphics & Signage", "Cut vinyl lettering, decals, and dimensional signage."],
  ["08", "Decorative Privacy Film", "Frosted, patterned and gradient films for glass partitions."],
];

export interface Testimonial {
  initials: string;
  quote: (string | { hl: string } | { hlSky: string })[];
  body: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "RM",
    quote: ["The fleet wrap looked ", { hl: "identical across all eleven trucks." }, " We've already booked three jobs from people who pulled over to ask."],
    body: "Dynamic handled design, print and install for a full HVAC fleet rebrand. Coordinated the rollout around our service calendar so we never lost a vehicle for more than 36 hours.",
    name: "Ricardo M.",
    role: "Owner · Marin HVAC Group",
  },
  {
    initials: "AT",
    quote: [{ hl: "Looks better than the original paint." }, " Genuinely."],
    body: "Color change on a Model 3 — satin frozen blue. Edges are tucked, panel gaps clean, no orange peel. They disassembled where it mattered and the finish is indistinguishable from a respray.",
    name: "Alex T.",
    role: "Tesla Model 3 · San Rafael",
  },
  {
    initials: "JC",
    quote: ["The truck is a ", { hl: "rolling billboard" }, " — and the wrap has held up to two summers of food-service abuse."],
    body: "Full food truck wrap with custom illustrations from our brand team. Three years in and the colors are still tight. Easy to clean, no peeling, no fading on the south side.",
    name: "Jenna C.",
    role: "Owner · Salt + Smoke BBQ Truck",
  },
  {
    initials: "DP",
    quote: ["Full front PPF and XR Plus tint — ", { hlSky: "the car feels factory-new" }, " a year in."],
    body: "Took delivery of a new Macan and went straight to Dynamic for full front paint protection and ceramic tint. Software-cut precision, edges tucked, no orange peel. Worth every dollar.",
    name: "Daniel P.",
    role: "Porsche Macan · Novato",
  },
];
