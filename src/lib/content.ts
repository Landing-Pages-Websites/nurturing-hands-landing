/**
 * Real AJT Bounce & Events content — grounded in the research bundle
 * (build_context, offer_cro, proof). No invented facts or stats.
 *
 * SEASONAL SWAP: the SERVICES array below is the single source of truth for the
 * services + gallery. To pivot the page to Halloween / Christmas bounce rentals
 * in October, swap the SERVICES entries (image + copy) and the GALLERY tiles —
 * the rest of the page reflows automatically.
 */

export const PHONE_DISPLAY = "(508) 203-5946";
export const PHONE_HREF = "tel:+15082035946";

export interface ServiceItem {
  id: string;
  name: string;
  tag: string;
  image: string;
  alt: string;
  body: string;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    id: "water-slides",
    name: "Water Slides",
    tag: "Summer favorite",
    image: "/images/water-slide-1.jpg",
    alt: "AJT Bounce inflatable water slide rental with a splash pool",
    body: "Beat the heat with a towering inflatable water slide that turns any backyard into a summer splash zone. Choose single or dual-lane slides for racing, plus wet-or-dry options so the fun keeps going all season. Every slide arrives clean, sanitized, and ready to go — delivered, professionally set up, and picked up for you. Just add water and watch the kids line up again and again.",
  },
  {
    id: "foam-parties",
    name: "Foam Parties",
    tag: "Crowd pleaser",
    image: "/images/foam-party-action.jpg",
    alt: "Kids playing in a mountain of foam at an AJT Bounce foam party",
    body: "Bury the whole party in mountains of soft, fluffy foam! Our foam parties are the ultimate group activity for birthdays, block parties, school field days, and community events — with classic, color, and glow options to match any theme. We bring the foam cannon, the pit, and a friendly crew that runs the show, then cleans it all up. It's the kind of mess every kid (and grown-up) wishes for.",
  },
  {
    id: "bubble-parties",
    name: "Bubble Parties",
    tag: "All ages",
    image: "/images/bubble-party.jpg",
    alt: "AJT Bounce bubble party machine filling the air with bubbles",
    body: "Fill the air with thousands of glittering bubbles for a magical, mess-free experience the little ones adore. Our bubble party setup pumps out non-stop bubbles for dancing, chasing, and popping — perfect for younger crowds, daytime celebrations, and indoor or outdoor events. Like every AJT rental, it shows up clean and ready, set up by our team so you can simply enjoy the show.",
  },
  {
    id: "bounce-houses",
    name: "Bounce Houses & Combos",
    tag: "Year-round",
    image: "/images/bounce-house-2.jpg",
    alt: "AJT Bounce themed combo bounce house with a slide",
    body: "From classic castles to themed combos with built-in slides, climbs, and obstacle courses, we have a bounce house to match any party theme and age group. Our huge variety means you can always find the perfect fit — and combos pack bouncing, sliding, and climbing into one showstopping centerpiece. Clean, inspected, fully insured, and delivered and set up free, so the only thing you have to do is party.",
  },
];

export interface GalleryItem {
  image: string;
  alt: string;
}

export const GALLERY: readonly GalleryItem[] = [
  { image: "/images/water-slide-2.jpg", alt: "Tropical inflatable water slide rental" },
  { image: "/images/foam-party-kids.jpg", alt: "Inflatable foam pit rental" },
  { image: "/images/bubble-octoblast.jpg", alt: "Giant octopus inflatable" },
  { image: "/images/bounce-house-1.jpg", alt: "Birthday cake themed bounce house" },
  { image: "/images/foam-glow.jpg", alt: "AJT foam party — kids in the foam pit" },
  { image: "/images/bounce-house-3.jpg", alt: "Sphere dome bounce house rental" },
];

export interface Review {
  quote: string;
  result: string;
}

/* Verbatim verified Google reviews from proof.json. */
export const REVIEWS: readonly Review[] = [
  {
    quote:
      "We always use AJT for bounce house rentals for my kids' birthday parties. Good quality product, timely and courteous delivery and pickup, and helpful customer service. They have a great variety of bounce houses — can always find one that matches the theme of the party. Highly recommend!",
    result: "Repeat customer · birthday parties",
  },
  {
    quote:
      "We just used AJT for our annual block party. Booking was quick and easy. Company was very helpful and even delivered the bounce house early for extra use! We also had a foam party that was a huge hit. The staff showed up early and made everything effortless on our end. The kids loved it! We will use them again for sure!",
    result: "Block party + foam party",
  },
  {
    quote:
      "Rented a large inflatable waterslide for my daughter's birthday. The slide was very clean. The guys were super friendly. I would definitely rent from them again!",
    result: "Water slide birthday",
  },
  {
    quote:
      "Great Value. Very clean, high quality inflatables. We rented a water slide combo and it was the hit of the party!",
    result: "Water slide combo",
  },
  {
    quote:
      "I absolutely loved renting from AJT Bounce. We live on the military base and they went above and beyond to get us a bounce house!! 100% recommend renting from them. The delivery guys were amazing — so friendly and funny! Thank you guys, you made our going away party so much better!",
    result: "Going-away party",
  },
  {
    quote:
      "We always use AJT for our kids' birthday parties and they never disappoint. Everything is organized, fun, and stress-free every single time. Highly recommend AJT for any event!",
    result: "Stress-free every time",
  },
];

export interface TownGroup {
  state: string;
  towns: readonly string[];
}

export const SERVICE_AREA: readonly TownGroup[] = [
  {
    state: "Massachusetts",
    towns: ["Foxborough", "Mansfield", "Wrentham", "Sharon", "Walpole", "Attleboro", "Norwood"],
  },
  {
    state: "Rhode Island",
    towns: ["Greenville", "Providence", "Cranston", "Warwick"],
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: readonly Faq[] = [
  {
    q: "Do you deliver and set everything up?",
    a: "Yes! Free delivery, professional setup, and pickup are included on every single rental across MA & RI. Our crew handles the heavy lifting and makes sure everything is safe and ready before the fun starts — you don't lift a finger.",
  },
  {
    q: "Which towns do you serve?",
    a: "We serve Massachusetts and Rhode Island within about 20 miles of Foxborough, MA and Greenville, RI — including Foxborough, Mansfield, Wrentham, Sharon, Walpole, Attleboro, Norwood, Providence, Cranston, Warwick, and the surrounding towns. Not sure if you're in range? Just ask when you request your quote.",
  },
  {
    q: "Are you insured, and is the equipment clean?",
    a: "Absolutely. AJT Bounce is fully insured and licensed, and every inflatable is cleaned and sanitized before it reaches your party. Clean, high-quality equipment is one of the things our customers mention most in their reviews.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as you can — especially for summer weekends. Prime dates and our most popular water slides and foam parties book up fast, and the best-weather window closes by September. Reserve your date now to lock it in.",
  },
  {
    q: "What kinds of events do you do?",
    a: "Birthday parties, backyard gatherings, block parties, school field days, church and community events, fundraisers — you name it. With water slides, foam parties, bubble parties, and a huge variety of bounce houses and combos, we have something fun for every age and occasion.",
  },
  {
    q: "How do I get a price?",
    a: "Fill out the quick quote form or call us at (508) 203-5946. We'll get you a fast, free, no-obligation quote and help you pick the perfect setup for your event and space.",
  },
];

export const TIMELINE_OPTIONS: readonly string[] = [
  "Within the next week",
  "Within 1-2 weeks",
  "Within 2-4 weeks",
  "4+ weeks out",
];
