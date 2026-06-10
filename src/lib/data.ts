export type ProjectCategory =
  | "Multi-Vendor"
  | "B2C"
  | "B2B"
  | "Custom";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Aurelia — Luxury Fashion Marketplace",
    description:
      "A multi-vendor luxury fashion platform with white-glove vendor onboarding, automated payment splits, and AI-powered visual search.",
    category: "Multi-Vendor",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Algolia", "Redis"],
    metrics: [
      { label: "GMV", value: "$240M+" },
      { label: "Vendors", value: "3,400" },
      { label: "LCP", value: "1.1s" },
    ],
    gradient: "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.45 0.12 320))",
    live: "#",
    github: "#",
  },
  {
    title: "BidHub — Electronics Marketplace",
    description:
      "Real-time bidding and auctions for refurbished electronics with sub-100ms bid propagation across a global audience.",
    category: "B2C",
    tech: ["React", "WebSockets", "Go", "Kafka", "ScyllaDB", "AWS"],
    metrics: [
      { label: "Bids/sec", value: "18K" },
      { label: "Users", value: "1.2M" },
      { label: "Uptime", value: "99.98%" },
    ],
    gradient: "linear-gradient(135deg, oklch(0.6 0.16 230), oklch(0.5 0.15 190))",
    live: "#",
    github: "#",
  },
  {
    title: "Nearby — Local Services Marketplace",
    description:
      "A Fiverr-meets-Uber marketplace pairing on-demand local pros with customers, featuring live dispatch and geo-routing.",
    category: "Multi-Vendor",
    tech: ["React Native", "NestJS", "PostGIS", "Mapbox", "RabbitMQ", "Twilio"],
    metrics: [
      { label: "Jobs/mo", value: "420K" },
      { label: "Pros", value: "58K" },
      { label: "Match time", value: "11s" },
    ],
    gradient: "linear-gradient(135deg, oklch(0.65 0.17 145), oklch(0.55 0.14 110))",
    live: "#",
    github: "#",
  },
  {
    title: "Wholesalr — B2B Wholesale Platform",
    description:
      "Enterprise B2B marketplace with tiered pricing, net-terms credit, bulk RFQ workflows, and ERP integrations.",
    category: "B2B",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Temporal", "SAP API", "Stripe"],
    metrics: [
      { label: "GMV", value: "$510M+" },
      { label: "Buyers", value: "12K" },
      { label: "AOV", value: "$8.4K" },
    ],
    gradient: "linear-gradient(135deg, oklch(0.6 0.16 60), oklch(0.5 0.14 30))",
    live: "#",
    github: "#",
  },
  {
    title: "Curate — Subscription Box Marketplace",
    description:
      "A custom recurring-commerce engine letting curators launch subscription boxes with dynamic bundling and churn analytics.",
    category: "Custom",
    tech: ["Remix", "Node.js", "Prisma", "Stripe Billing", "ClickHouse", "Vercel"],
    metrics: [
      { label: "MRR", value: "$6.8M" },
      { label: "Subscribers", value: "310K" },
      { label: "Churn", value: "2.1%" },
    ],
    gradient: "linear-gradient(135deg, oklch(0.58 0.18 300), oklch(0.5 0.15 270))",
    live: "#",
    github: "#",
  },
];

export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "Multi-Vendor",
  "B2C",
  "B2B",
  "Custom",
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Go", "GraphQL", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    title: "Marketplace Systems",
    skills: ["Stripe Connect", "Payment Splits", "Search & Ranking", "Fraud Detection", "Real-time Bidding", "Geo Dispatch"],
  },
  {
    title: "DevOps & Scale",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Observability"],
  },
];

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

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "He took our marketplace from a fragile MVP to a platform processing nine figures in GMV. Rare combination of systems depth and product sense.",
    name: "Sofia Marchetti",
    title: "CEO, Aurelia Commerce",
  },
  {
    quote:
      "The real-time bidding engine he architected is still the backbone of our business. Bulletproof under load.",
    name: "Daniel Okafor",
    title: "CTO, BidHub",
  },
  {
    quote:
      "Few engineers truly understand marketplace dynamics. He does — payments, trust, search, logistics. He delivered all of it.",
    name: "Yara Haddad",
    title: "VP Engineering, Nearby",
  },
];
