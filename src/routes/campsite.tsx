import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Home, Utensils, Tent, Compass, ArrowRight, MessageCircle } from "lucide-react";
import riverside from "@/assets/campsite-riverside.asset.json";
import tent from "@/assets/campsite-tent.asset.json";

const WHATSAPP_BOOK = "https://wa.me/254721659717?text=Hello%20Umoja%20Campsite%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay.%20My%20travel%20dates%20are%3A%20";

export const Route = createFileRoute("/campsite")({
  head: () => ({
    meta: [
      { title: "Umoja Campsite — Stay in Archer's Post, Samburu" },
      { name: "description", content: "A community-owned riverside stay in Archer's Post with cottages, camping, restaurant and access to Samburu's wildlife and culture." },
      { property: "og:title", content: "Umoja Campsite — Samburu, Kenya" },
      { property: "og:description", content: "Cottages, camping, food and cultural visits at Umoja Campsite, Archer's Post." },
      { property: "og:image", content: riverside.url },
    ],
    links: [{ rel: "canonical", href: "/campsite" }],
  }),
  component: Campsite,
});

const features = [
  { icon: Home, title: "Cottages", body: "Simple, comfortable cottages set on the campsite grounds — restful after a day on the road." },
  { icon: Tent, title: "Camping & parking", body: "Open camping ground and ample parking — well suited to overland travellers and groups." },
  { icon: Utensils, title: "Restaurant & catering", body: "On-site restaurant with home-cooked meals; catering available on request." },
  { icon: Compass, title: "Culture & nearby reserves", body: "A short drive from Samburu and Buffalo Springs reserves; cultural visits arranged with the community." },
];

function WhatsAppCTA({ light = false }: { light?: boolean }) {
  return (
    <div className={light ? "" : ""}>
      <a
        href={WHATSAPP_BOOK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition"
      >
        <MessageCircle className="w-4 h-4" /> Book on WhatsApp
      </a>
      <p className={`mt-3 text-sm ${light ? "text-cream/80" : "text-muted-foreground"}`}>
        Send your travel dates, group size, and preferred stay option.
      </p>
    </div>
  );
}

function Campsite() {
  return (
    <Layout>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={riverside.url} alt="Umoja Campsite terrace overlooking the Ewaso Nyiro river" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />
        </div>
        <div className="relative container-narrow py-24 md:py-36 text-cream">
          <p className="text-ochre text-xs uppercase tracking-[0.22em] font-semibold mb-5">Umoja Campsite</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">A riverside stay in the heart of Samburu.</h1>
          <p className="mt-6 text-cream/85 max-w-2xl text-lg leading-relaxed">
            Set along the Ewaso Nyiro in Archer's Post, Umoja Campsite is a simple, warm, community-owned place to rest between wildlife, culture, and the open road.
          </p>
          <div className="mt-8">
            <WhatsAppCTA light />
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">The setting</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Between two reserves, beside a flowing river.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              Umoja Campsite sits along the Ewaso Nyiro, a short distance from Archer's Post town centre. Buffalo Springs National Reserve lies just across the river, and Samburu National Reserve is a short drive away.
            </p>
            <p>
              It is owned and run by the women of Umoja — every stay supports the community directly.
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

      <section className="container-narrow py-20 md:py-24">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">Experiences from the campsite</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Things to do and places to discover.</h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Riverside restaurant and bar area",
            "Game drives and wildlife experiences nearby",
            "Samburu cultural visits",
            "Buffalo Springs and Samburu National Reserve access",
            "Quiet base for Archer's Post and the wider Samburu route",
          ].map((x) => (
            <li key={x} className="bg-card rounded-xl p-5 border border-border text-foreground/85">{x}</li>
          ))}
        </ul>
      </section>



      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden">
          <img src={tent.url} alt="Inside a tented room at Umoja Campsite" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">Plan your stay</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Rates and availability on enquiry.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            Send us a note with your travel dates, group size and what you'd like to experience. The team will respond with availability, rates and travel suggestions.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            All bookings and visit arrangements are confirmed directly by the Umoja team.
          </p>
          <WhatsAppCTA />
          <div className="mt-5">
            <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Or send a detailed enquiry <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
