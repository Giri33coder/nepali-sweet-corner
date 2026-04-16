import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SAMPLE_SWEETS } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { icon: Star, value: "60+", label: "Years of Legacy" },
  { icon: Award, value: "20+", label: "Signature Sweets" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Clock, value: "1960s", label: "Established" },
];

const HIGHLIGHTS = [
  "60+ Years of Excellence",
  "Authentic Nepali Recipes",
  "Premium Quality Ingredients",
  "Loved by Generations",
];

const CATEGORIES = [
  {
    emoji: "🧁",
    title: "Nepali Sweets",
    desc: "Soft, fresh, and authentic — including Rasgulla, Sandesh, and Cham Cham.",
  },
  {
    emoji: "🍬",
    title: "Indian Classics",
    desc: "From Kaju Katli to Gulab Jamun, experience timeless favorites crafted to perfection.",
  },
  {
    emoji: "🎉",
    title: "Festive Specials",
    desc: "Celebrate every occasion with exclusive seasonal sweets and traditional delights.",
  },
  {
    emoji: "🍽️",
    title: "Snacks & Meals",
    desc: "A complete experience with chaat, quick bites, and wholesome meals.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    quote:
      "The Rasgulla from Nepali Sweet Corner is absolutely divine — soft, spongy, and perfectly sweet. Nothing comes close to this in Delhi!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rajesh Gupta",
    role: "Wedding Client",
    quote:
      "We ordered sweets for our daughter's wedding — 500 guests. The presentation was beautiful and every sweet was fresh. Our guests couldn't stop praising!",
    rating: 5,
    initials: "RG",
  },
  {
    name: "Anita Bose",
    role: "Diwali Celebrations",
    quote:
      "Every Diwali, our entire family orders from Nepali Sweet Corner. The Kaju Katli melts in your mouth — pure tradition in every bite.",
    rating: 5,
    initials: "AB",
  },
];

const FEATURED = SAMPLE_SWEETS.slice(0, 3);

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0a0f 0%, #3d0f1e 35%, #7B1E2E 65%, #4a1520 100%)",
        }}
      >
        {/* Subtle warm overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, oklch(0.45 0.21 18 / 0.3) 0%, transparent 65%), linear-gradient(to right, oklch(0.08 0.02 18 / 0.6) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 py-12 relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl md:text-5xl xl:text-[3.4rem] leading-[1.08] text-white mb-5 drop-shadow-lg">
              Serving Sweetness for Over 60 Years
            </h1>
            <p className="text-base text-white/80 font-body leading-relaxed mb-8 max-w-lg drop-shadow">
              Where tradition meets taste — delivering authentic Nepali and
              Indian sweets made with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button-primary button-glow-accent font-semibold px-8"
                  data-ocid="hero-cta-primary"
                >
                  Explore Our Sweets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/catering">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/12 backdrop-blur-sm"
                  data-ocid="hero-cta-secondary"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── High-Conversion Quote Band ───────────────────────── */}
      <section className="bg-primary py-7 border-y border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-lg md:text-xl text-primary-foreground/90 italic max-w-3xl mx-auto leading-relaxed"
          >
            "More than just sweets — we are a part of your celebrations, your
            traditions, and your memories."
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="saffron-section py-10 border-b border-border motif-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-body tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Legacy Section ────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/assets/generated/legacy-halwai.dim_800x600.jpg"
                alt="Traditional Bengali sweet-making heritage"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl px-6 py-4 shadow-button-primary">
              <div className="font-display text-2xl font-bold text-primary-foreground">
                60+
              </div>
              <div className="text-xs text-primary-foreground/80">
                Years of Craft
              </div>
            </div>
            {/* Decorative saffron ring behind image */}
            <div className="absolute -top-3 -left-3 w-24 h-24 rounded-full border-2 border-accent/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/30 text-xs tracking-[0.15em] uppercase">
              About Us
            </Badge>
            <h2 className="font-display text-4xl text-foreground mb-2">
              A Legacy of Taste &amp; Trust
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mb-5" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over six decades, Nepali Sweet Corner has been a symbol of
              authenticity, quality, and tradition. What started as a humble
              sweet shop has grown into a beloved destination for generations of
              families.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every sweet we craft carries forward a legacy of passion, using
              time-honored recipes and the finest ingredients. From festive
              celebrations to everyday cravings, we've been a part of countless
              cherished moments.
            </p>
            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {HIGHLIGHTS.map((point) => (
                <Badge
                  key={point}
                  className="flex items-center gap-1.5 bg-primary/8 text-primary border-primary/20 px-3 py-1.5 text-xs font-body hover:bg-primary/15 transition-colors duration-200"
                >
                  <CheckCircle className="w-3 h-3 text-accent" />
                  {point}
                </Badge>
              ))}
            </div>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-primary/35 text-primary hover:bg-primary/5 hover:border-primary/60 transition-smooth"
                data-ocid="about-home-cta"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Our Signature Delicacies ──────────────────────────── */}
      <section className="py-20 saffron-section motif-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-accent/12 text-accent border-accent/25 text-xs tracking-[0.15em] uppercase font-body">
              What We Offer
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Our Signature Delicacies
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
          </motion.div>

          {/* 4 Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-xl border border-border shadow-warm-accent p-6 text-center card-hover-glow cursor-pointer"
                data-ocid="category-card"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {cat.emoji}
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Featured sweet cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FEATURED.map((sweet, i) => (
              <motion.div
                key={sweet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-warm-accent card-hover-glow"
                data-ocid="sweet-card"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={sweet.imageUrl}
                    alt={sweet.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-smooth"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                    {sweet.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {sweet.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {sweet.description}
                  </p>
                  <span className="font-display text-primary font-bold text-lg">
                    ₹{(sweet.price * 85).toFixed(0)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground shadow-button-primary button-glow-accent font-semibold"
                data-ocid="view-all-sweets"
              >
                View All Sweets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bulk Orders & Catering ────────────────────────────── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/mithai-brass-thali.dim_1200x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/88" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary-foreground/12 text-primary-foreground border-primary-foreground/25 text-xs tracking-[0.15em] uppercase">
              Bulk Orders &amp; Catering
            </Badge>
            <h2 className="font-display text-4xl mb-2 text-primary-foreground">
              Making Celebrations Sweeter
            </h2>
            <div className="w-12 h-[2px] bg-accent rounded mx-auto mb-5" />
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Whether it's a wedding, festival, or corporate event, we
              specialize in bulk orders and customized gifting solutions. Our
              beautifully packaged sweets make the perfect gift for every
              occasion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/catering">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 shadow-gold-glow button-glow-accent"
                  data-ocid="bulk-order-cta"
                >
                  Place Bulk Order
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                  data-ocid="catering-contact-cta"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust & Legacy ────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/12 border border-accent/25 mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-4xl text-foreground mb-2">
              Trusted by Thousands
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-5" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our commitment to quality and taste has earned us the trust of
              generations, along with partnerships with reputed organizations
              and institutions. We don't just serve sweets — we serve trust,
              consistency, and happiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 saffron-section motif-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-accent/12 text-accent border-accent/25 text-xs tracking-[0.15em] uppercase font-body">
              What Customers Say
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Sweet Words from Families
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card rounded-xl border border-border shadow-warm-accent p-6 hover-lift relative"
                data-ocid="testimonial-card"
              >
                {/* Quote icon */}
                <Quote className="absolute top-5 right-5 w-6 h-6 text-accent/25" />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }, (_, s) => s).map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 star-rating fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold font-display">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground font-display">
                      {t.name}
                    </div>
                    <div className="text-xs text-accent font-body">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery / Experience ──────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge className="mb-3 bg-accent/12 text-accent border-accent/25 text-xs tracking-[0.15em] uppercase font-body">
              Gallery
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              A Sweet Experience
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Step into a world of aroma, flavor, and tradition. From live
              sweet-making to festive rush, every moment at Nepali Sweet Corner
              is a celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/assets/generated/shop-interior-1.dim_1200x800.jpg",
                alt: "Nepali Sweet Corner shop interior with traditional brass trays",
              },
              {
                src: "/assets/generated/mithai-brass-thali.dim_1200x800.jpg",
                alt: "Premium Nepali sweets arranged on a traditional brass thali",
              },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden shadow-elevated border border-border"
                data-ocid="gallery-image"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-smooth"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Visit Us ────────────────────────────────── */}
      <section className="py-16 saffron-section border-t border-border motif-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/25 text-xs tracking-[0.15em] uppercase">
              Find Us
            </Badge>
            <h2 className="font-display text-4xl text-foreground mb-1">
              Visit Us Today
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground mb-8 text-lg">
              Experience the taste of tradition at our store.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">📍</span>
                <span className="font-semibold text-foreground">Location:</span>
                Delhi
              </div>
              <div className="hidden sm:block w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">📞</span>
                <span className="font-semibold text-foreground">Phone:</span>
                <span className="italic">(Add Number)</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">📧</span>
                <span className="font-semibold text-foreground">Email:</span>
                <span className="italic">(Add Email)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=Delhi+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground shadow-button-primary button-glow-accent font-semibold px-8"
                  data-ocid="get-directions-cta"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/5 transition-smooth"
                  data-ocid="call-now-cta"
                >
                  Call Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
