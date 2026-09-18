export type Ranking = {
  rank: number;
  name: string;
  description: string;
  category: string;
  age: string;
  clicks: number;
  value: number;
  accent: string;
  url: string;
};

export const demoAnalytics = {
  onlineNow: 24,
  visitorsToday: 1284,
};

export const categories = [
  "All",
  "AI",
  "AI Agents",
  "Startups",
  "Marketing",
  "Productivity",
  "Developer",
  "Design",
  "Education",
  "Business",
  "Finance",
  "Other",
] as const;

export type Category = (typeof categories)[number];

export const rankings: Ranking[] = [
  {
    rank: 1,
    name: "KitePilot",
    description: "Your calm, capable AI teammate for everyday work.",
    category: "AI Agents",
    age: "3 days ago",
    clicks: 18420,
    value: 15000,
    accent: "#dce9ff",
    url: "https://kitepilot.in",
  },
  {
    rank: 2,
    name: "VibeCode",
    description: "Ship polished websites and apps using natural language.",
    category: "Developer",
    age: "1 week ago",
    clicks: 14791,
    value: 12500,
    accent: "#e8e2ff",
    url: "https://vibecode.in",
  },
  {
    rank: 3,
    name: "LocalKart",
    description: "A smarter way to discover trusted local businesses.",
    category: "Startups",
    age: "2 weeks ago",
    clicks: 12165,
    value: 10000,
    accent: "#dff5ed",
    url: "https://localkart.in",
  },
  {
    rank: 4,
    name: "AutoFlow",
    description: "Automate repetitive business tasks without the busywork.",
    category: "Business",
    age: "2 weeks ago",
    clicks: 10865,
    value: 8500,
    accent: "#fff0d7",
    url: "https://autoflow.in",
  },
  {
    rank: 5,
    name: "StudyStack",
    description: "Learning tools that help students study with confidence.",
    category: "Education",
    age: "3 weeks ago",
    clicks: 9635,
    value: 7000,
    accent: "#f9dfeb",
    url: "https://studystack.in",
  },
  {
    rank: 6,
    name: "MarketMint",
    description: "Simple marketing intelligence for growing businesses.",
    category: "Marketing",
    age: "1 month ago",
    clicks: 7214,
    value: 5000,
    accent: "#dff3f5",
    url: "https://marketmint.in",
  },
];

export const todayRankings = rankings.slice(0, 5).map((ranking, index) => ({
  ...ranking,
  value: [500, 400, 300, 250, 200][index],
}));

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatCount(value: number) {
  return value.toLocaleString("en-IN");
}
