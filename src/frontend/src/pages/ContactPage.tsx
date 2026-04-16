import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useBackend";
import type { ContactInquiry } from "@/types";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit Our Shop",
    lines: ["Delhi, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(Add Number)"],
    muted: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["(Add Email)"],
    muted: true,
  },
  {
    icon: Clock,
    title: "Shop Hours",
    lines: ["Mon – Sat: 8:00 AM – 9:00 PM", "Sunday: 9:00 AM – 8:00 PM"],
  },
];

export function ContactPage() {
  const { mutateAsync, isPending } = useSubmitContact();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInquiry>();

  const onSubmit = async (data: ContactInquiry) => {
    try {
      await mutateAsync(data);
      toast.success("Message sent! We'll get back to you shortly.");
      setSubmitted(true);
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

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
              Find Us
            </Badge>
            <h1 className="font-display text-5xl text-foreground mb-2">
              Visit Us Today
            </h1>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Experience the taste of tradition at our store. Have a question
              about our sweets, want to place a bulk order, or need catering?
              We'd love to hear from you.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a
                href="https://maps.google.com/?q=Delhi+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-primary text-primary-foreground shadow-button-primary button-glow-accent"
                  data-ocid="contact-directions-cta"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/5 transition-smooth"
                data-ocid="contact-call-cta"
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-1">
                  We're Here to Help
                </h2>
                <div className="w-8 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mb-3" />
                <p className="text-muted-foreground text-sm">
                  Reach out via any of the channels below, or fill in the form
                  and we'll get back to you.
                </p>
              </div>

              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 bg-card rounded-xl p-4 border border-border shadow-warm-accent hover-lift"
                  data-ocid="contact-info-card"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/12 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">
                      {info.title}
                    </div>
                    {info.lines.map((line) => (
                      <div
                        key={line}
                        className={`text-sm ${info.muted ? "text-muted-foreground italic" : "text-muted-foreground"}`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {submitted ? (
                  <div
                    className="bg-card border border-primary/25 rounded-xl p-12 text-center shadow-button-primary"
                    data-ocid="contact-success"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will respond within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary/40 text-primary hover:bg-primary/5"
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact-new-message"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-card rounded-xl border border-border shadow-warm-accent p-8 space-y-5"
                    data-ocid="contact-form"
                  >
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Send Us a Message
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="con-name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="con-name"
                          placeholder="Your Name"
                          {...register("name", { required: true })}
                          className={errors.name ? "border-destructive" : ""}
                          data-ocid="contact-name"
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">
                            Name is required
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="con-email">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="con-email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email", { required: true })}
                          className={errors.email ? "border-destructive" : ""}
                          data-ocid="contact-email"
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">
                            Email is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="con-phone">Phone Number</Label>
                      <Input
                        id="con-phone"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        data-ocid="contact-phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="con-message">
                        Your Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="con-message"
                        rows={5}
                        placeholder="Tell us what you're looking for — custom orders, bulk inquiries, feedback, or anything else..."
                        {...register("message", { required: true })}
                        className={errors.message ? "border-destructive" : ""}
                        data-ocid="contact-message"
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">
                          Message is required
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full bg-primary text-primary-foreground shadow-button-primary button-glow-accent"
                      data-ocid="contact-submit"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                      {!isPending && <Mail className="w-4 h-4 ml-2" />}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="saffron-section py-8 border-t border-border motif-pattern">
        <div className="container mx-auto px-4 text-center">
          <div
            className="rounded-xl overflow-hidden border border-border shadow-elevated bg-card h-56 flex items-center justify-center"
            data-ocid="map-placeholder"
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/12 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div className="font-display text-foreground text-lg">
                Nepali Sweet Corner
              </div>
              <div className="text-muted-foreground text-sm">Delhi, India</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
