import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero, SafeImage } from "@/components/Layout";
import { GraduationCap, Gem, Users, Wrench, ArrowRight, Droplets, Sprout, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Umoja Women Group | Community Support" },
      { name: "description", content: "Support Umoja Women Group through Umoja Muehlbauer Academy, the beadwork enterprise, women's programmes and community infrastructure." },
      { property: "og:title", content: "Support Umoja Women Group" },
      { property: "og:description", content: "Ways to support a women-led Samburu community." },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

const areas = [
  { icon: GraduationCap, title: "Education", body: "Support learning needs at Umoja Muehlbauer Academy, including meals, books, and learning materials." },
  { icon: Gem, title: "Beadwork enterprise", body: "Buy directly from the women, commission work, or help build market access for the cooperative." },
  { icon: Users, title: "Women's programmes", body: "Support training, leadership and health initiatives for women in the community." },
  { icon: Wrench, title: "Community infrastructure", body: "Water, sanitation, shelter and the everyday upkeep of village life." },
];

const projects = [
  { icon: ShieldCheck, title: "Women and girls' rights", body: "Support advocacy, safety, and dignity for women and girls in and around Umoja." },
  { icon: GraduationCap, title: "Scholarships and education", body: "Help learners stay in school with fees, books, meals, and classroom support." },
  { icon: Droplets, title: "Clean water", body: "Strengthen access to safe water for families, learners, gardens, and visitors." },
  { icon: Sprout, title: "Food security gardens", body: "Support community gardens that improve nutrition and household resilience." },
  { icon: Wrench, title: "WASH and sanitation", body: "Improve toilets, handwashing, hygiene, and safe facilities for children and families." },
  { icon: Gem, title: "Beadwork and enterprise", body: "Grow women's livelihoods through craft, training, and market access." },
];

const supportImages = [
  { src: "/images/support/umoja-women-community-circle.jpg", alt: "Women of Umoja gathered in community", label: "Women and girls' rights" },
  { src: "/images/support/clean-water-filtration-equipment.jpg", alt: "Clean water filtration equipment for Umoja", label: "Clean water" },
  { src: "/images/support/food-security-garden.jpg", alt: "Food security garden at Umoja", label: "Food security gardens" },
  { src: "/images/support/clean-water-project-site.jpg", alt: "Water project site supporting Umoja", label: "WASH and sanitation" },
];

function Support() {
  return (
    <Layout>
      <PageHero
        eyebrow="Support"
        title="Stand with the women of Umoja."
        intro="Your support, whether through partnership, visits, beadwork purchases, or community assistance, helps strengthen the work of Umoja."
        image="/images/support/umoja-women-community-circle.jpg"
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

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Community projects</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Practical work rooted in dignity and daily life.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-card rounded-2xl p-6 border border-border">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="image-polish aspect-[4/3] bg-sand">
                  <SafeImage src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground">{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-24">
        <div>
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Current & future needs</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Where ongoing support is most welcome.</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Administration block",
              "School fence and gates",
              "Library",
              "Multipurpose hall",
              "Boarding support",
              "School meals",
              "Books and learning materials",
              "Water and sanitation support",
            ].map((x) => (
              <li key={x} className="bg-card rounded-xl p-5 border border-border text-foreground/85">{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Get in touch to support.</h2>
            <p className="mt-4 text-primary-foreground/85 text-lg">Tell us how you'd like to help. We'll respond with the most direct way to make it happen.</p>
          </div>
          <div className="md:text-right">
            <Link to="/contact" className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 bg-cream text-charcoal px-8 py-4 rounded-full font-medium hover:opacity-90">
              Contact us to support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
