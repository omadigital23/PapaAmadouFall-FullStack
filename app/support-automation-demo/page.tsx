import type { Metadata } from "next";
import SupportAutomationDemo from "./support-automation-demo";

export const metadata: Metadata = {
  title: "Clinical Support Automation Demo | Papa Amadou Fall",
  description:
    "Interactive technical-support triage demo showing classification, SLA risk, knowledge retrieval, response drafting and human review using fictional data.",
};

export default function SupportAutomationDemoPage() {
  return <SupportAutomationDemo />;
}
