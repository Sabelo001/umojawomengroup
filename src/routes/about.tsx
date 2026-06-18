import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, SafeImage } from "@/components/Layout";
import { Shield, GraduationCap, Sparkles, Heart, Handshake } from "lucide-react";
import rebecca from "@/assets/rebecca.asset.json";
import womenWalking from "@/assets/women-walking.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Umoja Women Group | Our Story & Values" },
      { name: "description", content: "Umoja Women Group was founded in 1990 in northern Kenya. Discover the community, its leadership and its values." },
      { property: "og:title", content: "About Umoja Women Group" },
      { property: "og:description", content: "A women-led Samburu community shaped by dignity, leadership and culture." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Shield, title: "Dignity", body: "Every woman, child and visitor is received with respect." },
  { icon: Heart, title: "Safety", body: "A community where women and children feel protected and heard." },
  { icon: GraduationCap, title: "Education", body: "Investing in the next generation through Umoja Muehlbauer Academy." },
  { icon: Sparkles, title: "Culture", body: "Carrying Samburu traditions forward in song, dress and craft." },
  { icon: Handshake, title: "Enterprise", body: "Building livelihoods through beadwork and hospitality." },
];

const recognition = [
  {
    outlet: "CNBC News",
    logo: "/images/media/cnbc-logo.png",
    body: "Feature on Umoja Village and its women-led community.",
  },
  {
    outlet: "The Washington Post",
    logo: "/images/media/washington-post-logo.png",
    body: "Coverage of Rebecca Lolosoli and the founding story of Umoja.",
  },
  {
    outlet: "The Guardian",
    logo: "/images/media/guardian-logo.png",
    body: "Feature on Umoja as a refuge and community where women lead.",
  },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Umoja"
        title="A community built by women, sustained by a shared purpose."
        intro="Founded in 1990 in the plains of Samburu, Umoja has grown into a women-led community known by many visitors, partners, and supporters in Kenya and beyond."
        image={womenWalking.url}
      />

      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="image-polish relative aspect-[4/5] rounded-2xl overflow-hidden md:sticky md:top-28 bg-sand">
            <SafeImage src={rebecca.url} alt="Rebecca Lolosoli and the women of Umoja" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">Founder & community</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">Founded by Rebecca Lolosoli, carried by the women of Umoja.</h2>
          <div className="prose-lg text-foreground/80 space-y-5 text-lg leading-relaxed">
            <p>
              Umoja Women Group was started by Rebecca Lolosoli together with a group of women who chose to build a different kind of community, one where women could live, work and raise children with dignity.
            </p>
            <p>
              Over three decades, the village has become home to many. Leadership is shared. Decisions are made together. Children attend Umoja Muehlbauer Academy nearby. Visitors are welcomed and invited to learn.
            </p>
            <p>
              Umoja's story is not only about hardship overcome. It is about leadership, craft and a way of living that the community is proud to share.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">GLOBAL RECOGNITION</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">A women-led story recognized far beyond Samburu.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
              Umoja's story and the leadership of Rebecca Lolosoli have attracted international media attention, with coverage from CNBC News, The Washington Post, and The Guardian. The coverage reflects the significance of Umoja as a women-led community built around dignity, safety, culture, and resilience.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {recognition.map(({ outlet, logo, body }) => (
            <article key={outlet} className="bg-card rounded-2xl border border-border p-6 md:p-7">
              <div className="mb-5 flex h-14 items-center">
                <img src={logo} alt={`${outlet} logo`} className="max-h-12 max-w-full object-contain object-left" loading="eager" decoding="async" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Featured in coverage</p>
              <h3 className="font-display text-2xl mb-3">{outlet}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What we stand for</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Our values guide every part of life in Umoja.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card rounded-2xl p-6 border border-border">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
