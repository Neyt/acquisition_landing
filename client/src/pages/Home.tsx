import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Professional Trust-Building Minimalism
 * - Deep slate blue (#1e3a5f) for professionalism and trust
 * - Warm amber (#d97706) accents for CTAs and key information
 * - Clean typography with Playfair Display for headlines, Inter for body
 * - Asymmetric layout with strategic whitespace and left-aligned content
 * - Numbered steps, credibility badges, and subtle accent bars
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Acquisition Criteria
          </div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("buybox")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              Buy Box
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-slate-50">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Serious Buyer. <span className="text-accent">Fast Decisions.</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              I'm actively acquiring profitable, owner-independent businesses with strong recurring revenue. If you're considering an exit, let's talk.
            </p>

            {/* Credibility Points */}
            <div className="space-y-4 mb-12">
              <div className="credibility-badge">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>SBA 7(a) financing ready with established lender relationships</span>
              </div>
              <div className="credibility-badge">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Proof of funds available upon request; prepared to move fast</span>
              </div>
              <div className="credibility-badge">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Confidential process with respect for employees and customers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold transition-smooth"
              >
                Submit an Opportunity
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg font-semibold transition-smooth"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Box Section */}
      <section id="buybox" className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="mb-12">What I'm Looking to Buy</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Core Criteria</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>Revenue Range:</strong> $1M – $10M ARR</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>SDE/EBITDA:</strong> $200K – $2M+ annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>Geography:</strong> US-based; open to regional or national</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>Recurring Revenue:</strong> Preferred (contracts, subscriptions, retainers)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>Management:</strong> Manager-run or strong team in place; minimal owner dependence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">•</span>
                  <span><strong>Financials:</strong> Clean books, verifiable revenue, organized records</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Ideal Industries</h3>
              <p className="text-sm text-foreground/70 mb-6 italic">
                AI-resilient service businesses with strong unit economics and recurring revenue.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Pest Control",
                  "HVAC & Plumbing",
                  "Fire & Safety Inspections",
                  "Security Alarm Monitoring",
                  "Janitorial Services",
                  "Landscaping Maintenance",
                  "Home Care Services",
                  "Daycare",
                  "Commercial Laundry/Linen",
                  "Courier Routes",
                  "Specialty Trades",
                  "Field Services"
                ].map((industry, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </ul>
              <p className="text-xs text-foreground/60 mt-6">
                Open to adjacent niches if they match the economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Fit Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="mb-12">Not a Fit: Disqualifiers</h2>

          <div className="max-w-3xl accent-bar-left">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Heavy Owner Dependence:</strong> Business can't run without the owner</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Customer Concentration:</strong> Single customer {'>'}25% of revenue</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Unverifiable Financials:</strong> Mostly cash, no clear records, tax inconsistencies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Regulatory or Legal Risk:</strong> Severe litigation, compliance issues, or licensing concerns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Commodity Digital/SEO Businesses:</strong> Low defensibility, high churn</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">×</span>
                <span><strong>Restaurants, Bars, Nightclubs:</strong> Unless explicitly discussed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="mb-12">How I Buy: Timeline & Process</h2>

          <div className="max-w-4xl space-y-8">
            {[
              { step: 1, title: "Intro", days: "Day 1", desc: "Initial conversation; brief overview of opportunity" },
              { step: 2, title: "NDA", days: "Day 2–3", desc: "Confidentiality agreement signed; teaser or CIM shared" },
              { step: 3, title: "Financials Review", days: "Day 4–7", desc: "Deep dive into P&L, tax returns, customer concentration, team" },
              { step: 4, title: "Call", days: "Day 8–10", desc: "Detailed conversation; ask clarifying questions; assess fit" },
              { step: 5, title: "LOI & Diligence", days: "Day 11–30", desc: "Letter of Intent; full diligence; legal and accounting review; close" }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="step-number">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-accent mb-2">{item.days}</p>
                  <p className="text-foreground/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-border">
            <p className="text-sm text-foreground/80">
              <strong>Confidentiality & Respect:</strong> I maintain strict confidentiality throughout the process. Employees and customers are informed only when appropriate and necessary. I move fast but never rush due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Deal Structure Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="mb-12">Deal Structure & Flexibility</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Financing</h3>
              <p className="text-foreground/80 mb-6">
                <strong>SBA 7(a) acquisition financing</strong> is my default approach. This provides favorable terms, lower down payments, and extended amortization.
              </p>
              <p className="text-foreground/80">
                I have established relationships with SBA lenders and can move quickly through underwriting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Seller Notes</h3>
              <p className="text-foreground/80 mb-6">
                <strong>Seller notes are welcomed</strong>—especially if they help bridge valuation gaps or improve deal economics.
              </p>
              <p className="text-foreground/80">
                I aim for fair market value and clean terms. Standby notes are also an option if it makes sense for both parties.
              </p>
            </div>
          </div>

          <div className="mt-12 accent-bar-left">
            <p className="text-lg font-semibold text-primary mb-4">
              Fair Value & Transparency
            </p>
            <p className="text-foreground/80">
              I use industry-standard valuation multiples and comparable transactions to determine fair market value. No surprises, no last-minute renegotiations. What we agree to is what we close.
            </p>
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="mb-12">What I Need to Review</h2>

          <div className="max-w-3xl">
            <p className="text-foreground/80 mb-8">
              To move forward efficiently, please provide the following documents:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Last 3 years P&L statements",
                "Last 3 years balance sheets",
                "Last 3 years tax returns",
                "Year-to-date financials",
                "Customer concentration breakdown",
                "Employee roster with roles/compensation",
                "Lease terms and agreements",
                "Asset list and condition",
                "Service contract summary",
                "Recurring revenue breakdown",
                "Customer retention rates",
                "Key customer references (optional)"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl space-y-4">
            {[
              {
                q: "How do you handle confidentiality?",
                a: "Confidentiality is paramount. I sign NDAs before reviewing any sensitive information. Employees and customers are informed only when necessary and appropriate. My goal is a smooth, discreet process."
              },
              {
                q: "Will I stay involved post-close?",
                a: "That's entirely up to you. Some sellers prefer a clean exit; others want to stay on in an advisory or operational capacity. We'll discuss your preferences during the process and structure accordingly."
              },
              {
                q: "How fast can you close?",
                a: "Typical timeline is 30–60 days from LOI to close, depending on diligence complexity. With clean financials and straightforward structures, we can move faster. I'm prepared to move quickly but won't skip due diligence."
              },
              {
                q: "Do you pay broker fees?",
                a: "Yes. Standard market rates apply. Broker fees are negotiable and will be discussed upfront. I work with quality intermediaries and respect the value they bring to the process."
              },
              {
                q: "What if my business doesn't fit your buy box exactly?",
                a: "If your business has strong unit economics, recurring revenue, and a solid team, I'm open to a conversation. The criteria are guidelines, not absolutes. Reach out—let's talk."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden transition-smooth"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-smooth"
                >
                  <span className="font-semibold text-primary text-left">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-white border-t border-border">
                    <p className="text-foreground/80">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Submit an Opportunity?</h2>
            <p className="text-white/90 text-lg mb-12">
              Fill out the form below or send me a teaser/CIM directly. I'll review and get back to you within 48 hours.
            </p>

            {/* Contact Form */}
            <form className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Role *
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth">
                    <option>Owner</option>
                    <option>Broker</option>
                    <option>Advisor</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    placeholder="Business name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Industry *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., HVAC Services"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Annual Revenue *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., $2.5M"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    SDE/EBITDA *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., $500K"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Asking Price
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., $3M"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  />
                </div>
              </div>

              <div className="text-left mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Reason for Sale
                </label>
                <textarea
                  placeholder="Retirement, growth capital, lifestyle change, etc."
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                ></textarea>
              </div>

              <div className="text-left mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Teaser / Link
                </label>
                <input
                  type="url"
                  placeholder="Link to CIM or teaser document"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                />
              </div>

              <div className="text-left mb-8">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Best Way to Contact You *
                </label>
                <input
                  type="email"
                  placeholder="Email or phone"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  required
                />
              </div>

              <Button className="w-full bg-accent hover:bg-amber-600 text-white py-3 text-lg font-semibold transition-smooth">
                Submit Opportunity
              </Button>

              <p className="text-xs text-foreground/60 mt-6">
                Or email directly: <a href="mailto:[YOUR EMAIL]" className="text-accent font-semibold hover:underline">[YOUR EMAIL]</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container text-center">
          <p className="mb-2">
            <strong>[YOUR NAME]</strong> | Acquisition Entrepreneur
          </p>
          <p className="text-white/80 text-sm mb-4">
            <a href="https://linkedin.com/in/[YOUR LINKEDIN]" className="hover:text-accent transition-smooth">
              LinkedIn
            </a>
            {" "} | {" "}
            <a href="mailto:[YOUR EMAIL]" className="hover:text-accent transition-smooth">
              [YOUR EMAIL]
            </a>
          </p>
          <p className="text-white/60 text-xs">
            © 2024 Acquisition Criteria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
