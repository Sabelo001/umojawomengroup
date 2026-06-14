import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Users, Sparkles, Tent, Quote } from "lucide-react";
import womenWalking from "@/assets/women-walking.asset.json";
import rebecca from "@/assets/rebecca.asset.json";
import manyatta1 from "@/assets/manyatta-1.asset.json";
import beadwork from "@/assets/beadwork.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umoja Women Group — Where Women Lead, Culture Lives" },
      { name: "description", content: "A women-led community in Samburu, Kenya. Visit Umoja for Samburu culture, beadwork, the campsite and the academy." },
      { property: "og:title", content: "Umoja Women Group — Samburu, Kenya" },
      { property: "og:description", content: "Where women lead, culture lives, and visitors are welcomed." },
      { property: "og:image", content: womenWalking.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden">
        <img src={womenWalking.url} alt="Samburu women walking together near Umoja village" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/85" />
        <div className="relative container-narrow pb-16 md:pb-24 pt-32 text-cream">
          <p className="text-ochre text-xs uppercase tracking-[0.25em] font-semibold mb-6">Samburu, Northern Kenya</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.08] max-w-4xl">
            Where women lead, <span className="italic text-ochre">culture lives</span>, and visitors are welcomed.
          </h1>
          <p className="mt-7 text-base md:text-lg text-cream/85 max-w-2xl leading-relaxed">
            Umoja Women Group is a women-led community in Samburu, Kenya, sharing a story of dignity, resilience, culture, education, beadwork and hospitality.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="https://wa.me/254721659717?text=Hello%20Umoja%2C%20I%27d%20like%20to%20plan%20a%20visit." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full hover:bg-primary/90 transition font-medium">
              Visit Umoja <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/support" className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 rounded-full hover:bg-cream/10 transition">
              Support the Work
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-narrow py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">A village built by women, for the future of a community.</h2>
          </div>
          <div className="md:col-span-7 text-foreground/80 text-lg leading-relaxed space-y-5">
            <p>
              Founded in 1990 in the dryland plains of northern Kenya, Umoja began as a refuge and grew into a thriving community. Today it stands as a place of leadership, learning, craft and warm welcome.
            </p>
            <p>
              When you visit Umoja, you meet a community shaped by Samburu tradition and women's resolve — and you become part of a story that continues to unfold.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="container-narrow pb-20 md:pb-28">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Users, title: "Women-led community", body: "A women-led community where women hold leadership, voice and ownership." },
            { icon: Sparkles, title: "Samburu culture & beadwork", body: "Living traditions: songs, dress, ceremony and beadwork made by hand." },
            { icon: Tent, title: "Campsite & visitor experience", body: "Cottages, camping and cultural visits along the Ewaso Nyiro river." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMY FEATURE */}
      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">Umoja Muehlbauer Academy</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Learning rooted in community.</h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              The academy gives children from Umoja and the surrounding settlements a safe place to learn, eat and grow — supported by the women who built this community.
            </p>
            <Link to="/academy" className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary/40 pb-1 hover:border-primary">
              Discover the academy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={rebecca.url} alt="Women of Umoja in traditional Samburu beadwork" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CAMPSITE FEATURE */}
      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden md:order-1 order-2">
          <img src={manyatta1.url} alt="Hands building a traditional Samburu manyatta home" className="w-full h-full object-cover" />
        </div>
        <div className="md:order-2 order-1">
          <p className="eyebrow mb-4">Umoja Campsite</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Stay along the Ewaso Nyiro.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            Self-contained cottages, ample camping space, river views, and an honest welcome — set between Samburu and Buffalo Springs reserves.
          </p>
          <Link to="/campsite" className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary/40 pb-1 hover:border-primary">
            Explore the campsite <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* BEADWORK BAND */}
      <section className="relative overflow-hidden">
        <img src={beadwork.url} alt="Samburu woman with intricate beadwork seated by a craft stall" className="w-full h-[60vh] md:h-[80vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-narrow text-cream max-w-xl">
            <p className="text-ochre text-xs uppercase tracking-[0.25em] font-semibold mb-5">Craft & enterprise</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Every bead carries a story.</h2>
            <p className="mt-5 text-cream/85 text-lg leading-relaxed">
              The beadwork made in Umoja sustains households, funds schooling and carries Samburu identity forward. Each piece is made by hand, by the women of the village.
            </p>
            <Link to="/lifestyle" className="inline-flex items-center gap-2 mt-7 border border-cream/40 text-cream px-6 py-3 rounded-full hover:bg-cream/10 transition">
              Lifestyle & Culture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
          <p className="font-display text-2xl md:text-4xl leading-snug text-foreground">
            Dignity. Culture. Education. Hospitality.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">The work of Umoja Women Group</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow pb-24">
        <div className="rounded-3xl bg-charcoal text-cream p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Plan your visit to Umoja.</h2>
            <p className="mt-4 text-cream/75 text-lg">Stay at the campsite, learn from the women, and walk away with a story worth keeping.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-ochre text-charcoal px-7 py-3.5 rounded-full font-medium hover:opacity-90">
              Send an enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/support" className="inline-flex items-center gap-2 border border-cream/40 px-7 py-3.5 rounded-full hover:bg-cream/10">
              Support the work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
