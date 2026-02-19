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
 * Star icon for ratings
 */
function starIcon(): string {
  return `
    <svg class="h-3 w-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Render a single product card with hover zoom effect
 * Key zoom implementation:
 * - Parent container has overflow-hidden to contain zoom
 * - Image wrapper has transition-transform duration-500 ease-out
 * - group-hover/product:scale-110 for 10% zoom on hover
 */
function renderProductListingCard(card: ProductListingCard): string {
  return `
    <a
      href="${card.href}"
      class="group/product relative flex h-full w-full flex-col border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style="background: var(--product-card-bg, #ffffff); border-color: var(--product-card-border, #e5e5e5); border-width: var(--product-card-border-width, 1px); border-radius: var(--product-card-radius, 12px);"
      aria-label="${card.name}"
    >
      <!-- Image area with hover zoom effect -->
      <div class="relative aspect-square w-full flex-shrink-0 overflow-hidden">
        <!-- Zoom wrapper: transition-transform duration-500 ease-out for smooth 500ms zoom -->
        <div class="w-full h-full transition-transform duration-500 ease-out group-hover/product:scale-110">
          ${renderProductPlaceholder(card.imageKind)}
        </div>

        <!-- Camera / image-search icon overlay (top-left) -->
        <div
          class="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full opacity-60 transition-opacity group-hover/product:opacity-100"
          style="background: rgba(0,0,0,0.4); color: #ffffff;"
          aria-hidden="true"
        >
          ${cameraSearchIcon()}
        </div>
      </div>

      <!-- Content area -->
      <div class="flex flex-1 flex-col" style="padding: var(--product-card-padding, 12px);">
        <!-- Product title (2 lines max) -->
        <h3
          class="leading-[1.35] line-clamp-2"
          style="color: var(--product-title-color, #111827); font-size: var(--product-title-size, 13px); font-weight: var(--product-title-weight, 500); height: 2.7em;"
          title="${card.name}"
        >${card.name}</h3>

        <!-- Rating row (if available) -->
        ${card.rating !== undefined ? `
        <div class="mt-1.5 flex items-center gap-1" style="height: 16px;">
          <div class="flex items-center gap-0.5" style="color: #f59e0b;">
            ${starIcon()}
            <span style="font-size: 11px; font-weight: 600;">${card.rating.toFixed(1)}</span>
          </div>
          ${card.reviewCount !== undefined ? `
          <span style="color: #9ca3af; font-size: 10px;">(${card.reviewCount.toLocaleString()})</span>
          ` : ''}
        </div>
        ` : `
        <div class="mt-1.5" style="height: 16px;"></div>
        `}

        <!-- Promo badge row (fixed height -- reserves space even without badge) -->
        <div class="mt-1.5" style="height: 16px;">
          ${card.promo ? `
          <div
            class="inline-flex w-fit items-center gap-1 px-1.5 py-0.5 font-semibold leading-none"
            style="background: var(--product-badge-bg, #FFF3E0); color: var(--product-badge-text, #e65100); font-size: var(--product-badge-size, 10px); border-radius: var(--product-badge-radius, 2px);"
          >
            ${lightningIcon()}
            <span>${card.promo}</span>
          </div>
          ` : ''}
        </div>

        <!-- Price -->
        <p
          class="mt-2 leading-none"
          style="color: var(--product-price-color, #111827); font-size: var(--product-price-size, 16px); font-weight: var(--product-price-weight, 700);"
        >${card.price}</p>

        <!-- MOQ + stats -->
        <p
          class="mt-1.5 leading-none"
          style="color: var(--product-moq-color, #6b7280); font-size: var(--product-moq-size, 11px);"
        >MOQ: ${card.moq} &nbsp; ${card.stats}</p>

        <!-- Verified / supplier row (pinned to bottom, fixed height) -->
        <div class="mt-auto pt-2" style="height: 18px;">
          ${card.verified ? `
          <div
            class="inline-flex w-fit items-center gap-1 font-medium leading-none"
            style="color: var(--product-verified-color, #cc9900); font-size: var(--product-verified-size, 11px);"
          >
            ${verifiedIcon()}
            <span>Verified</span>
            ${card.supplierYears ? `<span class="opacity-60">&middot;</span><span>${card.supplierYears} yrs</span>` : ''}
            ${card.supplierCountry ? `<span class="opacity-60">&middot;</span><span>${card.supplierCountry}</span>` : ''}
          </div>
          ` : card.supplierYears ? `
          <p
            class="leading-none"
            style="color: var(--product-supplier-color, #9ca3af); font-size: var(--product-supplier-size, 10px);"
          >${card.supplierYears} yrs${card.supplierCountry ? ` &middot; ${card.supplierCountry}` : ''}</p>
          ` : ''}
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
    <div class="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <svg class="h-16 w-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-1">Ürün bulunamadı</h3>
      <p class="text-sm text-gray-500">Farklı filtreler veya arama terimleri deneyin</p>
    </div>
  `;
}

/** No-op — ProductListingGrid uses CSS grid, no JS initialization needed. */
export function initProductListingGrid(): void {}

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
 * Export helper to render grid with custom products
 */
export { renderProductListingCard, renderNoResults };
