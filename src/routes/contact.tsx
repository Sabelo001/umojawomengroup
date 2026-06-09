import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useState } from "react";
import manyatta2 from "@/assets/manyatta-2.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Umoja — Contact & Booking Enquiries" },
      { name: "description", content: "Send an enquiry to visit Umoja, book the campsite, support the academy or partner with the community." },
      { property: "og:title", content: "Visit Umoja — Contact" },
      { property: "og:description", content: "Send an enquiry to visit, book or support Umoja Women Group." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const interests = ["Visit", "Campsite booking", "Support", "Academy", "Partnership", "Media"];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero
        eyebrow="Visit & enquire"
        title="Tell us about your visit."
        intro="A short note is all we need to begin — the team will reply by email or WhatsApp."
        image={manyatta2.url}
      />

      <section className="container-narrow py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-4">
          {[
            { icon: MapPin, title: "Find us", body: "Archer's Post, Samburu County, Kenya" },
            { icon: Mail, title: "Email", body: "info@umojawomen.or.ke" },
            { icon: Phone, title: "Phone / WhatsApp", body: "+254 700 000 000" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card rounded-2xl p-6 border border-border">
              <Icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-display text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{body}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground px-2">Contact details shown for prototype — confirm with the team before publishing.</p>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center mb-5">
                <Check className="w-7 h-7" />
              </div>
              <h2 className="font-display text-3xl mb-3">Thank you.</h2>
              <p className="text-muted-foreground">Your enquiry has been received. The Umoja team will be in touch soon.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Interest</label>
                  <select className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    {interests.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your message</label>
                <textarea rows={5} required className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your visit, group size, dates or how you'd like to support…" />
              </div>
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
