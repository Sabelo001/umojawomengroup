import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Home, Utensils, Tent, Compass, ArrowRight } from "lucide-react";
import manyatta1 from "@/assets/manyatta-1.asset.json";
import womenWalking from "@/assets/women-walking.asset.json";

export const Route = createFileRoute("/campsite")({
  head: () => ({
    meta: [
      { title: "Umoja Campsite — Stay in Archer's Post, Samburu" },
      { name: "description", content: "Self-contained cottages and camping along the Ewaso Nyiro, near Samburu and Buffalo Springs National Reserves." },
      { property: "og:title", content: "Umoja Campsite — Samburu, Kenya" },
      { property: "og:description", content: "Cottages, camping, food and cultural visits at Umoja Campsite, Archer's Post." },
      { property: "og:image", content: womenWalking.url },
    ],
    links: [{ rel: "canonical", href: "/campsite" }],
  }),
  component: Campsite,
});

const features = [
  { icon: Home, title: "Self-contained cottages", body: "Ten cottages on a 14-acre site, hosting up to 21 guests in full capacity." },
  { icon: Tent, title: "Camping & parking", body: "Ample camping ground and parking — suitable for larger groups." },
  { icon: Utensils, title: "Restaurant & catering", body: "Round-the-clock reception with restaurant and catering on request." },
  { icon: Compass, title: "Cultural & wildlife area", body: "A short drive from Samburu and Buffalo Springs reserves; cultural visits arranged with the community." },
];

function Campsite() {
  return (
    <Layout>
      <PageHero
        eyebrow="Umoja Campsite"
        title="A river-side stay in the heart of Samburu."
        intro="Set along the Ewaso Nyiro in Archer's Post, the campsite offers a quiet base for wildlife, culture and rest."
        image={womenWalking.url}
      />

      <section className="container-narrow py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">The setting</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Between two reserves, beside a flowing river.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              Umoja Campsite sits on 14 acres along the Ewaso Nyiro, about 1.5 km from Archer's Post town centre. Buffalo Springs National Reserve lies just across the river, and Samburu National Reserve is roughly 2 km away.
            </p>
            <p>
              It is owned and run by the women of Umoja — and every stay supports the community directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card rounded-2xl p-6 border border-border">
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden">
          <img src={manyatta1.url} alt="The hands of a Samburu woman at work" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">Plan your stay</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Rates and availability on enquiry.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            Send us a note with your travel dates, group size and what you'd like to experience. The team will respond with availability, rates and travel suggestions.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">Rates and availability to be confirmed by the team.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full hover:bg-primary/90 transition font-medium">
            Send a booking enquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
