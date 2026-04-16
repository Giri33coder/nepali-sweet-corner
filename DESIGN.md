# Design Brief

**Theme**: Light mode with warm cream background, rich burgundy-red primary, saffron-gold accents, and subtle Indian motif patterns  
**Tone**: Warm, cozy, celebratory premium Bengali mithai boutique — blending modern minimalism with traditional Indian sweet shop heritage. Diwali-inspired festive elegance.  
**Differentiation**: Burgundy-red CTAs with saffron-gold glow on hover, rounded cards with soft warm shadows, serif typography for prestige, smooth scale+glow animations on interactive elements


## Color Palette

| Semantic   | OKLCH L C H | Purpose |
|:-----------|:-----------|:--------|
| Primary    | 0.52 0.22 20 | Rich burgundy-red — CTAs, primary actions, emphasis |
| Accent     | 0.68 0.24 35 | Saffron-gold — highlight, festive accent, active states |
| Secondary  | 0.75 0.18 40 | Golden orange — secondary highlights, warmth |
| Destructive| 0.5 0.25 18 | Deep red — errors, warnings |
| Background | 0.98 0.01 85 | Soft warm cream (almost white) | 
| Foreground | 0.18 0.02 25 | Deep brown charcoal — body text |
| Border     | 0.94 0.01 80 | Light cream grey | 
| Card       | 0.99 0.01 95 | Pure white — elevated surfaces, premium |

## Typography

| Role    | Font | Usage |
|:--------|:-----|:------|
| Display | Fraunces (serif) | Headlines, section titles, heritage messaging |
| Body    | DM Sans (sans) | Paragraphs, descriptions, UI copy |
| Mono    | Geist Mono | Details, pricing, technical text |

**Scale**: 14 (sm), 16 (base), 18 (lg), 24 (xl), 32 (2xl), 40 (3xl)

## Structural Zones

| Zone | Surface | Border | Purpose |
|:-----|:--------|:-------|:--------|
| Header | bg-card border-b-border | Light cream | Fixed navigation, brand heritage |
| Hero | bg-background with shop photo + cream veil | None | Shop interior backdrop, short copy, warm welcome |
| Cards | bg-card shadow-elevated rounded-lg | Light subtle | Sweets showcase, scale+glow on hover |
| Sections | bg-background motif-pattern | None | Content breathing room with Indian motif texture |
| Callouts | bg-secondary/20 border-l-accent | Saffron accent | Catering CTA, heritage testimonials |
| CTAs | bg-primary text-white button-glow-accent | None | Burgundy buttons, saffron glow hover |
| Footer | bg-muted text-muted-fg border-t | Light cream | Contact, legacy tagline, links |

## Component Patterns

- **Buttons**: Primary (burgundy-red bg, white text, rounded-lg). Secondary (white bg, red text, border). All use button-glow-accent on hover (saffron glow + lift 2px).
- **Cards**: White bg, shadow-elevated, rounded-lg. Product cards include image, name (serif title), category tag (secondary bg), price (saffron accent). Use card-hover-glow for scale+glow effect.
- **Tags**: Secondary bg, brown text, rounded-sm. Active tags use primary (red) bg/white text.
- **Forms**: Input fields use light-cream border, focus ring in red. Labels in serif (display), help text in muted.
- **Hero Section**: Shop interior photo background with subtle warm-cream veil overlay, short headline in white serif, "More than just sweets" tagline below.

## Motion & Interaction

- **Hover states**: Cards lift 4px + scale 1.02 with warm red+saffron glow. Buttons shift saffron highlight, lift 2px.
- **Transitions**: All interactive elements use 0.3s cubic-bezier(0.4, 0, 0.2, 1).
- **Loading**: Subtle glow-pulse animation on featured images.
- **Entrance**: Fade-in scale-in for card grids (staggered 100ms per item).

## Constraints

- Primary color (red hue 18-22°) reserved for CTAs and primary emphasis — use sparingly, intentionally.
- Accent (saffron hue 35-42°) for highlights, glow effects, active states — evokes festive Indian aesthetic.
- All neutrals warm-shifted: background cream (L 98), card white (L 99), borders light cream (L 94).
- Serif (Fraunces) only on headlines; DM Sans for body for modern readability.
- Shadows subtle, warm-tinted (never pure black) — use RGBA with low opacity.
- Indian motif background pattern extremely subtle (4% opacity max) — atmosphere, not distraction.

## Signature Detail

Burgundy-red CTAs with saffron-gold glow on hover create premium Indian mithai boutique aesthetic. Rounded 1rem cards with warm shadows and smooth scale+glow animations. Fraunces serif headings convey heritage prestige. Subtle Indian motif background pattern weaves traditional identity into modern minimalist layout. Hero section frames actual shop interior through warm-cream veil. Every interaction (hover, focus) celebrates the festive, warm emotional tone — like Diwali or wedding celebration sweetness.
