import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { BookOpen, Utensils, Droplets, ShieldCheck, Bus, ArrowRight } from "lucide-react";
import rebecca from "@/assets/rebecca.asset.json";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Umoja Muehlbauer Academy — Education in Samburu" },
      { name: "description", content: "Umoja Muehlbauer Academy supports children from Umoja and surrounding settlements with learning, meals, water and a safe school environment." },
      { property: "og:title", content: "Umoja Muehlbauer Academy" },
      { property: "og:description", content: "An education initiative rooted in the Umoja community." },
      { property: "og:image", content: rebecca.url },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: Academy,
});

const pillars = [
  { icon: BookOpen, title: "Learning", body: "Classrooms where children can read, write, learn, and grow close to home." },
  { icon: Utensils, title: "School Meals", body: "A daily food programme helps children stay in school and focus on learning." },
  { icon: Droplets, title: "Water & Sanitation", body: "Clean water access and sanitation facilities support the school, village, gardens, and campsite." },
  { icon: ShieldCheck, title: "Safe School Environment", body: "Organised learning spaces, sanitation, storage, and community care around every child." },
  { icon: Bus, title: "Safe Access to School", body: "Transport support helps reduce risks for children who travel from surrounding areas." },
];

const facilities = [
  "Classrooms and school infrastructure",
  "Toilets and sanitation facilities",
  "Water desalination & clean water system",
  "Shower bathrooms",
  "Food store",
  "Power connection",
  "Learner storage lockers",
];

function Academy() {
  return (
    <Layout>
      <PageHero
        eyebrow="Umoja Muehlbauer Academy"
        title="Education rooted in community."
        intro="Umoja Muehlbauer Academy supports children from Umoja and surrounding settlements with learning, meals, safe water, and a school environment built around dignity and opportunity."
        image={rebecca.url}
      />

      <section className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">About the academy</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">A school grown from the hopes of the Umoja community.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Umoja Muehlbauer Academy was created to give children from Umoja and nearby settlements a safer, closer place to learn. It continues to grow through the work of the women of Umoja, teachers, parents, and friends of the community.
          </p>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="eyebrow mb-3">Academy history</p>
            <p className="text-foreground/80 leading-relaxed">
              The academy was launched in May 2014 and has grown over the years with the support of partners, including the Muehlbauer Foundation, alongside the ongoing commitment of the Umoja community.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What the academy supports</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Five foundations that hold the school together.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card rounded-2xl p-6 border border-border">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-4">Water access</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">Clean water changed daily life.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            In 2017 the school received support for a solar-powered borehole, helping provide clean and safe drinking water to the village, the academy, the gardens, and the campsite. It remains one of the most important foundations for health, learning, and dignity.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">School meals & food support</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">Meals that keep learning possible.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            The food programme is part of the academy's wider support system. A reliable daily meal eases pressure on families and helps learners concentrate through the school day.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Facilities & growth</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">What's in place — and what's still needed.</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {facilities.map((f) => (
              <li key={f} className="bg-card rounded-xl p-5 border border-border text-foreground/85">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28">
        <div className="rounded-3xl bg-charcoal text-cream p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Support the Academy.</h2>
            <p className="mt-3 text-cream/75">Support school meals, books, water, and learning infrastructure.</p>
          </div>
          <div className="md:text-right flex md:justify-end flex-wrap gap-3">
            <Link to="/support" className="inline-flex items-center gap-2 bg-ochre text-charcoal px-7 py-3.5 rounded-full font-medium hover:opacity-90">
              Support the Academy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full font-medium hover:bg-cream/10">
              Contact Umoja
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
