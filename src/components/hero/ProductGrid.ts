/**
 * ProductGrid Component
 * Snapshot-matched Alibaba card structure (hFR19) with dynamic content.
 */

interface ProductCard {
  name: string;
  href: string;
  price: string;
  moq: string;
  stats: string;
  imageKind: ProductImageKind;
  imageSrc?: string;
  verified?: boolean;
  supplierYears?: number;
  supplierCountry?: string;
  promoText?: string;
}

type ProductImageKind =
  | 'fashion'
  | 'audio'
  | 'beauty'
  | 'logistics'
  | 'eyewear'
  | 'accessory';

const unsplashReferenceImages = {
  beanie: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&h=1200&q=80',
  earbuds: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1200&h=1200&q=80',
  perfume: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&h=1200&q=80',
  shipping: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&h=1200&q=80',
  catEye: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&h=1200&q=80',
  optical: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&h=1200&q=80',
  smartwatch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&h=1200&q=80',
  bag: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&h=1200&q=80',
  tshirt: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&h=1200&q=80',
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&h=1200&q=80',
  cosmetics: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&h=1200&q=80',
  glassesCase: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&h=1200&q=80',
} as const;

const productCardSeed: ProductCard[] = [
  {
    name: "Custom Beanie Patch Hat | Leather Patch Winter Beanie ADD YOUR LOGO Company Employee...",
    href: '/product-detail.html',
    price: '$1.28-2.99',
    moq: '10 pieces',
    stats: '19,070 sold',
    imageKind: 'fashion',
    imageSrc: unsplashReferenceImages.beanie,
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
  {
    name: 'New Wireless TWS M10 Mini Black Earbuds Earphone Headphone Power Bank In-ear...',
    href: '/product-detail.html',
    price: '$1.30-1.99',
    moq: '1 piece',
    stats: '341 sold',
    imageKind: 'audio',
    imageSrc: unsplashReferenceImages.earbuds,
    verified: true,
    supplierYears: 1,
    supplierCountry: 'CN',
  },
  {
    name: "Hot Sale 125ml High Quality Men's Perfume Floral Fragrance Light and Long Lasting Factory...",
    href: '/product-detail.html',
    price: '$6.02-7.02',
    moq: '10 pieces',
    stats: '490 sold',
    imageKind: 'beauty',
    imageSrc: unsplashReferenceImages.perfume,
    supplierYears: 1,
    supplierCountry: 'CN',
  },
  {
    name: 'Free to Door DHL FEDEX UPS Express Sea Railway Air Shipping Agent China to Egypt Freight...',
    href: '/product-detail.html',
    price: '$0.50-1',
    moq: '1 kilogram',
    stats: '880 views',
    imageKind: 'logistics',
    imageSrc: unsplashReferenceImages.shipping,
    verified: true,
    supplierYears: 1,
    supplierCountry: 'CN',
  },
  {
    name: 'Cross-Border New Style Cat-Eye Glasses Frame Fashion Eyewear...',
    href: '/product-detail.html',
    price: '$1.53-1.62',
    moq: '5 pieces',
    stats: '649 sold',
    imageKind: 'eyewear',
    imageSrc: unsplashReferenceImages.catEye,
    verified: true,
    supplierYears: 1,
    supplierCountry: 'CN',
    promoText: 'Lower priced than similar',
  },
  {
    name: "MORESE 2085 Men's Optical Eyeglasses Frame Full Rim...",
    href: '/product-detail.html',
    price: '$3.65-4.05',
    moq: '2 pieces',
    stats: '228 sold',
    imageKind: 'accessory',
    imageSrc: unsplashReferenceImages.optical,
    verified: true,
    supplierYears: 7,
    supplierCountry: 'CN',
    promoText: 'Lower priced than similar',
  },
  {
    name: '2026 New Smart Fitness Watch Waterproof Touch Screen Men Women...',
    href: '/product-detail.html',
    price: '$4.10-5.90',
    moq: '2 pieces',
    stats: '1,102 sold',
    imageKind: 'accessory',
    imageSrc: unsplashReferenceImages.smartwatch,
    verified: true,
    supplierYears: 3,
    supplierCountry: 'CN',
  },
  {
    name: 'Wholesale Mini Crossbody Bag PU Leather Casual Fashion Design...',
    href: '/product-detail.html',
    price: '$2.10-3.40',
    moq: '20 pieces',
    stats: '2,345 sold',
    imageKind: 'fashion',
    imageSrc: unsplashReferenceImages.bag,
    verified: true,
    supplierYears: 2,
    supplierCountry: 'CN',
  },
  {
    name: 'Oversized Cotton Streetwear Blank T-Shirt Custom Logo Printing...',
    href: '/product-detail.html',
    price: '$2.60-3.20',
    moq: '30 pieces',
    stats: '978 sold',
    imageKind: 'fashion',
    imageSrc: unsplashReferenceImages.tshirt,
    verified: true,
    supplierYears: 4,
    supplierCountry: 'CN',
  },
  {
    name: 'Wireless Bluetooth Stereo Headphones Foldable Deep Bass Sound...',
    href: '/product-detail.html',
    price: '$5.30-7.20',
    moq: '5 pieces',
    stats: '413 sold',
    imageKind: 'audio',
    imageSrc: unsplashReferenceImages.headphones,
    verified: true,
    supplierYears: 1,
    supplierCountry: 'CN',
  },
  {
    name: 'Private Label Skincare Moisturizing Essence Serum Set OEM...',
    href: '/product-detail.html',
    price: '$3.90-6.50',
    moq: '12 pieces',
    stats: '752 sold',
    imageKind: 'beauty',
    imageSrc: unsplashReferenceImages.cosmetics,
    verified: false,
    supplierYears: 2,
    supplierCountry: 'CN',
  },
  {
    name: 'Premium Optical Frames With Case Lightweight Business Style...',
    href: '/product-detail.html',
    price: '$2.95-3.88',
    moq: '6 pieces',
    stats: '529 sold',
    imageKind: 'eyewear',
    imageSrc: unsplashReferenceImages.glassesCase,
    verified: true,
    supplierYears: 5,
    supplierCountry: 'CN',
  },
];

const fallbackByKind: Record<ProductImageKind, string> = {
  fashion: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&h=1200&q=80',
  audio: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&h=1200&q=80',
  beauty: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&h=1200&q=80',
  logistics: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&h=1200&q=80',
  eyewear: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&h=1200&q=80',
  accessory: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&h=1200&q=80',
};

const FIND_SIMILAR_ICON_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 1 2-2h2l1-2h8l1 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><circle cx="12" cy="13" r="3"/></svg>',
)}`;

const VERIFIED_BADGE_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="14" viewBox="0 0 52 14" fill="none"><path d="M7 12 3.5 8.5l1.1-1.1L7 9.8l4.9-4.9L13 6 7 12Z" fill="#0B65C2"/><text x="15" y="10.5" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="700" fill="#0B65C2">Verified</text></svg>',
)}`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function imageSource(card: ProductCard): string {
  return card.imageSrc ?? fallbackByKind[card.imageKind];
}

function formatYears(years?: number): string {
  if (typeof years !== 'number') {
    return '';
  }
  return `${years} yr${years === 1 ? '' : 's'}`;
}

function renderProductCard(card: ProductCard, index: number): string {
  const safeName = escapeHtml(card.name);
  const safePrice = escapeHtml(card.price);
  const safeMoq = escapeHtml(card.moq);
  const safeStats = escapeHtml(card.stats);
  const safeCountry = escapeHtml(card.supplierCountry ?? '');
  const years = escapeHtml(formatYears(card.supplierYears));
  const safeImage = escapeHtml(imageSource(card));

  return `
    <a
      href="${card.href}"
      target="_blank"
      role="listitem"
      data-spm="card-${index}"
      data-spm-anchor-id="a2700.product_home_fy25.just_for_you.${index + 1}"
      pos="${index}"
      scenename="just_for_you"
      aria-label="${safeName}"
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
export function initProductGrid(): void { }

export function ProductGrid(): string {
  return `
    <section
      data-theme-section="productgrid"
      aria-label="Recommended Products"
      style="background-color: var(--product-bg, #f4f4f4); padding-top: 28px; padding-bottom: 28px;"
    >
      <div class="container-wide">
        <div class="grid product-grid home-product-grid" style="gap: var(--product-grid-gap, 8px);" role="list" aria-label="Product listings">
          ${productCardSeed.map((card, index) => renderProductCard(card, index)).join('')}
        </div>
      </div>
    </section>
  `;
}
