import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Home, Utensils, Tent, Compass, ArrowRight } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
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
