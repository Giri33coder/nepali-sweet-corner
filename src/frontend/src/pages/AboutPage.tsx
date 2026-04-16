import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Flame, Heart, Leaf } from "lucide-react";
import { motion } from "motion/react";

const TIMELINE = [
  {
    year: "1960s",
    title: "The Beginning",
    desc: "Nepali Sweet Corner opens its doors in Delhi — a humble sweet shop with a single clay oven, a copper kadai, and an unwavering passion for authentic taste.",
  },
  {
    year: "1985",
    title: "Growing the Family",
    desc: "The shop expands, introducing rasgulla and mishti doi, and begins supplying to local festivals, pujas, and family celebrations across Delhi.",
  },
  {
    year: "1998",
    title: "A Beloved Landmark",
    desc: "Innovations like baked rasgulla and chocolate cham cham earn Nepali Sweet Corner its first food critic recognition and a loyal following of regulars.",
  },
  {
    year: "2010",
    title: "Modern Heritage",
    desc: "Operations are modernized while maintaining 100% hand-crafted production — new flavors, same heart, same recipes.",
  },
  {
    year: "2024",
    title: "Today",
    desc: "Now serving over 10,000 customers annually across retail, catering, and corporate gifting — still using the original family recipes from the 1960s.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every sweet is hand-crafted by our skilled artisans using recipes passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Fresh Every Day",
    desc: "We source fresh chenna, milk, and seasonal ingredients daily. No artificial preservatives, ever.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    desc: "Recognized for excellence in traditional Indian confectionery and trusted by generations of families.",
  },
  {
    icon: Flame,
    title: "Slow & Traditional",
    desc: "Our mishti doi is slow-baked for 6 hours. Our sandesh is hand-molded. We refuse to rush tradition.",
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-secondary py-16 border-b border-border motif-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-accent/12 text-accent border-accent/25 text-xs tracking-[0.15em] uppercase">
              Who We Are
            </Badge>
            <h1 className="font-display text-5xl text-foreground mb-2">
              About Us
            </h1>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              In a world where shortcuts have become the norm and ingredients
              are stretched, mixed, and preserved beyond recognition, Nepali
              Sweet Corner chooses a different path—one rooted in honesty,
              tradition, and daily devotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Headline Banner */}
      <section className="py-10 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Legacy of 3 Generations
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-accent via-accent/70 to-accent/20 rounded mx-auto mt-3" />
          </motion.div>
        </div>
      </section>

      {/* Our Story Section — 2-col desktop */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/8 text-primary border-primary/20 text-xs tracking-[0.15em] uppercase">
                Our Story
              </Badge>
              <h3 className="font-display text-3xl md:text-4xl text-primary mb-5 leading-snug">
                Every Morning at 5 AM
              </h3>

              <div className="space-y-5 text-muted-foreground leading-[1.85] font-body text-[1.02rem]">
                <p>
                  Every morning at 5 AM, before the city is awake, our kitchen
                  lights turn on. Milk simmers slowly in large brass{" "}
                  <em className="text-foreground/80 not-italic font-medium">
                    kadhaiyan
                  </em>
                  , stirred patiently until it becomes the pure, fragrant khoya
                  that forms the heart of so many of our sweets. At a time when
                  khoya is one of the most adulterated ingredients in the
                  market, we take pride in making ours fresh every single day.
                  No powders, no substitutes, no blending. Just real milk,
                  gentle heat, and skilled hands that know exactly when the
                  texture is perfect.
                </p>
                <p>
                  Our sweets are prepared the way they were decades ago — fresh,
                  small-batch, and without cold storage. They are allowed to
                  rest naturally, to cool naturally, and to develop their
                  flavours the traditional way. We don't believe in
                  preservatives or premixes; we believe in time, purity, and the
                  craft that has been passed down through generations.
                </p>
                <p>
                  For us, authenticity isn't a claim — it's a responsibility.
                  Every laddu rolled, every piece of barfi cut, every tray that
                  leaves our kitchen carries with it the warmth of our family's
                  heritage. We want you to taste sweets the way they were meant
                  to be tasted: rich with real ingredients, full of honest
                  flavour, and made with the same care your grandparents once
                  trusted.
                </p>
              </div>

              {/* Pull-quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-10 border-l-4 border-accent pl-5 py-1"
              >
                <p className="font-display text-xl md:text-2xl text-primary italic leading-snug mb-1">
                  "At Nepali Sweet Corner, Kidwai Nagar, tradition isn't
                  something we talk about."
                </p>
                <p className="font-display text-lg md:text-xl text-accent italic leading-snug">
                  It's something we live — every morning at 5 AM, and in every
                  bite you take.
                </p>
              </motion.blockquote>

              <div className="mt-10">
                <Link to="/menu">
                  <Button
                    className="bg-primary text-primary-foreground shadow-button-primary button-glow-accent"
                    data-ocid="about-menu-cta"
                  >
                    Explore Our Menu <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Sweet Box Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* Decorative gold ring behind the image */}
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border-2 border-accent/20 -z-10 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border border-primary/15 -z-10 pointer-events-none" />

              {/* Image frame */}
              <div
                className="w-full rounded-2xl overflow-hidden shadow-elevated"
                style={{
                  boxShadow:
                    "0 0 0 3px oklch(0.70 0.22 38 / 0.25), 0 20px 60px oklch(0.45 0.21 18 / 0.18)",
                }}
              >
                <img
                  src="/assets/sweet-box.jpg"
                  alt="Premium Nepali sweet box from Nepali Sweet Corner"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>

              {/* "Est. 1960s" badge */}
              <div className="absolute -bottom-5 -left-4 bg-primary rounded-xl px-5 py-4 shadow-button-primary">
                <div className="font-display text-2xl font-bold text-primary-foreground">
                  Est. 1960s
                </div>
                <div className="text-xs text-primary-foreground/80 font-body">
                  3 generations of craft
                </div>
              </div>

              {/* Freshness badge */}
              <div className="absolute -top-4 -right-3 bg-card border border-accent/30 rounded-xl px-4 py-2.5 shadow-warm-accent">
                <div className="font-display text-sm font-bold text-accent">
                  Fresh Daily
                </div>
                <div className="text-[10px] text-muted-foreground font-body">
                  Since 5 AM every day
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 saffron-section motif-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-2">
              What We Stand For
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-md mx-auto">
              The principles that have guided us since the very first batch of
              sandesh.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-warm-accent text-center card-hover-glow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/12 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-2">
              Our Journey
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground">
              Six decades, one unwavering passion for sweetness.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.70 0.22 38 / 0.4), oklch(0.45 0.21 18 / 0.2))",
              }}
            />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 pl-16 relative"
                  data-ocid={`timeline-item.${i + 1}`}
                >
                  <div className="absolute left-[18px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-accent/70 shadow-warm-accent" />
                  <div>
                    <div className="font-display text-accent text-xl font-bold mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-display text-foreground text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
