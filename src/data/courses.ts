export type Course = {
  slug: string;
  category: "htd" | "upskill" | "collection";
  title: string;
  tagline: string;
  duration: string;
  modules: number;
  format: string;
  overview: string;
  topics: string[];
  prerequisites: string[];
  outcomes: string[];
  audience: string[];
};

export const courses: Course[] = [
  {
    slug: "htd-model-courses",
    category: "collection",
    title: "HTD Model Courses",
    tagline: "Hire-Train-Deploy programs for rapid skill acquisition and immediate deployment.",
    duration: "8–12 weeks",
    modules: 5,
    format: "Full-time cohort · Hands-on projects",
    overview:
      "Hire-Train-Deploy model courses are intensive, structured programs designed to build production-ready skills fast. Each course combines lectures, hands-on labs and capstone projects, preparing candidates for immediate deployment on client engagements.",
    topics: [
      "AI & ML",
      "Data Engineering & Cloud",
      "Software Testing & QA",
      "Azure Engineer",
      "DBA",
    ],
    prerequisites: [
      "Degree or diploma in IT / STEM",
      "Basic programming background",
      "Commitment to full-time schedule",
    ],
    outcomes: [
      "Job-ready in a specialized track",
      "Portfolio of hands-on projects",
      "Placement support with hiring partners",
    ],
    audience: ["Recent graduates", "Career switchers into IT", "Employers seeking trained talent"],
  },
  {
    slug: "upskill-training",
    category: "collection",
    title: "Upskill Training Courses",
    tagline: "Short, flexible courses for working professionals advancing their careers.",
    duration: "1–5 days",
    modules: 4,
    format: "Weekday / weekend · In-person or virtual",
    overview:
      "Upskill training courses are compact, practical programs for professionals who need targeted skill uplift. Delivered by industry practitioners with hands-on labs and real-world scenarios.",
    topics: [
      "Agile",
      "AI & Machine Learning",
      "Cloud Computing",
      "Cybersecurity",
      "Data Analytics",
    ],
    prerequisites: ["IT or engineering background", "Basic familiarity with software delivery"],
    outcomes: [
      "Applied skills you can use immediately",
      "Certification of completion",
      "Access to trainer follow-up",
    ],
    audience: ["Working software professionals", "Corporate L&D teams", "HRDC-eligible companies"],
  },
  {
    slug: "ai-ml",
    category: "htd",
    title: "AI & ML",
    tagline: "Master artificial intelligence and machine learning fundamentals.",
    duration: "8–12 weeks",
    modules: 5,
    format: "Full-time · Hands-on projects",
    overview:
      "Intensive hands-on training in machine learning, deep learning and applied AI — building production-grade models in Python across supervised, unsupervised and NLP techniques.",
    topics: [
      "Python for ML",
      "Supervised & Unsupervised Learning",
      "Deep Learning with TensorFlow / PyTorch",
      "NLP & LLM Basics",
      "MLOps & Deployment",
    ],
    prerequisites: ["Basic Python", "Statistics fundamentals", "Linear algebra basics"],
    outcomes: [
      "Build and deploy ML models end-to-end",
      "Portfolio of ML projects",
      "Ready for junior ML engineer / data scientist roles",
    ],
    audience: [
      "Fresh graduates in IT / engineering / math",
      "Developers moving into AI",
      "Analysts advancing to ML",
    ],
  },
  {
    slug: "data-engineering-cloud",
    category: "htd",
    title: "Data Engineering & Cloud Solutions",
    tagline: "Build scalable data pipelines and cloud-based data platforms.",
    duration: "8–12 weeks",
    modules: 6,
    format: "Full-time · Cloud labs",
    overview:
      "Learn to design, build and operate modern data platforms using Python, Spark and cloud services (Azure, AWS). Ideal for engineers moving into data-focused roles.",
    topics: [
      "Python & SQL",
      "Spark & Databricks",
      "Data Warehousing",
      "ETL / ELT Pipelines",
      "Cloud Storage & Compute",
      "Data Governance",
    ],
    prerequisites: ["Basic programming", "SQL basics"],
    outcomes: [
      "Design and build data pipelines",
      "Deploy cloud data platforms",
      "Ready for data engineer roles",
    ],
    audience: [
      "Graduates in IT / CS",
      "Developers transitioning to data",
      "Analysts moving into engineering",
    ],
  },
  {
    slug: "software-testing-qa",
    category: "htd",
    title: "Software Testing & QA Engineering",
    tagline: "Comprehensive testing methodologies and automation.",
    duration: "8–12 weeks",
    modules: 5,
    format: "Full-time · Real-project labs",
    overview:
      "Become a professional QA engineer with strong test design, automation and defect management skills — trained on real banking and insurance test scenarios.",
    topics: [
      "Test Design & Strategy",
      "Manual & Exploratory Testing",
      "Selenium / Playwright Automation",
      "API Testing",
      "Performance Testing",
    ],
    prerequisites: ["Basic programming knowledge", "Analytical mindset"],
    outcomes: [
      "Design and execute test suites",
      "Automate regression tests",
      "Manage defects and reporting",
    ],
    audience: ["Graduates seeking QA careers", "Manual testers becoming automation engineers"],
  },
  {
    slug: "azure-engineer",
    category: "htd",
    title: "Azure Engineer",
    tagline: "Azure cloud infrastructure and application deployment.",
    duration: "8–12 weeks",
    modules: 6,
    format: "Full-time · Hands-on cloud labs",
    overview:
      "Become a certified-ready Azure engineer with hands-on infrastructure, networking and application deployment on Microsoft Azure.",
    topics: [
      "Azure Compute & Storage",
      "Networking & Identity",
      "Azure DevOps & CI/CD",
      "Containers & AKS",
      "Monitoring & Governance",
      "Certification Prep",
    ],
    prerequisites: ["Basic IT / networking familiarity"],
    outcomes: [
      "Deploy production workloads on Azure",
      "Design secure cloud architectures",
      "Ready for AZ-104 / AZ-204 certifications",
    ],
    audience: ["IT graduates", "Sysadmins moving to cloud", "Developers going cloud-native"],
  },
  {
    slug: "dba",
    category: "htd",
    title: "Database Administration",
    tagline: "Database administration with SQL Server, Oracle and PostgreSQL.",
    duration: "8–12 weeks",
    modules: 4,
    format: "Full-time · Lab-based",
    overview:
      "Master database administration on major enterprise databases — including installation, backup, performance tuning, security and high availability.",
    topics: [
      "SQL Server Administration",
      "Oracle DBA",
      "PostgreSQL Administration",
      "Backup & Recovery, HA/DR",
    ],
    prerequisites: ["SQL basics", "Basic OS familiarity"],
    outcomes: [
      "Administer production databases",
      "Design HA/DR strategies",
      "Ready for junior DBA roles",
    ],
    audience: ["Graduates in IT", "Developers moving to database roles"],
  },
  {
    slug: "agile",
    category: "upskill",
    title: "Agile",
    tagline: "Scrum, Kanban and modern agile delivery practices.",
    duration: "1–5 days",
    modules: 4,
    format: "In-person or virtual",
    overview:
      "Learn to lead and participate in agile teams effectively — covering Scrum, Kanban, backlog management and scaled agile frameworks used in banking and insurance delivery.",
    topics: ["Scrum Framework", "Kanban", "Backlog & Estimation", "Scaled Agile Basics"],
    prerequisites: ["Some experience in software or program delivery"],
    outcomes: [
      "Facilitate agile ceremonies",
      "Manage backlog and delivery flow",
      "Improve team throughput",
    ],
    audience: ["Project managers", "Business analysts", "Team leads and developers"],
  },
  {
    slug: "cloud-computing",
    category: "upskill",
    title: "Cloud Computing",
    tagline: "Foundational cloud concepts across AWS, Azure and GCP.",
    duration: "1–5 days",
    modules: 6,
    format: "In-person or virtual",
    overview:
      "Understand cloud fundamentals, service models and architecture patterns across major providers — with practical labs covering compute, storage, networking and identity.",
    topics: [
      "Cloud Fundamentals",
      "Compute & Storage",
      "Networking & Security",
      "Identity & Access",
      "Serverless & Containers",
      "Cost Optimization",
    ],
    prerequisites: ["Basic IT familiarity"],
    outcomes: ["Speak fluently on cloud architecture", "Design entry-level cloud solutions"],
    audience: ["IT professionals", "Solution architects starting cloud journey"],
  },
  {
    slug: "cybersecurity",
    category: "upskill",
    title: "Cybersecurity",
    tagline: "Security fundamentals for enterprise and financial services.",
    duration: "1–5 days",
    modules: 6,
    format: "In-person or virtual",
    overview:
      "Practical cybersecurity training covering threat models, controls, secure development and compliance requirements relevant to banking and insurance environments.",
    topics: [
      "Security Fundamentals",
      "Threats & Vulnerabilities",
      "Secure Development",
      "Identity & Access",
      "Incident Response",
      "Compliance (BNM, ISO 27001, PCI-DSS)",
    ],
    prerequisites: ["Basic IT background"],
    outcomes: ["Identify and mitigate common threats", "Support compliance initiatives"],
    audience: ["IT professionals", "Developers", "Compliance and audit teams"],
  },
  {
    slug: "data-analytics",
    category: "upskill",
    title: "Data Analytics",
    tagline: "SQL, Python and BI tools for business analytics.",
    duration: "1–5 days",
    modules: 5,
    format: "In-person or virtual",
    overview:
      "Learn to explore, analyze and visualize business data using SQL, Python and modern BI tools — building dashboards and insights teams can act on.",
    topics: [
      "SQL for Analytics",
      "Python & Pandas",
      "Data Visualization",
      "Dashboards with Power BI / Tableau",
      "Storytelling with Data",
    ],
    prerequisites: ["Comfort with spreadsheets", "Basic math and logic"],
    outcomes: ["Analyze data confidently", "Build and share dashboards"],
    audience: ["Analysts", "Operations and finance professionals", "Product managers"],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const htdCourses = () => courses.filter((c) => c.category === "htd");
export const upskillCourses = () => courses.filter((c) => c.category === "upskill");
