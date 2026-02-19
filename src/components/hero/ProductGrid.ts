/**
 * ProductGrid Component
 * Alibaba-style product listing — CSS grid flowing downward.
 * Full-width background extending edge-to-edge, cards inside container-boxed.
 * No section header, no Swiper — just a responsive grid of product cards.
 */

interface ProductCard {
  name: string;
  href: string;
  price: string;
  moq: string;
  stats: string;
  imageKind: ProductImageKind;
  promo?: string;
  verified?: boolean;
  supplierYears?: number;
  supplierCountry?: string;
}

type ProductImageKind =
  | 'jewelry'
  | 'electronics'
  | 'label'
  | 'crafts'
  | 'accessory'
  | 'clothing'
  | 'tools'
  | 'packaging';

interface ProductVisual {
  background: string;
  accent: string;
  stroke: string;
  icon: string;
}

const productCards: ProductCard[] = [
  {
    name: 'Custom Gold Plated Stainless Steel Necklace Pendant',
    href: '/product-detail.html',
    price: '$1.80-2',
    moq: '3 pieces',
    stats: '4,056 sold',
    imageKind: 'jewelry',
    promo: '180-day lowest prices',
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
  {
    name: 'Smart WiFi Security Camera 1080P Night Vision',
    href: '/product-detail.html',
    price: '$8.50-12',
    moq: '10 pieces',
    stats: '1,280 sold',
    imageKind: 'electronics',
    verified: true,
    supplierYears: 7,
    supplierCountry: 'CN',
  },
  {
    name: 'Custom Printed Waterproof Vinyl Sticker Label Roll',
    href: '/product-detail.html',
    price: '$0.02-0.05',
    moq: '1000 pieces',
    stats: '15,200 sold',
    imageKind: 'label',
    promo: '180-day lowest prices',
    verified: false,
    supplierYears: 3,
    supplierCountry: 'CN',
  },
  {
    name: 'Handmade Dried Flower Resin Phone Case Mold Kit',
    href: '/product-detail.html',
    price: '$2.40-3.80',
    moq: '20 pieces',
    stats: '890 sold',
    imageKind: 'crafts',
    verified: true,
    supplierYears: 2,
    supplierCountry: 'CN',
  },
  {
    name: 'Leather Minimalist Card Holder Wallet RFID Blocking',
    href: '/product-detail.html',
    price: '$1.50-2.20',
    moq: '50 pieces',
    stats: '6,730 sold',
    imageKind: 'accessory',
    verified: true,
    supplierYears: 6,
    supplierCountry: 'CN',
  },
  {
    name: 'Oversized Cotton Vintage Graphic Print T-Shirt Unisex',
    href: '/product-detail.html',
    price: '$3.20-4.50',
    moq: '30 pieces',
    stats: '9,450 sold',
    imageKind: 'clothing',
    promo: '180-day lowest prices',
    verified: true,
    supplierYears: 4,
    supplierCountry: 'CN',
  },
  {
    name: 'Professional Cordless Electric Screwdriver Set 48pcs',
    href: '/product-detail.html',
    price: '$6.80-9.50',
    moq: '5 pieces',
    stats: '2,150 sold',
    imageKind: 'tools',
    verified: false,
    supplierYears: 8,
    supplierCountry: 'CN',
  },
  {
    name: 'Kraft Paper Gift Box Custom Logo Packaging Wholesale',
    href: '/product-detail.html',
    price: '$0.15-0.40',
    moq: '500 pieces',
    stats: '74 views',
    imageKind: 'packaging',
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
  {
    name: 'Titanium Steel Cuban Link Chain Bracelet for Men',
    href: '/product-detail.html',
    price: '$2.10-3.60',
    moq: '10 pieces',
    stats: '3,580 sold',
    imageKind: 'jewelry',
    verified: true,
    supplierYears: 4,
    supplierCountry: 'CN',
  },
  {
    name: 'Portable Mini Bluetooth Speaker Waterproof IPX7',
    href: '/product-detail.html',
    price: '$4.20-6',
    moq: '20 pieces',
    stats: '5,610 sold',
    imageKind: 'electronics',
    promo: '180-day lowest prices',
    verified: false,
    supplierYears: 3,
    supplierCountry: 'CN',
  },
  {
    name: 'Eco-Friendly Bamboo Fiber Cotton Tote Bag Custom Print',
    href: '/product-detail.html',
    price: '$0.80-1.50',
    moq: '200 pieces',
    stats: '11,340 sold',
    imageKind: 'packaging',
    verified: true,
    supplierYears: 6,
    supplierCountry: 'CN',
  },
  {
    name: 'Diamond Painting Kit Full Drill 5D DIY Craft Set',
    href: '/product-detail.html',
    price: '$1.20-2.80',
    moq: '10 pieces',
    stats: '7,890 sold',
    imageKind: 'crafts',
    verified: true,
    supplierYears: 3,
    supplierCountry: 'CN',
  },
  {
    name: 'Industrial Heat Resistant Silicone Rubber Gasket Seal',
    href: '/product-detail.html',
    price: '$0.05-0.12',
    moq: '5000 pieces',
    stats: '320 sold',
    imageKind: 'tools',
    verified: false,
    supplierYears: 10,
    supplierCountry: 'CN',
  },
  {
    name: 'Smart LED Desk Lamp USB Rechargeable Touch Control',
    href: '/product-detail.html',
    price: '$5.60-8.20',
    moq: '10 pieces',
    stats: '2,670 sold',
    imageKind: 'electronics',
    verified: true,
    supplierYears: 4,
    supplierCountry: 'CN',
  },
  {
    name: 'Custom Woven Clothing Label Tags Satin Fabric Brand',
    href: '/product-detail.html',
    price: '$0.01-0.03',
    moq: '2000 pieces',
    stats: '28,900 sold',
    imageKind: 'label',
    verified: true,
    supplierYears: 9,
    supplierCountry: 'CN',
  },
  {
    name: 'Vintage Genuine Leather Belt Men Automatic Buckle',
    href: '/product-detail.html',
    price: '$2.80-4.20',
    moq: '30 pieces',
    stats: '5,120 sold',
    imageKind: 'accessory',
    promo: '180-day lowest prices',
    verified: true,
    supplierYears: 7,
    supplierCountry: 'CN',
  },
  {
    name: 'Women Summer Floral Print Maxi Dress V-Neck Casual',
    href: '/product-detail.html',
    price: '$6.50-9',
    moq: '5 pieces',
    stats: '3,240 sold',
    imageKind: 'clothing',
    verified: false,
    supplierYears: 2,
    supplierCountry: 'CN',
  },
  {
    name: 'Corrugated Mailer Box Custom Shipping Package Brown',
    href: '/product-detail.html',
    price: '$0.25-0.60',
    moq: '500 pieces',
    stats: '18,700 sold',
    imageKind: 'packaging',
    promo: '180-day lowest prices',
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
  {
    name: 'Sterling Silver Cubic Zirconia Stud Earrings Women',
    href: '/product-detail.html',
    price: '$0.90-1.60',
    moq: '20 pieces',
    stats: '8,950 sold',
    imageKind: 'jewelry',
    verified: true,
    supplierYears: 6,
    supplierCountry: 'CN',
  },
  {
    name: 'Adjustable Torque Wrench Set Chrome Vanadium Steel',
    href: '/product-detail.html',
    price: '$7.80-11',
    moq: '3 pieces',
    stats: '1,430 sold',
    imageKind: 'tools',
    verified: true,
    supplierYears: 8,
    supplierCountry: 'CN',
  },
  {
    name: 'Macrame Handwoven Wall Hanging Boho Home Decor',
    href: '/product-detail.html',
    price: '$3.50-5.80',
    moq: '10 pieces',
    stats: '2,340 sold',
    imageKind: 'crafts',
    verified: false,
    supplierYears: 2,
    supplierCountry: 'CN',
  },
  {
    name: 'Wireless Noise Cancelling Over-Ear Headphones ANC',
    href: '/product-detail.html',
    price: '$9.80-15',
    moq: '5 pieces',
    stats: '6,180 sold',
    imageKind: 'electronics',
    promo: '180-day lowest prices',
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
  {
    name: 'Unisex Polarized UV400 Aviator Sunglasses Metal Frame',
    href: '/product-detail.html',
    price: '$1.20-2.40',
    moq: '50 pieces',
    stats: '14,200 sold',
    imageKind: 'accessory',
    verified: true,
    supplierYears: 4,
    supplierCountry: 'CN',
  },
  {
    name: 'Holographic Laser Self-Adhesive Label Sticker Sheet',
    href: '/product-detail.html',
    price: '$0.03-0.08',
    moq: '3000 pieces',
    stats: '9,100 sold',
    imageKind: 'label',
    verified: false,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
];

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

function renderProductPlaceholder(kind: ProductImageKind): string {
  const visual = productVisuals[kind];
  return `
    <div class="relative w-full h-full overflow-hidden" style="background: ${visual.background};" aria-hidden="true">
      <div class="absolute -right-4 -top-4 h-12 w-12 rounded-full opacity-50" style="background: ${visual.accent};"></div>
      <div class="absolute -left-3 bottom-1 h-10 w-10 rounded-full opacity-40" style="background: ${visual.accent};"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <svg
          class="h-14 w-14 transition-transform duration-300 group-hover/product:scale-110"
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

function cameraSearchIcon(): string {
  return `
    <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M3 9a2 2 0 0 1 2-2h2l1-2h8l1 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  `;
}

function lightningIcon(): string {
  return `
    <svg class="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9 1L3 9h4v6l6-8H9V1Z" />
    </svg>
  `;
}

function verifiedIcon(): string {
  return `
    <svg class="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
    </svg>
  `;
}

function renderProductCard(card: ProductCard): string {
  return `
    <a
      href="${card.href}"
      class="group/product relative flex h-full w-full flex-col border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style="background: var(--product-card-bg, #ffffff); border-color: var(--product-card-border, #e5e5e5); border-width: var(--product-card-border-width, 1px); border-radius: var(--product-card-radius, 12px);"
      aria-label="${card.name}"
    >
      <!-- Image area -->
      <div class="relative aspect-square w-full flex-shrink-0">
        ${renderProductPlaceholder(card.imageKind)}

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

/** No-op — ProductGrid uses CSS grid, no JS initialization needed. */
export function initProductGrid(): void {}

export function ProductGrid(): string {
  return `
    <section
      aria-label="Recommended Products"
      style="background-color: var(--product-bg, #F8F8F8); padding-top: 24px; padding-bottom: 48px;"
    >
      <div class="container-boxed">
        <div
          class="grid product-grid"
          style="gap: var(--product-grid-gap, 12px);"
          role="list"
          aria-label="Product listings"
        >
          ${productCards.map(card => `<div role="listitem" class="flex">${renderProductCard(card)}</div>`).join('')}
        </div>
      </div>
    </section>
  `;
}
