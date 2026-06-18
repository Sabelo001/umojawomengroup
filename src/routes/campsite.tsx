import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, SafeImage } from "@/components/Layout";
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
      { title: "Umoja Campsite | Stay in Archer's Post, Samburu" },
      { name: "description", content: "A simple, community-owned riverside stay in Archer's Post with cottages, camping space, meals, cultural visits, and easy access to Samburu and Buffalo Springs." },
      { property: "og:title", content: "Umoja Campsite | Samburu, Kenya" },
      { property: "og:description", content: "Community-owned cottages, camping space, meals, and cultural visits at Umoja Campsite in Archer's Post." },
    ],
    links: [{ rel: "canonical", href: "/campsite" }],
  }),
  component: Campsite,
});

const features = [
  { icon: Home, title: "Cottages", body: "Simple, comfortable rooms on the Umoja Campsite grounds, restful after a day on the road." },
  { icon: Tent, title: "Camping & parking", body: "Open camping space and ample parking, well suited to overland travellers, groups, and self-drive visitors." },
  { icon: Utensils, title: "Restaurant & catering", body: "Meals are available on site, with catering arranged directly through the Umoja team." },
  { icon: Compass, title: "Culture & nearby reserves", body: "Cultural visits can be arranged with the community, with Samburu and Buffalo Springs nearby." },
];

const nearbyImages = [
  { src: "/images/campsite/samburu-national-reserve-gate.jpg", alt: "Samburu National Reserve gate near Archer's Post", label: "Nearby reserve access" },
  { src: "/images/campsite/game-drive-zebras.jpg", alt: "Zebras in the wider Samburu reserve landscape", label: "Reserve landscapes" },
  { src: "/images/campsite/reticulated-giraffes.jpg", alt: "Reticulated giraffes in a nearby reserve landscape", label: "Nearby wildlife routes" },
  { src: "/images/campsite/leopard-safari-wildlife.jpg", alt: "Wildlife photographed in the wider Samburu reserve area", label: "Seasonal sightings nearby" },
  { src: "/images/campsite/samburu-antelope-wildlife.jpg", alt: "Antelope in the wider Samburu reserve area", label: "Samburu wildlife areas" },
  { src: "/images/campsite/samburu-oryx-wildlife.jpg", alt: "Oryx in the wider Samburu reserve area", label: "Dryland wildlife areas" },
  { src: "/images/campsite/samburu-ostrich-wildlife.jpg", alt: "Ostrich in the wider Samburu reserve area", label: "Nearby reserve birdlife" },
];

function WhatsAppCTA({ light = false }: { light?: boolean }) {
  return (
    <div>
      <a
        href={WHATSAPP_BOOK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition"
      >
        <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
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
      <section className="image-fill-polish-wrap relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <SafeImage src={riverside.url} alt="Ewaso Nyiro river sunset near Umoja Campsite" className="image-fill-polish w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/70 to-charcoal/85" />
        </div>
        <div className="relative container-narrow py-24 md:py-36 text-cream">
          <p className="text-ochre text-xs uppercase tracking-[0.22em] font-semibold mb-5">Umoja Campsite</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] md:leading-[1.05] max-w-3xl text-balance">A simple riverside stay in Archer's Post.</h1>
          <p className="mt-6 text-cream/85 max-w-2xl text-lg leading-relaxed text-balance">
            Community-owned hospitality beside the Ewaso Nyiro, with cottages, camping space, meals, and cultural experiences arranged through the Umoja team.
          </p>
          <div className="mt-8">
            <WhatsAppCTA light />
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Community-owned hospitality</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">A quiet base for Samburu, Buffalo Springs, culture, and the northern route.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              Umoja Campsite sits along the Ewaso Nyiro, a short distance from Archer's Post town centre. It is a practical, welcoming base for travellers, groups, overlanders, volunteers, cultural visitors, and guests exploring Samburu.
            </p>
            <p>
              Buffalo Springs National Reserve lies just across the river, and Samburu National Reserve is a short drive away. The campsite is owned and run by the women of Umoja, so every stay supports the community directly.
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
          <p className="eyebrow mb-4">Nearby experiences</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">A calm base for the wider Samburu route.</h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Riverside meals and rest stops",
            "Nearby game drives arranged locally",
            "Samburu cultural visits with the community",
            "Access to Buffalo Springs and Samburu National Reserve",
            "A quiet base for Archer's Post and the northern route",
          ].map((x) => (
            <li key={x} className="bg-card rounded-xl p-5 border border-border text-foreground/85">{x}</li>
          ))}
        </ul>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nearbyImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="image-polish aspect-[4/3] bg-sand">
                <SafeImage src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <figcaption className="p-4 text-sm text-muted-foreground">{image.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Nearby wildlife and reserve experiences depend on route, season, and local arrangements.
        </p>
      </section>



      <section className="container-narrow py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="image-polish aspect-[4/5] rounded-2xl overflow-hidden bg-sand">
          <SafeImage src={tent.url} alt="A simple room at Umoja Campsite" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow mb-4">Plan your stay</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Plan your stay with the Umoja team.</h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            Send your travel dates, group size, and preferred stay style. Rates and availability are confirmed directly by the team.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            Bookings, meals, cultural visits, and local suggestions are arranged through Umoja.
          </p>
          <WhatsAppCTA />
          <div className="mt-5">
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Send an enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
