/**
 * ============================================================
 *  OUTDOORSY CHICAGO — SEO CONFIGURATION
 *  Edit in the SEO Editor (admin/seo-editor.html) or directly.
 *  After saving, replace this file in the repo and push to GitHub.
 * ============================================================
 */
const SEO = {

  siteName: "Outdoorsy Chicago",
  siteUrl:  "https://www.outdoorsychicago.com",

  // ── Social profiles ─────────────────────────────────────
  socialProfiles: [
    "https://www.instagram.com/outdoorsy_chicago",
    "https://www.meetup.com/outdoorsy-chicago"
  ],

  // ── Home page ────────────────────────────────────────────
  home: {
    title:        "Outdoorsy Chicago | 20s and 30s Outdoors Group",
    description:  "Join 300+ Chicagoans exploring hiking, kayaking, camping, and day trips. Outdoorsy Chicago is the community for adventurous 20s & 30s in the city.",
    canonicalUrl: "https://www.outdoorsychicago.com/",
    ogImage:      "https://www.outdoorsychicago.com/images/og-outdoorsy-chicago.jpg"
  },

  // ── OutDozen page ────────────────────────────────────────
  outdozen: {
    title:        "The OutDozen | Outdoorsy Chicago Annual Challenge",
    description:  "Complete 12 epic outdoor challenges across Chicago and beyond. Hike, kayak, camp, and explore with Outdoorsy Chicago's OutDozen bucket list.",
    canonicalUrl: "https://www.outdoorsychicago.com/outdozen",
    ogImage:      "https://www.outdoorsychicago.com/images/og-outdoorsy-chicago.jpg"
  },

  // ── Organization schema ──────────────────────────────────
  organization: {
    name:       "Outdoorsy Chicago",
    email:      "outdoorsychicago@gmail.com",
    city:       "Chicago",
    region:     "IL",
    country:    "US",
    latitude:   41.8781,
    longitude: -87.6298,
    areaServed: ["Chicago, Illinois", "Chicagoland", "Northern Illinois", "Indiana Dunes", "Starved Rock"]
  },

  // ── Image alt text ───────────────────────────────────────
  imageAlt: {
    // Home — Who We Are
    intoTheWoods: "Forest camping scene — Outdoorsy Chicago hiking and trail adventures",
    onTheWater:   "Morning kayaking on Lake Michigan with Chicago skyline — Outdoorsy Chicago water adventures",
    cityTrails:   "Cyclist on Chicago lakefront trail at dusk — Outdoorsy Chicago urban cycling routes",
    // Home — Gallery
    cake:         "Group Celebration",
    bonfire:      "Promontory Point — Bonfire Night",
    meetup:       "Outdoorsy Chicago Meetup",
    // OutDozen — map pins
    skating:      "Maggie Daley Ice Skating — Chicago winter outdoor activity",
    starvedRock:  "Starved Rock State Park Camping — Illinois outdoor adventure",
    bonfire2:     "Promontory Point Bonfire — Chicago lakefront gathering",
    ski:          "Boyne Highlands Ski Trip — Outdoorsy Chicago winter weekend",
    cantigny:     "Cantigny Park — DuPage County outdoor destination near Chicago"
  },

  // ── FAQ schema (home page) ───────────────────────────────
  faqs: [
    { q: "What is Outdoorsy Chicago?", a: "Outdoorsy Chicago is a community of 300+ Chicagoans in their 20s and 30s who organize outdoor adventures together — including hiking, kayaking, camping, cycling, and day trips to places like Indiana Dunes and Starved Rock State Park." },
    { q: "How do I join Outdoorsy Chicago?", a: "You can join by filling out the form at outdoorsychicago.com. Events are also posted on the group's Meetup.com page and Google Calendar." },
    { q: "What outdoor activities does Outdoorsy Chicago do?", a: "The group organizes hiking and trail walks, kayaking on the Chicago River and Lake Michigan, camping weekends, cycling trips, lakefront bonfires, Indiana Dunes day trips, and stargazing getaways." },
    { q: "Is Outdoorsy Chicago free to join?", a: "Yes, joining the Outdoorsy Chicago community is free. Individual events may have their own costs depending on the activity." },
    { q: "What is the OutDozen challenge?", a: "The OutDozen is Outdoorsy Chicago's bucket list challenge — 12 outdoor experiences to complete across Chicago and the surrounding region, including camping, kayaking, and hiking iconic local spots." }
  ]
};

if (typeof window !== "undefined") window.SEO = SEO;
if (typeof module !== "undefined") module.exports = SEO;
