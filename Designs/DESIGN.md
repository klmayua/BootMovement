---
name: Statesman Heritage
colors:
  surface: '#f1fcf4'
  surface-dim: '#d2ddd5'
  surface-bright: '#f1fcf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf6ef'
  surface-container: '#e6f1e9'
  surface-container-high: '#e0ebe3'
  surface-container-highest: '#dae5de'
  on-surface: '#141e19'
  on-surface-variant: '#414944'
  inverse-surface: '#29332e'
  inverse-on-surface: '#e8f3ec'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3e6752'
  primary: '#002d1c'
  on-primary: '#ffffff'
  primary-container: '#1a4331'
  on-primary-container: '#85b098'
  inverse-primary: '#a4d0b8'
  secondary: '#af2d2f'
  on-secondary: '#ffffff'
  secondary-container: '#fe6763'
  on-secondary-container: '#69000c'
  tertiary: '#342300'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f3800'
  on-tertiary-container: '#c6a15a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0edd3'
  primary-fixed-dim: '#a4d0b8'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#264e3c'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#8d131b'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#f1fcf4'
  on-background: '#141e19'
  surface-variant: '#dae5de'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

The design system is anchored in the concept of "Visionary Tradition." It targets a politically conscious electorate seeking stability, maturity, and a clear path toward the future. The aesthetic is **Corporate / Modern** with strong **Minimalist** influences, prioritizing clarity and institutional weight over decorative flair.

The UI should feel like a high-end editorial publication—authoritative yet accessible. This is achieved through generous whitespace, a "Cream White" foundation that reduces optical fatigue compared to pure white, and a disciplined application of deep, saturated tones that signal seriousness and longevity.

Visual cues should evoke:
- **Trust:** Solid, stable structures and alignment.
- **Authority:** Bold, traditional serif typography.
- **Vision:** Clean lines and a purposeful use of the "Action Red" to highlight future-facing initiatives.

## Colors

The palette departs from the vibrant, primary-school tones of the original logo in favor of a "heritage" palette that suggests a party ready for governance.

- **Background (Cream White - #FDFBF7):** The primary canvas. It provides a warm, archival feel that distinguishes the platform from generic digital tech products.
- **Primary (Trust Green - #1A4331):** A deep, forest emerald used for core branding, primary buttons, and navigational headers. It represents growth and institutional stability.
- **Secondary (Action Red - #A8282B):** A muted crimson used sparingly for urgency, calls to action, and highlighting "Our Tomorrow."
- **Accent (Heritage Gold - #C5A059):** Used for subtle dividers, icons, or premium badges to elevate the visual hierarchy and reinforce the "premium" brand positioning.
- **Neutral (State Slate - #333D38):** A dark, green-tinted charcoal used for body text to maintain soft contrast against the cream background.

## Typography

The typography strategy employs a "High-Contrast Pairing" to bridge the gap between tradition and modernity.

- **Headlines (Source Serif 4):** This typeface carries an authoritative, literary quality. Use it for all major page headings and quotes. For mobile, scale `display-lg` down to 36px to ensure readability.
- **Body & Interface (Work Sans):** Chosen for its clean, professional, and highly legible characteristics. It provides a "transparent" reading experience, ensuring the party's message is the focus.
- **Labels:** Labels and small UI elements should utilize `Work Sans` in semi-bold weights with slight letter spacing to maintain a systematic, organized appearance.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centering the content to create an organized, symmetrical feeling common in institutional design.

- **Rhythm:** An 8px base grid drives all spatial decisions. Padding and margins should always be multiples of 8 (e.g., 16, 24, 32, 48, 64).
- **Whitespace:** Emphasize "Macro-whitespace" between sections (80px+) to allow the brand to breathe and feel premium. 
- **Mobile Adaptation:** On mobile devices, transition to a 4-column fluid layout with 20px side margins. Ensure tap targets are at least 48px in height.

## Elevation & Depth

To maintain a "Statesman" feel, elevation is handled primarily through **Tonal Layering** rather than heavy shadows.

- **Flat Surfaces:** Most cards and containers should sit flat on the `FDFBF7` background, distinguished by a subtle 1px border in a lightened version of the accent color or a very soft tint of the primary green.
- **Surface Elevation:** When depth is required (e.g., for modals or floating action menus), use **Ambient Shadows**. These should be highly diffused (20px-40px blur), low opacity (10%), and slightly tinted with the Primary Green (`#1A4331`) to prevent the shadows from looking "dirty" or grey.
- **Depth through Color:** Use a slightly darker cream or a very pale tint of green for secondary background sections to create a sense of hierarchy without physical stacking.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. 

Sharp corners feel too aggressive for a movement based on "Our Tomorrow," while fully rounded or pill-shaped elements feel too casual or "tech-startup." A subtle 4px radius on buttons, input fields, and cards provides a modern touch while retaining the structural integrity of a serious political institution.

- **Large Components:** Hero images or large content cards can use `rounded-lg` (8px) to soften the impact of large blocks of color.
- **Iconography:** Use line-based icons with a consistent 2px stroke weight. Avoid filled-in, playful icons; prefer geometric, architectural styles.

## Components

- **Buttons:** Primary buttons use the Trust Green (`#1A4331`) with white text. Secondary buttons use a Heritage Gold border with Heritage Gold text. The Action Red is reserved for "Join Now" or "Donate" buttons only.
- **Input Fields:** Use a 1px border in State Slate (at 20% opacity). On focus, the border shifts to Trust Green with a 2px stroke.
- **Cards:** Cards should have no shadow by default, instead using a thin, 1px border (`#C5A059` at 30% opacity) against the cream background.
- **Progress Bars (Campaign Goals):** Use a dual-tone of Heritage Gold (background) and Action Red (progress) to symbolize the movement's momentum.
- **Lists:** Use custom bullet points featuring a small "Gold Diamond" or a simplified "Boot" silhouette in green to reinforce brand identity.
- **Chips/Tags:** Use low-contrast backgrounds (very pale green) with dark green text for policy categories (e.g., "Economy," "Education").