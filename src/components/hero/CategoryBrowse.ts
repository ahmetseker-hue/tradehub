/**
 * CategoryBrowse Component
 * Alibaba-style vertical category list placed below the welcome bar.
 * Clicking a category opens a popup modal with sidebar + product grid
 * (same logic as MegaMenu "All Categories" view).
 */

import { megaCategories, getCategoryIcon } from '../header';

/* ──── Product item renderer (same style as MegaMenu) ──── */

function renderProductItem(product: { name: string; href: string; badge?: boolean }): string {
  return `
    <a href="${product.href}" class="flex flex-col items-center gap-2 group/product">
      <div class="relative w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover/product:ring-2 group-hover/product:ring-primary-300 transition-all">
        <svg class="w-8 h-8 text-gray-300 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75Z"/>
        </svg>
        ${product.badge ? '<span class="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>' : ''}
      </div>
      <span class="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight group-hover/product:text-primary-600 dark:group-hover/product:text-primary-400 transition-colors max-w-20">${product.name}</span>
    </a>
  `;
}

/* ──── Popup modal: sidebar + product grid ──── */

function renderCategoryPopup(): string {
  const ACT = 'text-gray-900 bg-white border-l-2 border-primary-500 font-medium dark:text-white dark:bg-gray-800';
  const INACT = 'text-gray-600 hover:bg-white hover:text-gray-900 border-l-2 border-transparent dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white';

  return `
    <!-- Category Popup Overlay -->
    <div id="cat-popup-overlay" class="fixed inset-0 z-[var(--z-backdrop)] bg-black/50 opacity-0 pointer-events-none transition-opacity duration-200"></div>

    <!-- Category Popup Panel -->
    <div id="cat-popup-panel" class="fixed inset-0 z-[var(--z-modal)] flex items-end lg:items-start justify-center lg:pt-20 opacity-0 pointer-events-none transition-opacity duration-200">
      <div id="cat-popup-sheet" class="bg-white dark:bg-gray-800 rounded-t-2xl lg:rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-full lg:max-w-5xl max-h-[85vh] lg:max-h-[80vh] flex flex-col overflow-hidden transition-transform duration-200 will-change-transform">

        <!-- Drag handle (mobile) -->
        <div id="cat-popup-drag-handle" class="lg:hidden flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing flex-shrink-0">
          <div class="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div>

        <!-- Header -->
        <div id="cat-popup-header" class="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 select-none">
          <h2 id="cat-popup-title" class="text-lg font-bold text-gray-900 dark:text-white">Categories for you</h2>
          <div class="flex items-center gap-4">
            <a href="/featured" class="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 hidden lg:inline">Browse featured selections</a>
            <button id="cat-popup-close" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Close">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body: sidebar + content -->
        <div class="flex flex-col lg:flex-row flex-1 min-h-0">
          <!-- Sidebar -->
          <div class="w-full lg:w-56 lg:flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 overflow-x-auto lg:overflow-x-visible overflow-y-auto bg-gray-50 dark:bg-gray-900" id="cat-popup-sidebar">
            <ul class="py-1 flex lg:block overflow-x-auto lg:overflow-x-visible gap-1 px-2 lg:px-0">
              ${megaCategories.map((cat, index) => `
                <li class="flex-shrink-0 lg:flex-shrink">
                  <button
                    type="button"
                    class="cat-popup-btn flex items-center gap-2 lg:gap-3 w-full px-3 lg:px-4 py-2 lg:py-2.5 text-sm text-left transition-colors whitespace-nowrap lg:whitespace-normal ${index === 0 ? ACT : INACT}"
                    data-category="${cat.id}"
                  >
                    <span class="flex-shrink-0 text-gray-400">${getCategoryIcon(cat.icon)}</span>
                    <span class="flex-1 truncate">${cat.name}</span>
                    <svg class="w-4 h-4 text-gray-400 flex-shrink-0 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                  </button>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Content: product grid for active category -->
          <div class="flex-1 overflow-y-auto px-4 lg:px-6 py-5" id="cat-popup-content">
            ${megaCategories.map(cat => `
              <div class="cat-popup-section hidden" data-popup-section="${cat.id}">
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-5 gap-x-4">
                  ${cat.products.map(product => renderProductItem(product)).join('')}
                  <!-- View all item -->
                  <a href="/category/${cat.id}" class="flex flex-col items-center gap-2 group/product">
                    <div class="w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover/product:border-primary-300 transition-all">
                      <svg class="w-7 h-7 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"/>
                      </svg>
                    </div>
                    <span class="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight group-hover/product:text-primary-600 transition-colors">View all</span>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ──── Main component ──── */

export function CategoryBrowse(): string {
  return `
        <div class="relative h-[300px] w-full flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden group/panel lg:w-[300px]">
          <!-- Category List -->
          <ul class="h-full overflow-y-auto pb-12">
            ${megaCategories.map(cat => `
              <li>
                <button
                  type="button"
                  class="category-browse-item flex items-center gap-3.5 w-full px-5 py-3.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white transition-colors group text-left"
                  data-category-id="${cat.id}"
                >
                  <span class="flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    ${getCategoryIcon(cat.icon)}
                  </span>
                  <span class="flex-1 font-medium">${cat.name}</span>
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                  </svg>
                </button>
              </li>
            `).join('')}
          </ul>
          <!-- View All: floating over categories, visible on hover -->
          <button
            type="button"
            id="category-browse-view-all"
            class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-600 opacity-0 group-hover/panel:opacity-100 transition-opacity hover:text-gray-900 dark:hover:text-white cursor-pointer"
          >
            <span>View all</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

    <!-- Category Popup Modal -->
    ${renderCategoryPopup()}
  `;
}

/* ──── Init: click handlers, sidebar navigation, close ──── */

export function initCategoryBrowse(): void {
  const overlay = document.getElementById('cat-popup-overlay');
  const panel = document.getElementById('cat-popup-panel');
  const closeBtn = document.getElementById('cat-popup-close');
  const title = document.getElementById('cat-popup-title');
  const sidebarBtns = document.querySelectorAll<HTMLButtonElement>('.cat-popup-btn');
  const sections = document.querySelectorAll<HTMLElement>('.cat-popup-section');
  const browseItems = document.querySelectorAll<HTMLButtonElement>('.category-browse-item');
  const viewAllBtn = document.getElementById('category-browse-view-all');

  if (!overlay || !panel || !closeBtn || !title) return;

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      openPopup('for-you');
    });
  }

  const ACT = ['text-gray-900', 'bg-white', 'border-primary-500', 'font-medium', 'dark:text-white', 'dark:bg-gray-800'];
  const INACT = ['text-gray-600', 'hover:bg-white', 'hover:text-gray-900', 'border-transparent', 'dark:text-gray-400', 'dark:hover:bg-gray-800', 'dark:hover:text-white'];

  function openPopup(categoryId: string): void {
    overlay!.style.opacity = '1';
    overlay!.style.pointerEvents = 'auto';
    panel!.style.opacity = '1';
    panel!.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    showCategory(categoryId);
  }

  function closePopup(): void {
    overlay!.style.opacity = '0';
    overlay!.style.pointerEvents = 'none';
    panel!.style.opacity = '0';
    panel!.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  function showCategory(categoryId: string): void {
    // Update title
    const cat = megaCategories.find(c => c.id === categoryId);
    if (cat) title!.textContent = cat.name;

    // Highlight sidebar button
    sidebarBtns.forEach(btn => {
      btn.classList.remove(...ACT);
      btn.classList.add(...INACT);
    });
    const activeBtn = document.querySelector<HTMLButtonElement>(`.cat-popup-btn[data-category="${categoryId}"]`);
    if (activeBtn) {
      activeBtn.classList.remove(...INACT);
      activeBtn.classList.add(...ACT);
    }

    // Show matching section, hide others
    sections.forEach(sec => {
      sec.classList.toggle('hidden', sec.getAttribute('data-popup-section') !== categoryId);
    });
  }

  // Browse list items → open popup
  browseItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-category-id');
      if (id) openPopup(id);
    });
  });

  // Sidebar buttons → switch category
  sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-category');
      if (id) showCategory(id);
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  // ── Drag-down to close (mouse + touch) ──
  const sheet = document.getElementById('cat-popup-sheet');
  const dragHandle = document.getElementById('cat-popup-drag-handle');
  const popupHeader = document.getElementById('cat-popup-header');
  if (sheet) {
    let startY = 0;
    let deltaY = 0;
    let dragging = false;
    let didDrag = false;

    function beginDrag(y: number) {
      startY = y;
      deltaY = 0;
      dragging = true;
      didDrag = false;
      sheet!.style.transition = 'none';
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    }

    function updateDrag(y: number) {
      if (!dragging) return;
      deltaY = y - startY;
      if (deltaY < 0) deltaY = 0;
      if (deltaY > 5) didDrag = true;
      sheet!.style.transform = `translateY(${deltaY}px)`;
      // Dim overlay proportionally
      const progress = Math.min(deltaY / 300, 1);
      overlay!.style.opacity = String(1 - progress * 0.6);
    }

    function finishDrag() {
      if (!dragging) return;
      dragging = false;
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      sheet!.style.transition = 'transform 0.25s cubic-bezier(.2,.9,.3,1)';
      overlay!.style.transition = 'opacity 0.25s ease';
      if (deltaY > 80) {
        sheet!.style.transform = `translateY(100%)`;
        overlay!.style.opacity = '0';
        setTimeout(() => {
          closePopup();
          sheet!.style.transform = '';
          sheet!.style.transition = '';
        }, 250);
      } else {
        sheet!.style.transform = '';
        overlay!.style.opacity = '1';
      }
    }

    // Prevent close-button click when drag happened
    closeBtn.addEventListener('click', (e) => {
      if (didDrag) { e.stopImmediatePropagation(); didDrag = false; }
    }, true);

    // Mouse: attach on drag handle + header
    [dragHandle, popupHeader].forEach(el => {
      if (!el) return;
      el.addEventListener('mousedown', (e: MouseEvent) => {
        // Skip if clicked directly on close button
        if ((e.target as HTMLElement).closest('#cat-popup-close')) return;
        e.preventDefault();
        beginDrag(e.clientY);
      });
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (!dragging) return;
      e.preventDefault();
      updateDrag(e.clientY);
    });

    document.addEventListener('mouseup', () => {
      if (dragging) finishDrag();
    });

    // Touch: same targets
    [dragHandle, popupHeader].forEach(el => {
      if (!el) return;
      el.addEventListener('touchstart', (e: TouchEvent) => {
        if ((e.target as HTMLElement).closest('#cat-popup-close')) return;
        beginDrag(e.touches[0].clientY);
      }, { passive: true });
    });

    document.addEventListener('touchmove', (e: TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      updateDrag(e.touches[0].clientY);
    }, { passive: false });

    document.addEventListener('touchend', () => {
      if (dragging) finishDrag();
    });
  }
}
