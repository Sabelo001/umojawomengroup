import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Shield, GraduationCap, Sparkles, Heart, Handshake } from "lucide-react";
import rebecca from "@/assets/rebecca.asset.json";
import womenWalking from "@/assets/women-walking.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Umoja — Our Story & Values" },
      { name: "description", content: "Umoja Women Group was founded in 1990 in northern Kenya. Discover the community, its leadership and its values." },
      { property: "og:title", content: "About Umoja Women Group" },
      { property: "og:description", content: "A women-led Samburu community shaped by dignity, leadership and culture." },
      { property: "og:image", content: rebecca.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Shield, title: "Dignity", body: "Every woman, child and visitor is received with respect." },
  { icon: Heart, title: "Safety", body: "A community where women and children feel protected and heard." },
  { icon: GraduationCap, title: "Education", body: "Investing in the next generation through Umoja Academy." },
  { icon: Sparkles, title: "Culture", body: "Carrying Samburu traditions forward — in song, dress and craft." },
  { icon: Handshake, title: "Enterprise", body: "Building livelihoods through beadwork and hospitality." },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Umoja"
        title="A community built by women, sustained by a shared purpose."
        intro="Founded in 1990 in the plains of Samburu, Umoja has grown into a self-governed village known across Kenya and beyond."
        image={womenWalking.url}
      />

      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden md:sticky md:top-28">
            <img src={rebecca.url} alt="Rebecca Lolosoli and the women of Umoja" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">Founder & community</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">Founded by Rebecca Lolosoli, carried by the women of Umoja.</h2>
          <div className="prose-lg text-foreground/80 space-y-5 text-lg leading-relaxed">
            <p>
              Umoja Women Group was started by Rebecca Lolosoli together with a group of women who chose to build a different kind of community — one where women could live, work and raise children with dignity.
            </p>
            <p>
              Over three decades, the village has become home to many. Leadership is shared. Decisions are made together. Children attend the academy nearby. Visitors are welcomed and invited to learn.
            </p>
            <p>
              Umoja's story is not only about hardship overcome — it is about leadership, craft and a way of living that the community is proud to share.
            </p>
          </div>
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
