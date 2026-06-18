import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, SafeImage } from "@/components/Layout";
import manyatta1 from "@/assets/manyatta-1.asset.json";
import manyatta2 from "@/assets/manyatta-2.asset.json";
import beadwork from "@/assets/beadwork.asset.json";

const manyattaCloseImage = "/images/culture/samburu-manyatta-building-close.jpg";

export const Route = createFileRoute("/lifestyle")({
  head: () => ({
    meta: [
      { title: "Lifestyle & Culture | Umoja Women Group" },
      { name: "description", content: "Samburu daily life, manyatta homes, beadwork, community work and what visitors can learn at Umoja." },
      { property: "og:title", content: "Lifestyle & Culture at Umoja" },
      { property: "og:description", content: "Daily life, manyatta homes, beadwork and community in Samburu." },
    ],
    links: [{ rel: "canonical", href: "/lifestyle" }],
  }),
  component: Lifestyle,
});

const sections = [
  {
    eyebrow: "Daily life",
    title: "A community rhythm shaped by land and family.",
    body: "Days in Umoja move with the sun and the seasons. Women care for children and livestock, gather to bead, prepare food, and welcome visitors. The village runs on cooperation and shared responsibility.",
    image: manyatta2.url,
    alt: "Women and children in daily life at Umoja village",
  },
  {
    eyebrow: "Manyatta homes",
    title: "Built by hand, from the earth.",
    body: "Traditional Samburu homes are built by the women themselves. A frame of branches is plastered with mud and cow dung, shaped through long, patient work. Each home is a quiet act of skill.",
    image: manyatta1.url,
    alt: "A Samburu woman building a manyatta home",
  },
  {
    eyebrow: "Beadwork",
    title: "A language worn around the neck.",
    body: "Samburu beadwork is more than ornament. It carries identity, status and story. The pieces sold at Umoja are made entirely by hand by the women of the community.",
    image: beadwork.url,
    alt: "Umoja beadwork enterprise and handmade Samburu jewellery",
  },
];

function Lifestyle() {
  return (
    <Layout>
      <PageHero
        eyebrow="Lifestyle & Culture"
        title="Samburu life, lived and shared."
        intro="A glimpse into the rhythms, craft and community spirit that shape daily life at Umoja."
        image={manyatta2.url}
      />

      <div className="container-narrow py-20 md:py-28 space-y-20 md:space-y-28">
        {sections.map((s, i) => (
          <section key={s.title} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className={`image-polish relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand ${i % 2 ? "md:order-2" : ""}`}>
              <SafeImage src={s.image} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className={i % 2 ? "md:order-1" : ""}>
              <p className="eyebrow mb-4">{s.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">{s.title}</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">{s.body}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-secondary/60">
        <div className="container-narrow py-20 md:py-24 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">What visitors learn</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">A welcome, not a performance.</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Visits to Umoja are guided by the women themselves. You'll be shown the village, learn about manyatta-building and beadwork, share a meal, and have time to ask questions. Photography is welcome with respect.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="image-polish relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand">
              <SafeImage src={manyattaCloseImage} alt="Close view of traditional Samburu manyatta building" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
