export const CDN =
  "https://images.squarespace-cdn.com/content/v1/6745dcc560869535bc3e0842";

export const CONTACT = {
  phone: "(415) 569-0763",
  phoneTel: "tel:+14155690763",
  email: "dynwraps@gmail.com",
  emailMailto: "mailto:dynwraps@gmail.com",
  address: "7515 Redwood Blvd.",
  cityState: "Novato, CA 94945",
  fullAddress: "7515 Redwood Blvd., Novato, CA 94945",
  mapsUrl: "https://maps.google.com/?q=7515+Redwood+Blvd+Novato+CA+94945",
  instagram: "https://www.instagram.com/dynamicwraptints/",
  instagramHandle: "@dynamicwraptints",
} as const;

export const HOURS = [
  { days: "Mon – Fri", time: "8:00 – 18:00", closed: false },
  { days: "Saturday", time: "9:00 – 15:00", closed: false },
  { days: "Sunday", time: "Closed", closed: true },
] as const;
