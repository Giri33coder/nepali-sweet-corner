import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Our Menu" },
  { to: "/about", label: "Our Legacy" },
  { to: "/catering", label: "Catering" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle"
      data-ocid="site-header"
    >
      {/* Burgundy-red top accent stripe */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 py-0 md:py-0.5 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center group" data-ocid="brand-logo">
          <div className="flex flex-col leading-none transition-smooth group-hover:opacity-90 group-hover:drop-shadow-[0_2px_8px_oklch(var(--accent)/0.5)]">
            <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-primary tracking-wide">
              Nepali Sweet Corner
            </span>
            <span className="text-[10px] md:text-xs text-accent font-body tracking-[0.18em] uppercase font-semibold">
              Est. 1960s · Delhi
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          data-ocid="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 rounded-md text-sm font-medium transition-smooth group ${
                isActive(link.to)
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
              {/* Saffron-gold underline indicator */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                  isActive(link.to)
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                }`}
              />
            </Link>
          ))}
          <Link to="/contact">
            <Button
              size="sm"
              className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm-accent button-glow-accent font-semibold tracking-wide"
              data-ocid="header-cta"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Order Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
              data-ocid="mobile-menu-trigger"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-card p-0"
            data-ocid="mobile-drawer"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="font-display text-lg text-foreground">Menu</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                    isActive(link.to)
                      ? "text-primary bg-primary/8 font-semibold border border-primary/15"
                      : "text-foreground hover:text-primary hover:bg-secondary/60"
                  }`}
                >
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 ${isActive(link.to) ? "text-accent" : "text-muted-foreground"}`}
                  />
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border mt-auto">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full bg-primary text-primary-foreground shadow-warm-accent"
                  data-ocid="mobile-cta"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
