import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/lifestyle", label: "Lifestyle & Culture" },
  { to: "/campsite", label: "Campsite" },
  { to: "/academy", label: "Academy" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Visit" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border/60">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg">U</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Umoja</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Women Group</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.slice(0, -1).map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-charcoal/80 hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-medium">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition">
            Book a Visit
          </Link>
        </nav>
        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-foreground/90 border-b border-border/40 last:border-0 [&.active]:text-primary">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="bead-divider" />
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-full bg-primary grid place-items-center font-display text-lg">U</span>
            <span className="font-display text-xl">Umoja Women Group</span>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed">
            A women-led Samburu community in northern Kenya — known for dignity, culture, beadwork, education and warm hospitality.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-ochre mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-cream/80">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-ochre transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-ochre mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-ochre shrink-0" /><span>Archer's Post, Samburu County, Kenya</span></li>
            <li className="flex gap-2.5"><Mail className="w-4 h-4 mt-0.5 text-ochre shrink-0" /><a href="mailto:witowetu@gmail.com" className="hover:text-ochre transition">witowetu@gmail.com</a></li>
            <li className="flex gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-ochre shrink-0" /><a href="tel:+254721659717" className="hover:text-ochre transition">+254 721 659 717</a></li>
            <li className="flex gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-ochre shrink-0" /><a href="tel:+254721333524" className="hover:text-ochre transition">+254 721 333 524</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-narrow py-6 text-xs text-cream/50 flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© {new Date().getFullYear()} Umoja Uaso Women Group. All rights reserved.</span>
          <span>Where women lead, culture lives.</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: string }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" />
      </div>
      <div className="relative container-narrow py-24 md:py-36 text-cream">
        <p className="text-ochre text-xs uppercase tracking-[0.22em] font-semibold mb-5">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
        {intro && <p className="mt-6 text-cream/85 max-w-2xl text-lg leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
