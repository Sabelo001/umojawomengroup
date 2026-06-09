import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { BookOpen, Utensils, Droplets, Users, ArrowRight } from "lucide-react";
import rebecca from "@/assets/rebecca.asset.json";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Umoja Academy — Education in Samburu" },
      { name: "description", content: "Umoja Academy supports children from the village and surrounding settlements with learning, meals and safe water." },
      { property: "og:title", content: "Umoja Academy" },
      { property: "og:description", content: "An education initiative rooted in the Umoja community." },
      { property: "og:image", content: rebecca.url },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: Academy,
});

const pillars = [
  { icon: BookOpen, title: "Learning", body: "Classrooms where children from Umoja and the surrounding settlements can read, write and grow." },
  { icon: Utensils, title: "School meals", body: "A daily meal so that learning is never crowded out by hunger." },
  { icon: Droplets, title: "Water & sanitation", body: "Clean water and sanitation on site — a foundation for health and dignity." },
  { icon: Users, title: "Community-rooted", body: "The academy is held by the women of Umoja and the families it serves." },
];

function Academy() {
  return (
    <Layout>
      <PageHero
        eyebrow="Umoja Academy"
        title="Where the next chapter is being written."
        intro="An education initiative serving children from the Umoja community and surrounding settlements."
        image={rebecca.url}
      />

      <section className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">About the academy</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">A school grown out of a community's hopes for its children.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Umoja Academy began so that children in the village would have a safe place to learn close to home. It has grown to welcome children from neighbouring areas, supported by the women of Umoja, teachers and friends of the community.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card rounded-2xl p-6 border border-border">
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28">
        <div className="rounded-3xl bg-charcoal text-cream p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Support the academy.</h2>
            <p className="mt-3 text-cream/75">School fees, meals, books, water and infrastructure — every contribution is welcome.</p>
          </div>
          <div className="md:text-right">
            <Link to="/support" className="inline-flex items-center gap-2 bg-ochre text-charcoal px-7 py-3.5 rounded-full font-medium hover:opacity-90">
              See ways to support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
