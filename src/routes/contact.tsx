import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import manyatta2 from "@/assets/manyatta-2.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Umoja Women Group | Contact & Booking Enquiries" },
      { name: "description", content: "Send an enquiry to visit Umoja Women Group, book Umoja Campsite, support Umoja Muehlbauer Academy or partner with the community." },
      { property: "og:title", content: "Visit Umoja Women Group | Contact" },
      { property: "og:description", content: "Send an enquiry to visit, book or support Umoja Women Group." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const WHATSAPP_CONTACT_URL = "https://wa.me/254721659717";

const interests = ["Visit", "Umoja Campsite booking", "Support Umoja Women Group", "Umoja Muehlbauer Academy", "Partnership", "Media"];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const read = (key: string) => String(formData.get(key) ?? "").trim();
    const message = [
      "Hello Umoja Women Group, I would like to send an enquiry.",
      `Name: ${read("name")}`,
      `Email: ${read("email")}`,
      `Phone / WhatsApp: ${read("phone") || "Not provided"}`,
      `Interest: ${read("interest")}`,
      `Message: ${read("message")}`,
    ].join("\n");

    window.open(`${WHATSAPP_CONTACT_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Visit & enquire"
        title="Tell us about your visit."
        intro="Send a short enquiry by WhatsApp, email, or phone and the team will reply directly."
        image={manyatta2.url}
      />

      <section className="container-narrow py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <MapPin className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Find us</h3>
            <p className="text-muted-foreground text-sm">Archer's Post, Samburu County, Kenya</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border">
            <Phone className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Call or WhatsApp</h3>
            <a href="tel:+254721659717" className="block text-muted-foreground text-sm hover:text-primary transition">+254 721 659 717</a>
            <a href="tel:+254721333524" className="block text-muted-foreground text-sm hover:text-primary transition">+254 721 333 524</a>
          </div>
          <a href="mailto:witowetu@gmail.com" className="block bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition">
            <Mail className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">witowetu@gmail.com</p>
          </a>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center mb-5">
                <Check className="w-7 h-7" />
              </div>
              <h2 className="font-display text-3xl mb-3">Thank you.</h2>
              <p className="text-muted-foreground">Your WhatsApp enquiry has opened. If it did not open, please call, WhatsApp, or email the Umoja team directly.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" autoComplete="name" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" />
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">Interest</label>
                  <select id="interest" name="interest" className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    {interests.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your message</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your visit, group size, dates or how you'd like to support…" />
              </div>
              <button type="submit" className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition">
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", autoComplete, required }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
