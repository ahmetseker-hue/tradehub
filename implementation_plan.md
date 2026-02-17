# Implementation Plan: Homepage Sections (Top Deals, Top Ranking, Tailored Selections)

**Date:** 2026-02-17
**Status:** Active
**Prepared by:** TPM Agent
**Revision:** 2 (updated per PO screenshot specs)

---

## 1. Overview

Add three new homepage sections below the existing hero area. These sections replicate the Alibaba.com homepage layout and will be placed inside `<main>` in `src/main.ts`, between the hero section and the footer. Each section follows the established component pattern: a TypeScript component file exporting a render function + init function, CSS variables in `src/style.css`, token definitions in `src/utils/themeTokens.ts`, and barrel exports from the component index.

### Section Placement (top to bottom in `<main>`)
1. Hero (existing)
2. **Top Deals** (new) -- horizontal scrollable product deal cards
3. **Top Ranking** (new) -- horizontal scrollable category ranking cards
4. **Tailored Selections** (new) -- 3-column collection grid with paired product images
5. Footer (existing)

---

## 2. Architectural Decisions

### Component Pattern (follow existing conventions)
- Each section lives in `src/components/hero/` (homepage content sections, co-located with other hero-area components)
- Each file exports: `SectionName(): string` (HTML renderer) and `initSectionName(): void` (DOM event binding)
- All are re-exported from `src/components/hero/index.ts`
- Imported and wired in `src/main.ts`
- All colors/styling use CSS variables with `var(--token-name)` inline styles, matching the pattern in `RecommendationSlider.ts` and `CategoryBrowse.ts`
- Static mock data arrays defined at the top of each component file (same pattern as `recommendationCards` in RecommendationSlider.ts)
- SVG placeholder visuals for product images (same approach as RecommendationSlider visual system)

### CSS Variable Naming Convention
Follow the existing `--section-property` pattern (e.g., `--hero-bg`, `--mega-bg`, `--footer-bg`):
- Top Deals: `--deals-*`
- Top Ranking: `--ranking-*`
- Tailored Selections: `--tailored-*`

### Responsive Behavior
- Mobile-first, with breakpoints at `960px` (md) and `1280px` (lg) per the project's custom breakpoint system
- All sections use `container-wide` for max-width consistency
- Top Deals & Top Ranking: horizontal Swiper carousel, responsive `slidesPerView`
- Tailored Selections: 1 col mobile, 2 cols tablet, 3 cols desktop grid

---

## 3. Section Specifications

### 3.1 Top Deals

**Purpose:** Showcase lowest-price product deals in a horizontal scrollable row.

**Component file:** `src/components/hero/TopDeals.ts`

**Visual Reference (from Alibaba screenshot):**
- Section header row: **"Top Deals"** (bold heading) + **"Score the lowest prices on Alibaba.com"** (subtitle) + **"View more >"** link aligned right
- Horizontal scrollable card row (Swiper carousel), 6+ cards visible on desktop
- **Each card contains:**
  - Product image area (top ~60% of card) -- use SVG placeholder visuals
  - Deal price with small yellow price-tag icon (e.g., "$2.19")
  - Original price crossed out in gray (e.g., "~~$8.37~~")
  - "MOQ: 2 pieces" label at bottom in muted text
- **First card only** has a red **"Top picks"** badge overlay at top-left corner
- Cards have rounded corners, subtle border, white background
- Navigation arrows on hover (left/right), same pattern as RecommendationSlider

**Mock Data:** 8-10 deal items with varied product types, prices, and MOQs.

**CSS Variables (13 tokens):**
```
--deals-bg: #ffffff                    Section background
--deals-heading-color: #111827         Title text color
--deals-subtitle-color: #6b7280       Subtitle text color
--deals-link-color: #cc9900           "View more" link color
--deals-link-hover-color: #b38600     "View more" link hover
--deals-card-bg: #ffffff              Card background
--deals-card-border: #e5e5e5          Card border color
--deals-card-hover-border: #fcd34d    Card border on hover
--deals-price-color: #111827          Deal price text
--deals-price-icon-color: #f59e0b     Yellow price-tag icon
--deals-original-price-color: #9ca3af Crossed-out price text
--deals-badge-bg: #ef4444             "Top picks" badge background
--deals-badge-text: #ffffff           "Top picks" badge text
```

**Init function (`initTopDeals`):**
- Initialize Swiper carousel:
  - `autoplay: false` (user-driven scrolling)
  - Navigation arrows (prev/next buttons)
  - Responsive breakpoints: 2 slides mobile, 3 tablet, 5-6 desktop
  - `spaceBetween: 12-16px`
  - `loop: false`

**Accessibility:**
- `aria-label="Top deals product carousel"` on section
- Navigation buttons with descriptive `aria-label`
- Cards are `<a>` links with `aria-label` combining product name + price

---

### 3.2 Top Ranking

**Purpose:** Showcase trending product categories with data-driven ranking badges.

**Component file:** `src/components/hero/TopRanking.ts`

**Visual Reference (from Alibaba screenshot):**
- Section header row: **"Top Ranking"** (bold heading) + **"Navigate trends with data-driven rankings"** (subtitle) + **"View more >"** link aligned right
- Horizontal scrollable card row (Swiper carousel), 6 cards visible on desktop
- **Each card contains:**
  - Square image area (top ~70% of card) -- use SVG placeholder visuals with category-themed icons
  - **"TOP" badge** overlay at bottom of the image area (small rounded label with gradient/colored bg)
  - Category name below image (e.g., "Electric Motorcycles", "Party Decorations")
  - **"Hot selling"** label in muted/accent text below category name
- Cards have rounded corners, subtle border, white background
- Navigation arrows on hover

**Mock Data:** 8-10 category items spanning different product verticals (electronics, home, fashion, machinery, etc.)

**CSS Variables (14 tokens):**
```
--ranking-bg: #ffffff                  Section background
--ranking-heading-color: #111827       Title text color
--ranking-subtitle-color: #6b7280     Subtitle text color
--ranking-link-color: #cc9900         "View more" link color
--ranking-link-hover-color: #b38600   "View more" link hover
--ranking-card-bg: #ffffff            Card background
--ranking-card-border: #e5e5e5        Card border color
--ranking-card-hover-border: #fcd34d  Card border on hover
--ranking-category-color: #111827     Category name text
--ranking-label-color: #6b7280        "Hot selling" label text
--ranking-badge-bg: #ef4444           "TOP" badge background
--ranking-badge-text: #ffffff         "TOP" badge text
--ranking-badge-gradient-start: #f97316  "TOP" badge gradient start (optional)
--ranking-badge-gradient-end: #ef4444    "TOP" badge gradient end (optional)
```

**Init function (`initTopRanking`):**
- Initialize Swiper carousel:
  - `autoplay: false`
  - Navigation arrows
  - Responsive breakpoints: 2 slides mobile, 3-4 tablet, 6 desktop
  - `spaceBetween: 12-16px`
  - `loop: false`

**Accessibility:**
- `aria-label="Top ranking category carousel"` on section
- Cards are `<a>` links with category name as accessible label

---

### 3.3 Tailored Selections

**Purpose:** Curated product collections displayed as a grid of collection cards, each showing a pair of products.

**Component file:** `src/components/hero/TailoredSelections.ts`

**Visual Reference (from Alibaba screenshot):**
- Section header row: **"Tailored Selections"** (bold heading) + **"View more >"** link aligned right
- **3-column grid** of collection cards (1 col mobile, 2 cols tablet, 3 cols desktop)
- **Each collection card contains:**
  - Collection title (e.g., "Top selling children bikini", "Trending cosmetics brushes")
  - View count label (e.g., "28K+ views") in muted text
  - **2 product images side by side** (left and right) -- use SVG placeholder visuals
  - Price below each image (e.g., "$3.66", "$1.53")
- Cards have rounded corners, subtle border, white background
- No carousel -- static grid layout
- 6 collection cards total (2 rows x 3 cols on desktop)

**Mock Data:** 6 collections, each with a title, view count string, and 2 products (name, price, image kind).

**CSS Variables (13 tokens):**
```
--tailored-bg: #f9fafb                 Section background (slightly off-white)
--tailored-heading-color: #111827      Title text color
--tailored-link-color: #cc9900         "View more" link color
--tailored-link-hover-color: #b38600   "View more" link hover
--tailored-card-bg: #ffffff            Card background
--tailored-card-border: #e5e5e5        Card border color
--tailored-card-hover-border: #fcd34d  Card border on hover
--tailored-collection-title-color: #111827  Collection title text
--tailored-views-color: #6b7280        View count text color
--tailored-price-color: #111827        Product price text
--tailored-image-bg: #f3f4f6           Product image placeholder background
--tailored-divider-color: #e5e5e5      Divider between products (if any)
--tailored-views-icon-color: #9ca3af   Eye icon color for view count
```

**Init function (`initTailoredSelections`):**
- Minimal JS needed -- mainly for optional "View more" link behavior
- Optional: hover effects on cards via JS if CSS alone is insufficient
- No Swiper, no carousel -- pure CSS grid

**Accessibility:**
- `aria-label="Tailored product selections"` on section
- Collection cards use semantic `<article>` elements
- Images have descriptive `alt` text
- View counts use `aria-label` for screen readers (e.g., "28 thousand plus views")

---

## 4. Shared Design Patterns

### Section Header Pattern (reuse across all 3 sections)
All three sections share an identical header layout:
```html
<div class="flex items-center justify-between mb-4">
  <div>
    <h2 class="text-xl font-bold" style="color:var(--{section}-heading-color)">Title</h2>
    <p class="text-sm mt-0.5" style="color:var(--{section}-subtitle-color)">Subtitle text</p>
  </div>
  <a href="/..." class="text-sm font-medium" style="color:var(--{section}-link-color)">
    View more
    <svg ...chevron-right... />
  </a>
</div>
```

### Product Image Placeholder Pattern
Follow the `RecommendationSlider` visual system: each product type gets a unique SVG icon + gradient background + accent blob. Define a shared `renderPlaceholderImage()` utility or duplicate inline per component (prefer inline to avoid coupling).

### Card Hover Pattern
All product/collection cards follow: `transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md` + border color change via CSS variable on hover.

---

## 5. Integration Points

### 5.1 `src/main.ts` Changes
Add the three new sections inside `<main>`, after the hero `</section>`:

```typescript
// New imports added to the existing hero import block
import {
  TopDeals, initTopDeals,
  TopRanking, initTopRanking,
  TailoredSelections, initTailoredSelections,
} from './components/hero'

// In appEl.innerHTML template, after hero closing </section>:
//
//   <!-- Top Deals Section -->
//   <section class="py-6 lg:py-8" aria-label="Top deals">
//     <div class="container-wide">
//       ${TopDeals()}
//     </div>
//   </section>
//
//   <!-- Top Ranking Section -->
//   <section class="py-6 lg:py-8" aria-label="Top ranking">
//     <div class="container-wide">
//       ${TopRanking()}
//     </div>
//   </section>
//
//   <!-- Tailored Selections Section -->
//   <section class="py-6 lg:py-8" aria-label="Tailored selections">
//     <div class="container-wide">
//       ${TailoredSelections()}
//     </div>
//   </section>

// In init sequence (after existing inits):
//   initTopDeals();
//   initTopRanking();
//   initTailoredSelections();
```

### 5.2 `src/components/hero/index.ts` Changes
Add barrel exports:
```typescript
export { TopDeals, initTopDeals } from './TopDeals';
export { TopRanking, initTopRanking } from './TopRanking';
export { TailoredSelections, initTailoredSelections } from './TailoredSelections';
```

### 5.3 `src/style.css` Changes

**Inside `@theme { }` block**, add new comment section after existing `/* --- Hero --- */`:

```css
/* --- Top Deals --- */
--deals-bg: #ffffff;
--deals-heading-color: #111827;
--deals-subtitle-color: #6b7280;
--deals-link-color: #cc9900;
--deals-link-hover-color: #b38600;
--deals-card-bg: #ffffff;
--deals-card-border: #e5e5e5;
--deals-card-hover-border: #fcd34d;
--deals-price-color: #111827;
--deals-price-icon-color: #f59e0b;
--deals-original-price-color: #9ca3af;
--deals-badge-bg: #ef4444;
--deals-badge-text: #ffffff;

/* --- Top Ranking --- */
--ranking-bg: #ffffff;
--ranking-heading-color: #111827;
--ranking-subtitle-color: #6b7280;
--ranking-link-color: #cc9900;
--ranking-link-hover-color: #b38600;
--ranking-card-bg: #ffffff;
--ranking-card-border: #e5e5e5;
--ranking-card-hover-border: #fcd34d;
--ranking-category-color: #111827;
--ranking-label-color: #6b7280;
--ranking-badge-bg: #ef4444;
--ranking-badge-text: #ffffff;
--ranking-badge-gradient-start: #f97316;
--ranking-badge-gradient-end: #ef4444;

/* --- Tailored Selections --- */
--tailored-bg: #f9fafb;
--tailored-heading-color: #111827;
--tailored-link-color: #cc9900;
--tailored-link-hover-color: #b38600;
--tailored-card-bg: #ffffff;
--tailored-card-border: #e5e5e5;
--tailored-card-hover-border: #fcd34d;
--tailored-collection-title-color: #111827;
--tailored-views-color: #6b7280;
--tailored-price-color: #111827;
--tailored-image-bg: #f3f4f6;
--tailored-divider-color: #e5e5e5;
--tailored-views-icon-color: #9ca3af;
```

**Inside `@layer components { }` block**, add:

```css
/* --- Top Deals link --- */
.th-deals-link {
    color: var(--deals-link-color);
    transition: color 0.15s ease;
}
.th-deals-link:hover {
    color: var(--deals-link-hover-color);
}

/* --- Top Ranking link --- */
.th-ranking-link {
    color: var(--ranking-link-color);
    transition: color 0.15s ease;
}
.th-ranking-link:hover {
    color: var(--ranking-link-hover-color);
}

/* --- Tailored Selections link --- */
.th-tailored-link {
    color: var(--tailored-link-color);
    transition: color 0.15s ease;
}
.th-tailored-link:hover {
    color: var(--tailored-link-hover-color);
}
```

### 5.4 `src/utils/themeTokens.ts` Changes
Add three new entries to the `sectionEditors` array (before the Footer entry):

```typescript
{
  id: 'section-deals',
  name: 'Top Deals',
  icon: '%%',   // use a simple text icon, not emoji (per project convention)
  tokens: [
    { var: '--deals-bg', type: 'color', default: '#ffffff', label: 'Background' },
    { var: '--deals-heading-color', type: 'color', default: '#111827', label: 'Heading Color' },
    { var: '--deals-subtitle-color', type: 'color', default: '#6b7280', label: 'Subtitle Color' },
    { var: '--deals-link-color', type: 'color', default: '#cc9900', label: 'Link Color' },
    { var: '--deals-link-hover-color', type: 'color', default: '#b38600', label: 'Link Hover' },
    { var: '--deals-card-bg', type: 'color', default: '#ffffff', label: 'Card Background' },
    { var: '--deals-card-border', type: 'color', default: '#e5e5e5', label: 'Card Border' },
    { var: '--deals-card-hover-border', type: 'color', default: '#fcd34d', label: 'Card Hover Border' },
    { var: '--deals-price-color', type: 'color', default: '#111827', label: 'Price Color' },
    { var: '--deals-price-icon-color', type: 'color', default: '#f59e0b', label: 'Price Icon' },
    { var: '--deals-original-price-color', type: 'color', default: '#9ca3af', label: 'Original Price' },
    { var: '--deals-badge-bg', type: 'color', default: '#ef4444', label: 'Badge Background' },
    { var: '--deals-badge-text', type: 'color', default: '#ffffff', label: 'Badge Text' },
  ],
},
{
  id: 'section-ranking',
  name: 'Top Ranking',
  icon: '##',
  tokens: [
    { var: '--ranking-bg', type: 'color', default: '#ffffff', label: 'Background' },
    { var: '--ranking-heading-color', type: 'color', default: '#111827', label: 'Heading Color' },
    { var: '--ranking-subtitle-color', type: 'color', default: '#6b7280', label: 'Subtitle Color' },
    { var: '--ranking-link-color', type: 'color', default: '#cc9900', label: 'Link Color' },
    { var: '--ranking-link-hover-color', type: 'color', default: '#b38600', label: 'Link Hover' },
    { var: '--ranking-card-bg', type: 'color', default: '#ffffff', label: 'Card Background' },
    { var: '--ranking-card-border', type: 'color', default: '#e5e5e5', label: 'Card Border' },
    { var: '--ranking-card-hover-border', type: 'color', default: '#fcd34d', label: 'Card Hover Border' },
    { var: '--ranking-category-color', type: 'color', default: '#111827', label: 'Category Text' },
    { var: '--ranking-label-color', type: 'color', default: '#6b7280', label: 'Label Color' },
    { var: '--ranking-badge-bg', type: 'color', default: '#ef4444', label: 'Badge Background' },
    { var: '--ranking-badge-text', type: 'color', default: '#ffffff', label: 'Badge Text' },
    { var: '--ranking-badge-gradient-start', type: 'color', default: '#f97316', label: 'Badge Gradient Start' },
    { var: '--ranking-badge-gradient-end', type: 'color', default: '#ef4444', label: 'Badge Gradient End' },
  ],
},
{
  id: 'section-tailored',
  name: 'Tailored Selections',
  icon: '**',
  tokens: [
    { var: '--tailored-bg', type: 'color', default: '#f9fafb', label: 'Background' },
    { var: '--tailored-heading-color', type: 'color', default: '#111827', label: 'Heading Color' },
    { var: '--tailored-link-color', type: 'color', default: '#cc9900', label: 'Link Color' },
    { var: '--tailored-link-hover-color', type: 'color', default: '#b38600', label: 'Link Hover' },
    { var: '--tailored-card-bg', type: 'color', default: '#ffffff', label: 'Card Background' },
    { var: '--tailored-card-border', type: 'color', default: '#e5e5e5', label: 'Card Border' },
    { var: '--tailored-card-hover-border', type: 'color', default: '#fcd34d', label: 'Card Hover Border' },
    { var: '--tailored-collection-title-color', type: 'color', default: '#111827', label: 'Collection Title' },
    { var: '--tailored-views-color', type: 'color', default: '#6b7280', label: 'Views Text' },
    { var: '--tailored-price-color', type: 'color', default: '#111827', label: 'Price Color' },
    { var: '--tailored-image-bg', type: 'color', default: '#f3f4f6', label: 'Image Placeholder BG' },
    { var: '--tailored-divider-color', type: 'color', default: '#e5e5e5', label: 'Divider Color' },
    { var: '--tailored-views-icon-color', type: 'color', default: '#9ca3af', label: 'Views Icon Color' },
  ],
},
```

### 5.5 Theme Editor Panel Highlight Map
In `ThemeEditorPanel.ts`, add entries to the `sectionSelectors` map in `highlightPageSection()`:
```typescript
'section-deals': '.top-deals-section',
'section-ranking': '.top-ranking-section',
'section-tailored': '.tailored-selections-section',
```

---

## 6. Task Breakdown

### Phase 1: CSS Variables & Theme Tokens [LOGIC]

**Task L1: Add CSS variables for all 3 sections to `src/style.css`** [LOGIC]
- Add `--deals-*` (13 variables) to `@theme {}` block after the Hero section
- Add `--ranking-*` (14 variables) to `@theme {}` block
- Add `--tailored-*` (13 variables) to `@theme {}` block
- Add `.th-deals-link`, `.th-ranking-link`, `.th-tailored-link` classes to `@layer components {}`
- **Acceptance criteria:** All 40 variables defined, no build errors, `npx vite build` succeeds

**Task L2: Add section editors to `src/utils/themeTokens.ts`** [LOGIC]
- Add 3 new `SectionEditor` entries to the `sectionEditors` array (before Footer)
- Each entry has correct `id`, `name`, `icon`, and `tokens` array with labels
- Token `var` names must match CSS variable names in style.css exactly
- Token `default` values must match the defaults in style.css exactly
- **Acceptance criteria:** TypeScript compiles, token definitions match CSS variable names and defaults 1:1

**Task L3: Update theme panel highlight map in `ThemeEditorPanel.ts`** [LOGIC]
- Add 3 new entries to `sectionSelectors` in `highlightPageSection()`
- CSS class selectors: `.top-deals-section`, `.top-ranking-section`, `.tailored-selections-section`
- **Acceptance criteria:** Hovering section names in theme panel highlights the correct page section

### Phase 2: Component Implementation [FRONTEND]

**Task F1: Create `src/components/hero/TopDeals.ts`** [FRONTEND]
- Export `TopDeals(): string` -- renders section with:
  - Header row: "Top Deals" title + "Score the lowest prices on Alibaba.com" subtitle + "View more >" link
  - Swiper carousel of 8-10 deal cards
  - Each card: SVG product image placeholder, deal price with yellow tag icon, crossed-out original price, "MOQ: X pieces" label
  - First card has red "Top picks" badge at top-left
- Export `initTopDeals(): void` -- Swiper init with navigation, responsive breakpoints
- All styling via CSS variables (inline `style` attributes)
- Add `.top-deals-section` class to outermost element (for theme panel highlight)
- **Acceptance criteria:** Section renders with all cards, Swiper scrolls, prices display correctly, badge visible on first card

**Task F2: Create `src/components/hero/TopRanking.ts`** [FRONTEND]
- Export `TopRanking(): string` -- renders section with:
  - Header row: "Top Ranking" title + "Navigate trends with data-driven rankings" subtitle + "View more >" link
  - Swiper carousel of 8-10 category cards
  - Each card: square SVG image placeholder, "TOP" badge at bottom of image, category name, "Hot selling" label
- Export `initTopRanking(): void` -- Swiper init with navigation, responsive breakpoints
- All styling via CSS variables
- Add `.top-ranking-section` class to outermost element
- **Acceptance criteria:** Section renders with category cards, Swiper scrolls, TOP badges visible, category names display

**Task F3: Create `src/components/hero/TailoredSelections.ts`** [FRONTEND]
- Export `TailoredSelections(): string` -- renders section with:
  - Header row: "Tailored Selections" title + "View more >" link
  - CSS grid (1 col mobile / 2 cols tablet / 3 cols desktop)
  - 6 collection cards, each with: collection title, "28K+ views" label, 2 product images side by side with prices
- Export `initTailoredSelections(): void` -- minimal JS (hover effects if needed)
- All styling via CSS variables
- Add `.tailored-selections-section` class to outermost element
- **Acceptance criteria:** Section renders, grid reflows at breakpoints, all 6 collections display with paired products

**Task F4: Wire up components in `src/components/hero/index.ts` and `src/main.ts`** [FRONTEND]
- Add barrel exports to `hero/index.ts` for all 3 new components
- In `main.ts`:
  - Add imports for `TopDeals`, `initTopDeals`, `TopRanking`, `initTopRanking`, `TailoredSelections`, `initTailoredSelections`
  - Add 3 new `<section>` blocks in the HTML template after the hero section, each wrapped in `container-wide`
  - Call `initTopDeals()`, `initTopRanking()`, `initTailoredSelections()` in the init sequence
- **Acceptance criteria:** All 3 sections visible on homepage in correct order, no console errors, no TypeScript errors

### Phase 3: Quality Assurance [QA]

**Task Q1: Build verification** [QA]
- Run `npx vite build` -- must complete with zero errors
- Check for TypeScript compilation errors
- Verify no unused imports or variables
- **Acceptance criteria:** Clean build, zero errors, zero warnings

**Task Q2: Responsive testing** [QA]
- Verify all 3 sections at mobile (375px), tablet (768px), desktop (1440px) widths
- Top Deals: carousel shows 2 / 3-4 / 5-6 cards respectively
- Top Ranking: carousel shows 2 / 3-4 / 6 cards respectively
- Tailored Selections: grid shows 1 / 2 / 3 columns respectively
- No horizontal overflow at any width
- **Acceptance criteria:** Proper responsive layouts at all breakpoints

**Task Q3: Theme editor integration** [QA]
- Open theme editor panel, navigate to "Page Sections" tab
- Verify all 3 new sections appear: "Top Deals", "Top Ranking", "Tailored Selections"
- For each section: change a color token and verify live preview updates on the page
- Click "Reset" on a section and verify defaults restore
- Hover each section name and verify page highlight appears on correct section
- **Acceptance criteria:** All tokens editable, live preview works, reset works, highlights work

**Task Q4: Accessibility audit** [QA]
- Verify `aria-label` on all 3 section elements
- Verify Swiper carousel navigation buttons have `aria-label`
- Verify product/collection card links have meaningful `aria-label` text
- Check keyboard navigation: can tab through all interactive elements in each section
- **Acceptance criteria:** No critical a11y violations, all interactive elements keyboard-accessible

---

## 7. Dependency Graph

```
L1 (CSS vars in style.css) ──┐
                              ├──> F1, F2, F3 (components, can run in parallel)
L2 (theme token defs)     ───┤
                              └──> F4 (wiring in index.ts + main.ts)
                                     │
L3 (highlight map)  ─────────────────┼──> Q1, Q2, Q3, Q4 (all QA)
                                     │
                              F1+F2+F3 must complete before F4
                              F4 must complete before all QA tasks
```

**Parallel execution opportunities:**
- L1 and L2 can run in parallel (different files)
- F1, F2, F3 can run in parallel after L1+L2 complete (different files)
- L3 can run any time (independent file edit)
- Q1-Q4 all depend on F4 completion

---

## 8. Files Modified / Created

| File | Action | Owner | Description |
|------|--------|-------|-------------|
| `src/style.css` | Modified | LOGIC | Add ~40 CSS variables + 3 link component classes |
| `src/utils/themeTokens.ts` | Modified | LOGIC | Add 3 SectionEditor entries (~80 lines) |
| `src/components/theme/ThemeEditorPanel.ts` | Modified | LOGIC | Add 3 highlight selector entries |
| `src/components/hero/TopDeals.ts` | **Created** | FRONTEND | Horizontal deal card carousel |
| `src/components/hero/TopRanking.ts` | **Created** | FRONTEND | Horizontal category ranking carousel |
| `src/components/hero/TailoredSelections.ts` | **Created** | FRONTEND | 3-column collection grid |
| `src/components/hero/index.ts` | Modified | FRONTEND | Add 3 barrel exports |
| `src/main.ts` | Modified | FRONTEND | Import, render, and init 3 new sections |

---

## 9. Top Deals Visual Redesign (PO Screenshot Specs)

**Date:** 2026-02-17
**Status:** Active
**Revision:** 1
**Scope:** Purely visual changes to `TopDeals.ts` and supporting CSS/theme tokens. No logic changes.

### 9.1 Context

The Product Owner provided exact design specs extracted from Alibaba.com screenshots. The current Top Deals component needs visual adjustments to match the reference design precisely.

### 9.2 Delta Analysis (Current vs. Required)

| Property | Current Value | Required Value | File(s) Affected |
|----------|--------------|----------------|------------------|
| Section background | `--topdeals-bg: #ffffff` | `#F8F8F8` | `style.css`, `themeTokens.ts` |
| Container padding | `px-4 lg:px-0` | `padding: 16px 8px 16px 16px` | `TopDeals.ts` |
| Badge (`Top picks`) bg | `--topdeals-badge-bg: #dc2626` | `#DE0505` | `style.css`, `themeTokens.ts` |
| Badge padding | `px-2 py-0.5` | `2px 4px` (same as `px-1 py-0.5`) | `TopDeals.ts` |
| Product image size | `aspect-square` (fluid) | Fixed `188x188px` | `TopDeals.ts` |
| Price background | None | `#FFEDED` with `padding: 2px 12px 2px 4px` | `TopDeals.ts`, `style.css`, `themeTokens.ts` |
| Price icon | Price-tag SVG | Lightning bolt SVG with linear gradient (#FF988C to #FFECEB) | `TopDeals.ts` |
| MOQ/subtitle color | `--topdeals-moq-color: #6b7280` | `#222222` | `style.css`, `themeTokens.ts` |
| MOQ font size | `text-[10px]` | `14px` (`text-[14px]`) | `TopDeals.ts` |
| Section subtitle | "Score the lowest prices" | "Score the lowest prices on Alibaba.com" | `TopDeals.ts` |

### 9.3 New CSS Variable

One new CSS variable is needed:

```
--topdeals-price-bg: #FFEDED    /* Light pink background behind price + lightning icon */
```

This must be added to:
- `src/style.css` inside `@theme {}` under `/* --- Top Deals Section --- */`
- `src/utils/themeTokens.ts` in the `section-topdeals` editor entry

### 9.4 Lightning Bolt SVG

Replace the `priceTagIcon()` function in `TopDeals.ts` with a `lightningBoltIcon()` function that renders the PO-provided SVG from `task/TXT 2.txt`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
  <path d="M10.5948 30.1888L0.735054 19.2232C0.221831 18.5826 0.604285 17.5239 1.34894 17.5239L6.20746 17.5239C6.77424 10.7461 10.1716 2.20349 20.7371 0.585977C21.9772 0.396125 23.4376 0.585405 24.5 0.585787C16.6194 3.93595 16.33 12.2572 16.2123 17.5239L21.5078 17.5239C22.2623 17.5239 22.6405 18.6069 22.1072 19.2408L11.8082 30.2064C11.4715 30.6066 10.9232 30.5987 10.5948 30.1888Z" fill="url(#paint0_linear_1_17173)"/>
  <defs>
    <linearGradient id="paint0_linear_1_17173" x1="11.4284" y1="30.5016" x2="11.2898" y2="-0.282995" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF988C"/>
      <stop offset="1" stop-color="#FFECEB"/>
    </linearGradient>
  </defs>
</svg>
```

**Important:** Scale the SVG to fit inline with price text (approximately `w-4 h-5` / 16x20px). The viewBox is `0 0 24 30`, keep as-is and adjust the wrapper `width`/`height` classes.

### 9.5 Task Breakdown

#### Task F5: Update section background and container styling [FRONTEND]

**File:** `src/components/hero/TopDeals.ts`

**Changes:**
1. Change the outer `<section>` inline style fallback from `#ffffff` to `#F8F8F8` (note: actual value comes from CSS variable)
2. Change the container `<div>` class from `px-4 lg:px-0` to use explicit padding: `padding: 16px 8px 16px 16px` via inline style or Tailwind utilities `pl-4 pr-2 py-4`

**Acceptance criteria:**
- Section background renders as `#F8F8F8`
- Container has asymmetric padding matching spec: 16px top, 8px right, 16px bottom, 16px left

---

#### Task F6: Update product image to fixed 188x188px [FRONTEND]

**File:** `src/components/hero/TopDeals.ts`

**Changes:**
1. In `renderDealPlaceholder()`, change the outer `<div>` from `w-full aspect-square` to `w-[188px] h-[188px]` (fixed size)
2. Ensure the image container does not stretch/shrink -- it should remain exactly 188x188 at all breakpoints
3. On mobile (where cards are narrower), the image may need `mx-auto` to center within the card column

**Acceptance criteria:**
- Product placeholder images render at exactly 188x188px
- Images do not distort at any viewport width

---

#### Task F7: Replace price tag icon with lightning bolt SVG [FRONTEND]

**File:** `src/components/hero/TopDeals.ts`

**Changes:**
1. Replace the `priceTagIcon()` function body with the lightning bolt SVG from `task/TXT 2.txt`
2. Rename function to `lightningBoltIcon()` (update all call sites)
3. Size the SVG wrapper to approximately `w-4 h-5` (16x20px) to fit inline with price text
4. The SVG uses a `<linearGradient>` with `id="paint0_linear_1_17173"` -- ensure the gradient `id` is unique to avoid conflicts if multiple instances exist (prefix with `topdeals-` if needed)

**Acceptance criteria:**
- Lightning bolt icon appears next to each deal price
- Gradient renders correctly (pink #FF988C at bottom to light pink #FFECEB at top)
- Icon is visually aligned with price text

---

#### Task F8: Add price background styling [FRONTEND]

**File:** `src/components/hero/TopDeals.ts`

**Changes:**
1. Wrap the price row (lightning icon + price text) in a `<span>` with:
   - `background-color: var(--topdeals-price-bg, #FFEDED)`
   - `padding: 2px 12px 2px 4px`
   - `border-radius: 2px` (subtle rounding)
   - `display: inline-flex; align-items: center; gap: 4px`
2. Remove the existing `flex items-center gap-1` wrapper if it conflicts

**Acceptance criteria:**
- Price row has a light pink (#FFEDED) background
- Padding matches spec: 2px top, 12px right, 2px bottom, 4px left
- Lightning icon and price text are vertically centered within the background

---

#### Task F9: Update badge, MOQ, and subtitle text [FRONTEND]

**File:** `src/components/hero/TopDeals.ts`

**Changes:**
1. **Badge padding**: Change "Top picks" badge from `px-2 py-0.5` to `px-1 py-0.5` (matching `2px 4px`)
2. **MOQ font size**: Change `text-[10px]` to `text-[14px]`
3. **Subtitle text**: Change "Score the lowest prices" to "Score the lowest prices on Alibaba.com"

**Acceptance criteria:**
- Badge padding is 2px horizontal, 4px vertical (visually tighter)
- MOQ text renders at 14px
- Full subtitle text displays correctly

---

#### Task L4: Update CSS variables and theme tokens for Top Deals redesign [LOGIC]

**Files:** `src/style.css`, `src/utils/themeTokens.ts`

**Changes in `src/style.css`:**
1. Change `--topdeals-bg` default from `#ffffff` to `#F8F8F8`
2. Change `--topdeals-badge-bg` default from `#dc2626` to `#DE0505`
3. Change `--topdeals-moq-color` default from `#6b7280` to `#222222`
4. Add new variable `--topdeals-price-bg: #FFEDED` under the Top Deals section

**Changes in `src/utils/themeTokens.ts`:**
1. Update `section-topdeals` entry: change `--topdeals-bg` default to `#F8F8F8`
2. Update `section-topdeals` entry: change `--topdeals-badge-bg` default to `#DE0505`
3. Update `section-topdeals` entry: change `--topdeals-moq-color` default to `#222222`
4. Add new token: `{ var: '--topdeals-price-bg', type: 'color', default: '#FFEDED', label: 'Price Background' }`

**Acceptance criteria:**
- All CSS variable defaults match the PO spec exactly
- Theme token defaults match CSS variable defaults 1:1
- New `--topdeals-price-bg` variable available in both style.css and theme editor
- `npx vite build` succeeds with no errors

---

#### Task Q5: Visual QA for Top Deals redesign [QA]

**Verification checklist:**
- [ ] Section background is `#F8F8F8` (not white)
- [ ] Container padding is `16px 8px 16px 16px`
- [ ] Product images are exactly 188x188px (use DevTools to measure)
- [ ] "Top picks" badge background is `#DE0505` (bright red, not `#dc2626`)
- [ ] Badge padding is `2px 4px`
- [ ] Lightning bolt SVG displays with pink gradient (not old price tag icon)
- [ ] Price row has `#FFEDED` background with correct padding
- [ ] MOQ text is `14px` size and `#222222` color
- [ ] Subtitle reads "Score the lowest prices on Alibaba.com"
- [ ] Theme editor: "Top Deals" section shows "Price Background" token, changes apply live
- [ ] No horizontal overflow at mobile, tablet, desktop widths
- [ ] No console errors, no TypeScript build errors

**Acceptance criteria:** All checklist items pass

---

### 9.6 Dependency Graph (Top Deals Redesign)

```
L4 (CSS vars + theme tokens) ──> F5, F6, F7, F8, F9 (all can run in parallel after L4)
                                       │
                                  all F tasks ──> Q5 (visual QA)
```

**Note:** F5-F9 all modify the same file (`TopDeals.ts`), so they must be executed sequentially by a single agent to avoid merge conflicts. L4 modifies different files and can run in parallel with F tasks, but F8 depends on the `--topdeals-price-bg` variable from L4.

### 9.7 Files Modified

| File | Action | Owner | Description |
|------|--------|-------|-------------|
| `src/style.css` | Modified | LOGIC | Update 3 defaults, add 1 new variable |
| `src/utils/themeTokens.ts` | Modified | LOGIC | Update 3 defaults, add 1 new token |
| `src/components/hero/TopDeals.ts` | Modified | FRONTEND | 5 visual changes (bg, images, icon, price, text) |
