/**
 * ProductListingGrid Component
 * Alibaba-style product listing grid for products page.
 * Responsive grid with hover zoom effect on product images.
 * Uses CSS transitions for smooth 500ms zoom animation.
 */

import type { ProductListingCard, ProductImageKind, ProductVisual } from '../../types/productListing';
import { mockProductListingCards } from '../../data/mockProductListing';

/**
 * Product visual configurations for placeholder rendering
 * Consistent with ProductGrid.ts pattern
 */
const productVisuals: Record<ProductImageKind, ProductVisual> = {
  jewelry: {
    background: 'linear-gradient(180deg, #fef9e7 0%, #fdf0c3 100%)',
    accent: 'rgba(230, 178, 18, 0.3)',
    stroke: '#8a6800',
    icon: `
      <path d="M12 2l2.5 5.5L20 9l-4 4 1 5.5L12 16l-5 2.5 1-5.5-4-4 5.5-1.5Z" />
      <circle cx="12" cy="10" r="2" />
    `,
  },
  electronics: {
    background: 'linear-gradient(180deg, #eef2ff 0%, #dbeafe 100%)',
    accent: 'rgba(129, 140, 248, 0.3)',
    stroke: '#4f5fb3',
    icon: `
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10M12 16v4" />
      <circle cx="12" cy="10" r="2" />
    `,
  },
  label: {
    background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
    accent: 'rgba(74, 222, 128, 0.3)',
    stroke: '#2d8a5e',
    icon: `
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M8 10h8M8 13h5" />
      <circle cx="17" cy="6" r="1.5" />
    `,
  },
  crafts: {
    background: 'linear-gradient(180deg, #fdf4ff 0%, #fae8ff 100%)',
    accent: 'rgba(192, 132, 252, 0.3)',
    stroke: '#7e22ce',
    icon: `
      <path d="M12 2C8.5 2 6 4.5 6 7c0 3 6 8 6 8s6-5 6-8c0-2.5-2.5-5-6-5Z" />
      <path d="M8 18h8M9 21h6" />
    `,
  },
  accessory: {
    background: 'linear-gradient(180deg, #fff7ed 0%, #ffedd5 100%)',
    accent: 'rgba(251, 146, 60, 0.3)',
    stroke: '#b45309',
    icon: `
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4" />
      <path d="M4 14h16" />
    `,
  },
  clothing: {
    background: 'linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)',
    accent: 'rgba(244, 114, 182, 0.3)',
    stroke: '#a3456e',
    icon: `
      <path d="M8 3h8l2 6v12H6V9l2-6Z" />
      <path d="M12 3v8M8 3 6 9M16 3l2 6" />
    `,
  },
  tools: {
    background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)',
    accent: 'rgba(100, 116, 139, 0.3)',
    stroke: '#475569',
    icon: `
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    `,
  },
  packaging: {
    background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)',
    accent: 'rgba(251, 191, 36, 0.3)',
    stroke: '#92700c',
    icon: `
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
      <path d="M10 12h4" />
    `,
  },
};

/**
 * Render product placeholder image with visual styling
 */
function renderProductPlaceholder(kind: ProductImageKind): string {
  const visual = productVisuals[kind];
  return `
    <div class="relative w-full h-full overflow-hidden" style="background: ${visual.background};" aria-hidden="true">
      <div class="absolute -right-4 -top-4 h-12 w-12 rounded-full opacity-50" style="background: ${visual.accent};"></div>
      <div class="absolute -left-3 bottom-1 h-10 w-10 rounded-full opacity-40" style="background: ${visual.accent};"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <svg
          class="h-14 w-14"
          fill="none"
          stroke-width="1.4"
          viewBox="0 0 24 24"
          style="stroke: ${visual.stroke};"
        >
          ${visual.icon}
        </svg>
      </div>
    </div>
  `;
}

/**
 * Camera search icon for image search overlay
 */
function cameraSearchIcon(): string {
  return `
    <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M3 9a2 2 0 0 1 2-2h2l1-2h8l1 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  `;
}

/**
 * Lightning icon for promo badges
 */
function lightningIcon(): string {
  return `
    <svg class="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9 1L3 9h4v6l6-8H9V1Z" />
    </svg>
  `;
}

/**
 * Verified supplier icon
 */
function verifiedIcon(): string {
  return `
    <svg class="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Render image slider for product card (Alibaba-style)
 * - translateX-based horizontal sliding with CSS transition
 * - group/img for hover detection on image area only
 * - Prev/next arrows + dot indicators visible on hover
 * - "Add to compare" checkbox overlay on hover
 * - Camera icon at bottom-left
 */
function renderImageSlider(card: ProductListingCard): string {
  const images = card.images && card.images.length > 0 ? card.images : [card.imageKind];
  const hasMultiple = images.length > 1;

  const slidesHtml = images.map(kind => `
    <div class="w-full h-full flex-shrink-0">
      ${renderProductPlaceholder(kind)}
    </div>
  `).join('');

  const arrowsHtml = hasMultiple ? `
    <!-- Prev arrow -->
    <button type="button"
      class="product-slider-prev absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 shadow-sm opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-white"
      data-slider-prev="${card.id}" aria-label="Previous">
      <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    <!-- Next arrow -->
    <button type="button"
      class="product-slider-next absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 shadow-sm opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-white"
      data-slider-next="${card.id}" aria-label="Next">
      <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  ` : '';

  const dotsHtml = hasMultiple ? `
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
      ${images.map((_, i) => `
        <span class="product-slider-dot w-1.5 h-1.5 rounded-full transition-colors ${i === 0 ? 'bg-white' : 'bg-white/50'}"
              data-slider-dot="${card.id}" data-dot-index="${i}"></span>
      `).join('')}
    </div>
  ` : '';

  return `
    <div class="relative aspect-square w-full flex-shrink-0 overflow-hidden group/img">
      <!-- Slides container -->
      <div class="product-slider flex w-full h-full transition-transform duration-300 ease-out"
           data-slider-id="${card.id}"
           style="transform: translateX(0%)">
        ${slidesHtml}
      </div>

      ${arrowsHtml}
      ${dotsHtml}

      <!-- Add to compare checkbox (visible on hover) -->
      <label class="absolute top-2 right-2 z-10 flex items-center gap-1.5 px-2 py-1 rounded bg-white/90 shadow-sm text-[11px] text-gray-700 cursor-pointer opacity-0 group-hover/img:opacity-100 transition-opacity"
             onclick="event.preventDefault(); event.stopPropagation();">
        <input type="checkbox" class="w-3.5 h-3.5 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
               data-compare-id="${card.id}" onclick="event.stopPropagation();" />
        Add to compare
      </label>

      <!-- Camera icon (bottom-left) -->
      <div
        class="absolute bottom-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full opacity-60 group-hover/img:opacity-100 transition-opacity"
        style="background: rgba(0,0,0,0.4); color: #ffffff;"
        aria-hidden="true"
      >
        ${cameraSearchIcon()}
      </div>
    </div>
  `;
}

/**
 * Render rating dots (1-5 filled/unfilled circles based on rating)
 */
function renderRatingDots(rating?: number): string {
  if (!rating) return '';
  const full = Math.round(rating);
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="inline-block w-1.5 h-1.5 rounded-full ${i < full ? 'bg-orange-400' : 'bg-gray-300'}"></span>`
  ).join('');
}

/**
 * Green shield icon for "certified" badge
 */
function certifiedShieldIcon(): string {
  return `
    <svg class="w-3.5 h-3.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 1a.75.75 0 0 1 .65.376l1.544 2.672 2.891.87a.75.75 0 0 1 .34 1.236L13.4 8.476l.27 3.027a.75.75 0 0 1-1.025.764L10 11.2l-2.645 1.067a.75.75 0 0 1-1.025-.764l.27-3.027L4.575 6.154a.75.75 0 0 1 .34-1.236l2.89-.87L9.35 1.376A.75.75 0 0 1 10 1Z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Checkmark icon for reorder rate
 */
function checkIcon(): string {
  return `
    <svg class="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Country flag emoji lookup
 */
function countryFlag(code?: string): string {
  const flags: Record<string, string> = {
    CN: '\u{1F1E8}\u{1F1F3}',
    TR: '\u{1F1F9}\u{1F1F7}',
    IN: '\u{1F1EE}\u{1F1F3}',
    BD: '\u{1F1E7}\u{1F1E9}',
    VN: '\u{1F1FB}\u{1F1F3}',
    DE: '\u{1F1E9}\u{1F1EA}',
  };
  return code ? (flags[code] || '') : '';
}

/**
 * Render a single product card (Alibaba-style layout)
 */
function renderProductListingCard(card: ProductListingCard): string {
  // Promo row
  let promoHtml = '<div class="mt-1" style="height: 16px;"></div>';
  if (card.promo) {
    promoHtml = `
      <div class="mt-1 flex items-center gap-1" style="height: 16px;">
        <span class="text-orange-500">${lightningIcon()}</span>
        <span class="text-[11px] font-medium text-orange-600">${card.promo}</span>
      </div>`;
  } else if (card.reorderRate) {
    promoHtml = `
      <div class="mt-1 flex items-center gap-1" style="height: 16px;">
        <span class="text-green-600">${checkIcon()}</span>
        <span class="text-[11px] font-medium text-green-700">Reorder rate ${card.reorderRate}%</span>
      </div>`;
  }

  // Price row
  const originalPriceHtml = card.originalPrice
    ? `<span class="text-[12px] text-gray-400 line-through">${card.originalPrice}</span>` : '';
  const discountHtml = card.discount
    ? `<span class="text-[12px] font-semibold text-orange-500">${card.discount}</span>` : '';

  // Verified + rating row
  const verifiedHtml = card.verified ? `
    <span class="inline-flex items-center gap-0.5 font-medium" style="color: #cc9900;">
      ${verifiedIcon()}
      <span>Verified</span>
    </span>
    <span class="inline-flex items-center gap-px">${renderRatingDots(card.rating)}</span>
    <span class="text-gray-400">&middot;</span>
  ` : '';

  const yearsHtml = card.supplierYears
    ? `<span class="text-gray-500">${card.supplierYears} yrs</span>` : '';

  const countryHtml = card.supplierCountry
    ? `<span>${countryFlag(card.supplierCountry)}</span><span class="text-gray-500">${card.supplierCountry}</span>` : '';

  const ratingTextHtml = card.rating
    ? `<span class="text-gray-500">${card.rating}/5.0</span>${card.reviewCount ? `<span class="text-gray-400">(${card.reviewCount.toLocaleString()})</span>` : ''}` : '';

  return `
    <a
      href="${card.href}"
      class="group/product relative flex h-full w-full flex-col border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style="background: var(--product-card-bg, #ffffff); border-color: var(--product-card-border, #e5e5e5); border-width: var(--product-card-border-width, 1px); border-radius: var(--product-card-radius, 12px);"
      aria-label="${card.name}"
    >
      <!-- Image area with slider -->
      ${renderImageSlider(card)}

      <!-- Content area -->
      <div class="flex flex-1 flex-col p-3">

        <!-- Certified badge -->
        ${card.verified ? `
        <div class="flex items-center gap-1 mb-1.5">
          ${certifiedShieldIcon()}
          <span class="text-[11px] font-medium text-green-700">certified</span>
        </div>
        ` : '<div class="mb-1.5" style="height: 18px;"></div>'}

        <!-- Title -->
        <h3 class="text-[13px] font-medium leading-snug line-clamp-2 text-gray-900"
            style="height: 2.6em;"
            title="${card.name}"
        >${card.name}</h3>

        <!-- Promo / Reorder rate row -->
        ${promoHtml}

        <!-- Price row -->
        <div class="flex items-baseline gap-1.5 flex-wrap mt-1.5">
          <span class="text-[18px] font-bold text-gray-900">${card.price}</span>
          ${originalPriceHtml}
          ${discountHtml}
        </div>

        <!-- MOQ + sold -->
        <p class="text-[11px] text-gray-500 mt-1">
          Min. order: ${card.moq} &nbsp;&nbsp; ${card.stats}
        </p>

        <!-- Supplier name -->
        ${card.supplierName ? `
        <p class="text-[11px] text-gray-500 mt-1 truncate">${card.supplierName}</p>
        ` : ''}

        <!-- Verified + rating row (pinned to bottom) -->
        <div class="mt-auto pt-2 flex items-center gap-1 flex-wrap" style="font-size: 11px;">
          ${verifiedHtml}
          ${yearsHtml}
          ${countryHtml}
          ${ratingTextHtml}
        </div>

        <!-- Action button -->
        <div class="mt-2 flex gap-2">
          <button type="button"
                  class="flex-1 py-2 text-[12px] font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                  data-add-to-cart="${card.id}">
            Sepete Ekle
          </button>
        </div>

      </div>
    </a>
  `;
}

/**
 * No results component for empty state
 */
function renderNoResults(): string {
  return `
    <div class="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <!-- Search illustration -->
      <div class="relative mb-6">
        <div class="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
          <svg class="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <!-- Small X badge -->
        <div class="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
          <svg class="h-4 w-4 text-red-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sonuc bulunamadi</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6">
        Sectiginiz filtrelerle esleesen urun bulunamadi. Filtreleri degistirmeyi veya tumu kaldirmayi deneyin.
      </p>
      <button
        type="button"
        class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
        data-filter-action="clear-all"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
        </svg>
        Filtreleri Temizle
      </button>
    </div>
  `;
}

/** No-op — ProductListingGrid uses CSS grid, no JS initialization needed. */
export function initProductListingGrid(): void {}

/**
 * Navigate a product slider to the given index using translateX.
 * Updates the slider transform and dot indicators.
 */
function navigateSlider(sliderId: string, direction: number): void {
  const slider = document.querySelector<HTMLElement>(`[data-slider-id="${sliderId}"]`);
  if (!slider) return;

  const totalSlides = slider.children.length;
  if (totalSlides <= 1) return;

  // Parse current index from transform
  const currentTransform = slider.style.transform;
  const currentIndex = Math.abs(parseInt(currentTransform.match(/-?(\d+)/)?.[1] || '0')) / 100;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = totalSlides - 1;
  if (newIndex >= totalSlides) newIndex = 0;

  slider.style.transform = `translateX(-${newIndex * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll<HTMLElement>(`[data-slider-dot="${sliderId}"]`);
  dots.forEach((dot, i) => {
    if (i === newIndex) {
      dot.classList.remove('bg-white/50');
      dot.classList.add('bg-white');
    } else {
      dot.classList.remove('bg-white');
      dot.classList.add('bg-white/50');
    }
  });
}

/**
 * Navigate a product slider to a specific index (for dot clicks).
 */
function navigateSliderTo(sliderId: string, targetIndex: number): void {
  const slider = document.querySelector<HTMLElement>(`[data-slider-id="${sliderId}"]`);
  if (!slider) return;

  const totalSlides = slider.children.length;
  if (totalSlides <= 1 || targetIndex < 0 || targetIndex >= totalSlides) return;

  slider.style.transform = `translateX(-${targetIndex * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll<HTMLElement>(`[data-slider-dot="${sliderId}"]`);
  dots.forEach((dot, i) => {
    if (i === targetIndex) {
      dot.classList.remove('bg-white/50');
      dot.classList.add('bg-white');
    } else {
      dot.classList.remove('bg-white');
      dot.classList.add('bg-white/50');
    }
  });
}

/**
 * Initialize product image sliders.
 * Uses event delegation on document for prev/next arrows and dot clicks.
 * Prevents navigation events from following the product card link.
 */
export function initProductSliders(): void {
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check for prev button
    const prevBtn = target.closest<HTMLElement>('[data-slider-prev]');
    if (prevBtn) {
      e.preventDefault();
      e.stopPropagation();
      const sliderId = prevBtn.getAttribute('data-slider-prev');
      if (sliderId) navigateSlider(sliderId, -1);
      return;
    }

    // Check for next button
    const nextBtn = target.closest<HTMLElement>('[data-slider-next]');
    if (nextBtn) {
      e.preventDefault();
      e.stopPropagation();
      const sliderId = nextBtn.getAttribute('data-slider-next');
      if (sliderId) navigateSlider(sliderId, 1);
      return;
    }

    // Check for dot click
    const dotEl = target.closest<HTMLElement>('[data-dot-index]');
    if (dotEl) {
      e.preventDefault();
      e.stopPropagation();
      const sliderId = dotEl.getAttribute('data-slider-dot');
      const dotIndex = parseInt(dotEl.getAttribute('data-dot-index') ?? '0', 10);
      if (sliderId) navigateSliderTo(sliderId, dotIndex);
    }
  });
}

/**
 * ProductListingGrid Component
 * Renders a responsive grid of product cards with hover zoom effect.
 *
 * @param products - Array of products to display (defaults to mock data)
 * @returns HTML string for the product grid
 *
 * Grid Configuration (per spec):
 * - Mobile (< 768px): 2 columns
 * - Tablet (768px - 1023px): 3 columns
 * - Desktop (1024px+): 4 columns
 * See src/style.css .product-grid for CSS implementation
 *
 * Hover Zoom Effect:
 * - transition-transform duration-500 ease-out
 * - group-hover/product:scale-110 (10% zoom)
 */
export function ProductListingGrid(products: ProductListingCard[] = mockProductListingCards): string {
  if (products.length === 0) {
    return `
      <section aria-label="Ürün Listesi" class="flex-1">
        <div
          class="grid product-grid"
          style="gap: var(--product-grid-gap, 12px);"
          role="list"
          aria-label="Ürün listesi"
        >
          ${renderNoResults()}
        </div>
      </section>
    `;
  }

  return `
    <section aria-label="Ürün Listesi" class="flex-1">
      <div
        class="grid product-grid"
        style="gap: var(--product-grid-gap, 12px);"
        role="list"
        aria-label="Ürün listesi"
      >
        ${products.map(card => `<div role="listitem" class="flex">${renderProductListingCard(card)}</div>`).join('')}
      </div>
    </section>
  `;
}

/**
 * Re-render the product grid in-place with a new set of products.
 * Called by the filter engine when filters/sort change.
 */
export function rerenderProductGrid(products: ProductListingCard[]): void {
  const grid = document.querySelector<HTMLElement>('.product-grid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = renderNoResults();
  } else {
    grid.innerHTML = products
      .map(card => `<div role="listitem" class="flex">${renderProductListingCard(card)}</div>`)
      .join('');
  }
}

/**
 * Export helper to render grid with custom products
 */
export { renderProductListingCard, renderNoResults };
