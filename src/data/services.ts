import {
  Code2,
  Wrench,
  FlaskConical,
  Headphones,
  LineChart,
  Cloud,
  Database,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  whatWeDeliver: string[];
  useCases: string[];
  approach: { title: string; body: string }[];
  benefits: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    subtitle: "Enterprise-grade product engineering in .NET, Java and Python.",
    icon: Code2,
    overview:
      "End-to-end product development for banks, insurers and enterprise clients — from architecture design to production release. We build scalable, secure applications tailored to your business requirements.",
    whatWeDeliver: [
      "Core banking and insurance product modules",
      "Web and enterprise application platforms",
      "Microservices and API-first architectures",
      "Secure integrations with regulatory and payment networks",
      "Modernization of legacy systems on .NET, Java and Python stacks",
    ],
    useCases: [
      "Policy administration systems for insurers",
      "Loan origination and credit workflow platforms",
      "Internal operations and back-office tools",
      "Customer-facing portals with high compliance standards",
    ],
    approach: [
      {
        title: "Discovery",
        body: "Requirements gathering with domain analysts embedded from day one.",
      },
      {
        title: "Design",
        body: "Solution architecture aligned to BNM, PIDM and internal governance controls.",
      },
      {
        title: "Build",
        body: "Agile squads shipping iteratively with continuous integration and QA gates.",
      },
      {
        title: "Operate",
        body: "SLA-backed production support, monitoring and enhancement cycles.",
      },
    ],
    benefits: [
      "Predictable delivery with senior engineering leadership",
      "Reduced total cost of ownership through clean architecture",
      "Faster time-to-market for regulated products",
      "Local Malaysia-based delivery with regional experience",
    ],
    related: ["application-maintenance", "testing-qa", "business-analysis"],
  },
  {
    slug: "application-maintenance",
    title: "Application Maintenance",
    subtitle: "Ongoing enhancement, tuning and support that keeps critical systems running.",
    icon: Wrench,
    overview:
      "We take ownership of your existing applications — adding features, improving performance and stabilizing production. Ideal for enterprises with growing backlogs or legacy platforms that must remain reliable.",
    whatWeDeliver: [
      "Feature additions and change requests",
      "Performance tuning and code optimization",
      "Bug triage, root-cause analysis and hotfix delivery",
      "Documentation and knowledge transfer",
      "Vendor and external partner coordination",
    ],
    useCases: [
      "Long-running banking or insurance platforms",
      "Vendor systems requiring in-house extension",
      "Enterprise applications with rising incident volume",
    ],
    approach: [
      { title: "Assessment", body: "Baseline audit of code, tickets and operational health." },
      { title: "Stabilize", body: "Reduce open defects and improve monitoring quickly." },
      { title: "Enhance", body: "Prioritized backlog with regular sprint delivery." },
      { title: "Optimize", body: "Continuous tuning and refactoring for long-term health." },
    ],
    benefits: [
      "Lower incident volumes",
      "Freed internal capacity",
      "Clear service metrics and reporting",
      "Predictable monthly investment",
    ],
    related: ["production-support", "testing-qa", "software-development"],
  },
  {
    slug: "testing-qa",
    title: "Testing & QA",
    subtitle: "Functional, regression, performance and UAT for regulated systems.",
    icon: FlaskConical,
    overview:
      "Comprehensive quality assurance across the software lifecycle. We help teams ship with confidence through disciplined test design, automation and structured UAT for banking and insurance workloads.",
    whatWeDeliver: [
      "Test strategy and test case design",
      "Manual and automated regression suites",
      "Performance and load testing",
      "SIT, UAT coordination and defect management",
      "Compliance and security-focused test scenarios",
    ],
    useCases: [
      "Core banking or claims release cycles",
      "Payment and settlement flows",
      "Digital channel launches",
      "Regulatory rollouts and go-live readiness",
    ],
    approach: [
      { title: "Plan", body: "Risk-based test strategy aligned to release scope." },
      { title: "Automate", body: "Reusable frameworks for regression and API testing." },
      { title: "Execute", body: "Traceable execution with defect governance." },
      { title: "Report", body: "Clear go/no-go signals for stakeholders." },
    ],
    benefits: [
      "Fewer production defects",
      "Faster, safer releases",
      "Objective quality reporting",
      "Reduced regression cost over time",
    ],
    related: ["software-development", "production-support", "application-maintenance"],
  },
  {
    slug: "production-support",
    title: "Production Support",
    subtitle: "L1 / L2 / L3 support with SLA-driven response for business-critical systems.",
    icon: Headphones,
    overview:
      "Dedicated production support with defined SLAs, structured incident management and permanent fix ownership. We keep revenue-critical platforms stable while your internal teams focus on strategic delivery.",
    whatWeDeliver: [
      "L1 monitoring and triage",
      "L2 incident analysis and workaround delivery",
      "L3 root-cause and permanent fixes",
      "Change management and release support",
      "Runbooks, monitoring dashboards and health reporting",
    ],
    useCases: [
      "Core banking and payment platforms",
      "Insurance policy and claims systems",
      "High-availability enterprise middleware",
    ],
    approach: [
      { title: "Onboard", body: "Knowledge transfer, runbook creation and shadow support." },
      { title: "Stabilize", body: "Reduce recurring incidents through pattern analysis." },
      { title: "Sustain", body: "Predictable SLAs and monthly service governance." },
      { title: "Improve", body: "Automation and proactive monitoring uplift." },
    ],
    benefits: [
      "Fewer outages, faster recovery",
      "Clear SLA-based accountability",
      "Structured problem management",
      "24/7 coverage options available",
    ],
    related: ["application-maintenance", "testing-qa", "cloud-migration"],
  },
  {
    slug: "business-analysis",
    title: "Business Analysis",
    subtitle: "Functional expertise that bridges business intent and technical delivery.",
    icon: LineChart,
    overview:
      "Experienced business analysts with banking and insurance domain depth — writing precise requirements, mapping processes and translating regulatory change into implementable specifications.",
    whatWeDeliver: [
      "Functional and non-functional requirement documents",
      "Process maps and user journey analysis",
      "Data mapping and integration specifications",
      "UAT planning and stakeholder facilitation",
      "Regulatory impact analysis",
    ],
    useCases: [
      "Product launches in banking or insurance",
      "System replacement and migration programs",
      "Regulatory implementation projects",
    ],
    approach: [
      { title: "Discover", body: "Stakeholder interviews and current-state mapping." },
      { title: "Define", body: "Clear, testable requirements with acceptance criteria." },
      { title: "Deliver", body: "Support engineering, QA and UAT through go-live." },
      { title: "Optimize", body: "Post-launch feedback loops and iteration." },
    ],
    benefits: [
      "Reduced rework from unclear specs",
      "Confident regulatory alignment",
      "Faster stakeholder sign-off",
      "Strong bridge between IT and business",
    ],
    related: ["software-development", "testing-qa", "data-engineering"],
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    subtitle: "Move workloads to cloud with regulatory-aware architecture.",
    icon: Cloud,
    overview:
      "We modernize infrastructure and migrate banking, insurance and enterprise workloads to Azure, AWS and hybrid environments — with attention to data sovereignty, downtime and cost optimization.",
    whatWeDeliver: [
      "Cloud readiness assessment",
      "Landing zone and network design",
      "Application refactoring and containerization",
      "Migration execution and cutover",
      "FinOps and post-migration optimization",
    ],
    useCases: [
      "Data center exit programs",
      "Modernization of on-premise banking workloads",
      "Hybrid cloud for regulated data",
      "DR and business continuity uplift",
    ],
    approach: [
      { title: "Assess", body: "Workload discovery and migration wave planning." },
      { title: "Design", body: "Compliant landing zone and security baseline." },
      { title: "Migrate", body: "Phased execution with controlled cutovers." },
      { title: "Optimize", body: "Cost, performance and resilience tuning." },
    ],
    benefits: [
      "Lower infrastructure cost",
      "Improved scalability and DR",
      "Compliant, well-governed cloud footprint",
      "Faster delivery for new products",
    ],
    related: ["software-development", "data-engineering", "production-support"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    subtitle: "Data warehouses, pipelines and analytics platforms built for scale.",
    icon: Database,
    overview:
      "We design and build modern data platforms — from ingestion pipelines to warehouses and analytics layers — enabling regulatory reporting, business intelligence and AI use cases.",
    whatWeDeliver: [
      "Data warehouse and lakehouse architecture",
      "ETL / ELT pipelines (Spark, Airflow)",
      "Data quality and governance frameworks",
      "BI dashboards and self-service analytics",
      "Foundations for ML and AI use cases",
    ],
    useCases: [
      "Regulatory reporting (BNM, LIAM, FIMM)",
      "Customer analytics and segmentation",
      "Risk and fraud analytics",
      "Executive dashboards",
    ],
    approach: [
      { title: "Model", body: "Business-aligned data models and governance." },
      { title: "Ingest", body: "Reliable pipelines from source systems." },
      { title: "Serve", body: "Curated marts for analytics and AI." },
      { title: "Govern", body: "Quality, lineage and access controls." },
    ],
    benefits: [
      "Single source of truth",
      "Faster reporting cycles",
      "AI-ready data foundation",
      "Reduced manual reconciliation",
    ],
    related: ["cloud-migration", "api-integration", "software-development"],
  },
  {
    slug: "api-integration",
    title: "API & Payment Integration",
    subtitle: "Reliable integrations across banking, payment and enterprise networks.",
    icon: Plug,
    overview:
      "Robust API design, external integrations and payment network connectivity — including RTGS, interbank GIRO, digital wallets and open banking APIs.",
    whatWeDeliver: [
      "REST and SOAP API design and delivery",
      "Payment gateway and network integrations",
      "Open Banking and TPP integration",
      "Message brokers and event-driven design",
      "API security, throttling and monitoring",
    ],
    useCases: [
      "Payment platform launches",
      "Bank–partner integrations",
      "Insurer–broker connectivity",
      "Digital wallet enablement",
    ],
    approach: [
      { title: "Design", body: "Contract-first API design with strong governance." },
      { title: "Build", body: "Secure, well-tested integrations with observability." },
      { title: "Certify", body: "Meet regulatory and partner certification requirements." },
      { title: "Operate", body: "Monitoring, alerts and SLA-based support." },
    ],
    benefits: [
      "Reliable transaction processing",
      "Faster partner onboarding",
      "Compliant, auditable integrations",
      "Reusable integration platform",
    ],
    related: ["software-development", "data-engineering", "cloud-migration"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
