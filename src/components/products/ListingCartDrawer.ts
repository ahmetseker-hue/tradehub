/**
 * ListingCartDrawer Component
 * Simplified cart drawer for the products listing page.
 * Opens when "Sepete Ekle" is clicked on a product card.
 * Reuses existing cart-drawer CSS classes from style.css.
 * Shows: product image, name, price, quantity stepper, subtotal, confirm button.
 */

import type { ProductListingCard, ProductImageKind, ProductVisual } from '../../types/productListing';

/* ── Product visuals (reuse from ProductListingGrid pattern) ── */
const productVisuals: Record<ProductImageKind, ProductVisual> = {
  jewelry: { background: 'linear-gradient(180deg, #fef9e7 0%, #fdf0c3 100%)', accent: 'rgba(230, 178, 18, 0.3)', stroke: '#8a6800', icon: '<path d="M12 2l2.5 5.5L20 9l-4 4 1 5.5L12 16l-5 2.5 1-5.5-4-4 5.5-1.5Z" /><circle cx="12" cy="10" r="2" />' },
  electronics: { background: 'linear-gradient(180deg, #eef2ff 0%, #dbeafe 100%)', accent: 'rgba(129, 140, 248, 0.3)', stroke: '#4f5fb3', icon: '<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 20h10M12 16v4" /><circle cx="12" cy="10" r="2" />' },
  label: { background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)', accent: 'rgba(74, 222, 128, 0.3)', stroke: '#2d8a5e', icon: '<rect x="4" y="6" width="16" height="12" rx="1" /><path d="M8 10h8M8 13h5" /><circle cx="17" cy="6" r="1.5" />' },
  crafts: { background: 'linear-gradient(180deg, #fdf4ff 0%, #fae8ff 100%)', accent: 'rgba(192, 132, 252, 0.3)', stroke: '#7e22ce', icon: '<path d="M12 2C8.5 2 6 4.5 6 7c0 3 6 8 6 8s6-5 6-8c0-2.5-2.5-5-6-5Z" /><path d="M8 18h8M9 21h6" />' },
  accessory: { background: 'linear-gradient(180deg, #fff7ed 0%, #ffedd5 100%)', accent: 'rgba(251, 146, 60, 0.3)', stroke: '#b45309', icon: '<rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V6a4 4 0 0 1 8 0v4" /><path d="M4 14h16" />' },
  clothing: { background: 'linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)', accent: 'rgba(244, 114, 182, 0.3)', stroke: '#a3456e', icon: '<path d="M8 3h8l2 6v12H6V9l2-6Z" /><path d="M12 3v8M8 3 6 9M16 3l2 6" />' },
  tools: { background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)', accent: 'rgba(100, 116, 139, 0.3)', stroke: '#475569', icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />' },
  packaging: { background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)', accent: 'rgba(251, 191, 36, 0.3)', stroke: '#92700c', icon: '<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" /><path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" /><path d="M10 12h4" />' },
};

/* ── Helpers ── */

function parsePrice(priceStr: string): number {
  const m = priceStr.match(/\$?([\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}

function parseMoq(moqStr: string): number {
  const m = moqStr.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 1;
}

function renderPlaceholder(kind: ProductImageKind): string {
  const v = productVisuals[kind];
  return `
    <div class="w-full h-full" style="background: ${v.background};">
      <div class="w-full h-full flex items-center justify-center">
        <svg class="h-16 w-16" fill="none" stroke-width="1.4" viewBox="0 0 24 24" style="stroke: ${v.stroke};">${v.icon}</svg>
      </div>
    </div>`;
}

/* ── Drawer HTML Shell ── */

/**
 * Returns the empty drawer shell HTML.
 * Content is populated dynamically when a product's "Sepete Ekle" is clicked.
 */
export function ListingCartDrawer(): string {
  return `
    <div class="cart-drawer-overlay" id="listing-cart-overlay">
      <div class="cart-drawer" id="listing-cart-drawer">
        <!-- Header -->
        <div class="cart-drawer-header">
          <h3>Sepete Ekle</h3>
          <button type="button" class="cart-drawer-close" id="listing-cart-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Scrollable body -->
        <div class="cart-drawer-body" id="listing-cart-body">
          <!-- Populated dynamically -->
        </div>

        <!-- Footer -->
        <div class="cart-drawer-footer" id="listing-cart-footer">
          <div class="cart-footer-collapsed">
            <span class="cart-subtotal-label">Subtotal</span>
            <div class="cart-subtotal-right">
              <span class="cart-subtotal-price" id="listing-cart-subtotal">$0.00</span>
            </div>
          </div>
          <button type="button" class="cart-add-btn" id="listing-cart-confirm">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ── Cart state ── */

interface CartItem {
  product: ProductListingCard;
  qty: number;
}

const cartState = new Map<string, CartItem>();

/* ── Init ── */

/**
 * Initialize the listing cart drawer.
 * Handles open/close, quantity stepper, and cart-add dispatch.
 */
export function initListingCartDrawer(products: ProductListingCard[]): void {
  const productMap = new Map(products.map(p => [p.id, p]));

  const overlay = document.getElementById('listing-cart-overlay');
  const drawer = document.getElementById('listing-cart-drawer');
  const body = document.getElementById('listing-cart-body');
  const subtotalEl = document.getElementById('listing-cart-subtotal');
  const closeBtn = document.getElementById('listing-cart-close');
  const confirmBtn = document.getElementById('listing-cart-confirm');

  if (!overlay || !drawer || !body || !subtotalEl || !closeBtn || !confirmBtn) return;

  let currentProductId: string | null = null;
  let currentQty = 1;
  let currentUnitPrice = 0;

  function openDrawer(): void {
    overlay!.classList.add('open');
    drawer!.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer(): void {
    overlay!.classList.remove('open');
    drawer!.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateSubtotal(): void {
    const total = currentUnitPrice * currentQty;
    subtotalEl!.textContent = `$${total.toFixed(2)}`;
  }

  function populateDrawer(product: ProductListingCard): void {
    currentProductId = product.id;
    currentUnitPrice = parsePrice(product.price);
    currentQty = parseMoq(product.moq);

    const images = product.images && product.images.length > 0 ? product.images : [product.imageKind];
    const hasMultipleImages = images.length > 1;

    body!.innerHTML = `
      <!-- Product image slider -->
      <div class="relative w-full aspect-square rounded-lg overflow-hidden mb-4 group" id="listing-drawer-slider" data-slide-count="${images.length}" data-current-slide="0">
        <!-- Slides -->
        <div class="flex w-full h-full transition-transform duration-300 ease-out" id="listing-drawer-track" style="transform: translateX(0%);">
          ${images.map(kind => `<div class="w-full h-full flex-shrink-0">${renderPlaceholder(kind)}</div>`).join('')}
        </div>

        ${hasMultipleImages ? `
        <!-- Prev arrow -->
        <button type="button" id="listing-slider-prev"
                class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors">
          <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <!-- Next arrow -->
        <button type="button" id="listing-slider-next"
                class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors">
          <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        <!-- Dot indicators -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          ${images.map((_, i) => `<span class="listing-drawer-dot block w-2 h-2 rounded-full transition-colors ${i === 0 ? 'bg-white shadow-sm' : 'bg-white/50'}" data-drawer-dot="${i}"></span>`).join('')}
        </div>
        ` : ''}
      </div>

      <!-- Product name -->
      <h4 class="text-[15px] font-semibold text-gray-900 leading-snug mb-3">${product.name}</h4>

      ${product.supplierName ? `<p class="text-[12px] text-gray-500 mb-3">${product.supplierName}</p>` : ''}

      <!-- Price display -->
      <div class="flex items-baseline gap-2 mb-4">
        <span class="text-2xl font-bold text-gray-900">${product.price}</span>
        ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through">${product.originalPrice}</span>` : ''}
        ${product.discount ? `<span class="text-sm font-semibold text-orange-500">${product.discount}</span>` : ''}
      </div>

      <!-- Quantity section -->
      <div class="border-t border-gray-200 pt-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[13px] font-medium text-gray-700">Adet</span>
          <span class="text-[11px] text-gray-400">Min. siparis: ${product.moq}</span>
        </div>
        <div class="flex items-center gap-3">
          <button type="button" id="listing-qty-minus"
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium">
            &minus;
          </button>
          <input type="number" id="listing-qty-input"
                 class="w-20 h-10 text-center border border-gray-300 rounded-lg text-[15px] font-semibold text-gray-900 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
                 value="${currentQty}" min="1">
          <button type="button" id="listing-qty-plus"
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium">
            +
          </button>
        </div>
      </div>

      <!-- Item total preview -->
      <div class="mt-4 p-3 rounded-lg" style="background: #fff7ed;">
        <div class="flex justify-between items-center">
          <span class="text-[13px] text-gray-600">Birim fiyat</span>
          <span class="text-[13px] font-medium text-gray-900">$${currentUnitPrice.toFixed(2)}</span>
        </div>
        <div class="flex justify-between items-center mt-1">
          <span class="text-[13px] text-gray-600">Adet</span>
          <span class="text-[13px] font-medium text-gray-900" id="listing-qty-display">${currentQty}</span>
        </div>
        <div class="flex justify-between items-center mt-2 pt-2 border-t border-orange-200">
          <span class="text-[14px] font-semibold text-gray-900">Toplam</span>
          <span class="text-[14px] font-bold text-orange-600" id="listing-item-total">$${(currentUnitPrice * currentQty).toFixed(2)}</span>
        </div>
      </div>
    `;

    updateSubtotal();
  }

  /* ── Open drawer on "Sepete Ekle" card button click ── */
  document.addEventListener('click', (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-add-to-cart]');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const productId = btn.dataset.addToCart;
    if (!productId) return;

    const product = productMap.get(productId);
    if (!product) return;

    populateDrawer(product);
    openDrawer();
  });

  /* ── Close handlers ── */
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDrawer();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeDrawer();
  });

  /* ── Drawer image slider navigation ── */
  function navigateDrawerSlider(direction: number): void {
    const slider = document.getElementById('listing-drawer-slider');
    const track = document.getElementById('listing-drawer-track');
    if (!slider || !track) return;

    const count = parseInt(slider.dataset.slideCount || '1', 10);
    if (count <= 1) return;

    let current = parseInt(slider.dataset.currentSlide || '0', 10);
    current += direction;
    if (current < 0) current = count - 1;
    if (current >= count) current = 0;

    slider.dataset.currentSlide = String(current);
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots
    const dots = slider.querySelectorAll<HTMLElement>('.listing-drawer-dot');
    dots.forEach((dot, i) => {
      if (i === current) {
        dot.classList.remove('bg-white/50');
        dot.classList.add('bg-white', 'shadow-sm');
      } else {
        dot.classList.remove('bg-white', 'shadow-sm');
        dot.classList.add('bg-white/50');
      }
    });
  }

  /* ── Quantity stepper + slider (event delegation inside body) ── */
  body.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Slider prev/next
    if (target.id === 'listing-slider-prev' || target.closest('#listing-slider-prev')) {
      navigateDrawerSlider(-1);
      return;
    }
    if (target.id === 'listing-slider-next' || target.closest('#listing-slider-next')) {
      navigateDrawerSlider(1);
      return;
    }
    // Slider dot
    const dot = target.closest<HTMLElement>('[data-drawer-dot]');
    if (dot) {
      const slider = document.getElementById('listing-drawer-slider');
      const track = document.getElementById('listing-drawer-track');
      if (slider && track) {
        const idx = parseInt(dot.dataset.drawerDot || '0', 10);
        slider.dataset.currentSlide = String(idx);
        track.style.transform = `translateX(-${idx * 100}%)`;
        slider.querySelectorAll<HTMLElement>('.listing-drawer-dot').forEach((d, i) => {
          if (i === idx) {
            d.classList.remove('bg-white/50');
            d.classList.add('bg-white', 'shadow-sm');
          } else {
            d.classList.remove('bg-white', 'shadow-sm');
            d.classList.add('bg-white/50');
          }
        });
      }
      return;
    }

    // Quantity stepper
    if (target.id === 'listing-qty-minus' || target.closest('#listing-qty-minus')) {
      if (currentQty > 1) {
        currentQty--;
        updateQtyUI();
      }
    }

    if (target.id === 'listing-qty-plus' || target.closest('#listing-qty-plus')) {
      currentQty++;
      updateQtyUI();
    }
  });

  body.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.id === 'listing-qty-input') {
      const val = parseInt(target.value, 10);
      currentQty = isNaN(val) || val < 1 ? 1 : val;
      updateQtyUI();
    }
  });

  function updateQtyUI(): void {
    const input = document.getElementById('listing-qty-input') as HTMLInputElement | null;
    const display = document.getElementById('listing-qty-display');
    const itemTotal = document.getElementById('listing-item-total');
    if (input) input.value = String(currentQty);
    if (display) display.textContent = String(currentQty);
    if (itemTotal) itemTotal.textContent = `$${(currentUnitPrice * currentQty).toFixed(2)}`;
    updateSubtotal();
  }

  /* ── Confirm add to cart ── */
  confirmBtn.addEventListener('click', () => {
    if (!currentProductId) return;

    const product = productMap.get(currentProductId);
    if (!product) return;

    // Accumulate in cart state
    const existing = cartState.get(currentProductId);
    if (existing) {
      existing.qty += currentQty;
    } else {
      cartState.set(currentProductId, { product, qty: currentQty });
    }

    // Build grouped items by supplier for header popover
    let totalQty = 0;
    let grandTotal = 0;

    // Group cart items by supplier
    const supplierGroups = new Map<string, {
      supplierName: string;
      productTitle: string;
      items: { label: string; unitPrice: number; qty: number; colorValue: string }[];
    }>();

    for (const item of cartState.values()) {
      const uPrice = parsePrice(item.product.price);
      totalQty += item.qty;
      grandTotal += uPrice * item.qty;

      const supplier = item.product.supplierName || 'Supplier';
      const visual = productVisuals[item.product.imageKind];

      if (!supplierGroups.has(supplier)) {
        supplierGroups.set(supplier, {
          supplierName: supplier,
          productTitle: item.product.name,
          items: [],
        });
      }

      const group = supplierGroups.get(supplier)!;
      group.items.push({
        label: `${item.qty} adet, ${item.product.name.length > 40 ? item.product.name.substring(0, 40) + '...' : item.product.name}`,
        unitPrice: uPrice,
        qty: item.qty,
        colorValue: visual?.stroke || '#e5e7eb',
      });
    }

    const groupedItems = Array.from(supplierGroups.values());

    // Dispatch cart-add event with groupedItems for multi-supplier header rendering
    document.dispatchEvent(new CustomEvent('cart-add', {
      detail: {
        productTitle: product.name,
        supplierName: product.supplierName || '',
        unitPrice: currentUnitPrice,
        quantity: totalQty,
        itemTotal: currentUnitPrice * currentQty,
        grandTotal,
        groupedItems,
      },
    }));

    // Close drawer
    closeDrawer();

    // Brief visual feedback on the card button
    const cardBtn = document.querySelector<HTMLElement>(`[data-add-to-cart="${currentProductId}"]`);
    if (cardBtn) {
      const original = cardBtn.textContent;
      cardBtn.textContent = 'Eklendi!';
      cardBtn.classList.replace('bg-orange-500', 'bg-green-500');
      cardBtn.classList.replace('hover:bg-orange-600', 'hover:bg-green-600');
      setTimeout(() => {
        cardBtn.textContent = original;
        cardBtn.classList.replace('bg-green-500', 'bg-orange-500');
        cardBtn.classList.replace('hover:bg-green-600', 'hover:bg-orange-600');
      }, 1500);
    }
  });
}
