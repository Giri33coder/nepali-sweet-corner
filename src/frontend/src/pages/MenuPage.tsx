import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSweetsByCategory } from "@/hooks/useBackend";
import { SWEET_CATEGORIES } from "@/types";
import type { SweetCategory } from "@/types";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<SweetCategory | "All">(
    "All",
  );
  const { data: sweets, isLoading } = useSweetsByCategory(activeCategory);

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
              Our Collection
            </Badge>
            <h1 className="font-display text-5xl text-foreground mb-2">
              The Sweet Menu
            </h1>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Twenty signature sweets across six beloved Bengali categories —
              each crafted with ancestral recipes and the finest ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="menu-category-filter"
          >
            {SWEET_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-smooth ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground border-primary shadow-button-primary"
                    : "bg-card text-foreground border-border hover:border-accent/50 hover:text-primary hover:shadow-warm-accent"
                }`}
                data-ocid="category-filter-btn"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }, (_, i) => `skel-${i}`).map((key) => (
                <div
                  key={key}
                  className="rounded-xl overflow-hidden bg-card border border-border"
                >
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-ocid="menu-grid"
            >
              {sweets?.map((sweet, i) => (
                <motion.div
                  key={sweet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-warm-accent card-hover-glow"
                  data-ocid="menu-sweet-card"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={sweet.imageUrl}
                      alt={sweet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                      {sweet.category}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base text-foreground mb-1 truncate">
                      {sweet.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {sweet.description}
                    </p>
                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {sweet.ingredients.slice(0, 3).map((ing) => (
                        <span
                          key={ing}
                          className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-primary font-bold">
                        ₹{(sweet.price * 85).toFixed(0)}
                      </span>
                      <Link to="/contact">
                        <Button
                          size="sm"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/25 h-7 px-3 transition-smooth"
                        >
                          Order
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Occasions note */}
      <section className="py-12 saffron-section border-t border-border motif-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl text-foreground mb-2">
            Custom Gift Boxes & Bulk Orders
          </h2>
          <div className="w-10 h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded mx-auto mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Planning a puja, wedding, or corporate gifting? We create beautiful
            custom assortment boxes for every occasion.
          </p>
          <Link to="/contact">
            <Button
              className="bg-primary text-primary-foreground shadow-button-primary button-glow-accent"
              data-ocid="menu-bulk-cta"
            >
              Get a Custom Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
