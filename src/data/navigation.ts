export type NavChild = { label: string; to: string; params?: Record<string, string> };
export type NavItem = {
  label: string;
  to: string;
  params?: Record<string, string>;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Software Development",
        to: "/services/$slug",
        params: { slug: "software-development" },
      },
      {
        label: "Application Maintenance",
        to: "/services/$slug",
        params: { slug: "application-maintenance" },
      },
      { label: "Testing & QA", to: "/services/$slug", params: { slug: "testing-qa" } },
      {
        label: "Production Support",
        to: "/services/$slug",
        params: { slug: "production-support" },
      },
      { label: "Business Analysis", to: "/services/$slug", params: { slug: "business-analysis" } },
      { label: "Cloud Migration", to: "/services/$slug", params: { slug: "cloud-migration" } },
      { label: "Data Engineering", to: "/services/$slug", params: { slug: "data-engineering" } },
      {
        label: "API & Payment Integration",
        to: "/services/$slug",
        params: { slug: "api-integration" },
      },
    ],
  },
  {
    label: "Expertise",
    to: "/expertise",
    children: [
      {
        label: "Insurance Technology",
        to: "/expertise/$slug",
        params: { slug: "insurance-technology" },
      },
      { label: "Banking IT", to: "/expertise/$slug", params: { slug: "banking-it" } },
      { label: "AI & Python", to: "/expertise/$slug", params: { slug: "ai-python" } },
    ],
  },
  { label: "Training", to: "/training" },
  {
    label: "Courses",
    to: "/courses",
    children: [
      { label: "HTD Model Courses", to: "/courses/$slug", params: { slug: "htd-model-courses" } },
      { label: "Upskill Training", to: "/courses/$slug", params: { slug: "upskill-training" } },
      { label: "AI & ML", to: "/courses/$slug", params: { slug: "ai-ml" } },
      {
        label: "Data Engineering & Cloud",
        to: "/courses/$slug",
        params: { slug: "data-engineering-cloud" },
      },
      {
        label: "Software Testing & QA",
        to: "/courses/$slug",
        params: { slug: "software-testing-qa" },
      },
      { label: "Azure Engineer", to: "/courses/$slug", params: { slug: "azure-engineer" } },
      { label: "DBA", to: "/courses/$slug", params: { slug: "dba" } },
      { label: "Agile", to: "/courses/$slug", params: { slug: "agile" } },
      { label: "Cloud Computing", to: "/courses/$slug", params: { slug: "cloud-computing" } },
      { label: "Cybersecurity", to: "/courses/$slug", params: { slug: "cybersecurity" } },
      { label: "Data Analytics", to: "/courses/$slug", params: { slug: "data-analytics" } },
    ],
  },
  { label: "Talent & Staffing", to: "/talent-staffing" },
  { label: "Contact", to: "/contact" },
];
