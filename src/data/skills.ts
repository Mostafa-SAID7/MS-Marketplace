export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native", "RxJS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "C#", "ASP.NET Core", "GraphQL", "PostgreSQL", "MongoDB", "SQL Server", "Redis", "Kafka"],
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
