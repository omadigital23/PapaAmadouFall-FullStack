"use client";

import { useMemo, useState } from "react";
import styles from "./support-automation-demo.module.css";

const basePath = "/PapaAmadouFall-FullStack";

type Priority = "Critical" | "High" | "Normal" | "Low";
type Category =
  | "Access & identity"
  | "Clinical workflow"
  | "Billing"
  | "Integration"
  | "General guidance";

type TicketAnalysis = {
  category: Category;
  priority: Priority;
  confidence: number;
  intent: string;
  route: string;
  sla: string;
  knowledge: string;
  flags: string[];
  steps: string[];
  draft: string;
};

const samples = [
  {
    label: "Access outage",
    channel: "Phone",
    text: "Three clinicians at our clinic cannot open patient charts after a password reset. Appointments begin in 20 minutes and the issue affects every workstation.",
  },
  {
    label: "Lab integration",
    channel: "Email",
    text: "Lab results have not appeared in the clinical platform since 8:00 AM. The problem seems to affect the whole clinic, but other parts of the application are working.",
  },
  {
    label: "Billing question",
    channel: "Chat",
    text: "Our latest invoice appears to include the monthly subscription twice. Could someone review the duplicate charge and explain the next steps?",
  },
  {
    label: "Workflow guidance",
    channel: "Chat",
    text: "How can I change the default time used for appointment reminders? This is not urgent, but I would like to update it before next week.",
  },
] as const;

const priorityRank: Record<Priority, number> = {
  Critical: 4,
  High: 3,
  Normal: 2,
  Low: 1,
};

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function buildAnalysis(ticket: string): TicketAnalysis {
  const normalized = ticket.toLowerCase();

  let category: Category = "General guidance";
  let confidence = 74;

  if (
    includesAny(normalized, [
      "password",
      "log in",
      "login",
      "locked",
      "access",
      "identity",
      "authentication",
    ])
  ) {
    category = "Access & identity";
    confidence = 96;
  } else if (
    includesAny(normalized, [
      "lab",
      "integration",
      "sync",
      "interface",
      "api",
      "results",
    ])
  ) {
    category = "Integration";
    confidence = 93;
  } else if (
    includesAny(normalized, [
      "invoice",
      "charge",
      "billing",
      "payment",
      "subscription",
      "refund",
    ])
  ) {
    category = "Billing";
    confidence = 94;
  } else if (
    includesAny(normalized, [
      "chart",
      "appointment",
      "reminder",
      "clinical",
      "prescription",
      "patient",
    ])
  ) {
    category = "Clinical workflow";
    confidence = 88;
  }

  let priority: Priority = "Normal";
  if (
    includesAny(normalized, [
      "cannot open patient",
      "every workstation",
      "whole clinic",
      "all users",
      "outage",
      "down",
      "appointments begin",
      "patient safety",
    ])
  ) {
    priority = "Critical";
  } else if (
    includesAny(normalized, [
      "urgent",
      "multiple users",
      "since 8:00",
      "not appeared",
      "duplicate charge",
    ])
  ) {
    priority = "High";
  } else if (includesAny(normalized, ["not urgent", "next week", "how can i"])) {
    priority = "Low";
  }

  const containsSensitiveContext = includesAny(normalized, [
    "patient",
    "chart",
    "clinical",
    "prescription",
    "lab result",
  ]);

  const flags = [
    ...(containsSensitiveContext
      ? ["Potential health information: use approved systems only"]
      : []),
    ...(priorityRank[priority] >= 3
      ? ["Human review required before any customer-facing action"]
      : []),
    ...(category === "Access & identity"
      ? ["Verify requester identity before account changes"]
      : []),
  ];

  const categoryDetails: Record<
    Category,
    Pick<TicketAnalysis, "intent" | "route" | "knowledge" | "steps" | "draft">
  > = {
    "Access & identity": {
      intent: "Restore authorized access without bypassing identity controls",
      route: "Identity support · Tier 2 on-call",
      knowledge: "KB-104 · Secure access recovery and clinic-wide access checks",
      steps: [
        "Confirm the requester through the approved verification workflow",
        "Check service health and the scope of affected users",
        "Separate account recovery from a possible clinic-wide incident",
        "Escalate with timestamps, affected roles and troubleshooting evidence",
      ],
      draft:
        "Hello, thank you for reporting this. I understand that several clinicians cannot access patient charts shortly before scheduled appointments. I am treating this as a high-impact access issue. Before making any account changes, I will complete the approved identity-verification step and check whether a broader service incident is active. I will keep you updated while the issue is escalated to our identity support team.",
    },
    Integration: {
      intent: "Determine whether delayed clinical data is local or systemic",
      route: "Integrations support · Incident review",
      knowledge: "KB-227 · Delayed inbound results and interface health",
      steps: [
        "Confirm the source system and the timestamp of the last received result",
        "Check integration health and current incident notices",
        "Collect non-sensitive identifiers approved for troubleshooting",
        "Escalate systemic delays with a concise impact summary",
      ],
      draft:
        "Hello, thank you for the detailed report. I understand that lab results have been delayed since this morning while the rest of the platform remains available. I will first check the integration status and current incident notices, then confirm the last successful transmission time. Please avoid sending patient details in this channel; I will provide the approved secure method if additional identifiers are required.",
    },
    Billing: {
      intent: "Validate a suspected duplicate charge and explain the review process",
      route: "Billing operations",
      knowledge: "KB-318 · Subscription invoice review and duplicate-charge workflow",
      steps: [
        "Verify the organization and invoice through the approved workflow",
        "Compare invoice line items with the active subscription",
        "Open a billing review without promising an unapproved refund",
        "Give the customer a reference number and documented next step",
      ],
      draft:
        "Hello, thank you for bringing this invoice concern to our attention. I understand that the monthly subscription may have been charged twice. I will review the invoice line items against the active subscription and open a billing investigation if a duplicate is confirmed. I will provide a case reference and the next step after the review; I will not make any billing change until the account has been verified.",
    },
    "Clinical workflow": {
      intent: "Guide the user through a configuration change safely",
      route: "Workflow support",
      knowledge: "KB-412 · Appointment reminder configuration",
      steps: [
        "Confirm the requested workflow and user permission level",
        "Retrieve the current configuration procedure",
        "Explain the change and its scope before applying it",
        "Confirm the expected result and offer a rollback path",
      ],
      draft:
        "Hello, I can help you review the appointment-reminder setting. Before changing it, I will confirm your permission level and whether the update should apply to one provider or the entire practice. I will then guide you through the approved configuration steps and help you verify the result.",
    },
    "General guidance": {
      intent: "Clarify the request and route it efficiently",
      route: "General support queue",
      knowledge: "KB search · More context required",
      steps: [
        "Acknowledge the request and summarize the known issue",
        "Ask one focused question to identify the affected workflow",
        "Search approved documentation using the clarified intent",
        "Resolve or route with all relevant context attached",
      ],
      draft:
        "Hello, thank you for contacting support. I want to make sure I understand the issue correctly before suggesting a solution. Could you confirm which part of the platform you are using, what you expected to happen, and the message you currently see? Please do not include patient information in your reply.",
    },
  };

  const details = categoryDetails[category];
  const sla =
    priority === "Critical"
      ? "Immediate acknowledgement · 15 min review"
      : priority === "High"
        ? "15 min acknowledgement · 1 hr review"
        : priority === "Normal"
          ? "4 business hr acknowledgement"
          : "1 business day acknowledgement";

  return {
    category,
    priority,
    confidence,
    sla,
    flags,
    ...details,
  };
}

function Icon({ name }: { name: "spark" | "shield" | "route" | "check" }) {
  const paths = {
    spark: <path d="m12 2 1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Zm7 12 .8 2.4L22 17l-2.2.6L19 20l-.8-2.4L16 17l2.2-.6L19 14Z" />,
    shield: <path d="M12 2 4.5 5v5.7c0 4.8 3.2 9.2 7.5 10.6 4.3-1.4 7.5-5.8 7.5-10.6V5L12 2Zm-1 13-3-3 1.4-1.4 1.6 1.6 3.8-3.8 1.4 1.4L11 15Z" />,
    route: <path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v2a6 6 0 0 0 6 6h3m0 0-2.5-2.5M15 17l-2.5 2.5" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export default function SupportAutomationDemo() {
  const [ticket, setTicket] = useState<string>(samples[0].text);
  const [channel, setChannel] = useState<string>(samples[0].channel);
  const [analysis, setAnalysis] = useState<TicketAnalysis | null>(null);
  const [reviewState, setReviewState] = useState<"Waiting" | "Reviewed" | "Escalated">("Waiting");
  const [activity, setActivity] = useState<string[]>([
    "Demo ready — no customer or patient data loaded",
  ]);

  const ticketLength = ticket.trim().length;
  const canAnalyze = ticketLength >= 20;

  const queueMetrics = useMemo(
    () => [
      ["124", "Open cases"],
      ["07", "At SLA risk"],
      ["38%", "Automation assist"],
      ["2m 14s", "First response"],
    ],
    [],
  );

  function loadSample(index: number) {
    const sample = samples[index];
    setTicket(sample.text);
    setChannel(sample.channel);
    setAnalysis(null);
    setReviewState("Waiting");
    setActivity((items) => [`Loaded fictional sample: ${sample.label}`, ...items].slice(0, 5));
  }

  function analyzeTicket() {
    if (!canAnalyze) return;
    const nextAnalysis = buildAnalysis(ticket);
    setAnalysis(nextAnalysis);
    setReviewState("Waiting");
    setActivity((items) => [
      `${nextAnalysis.priority} priority · routed to ${nextAnalysis.route}`,
      `Intent classified with ${nextAnalysis.confidence}% rule confidence`,
      ...items,
    ].slice(0, 5));
  }

  function updateReview(next: "Reviewed" | "Escalated") {
    if (!analysis) return;
    setReviewState(next);
    setActivity((items) => [
      next === "Reviewed"
        ? "Draft marked ready for agent editing — nothing sent"
        : `Case escalated to ${analysis.route}`,
      ...items,
    ].slice(0, 5));
  }

  return (
    <main className={styles.appShell}>
      <header className={styles.topbar}>
        <a className={styles.brand} href={`${basePath}/`} aria-label="Return to Papa Amadou Fall portfolio">
          PAF<span>·</span>LAB
        </a>
        <div className={styles.environment}>
          <span /> Safe demo environment
        </div>
        <a className={styles.backLink} href={`${basePath}/`}>
          Back to portfolio ↗
        </a>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Clinical support automation · Interactive prototype</p>
          <h1>Turn support signals into safe, reviewable action.</h1>
          <p className={styles.heroCopy}>
            A deterministic product demo for triage, knowledge retrieval, response drafting and human escalation. It illustrates how automation can reduce repetitive work without removing judgment from sensitive support.
          </p>
        </div>
        <aside className={styles.safetyCard}>
          <Icon name="shield" />
          <div>
            <strong>Privacy by design</strong>
            <p>Fictional data only. No API calls, model inference, storage or transmission.</p>
          </div>
        </aside>
      </section>

      <section className={styles.metrics} aria-label="Illustrative queue metrics">
        {queueMetrics.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
        <p>Illustrative metrics</p>
      </section>

      <section className={styles.workspace}>
        <div className={styles.inputColumn}>
          <div className={styles.panelHeading}>
            <div>
              <p>01 · Intake</p>
              <h2>Customer signal</h2>
            </div>
            <span className={styles.channel}>{channel}</span>
          </div>

          <div className={styles.sampleGrid} aria-label="Fictional ticket examples">
            {samples.map((sample, index) => (
              <button key={sample.label} type="button" onClick={() => loadSample(index)}>
                <span>0{index + 1}</span>
                {sample.label}
              </button>
            ))}
          </div>

          <label className={styles.ticketField}>
            <span>Fictional ticket text</span>
            <textarea
              value={ticket}
              onChange={(event) => {
                setTicket(event.target.value);
                setAnalysis(null);
                setReviewState("Waiting");
              }}
              rows={9}
              spellCheck="true"
            />
          </label>

          <div className={styles.inputFooter}>
            <span>{ticketLength} characters · local processing</span>
            <button type="button" disabled={!canAnalyze} onClick={analyzeTicket}>
              <Icon name="spark" /> Analyze ticket
            </button>
          </div>

          <div className={styles.flowCard}>
            <p>Automation boundary</p>
            <ol>
              <li><span>1</span>Classify</li>
              <li><span>2</span>Retrieve</li>
              <li><span>3</span>Draft</li>
              <li><span>4</span>Human review</li>
            </ol>
          </div>
        </div>

        <div className={styles.outputColumn}>
          <div className={styles.panelHeading}>
            <div>
              <p>02 · Decision support</p>
              <h2>Agent workspace</h2>
            </div>
            <span className={`${styles.reviewBadge} ${styles[reviewState.toLowerCase()]}`}>
              {reviewState}
            </span>
          </div>

          {!analysis ? (
            <div className={styles.emptyState}>
              <Icon name="route" />
              <h3>Ready for a support signal</h3>
              <p>Choose a fictional example or enter your own synthetic ticket, then run the local triage flow.</p>
            </div>
          ) : (
            <div className={styles.results} aria-live="polite">
              <div className={styles.resultSummary}>
                <div>
                  <span>Category</span>
                  <strong>{analysis.category}</strong>
                </div>
                <div>
                  <span>Priority</span>
                  <strong className={styles[`priority${analysis.priority}`]}>{analysis.priority}</strong>
                </div>
                <div>
                  <span>Rule confidence</span>
                  <strong>{analysis.confidence}%</strong>
                </div>
              </div>

              <article className={styles.intentCard}>
                <p>Detected intent</p>
                <h3>{analysis.intent}</h3>
                <dl>
                  <div><dt>Route</dt><dd>{analysis.route}</dd></div>
                  <div><dt>SLA target</dt><dd>{analysis.sla}</dd></div>
                  <div><dt>Knowledge</dt><dd>{analysis.knowledge}</dd></div>
                </dl>
              </article>

              {analysis.flags.length > 0 && (
                <article className={styles.guardrailCard}>
                  <div><Icon name="shield" /><strong>Guardrails triggered</strong></div>
                  <ul>
                    {analysis.flags.map((flag) => <li key={flag}>{flag}</li>)}
                  </ul>
                </article>
              )}

              <article className={styles.stepsCard}>
                <p>Recommended investigation</p>
                <ol>
                  {analysis.steps.map((step, index) => (
                    <li key={step}><span>0{index + 1}</span>{step}</li>
                  ))}
                </ol>
              </article>

              <article className={styles.draftCard}>
                <div>
                  <p>Suggested response</p>
                  <span>Requires human editing</span>
                </div>
                <blockquote>{analysis.draft}</blockquote>
                <div className={styles.reviewActions}>
                  <button type="button" onClick={() => updateReview("Reviewed")}>
                    <Icon name="check" /> Mark reviewed
                  </button>
                  <button type="button" onClick={() => updateReview("Escalated")}>
                    Escalate case ↗
                  </button>
                </div>
                <small>No message is sent from this demonstration.</small>
              </article>
            </div>
          )}
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <article className={styles.activityCard}>
          <div className={styles.panelHeading}>
            <div><p>03 · Auditability</p><h2>Activity log</h2></div>
          </div>
          <ul>
            {activity.map((item, index) => (
              <li key={`${item}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.architectureCard}>
          <p>Prototype architecture</p>
          <h2>Built to explain the system, not imitate intelligence.</h2>
          <div>
            <span>React state</span>
            <span>Typed rules</span>
            <span>Local-only data</span>
            <span>Human control</span>
          </div>
          <p className={styles.architectureNote}>
            A production version would add authenticated APIs, an approved knowledge base, audit storage, role-based access and monitored integrations.
          </p>
        </article>
      </section>

      <footer className={styles.footer}>
        <p>Designed and built by Papa Amadou Fall · Technical support × automation</p>
        <p>Educational prototype · Not affiliated with any healthcare provider</p>
      </footer>
    </main>
  );
}
