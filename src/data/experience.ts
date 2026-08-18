export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Principal Engineer & Marketplace Architect",
    company: "Aurelia Commerce",
    period: "2021 — Present",
    points: [
      "Led the rebuild of a multi-vendor platform powering $240M+ annual GMV.",
      "Designed payment-split and payout infrastructure on Stripe Connect.",
      "Cut p95 search latency by 73% with a custom Algolia ranking layer.",
    ],
  },
  {
    role: "Staff Full-Stack Engineer",
    company: "BidHub",
    period: "2018 — 2021",
    points: [
      "Built a real-time auction engine handling 18K bids/sec.",
      "Scaled WebSocket infrastructure to 1.2M concurrent users.",
      "Introduced event-driven architecture with Kafka and Go.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Nearby",
    period: "2015 — 2018",
    points: [
      "Shipped geo-dispatch matching pros to jobs in under 11 seconds.",
      "Owned the mobile marketplace app from zero to 58K active pros.",
    ],
  },
];
