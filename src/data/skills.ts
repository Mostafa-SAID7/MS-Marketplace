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
    skills: [
      "Stripe Connect",
      "Payment Splits",
      "Search & Ranking",
      "Fraud Detection",
      "Real-time Bidding",
      "Geo Dispatch",
    ],
  },
  {
    title: "DevOps & Scale",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Observability"],
  },
];
