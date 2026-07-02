import { Shield, Landmark, Brain, type LucideIcon } from "lucide-react";

export type Expertise = {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  capabilities: { title: string; body: string }[];
  outcomes: string[];
};

export const expertise: Expertise[] = [
  {
    slug: "insurance-technology",
    title: "Insurance Technology",
    subtitle: "Systems for general, life and group insurers across Asia-Pacific.",
    icon: Shield,
    overview:
      "We build and support insurance platforms covering underwriting, policy administration, claims, reinsurance and analytics — with proven delivery across motor, non-motor, life and group insurance lines.",
    capabilities: [
      { title: "General Insurance Systems", body: "End-to-end platforms for policy issuance, endorsements and renewals." },
      { title: "Motor & Non-Motor Underwriting", body: "Rule-driven underwriting engines with configurable rating and quotation." },
      { title: "Claims Processing", body: "Digital claims intake, assessment, adjudication and settlement workflows." },
      { title: "Reinsurance", body: "Treaty and facultative reinsurance administration and reporting." },
      { title: "Payment Processing", body: "Premium collection, refunds and settlement across multiple channels." },
      { title: "Renewal Notifications", body: "Automated, multi-channel renewal reminders and lapse management." },
      { title: "Fraud Detection & Analytics", body: "Analytics-driven fraud scoring and investigation workflows." },
      { title: "Life & Group Insurance", body: "Life Asia and group scheme administration with member self-service." },
      { title: "Regulatory Reporting", body: "Automated reports for BNM, LIAM and regional regulators." },
    ],
    outcomes: [
      "Faster policy issuance and quotation cycles",
      "Reduced claims handling time",
      "Improved loss ratio through analytics",
      "Compliant, audit-ready operations",
    ],
  },
  {
    slug: "banking-it",
    title: "Banking IT",
    subtitle: "Core banking, digital channels, payments and regulatory technology.",
    icon: Landmark,
    overview:
      "Proven delivery for banks across core systems, digital channels, payments and compliance. We combine strong engineering with deep understanding of BNM regulations and interbank infrastructure.",
    capabilities: [
      { title: "Core Banking Development", body: "Enhancements and modules for core banking platforms across account, transaction and GL." },
      { title: "Payment Gateway Integration", body: "Integration with RTGS, interbank GIRO, wallets and payment networks." },
      { title: "Mobile & Internet Banking", body: "Feature-rich digital channels with biometric authentication and real-time notifications." },
      { title: "Cybersecurity & Compliance", body: "Security assessment, vulnerability management and compliance with BNM, PCI-DSS and ISO 27001." },
      { title: "Regulatory Reporting & Analytics", body: "Automated reporting for BNM, FIMM and other regulators with real-time dashboards." },
      { title: "Data Warehouse & BI", body: "Enterprise data warehouse, ETL and business intelligence dashboards." },
      { title: "Open Banking & API Banking", body: "Design and implementation of Open Banking APIs and TPP integrations." },
      { title: "Cloud Banking", body: "Migration of banking workloads to cloud with disaster recovery and compliance." },
      { title: "AML & Fraud Management", body: "AML systems, transaction monitoring, sanctions screening and fraud analytics." },
      { title: "Microservices & API Architecture", body: "Modernization of monolithic banking systems into microservices architecture." },
      { title: "Banking Chatbots & Virtual Assistants", body: "AI-powered chatbots for customer service, account inquiries and intelligent FAQ." },
      { title: "Digital Transformation", body: "End-to-end digitalization of traditional banking processes — from paper to digital journeys." },
    ],
    outcomes: [
      "Reduced operating cost",
      "Faster product launches",
      "Stronger compliance posture",
      "Improved customer experience across channels",
    ],
  },
  {
    slug: "ai-python",
    title: "AI & Python Solutions",
    subtitle: "Machine learning, NLP and data-driven automation for financial services.",
    icon: Brain,
    overview:
      "We develop intelligent AI tools and data-driven solutions using Python — from machine learning models and NLP systems to fraud detection, predictive analytics and conversational AI tailored for banking and insurance.",
    capabilities: [
      { title: "Machine Learning Model Development", body: "Design, train and deploy supervised and unsupervised ML models for classification, regression, clustering and anomaly detection." },
      { title: "Predictive Analytics", body: "Predictive models for forecasting, churn, demand planning and risk scoring." },
      { title: "Computer Vision", body: "Image recognition, object detection, OCR and visual inspection using deep learning." },
      { title: "Natural Language Processing", body: "Text classification, sentiment analysis, NER, summarization and translation." },
      { title: "AI Chatbots & Conversational AI", body: "LLM-based chatbots for customer service, internal helpdesks and virtual assistants." },
      { title: "Recommendation Systems", body: "Personalized recommendation engines for financial products, upsell and content." },
      { title: "Fraud Detection AI", body: "Real-time fraud detection using anomaly detection, graph analysis and behavioral analytics." },
      { title: "Data Analytics & Visualization", body: "Interactive dashboards, KPI reporting and exploratory analysis with Pandas, Matplotlib, Plotly." },
      { title: "Document Intelligence", body: "Automated document processing and extraction from PDFs, forms and unstructured sources." },
      { title: "MLOps & Model Deployment", body: "End-to-end MLOps pipelines — versioning, CI/CD, monitoring and production deployment." },
      { title: "AI Workflow Automation", body: "RPA + AI to automate repetitive business tasks, approvals and processing workflows." },
      { title: "Data Engineering for AI", body: "Robust data pipelines, feature engineering, data lakes and ETL that power AI and ML applications." },
    ],
    outcomes: [
      "Higher analyst productivity",
      "Better risk and fraud detection",
      "Personalized customer experience",
      "Automation of repetitive workflows",
    ],
  },
];

export const getExpertise = (slug: string) => expertise.find((e) => e.slug === slug);
