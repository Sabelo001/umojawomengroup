import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { GraduationCap, Gem, Users, Wrench, ArrowRight } from "lucide-react";
import beadwork from "@/assets/beadwork.asset.json";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Umoja — Stand with the Community" },
      { name: "description", content: "Support Umoja Women Group through education, the beadwork enterprise, women's programmes and community infrastructure." },
      { property: "og:title", content: "Support Umoja Women Group" },
      { property: "og:description", content: "Ways to support a women-led Samburu community." },
      { property: "og:image", content: beadwork.url },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

const areas = [
  { icon: GraduationCap, title: "Education", body: "Support learning needs at Umoja Academy, including meals, books, and learning materials." },
  { icon: Gem, title: "Beadwork enterprise", body: "Buy directly from the women, commission work, or help build market access for the cooperative." },
  { icon: Users, title: "Women's programmes", body: "Support training, leadership and health initiatives for women in the community." },
  { icon: Wrench, title: "Community infrastructure", body: "Water, sanitation, shelter and the everyday upkeep of village life." },
];

function Support() {
  return (
    <Layout>
      <PageHero
        eyebrow="Support"
        title="Stand with the women of Umoja."
        intro="Your support, whether through partnership, visits, beadwork purchases, or community assistance, helps strengthen the work of Umoja."
        image={beadwork.url}
      />

      <section className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">Ways to help</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">Four areas where support makes a real difference.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {areas.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition">
              <Icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Get in touch to support.</h2>
            <p className="mt-4 text-primary-foreground/85 text-lg">Tell us how you'd like to help — we'll respond with the most direct way to make it happen.</p>
          </div>
          <div className="md:text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cream text-charcoal px-8 py-4 rounded-full font-medium hover:opacity-90">
              Contact us to support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
