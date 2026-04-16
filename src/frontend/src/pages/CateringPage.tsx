import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitCatering } from "@/hooks/useBackend";
import type { CateringInquiry } from "@/types";
import {
  Calendar,
  ChevronRight,
  PartyPopper,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EVENT_TYPES = [
  "Wedding Ceremony",
  "Wedding Reception",
  "Engagement Ceremony",
  "Durga Puja",
  "Diwali Celebration",
  "Corporate Event",
  "Birthday Party",
  "Annaprasan",
  "Baby Shower",
  "Religious Puja",
  "Family Gathering",
  "Other",
];

const PACKAGES = [
  {
    icon: Star,
    name: "Standard Package",
    desc: "Perfect for intimate celebrations of 25–100 guests",
    includes: [
      "5 varieties of sweets",
      "Beautifully arranged platters",
      "Delivery & setup",
    ],
    price: "₹150 per head",
  },
  {
    icon: PartyPopper,
    name: "Premium Package",
    desc: "Ideal for weddings and large celebrations of 100–500 guests",
    includes: [
      "10+ varieties of sweets",
      "Custom gift boxes for guests",
      "Dedicated service staff",
      "Delivery & setup",
    ],
    price: "₹250 per head",
    featured: true,
  },
  {
    icon: Utensils,
    name: "Corporate Package",
    desc: "Curated sweet boxes for corporate events and gifting",
    includes: [
      "Branded gift boxes",
      "Logo customization",
      "Bulk pricing",
      "Pan-city delivery",
    ],
    price: "Custom quote",
  },
];

export function CateringPage() {
  const { mutateAsync, isPending } = useSubmitCatering();
  const [submitted, setSubmitted] = useState(false);
  const [guestCount, setGuestCount] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<CateringInquiry, "eventType" | "guestCount">>();

  const onSubmit = async (
    data: Omit<CateringInquiry, "eventType" | "guestCount">,
  ) => {
    if (!eventType) {
      toast.error("Please select an event type.");
      return;
    }
    try {
      await mutateAsync({
        ...data,
        eventType,
        guestCount: Number.parseInt(guestCount) || 0,
      });
      toast.success(
        "Catering inquiry submitted! We'll contact you within 24 hours.",
      );
      setSubmitted(true);
      reset();
      setGuestCount("");
      setEventType("");
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 border-b border-border overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/shop-interior-2.dim_1200x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        {/* Subtle motif overlay */}
        <div className="absolute inset-0 motif-pattern opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary-foreground/12 text-primary-foreground border-primary-foreground/25 text-xs tracking-[0.15em] uppercase backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1.5 inline" />
              Bulk Orders &amp; Catering
            </Badge>
            <h1 className="font-display text-5xl text-primary-foreground mb-2">
              Making Celebrations Sweeter
            </h1>
            <div className="w-12 h-[2px] bg-accent rounded mx-auto mb-5" />
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether it's a wedding, festival, or corporate event, we
              specialize in bulk orders and customized gifting solutions. Our
              beautifully packaged sweets make the perfect gift for every
              occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-foreground mb-2">
              Catering Packages
            </h2>
            <div className="w-10 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground">
              Choose a package that suits your occasion, or request a custom
              quote.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-6 card-hover-glow relative ${
                  pkg.featured
                    ? "bg-primary text-primary-foreground border-primary shadow-button-primary"
                    : "bg-card border-border shadow-warm-accent"
                }`}
                data-ocid="catering-package"
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground text-xs px-3 shadow-warm-accent">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    pkg.featured
                      ? "bg-primary-foreground/15"
                      : "bg-accent/12 border border-accent/20"
                  }`}
                >
                  <pkg.icon
                    className={`w-6 h-6 ${pkg.featured ? "text-primary-foreground" : "text-accent"}`}
                  />
                </div>
                <h3
                  className={`font-display text-xl mb-2 ${pkg.featured ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${pkg.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                >
                  {pkg.desc}
                </p>
                <ul className="space-y-2 mb-5">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-sm ${pkg.featured ? "text-primary-foreground/90" : "text-foreground"}`}
                    >
                      <ChevronRight
                        className={`w-3.5 h-3.5 flex-shrink-0 ${pkg.featured ? "text-accent" : "text-accent"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className={`font-display text-lg font-bold ${pkg.featured ? "text-accent" : "text-primary"}`}
                >
                  {pkg.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 saffron-section motif-pattern">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl text-foreground mb-2">
                Request a Catering Quote
              </h2>
              <div className="w-10 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
              <p className="text-muted-foreground">
                Fill in your event details and we'll get back to you within 24
                hours.
              </p>
            </div>

            {submitted ? (
              <div
                className="bg-card border border-primary/25 rounded-xl p-10 text-center shadow-button-primary"
                data-ocid="catering-success"
              >
                <div className="w-16 h-16 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  We've Received Your Inquiry!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our catering team will review your requirements and reach out
                  within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/5"
                  onClick={() => setSubmitted(false)}
                  data-ocid="catering-new-inquiry"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card rounded-xl border border-border shadow-warm-accent p-8 space-y-5"
                data-ocid="catering-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="cat-name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="cat-name"
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                      className={errors.name ? "border-destructive" : ""}
                      data-ocid="catering-name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">
                        Name is required
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cat-email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="cat-email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", { required: true })}
                      className={errors.email ? "border-destructive" : ""}
                      data-ocid="catering-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        Email is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="cat-phone">Phone Number</Label>
                    <Input
                      id="cat-phone"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      data-ocid="catering-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cat-date">
                      Event Date <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="cat-date"
                      type="date"
                      {...register("eventDate", { required: true })}
                      className={errors.eventDate ? "border-destructive" : ""}
                      data-ocid="catering-date"
                    />
                    {errors.eventDate && (
                      <p className="text-xs text-destructive">
                        Event date is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>
                      Event Type <span className="text-destructive">*</span>
                    </Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger data-ocid="catering-event-type">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {EVENT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cat-guests">Estimated Guests</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="cat-guests"
                        type="number"
                        min="10"
                        placeholder="150"
                        className="pl-9"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        data-ocid="catering-guests"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cat-message">
                    Special Requirements or Message
                  </Label>
                  <Textarea
                    id="cat-message"
                    rows={4}
                    placeholder="Tell us about your event, any dietary preferences, specific sweets you'd like, or other special requirements..."
                    {...register("message")}
                    data-ocid="catering-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground shadow-button-primary button-glow-accent"
                  data-ocid="catering-submit"
                >
                  {isPending ? "Submitting..." : "Submit Catering Inquiry"}
                  {!isPending && <Calendar className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
