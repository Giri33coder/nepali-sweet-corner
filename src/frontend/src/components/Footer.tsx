import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Products" },
  { to: "/catering", label: "Catering" },
  { to: "/contact", label: "Contact" },
];

const CATEGORIES = [
  "Nepali Sweets",
  "Indian Classics",
  "Festive Specials",
  "Snacks & Meals",
  "Bulk Orders",
  "Gift Boxes",
];

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="footer-bg text-card" data-ocid="site-footer">
      {/* Saffron-gold top divider with gradient */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-warm-accent">
                <span className="text-primary-foreground text-lg font-bold font-display">
                  N
                </span>
              </div>
              <div>
                <div className="font-display text-lg leading-tight text-card/90">
                  Nepali Sweet Corner
                </div>
                <div className="text-[10px] text-accent font-body tracking-[0.18em] uppercase font-semibold">
                  Est. 1960s
                </div>
              </div>
            </div>
            <p className="text-card/65 text-sm leading-relaxed mb-5">
              Crafting authentic Nepali and Indian sweets with tradition, love,
              and the finest ingredients for over 60 years.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-card/15 flex items-center justify-center text-card/60 hover:text-accent hover:border-accent/40 transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-accent tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-card/65 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent inline-block transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Sweets */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-accent tracking-wider uppercase">
              Our Sweets
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    to="/menu"
                    className="text-sm text-card/65 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent inline-block transition-colors duration-200" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-accent tracking-wider uppercase">
              Find Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-card/65">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/65">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="italic">(Add Number)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/65">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="italic">(Add Email)</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg border border-card/10 bg-card/5 text-xs text-card/55">
              <div className="font-semibold mb-1 text-card/75">Shop Hours</div>
              <div>Mon – Sat: 8:00 AM – 9:00 PM</div>
              <div>Sunday: 9:00 AM – 8:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-card/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-card/45">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© {year} Nepali Sweet Corner. All rights reserved.</span>
            <span className="hidden sm:inline text-card/25">·</span>
            <span className="font-display italic text-accent/80 text-sm">
              "Crafting Sweet Memories Since 1960s"
            </span>
          </div>
          <span>
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 hover:text-accent hover:underline transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
