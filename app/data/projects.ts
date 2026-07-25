import { basePath } from "./config";

export const roleFit = [
  {
    number: "01",
    title: "Ship end to end",
    text: "Translate a requirement into UI, API, data model, deployment and maintenance decisions.",
    evidence: "NUBIA AURA + OMA Digital",
  },
  {
    number: "02",
    title: "Protect business logic",
    text: "Keep validation, authorization and data integrity at trusted server and database boundaries.",
    evidence: "REST APIs + SQL + RLS",
  },
  {
    number: "03",
    title: "Build polished interfaces",
    text: "Create responsive, bilingual and accessible flows with clear feedback and recovery states.",
    evidence: "React + TypeScript + Next.js",
  },
  {
    number: "04",
    title: "Own production issues",
    text: "Diagnose defects methodically, document findings and communicate clearly across technical and customer contexts.",
    evidence: "5+ years in technical support",
  },
] as const;

export const supportingProjects = [
  {
    name: "Clinical Support Automation Lab",
    label: "Interactive product demo",
    role: "Technical Support / Automation Builder",
    text: "A privacy-first triage prototype that classifies fictional support signals, surfaces SLA risk, retrieves guidance and keeps the final decision with a human agent.",
    stack: "React | TypeScript | Support Ops | Human review",
    live: `${basePath}/support-automation-demo/`,
  },
  {
    name: "OMA Compta",
    label: "Private client product",
    role: "Full Stack Developer",
    text: "Authenticated SaaS workflows for structured accounting operations. Claims are intentionally limited because the repository is private.",
    stack: "Authentication | Dashboards | Data workflows",
    live: "https://oma-compta.vercel.app/login",
  },
  {
    name: "Cloud Cert",
    label: "Learning product",
    role: "Full Stack Developer",
    text: "A bilingual cloud-learning experience with progress tracking, quizzes and responsive dashboard patterns.",
    stack: "React | Next.js | TypeScript",
    live: "https://cloud-cert.vercel.app/",
  },
  {
    name: "n8n Cloud Deployment",
    label: "Infrastructure case",
    role: "Automation Builder / Cloud Operator",
    text: "Cloud VM provisioning, Linux configuration, DNS, Nginx, HTTPS, APIs, webhooks and deployment troubleshooting.",
    stack: "n8n | AWS | Google Cloud | Linux",
  },
  {
    name: "Python / Django",
    label: "Academic + project-based",
    role: "Backend Developer",
    text: "Models, views, forms, authentication, migrations, REST endpoints and database-backed business rules. Some client work is private.",
    stack: "Python | Django | SQL | REST APIs",
  },
] as const;
