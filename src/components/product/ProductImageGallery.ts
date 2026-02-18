/**
 * ProductImageGallery Component
 * Alibaba-style: vertical scrollable thumbnail strip (left) + large main image (right).
 * Thumbnails change main image on HOVER. Up/down scroll arrows on thumbnail strip.
 * Prev/next arrows on main image. Favorite + camera icons top-right.
 * Gallery container uses aspect-ratio 16/10 matching Alibaba layout.
 */

import { mockProduct } from '../../data/mockProduct';
import { ProductAttributes } from './ProductAttributes';

interface GalleryVisual {
  background: string;
  accent: string;
  stroke: string;
  icon: string;
}

const galleryVisuals: GalleryVisual[] = [
  {
    background: 'linear-gradient(180deg, #fef9e7 0%, #fdf0c3 100%)',
    accent: 'rgba(230, 178, 18, 0.3)',
    stroke: '#8a6800',
    icon: `<path d="M12 2l2.5 5.5L20 9l-4 4 1 5.5L12 16l-5 2.5 1-5.5-4-4 5.5-1.5Z"/><circle cx="12" cy="10" r="2"/>`,
  },
  {
    background: 'linear-gradient(180deg, #fef9e7 0%, #fce8b2 100%)',
    accent: 'rgba(230, 178, 18, 0.25)',
    stroke: '#a07800',
    icon: `<path d="M12 2l2.5 5.5L20 9l-4 4 1 5.5L12 16l-5 2.5 1-5.5-4-4 5.5-1.5Z"/><circle cx="12" cy="10" r="3"/>`,
  },
  {
    background: 'linear-gradient(180deg, #fff7ed 0%, #ffedd5 100%)',
    accent: 'rgba(251, 146, 60, 0.3)',
    stroke: '#b45309',
    icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>`,
  },
  {
    background: 'linear-gradient(180deg, #eef2ff 0%, #dbeafe 100%)',
    accent: 'rgba(129, 140, 248, 0.3)',
    stroke: '#4f5fb3',
    icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/>`,
  },
  {
    background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
    accent: 'rgba(74, 222, 128, 0.3)',
    stroke: '#2d8a5e',
    icon: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v4"/><path d="M8 12v4"/>`,
  },
  {
    background: 'linear-gradient(180deg, #fdf4ff 0%, #fae8ff 100%)',
    accent: 'rgba(192, 132, 252, 0.3)',
    stroke: '#7e22ce',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`,
  },
];

function renderPlaceholder(visual: GalleryVisual, size: 'large' | 'thumb'): string {
  const svgSize = size === 'large' ? 'width="48" height="48"' : 'width="24" height="24"';
  return `
    <div class="relative w-full h-full overflow-hidden" style="background: ${visual.background};" aria-hidden="true">
      <div class="absolute -right-3 -top-3 h-10 w-10 rounded-full opacity-50" style="background: ${visual.accent};"></div>
      <div class="absolute -left-2 bottom-1 h-8 w-8 rounded-full opacity-40" style="background: ${visual.accent};"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <svg ${svgSize} fill="none" stroke-width="1.4" viewBox="0 0 24 24" style="stroke: ${visual.stroke};">
          ${visual.icon}
        </svg>
      </div>
    </div>
  `;
}

const THUMB_SIZE = 60;
const THUMB_GAP = 6;

export function ProductImageGallery(): string {
  const images = mockProduct.images;
  const needsScroll = images.length > 4;

  const thumbsHtml = images.map((img, i) => `
    <div
      class="gallery-thumb${i === 0 ? ' active' : ''}"
      data-index="${i}"
      aria-label="${img.alt}"
    >${renderPlaceholder(galleryVisuals[i % galleryVisuals.length], 'thumb')}</div>
  `).join('');

  // Attributes thumbnail — last slide
  const attrThumbHtml = `
    <div
      class="gallery-thumb gallery-thumb-attrs"
      data-index="${images.length}"
      aria-label="Özellikler"
    >
      <div class="relative w-full h-full overflow-hidden flex items-center justify-center" style="background: linear-gradient(180deg, #f0f4f8 0%, #e2e8f0 100%);" aria-hidden="true">
        <svg width="24" height="24" fill="none" stroke="#64748b" stroke-width="1.4" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      </div>
    </div>
  `;

  return `
    <div id="product-gallery">

      <!-- LEFT: Vertical Thumbnail Strip -->
      <div id="pd-thumb-strip">

        ${needsScroll ? `
        <button type="button" id="thumb-scroll-up" class="pd-thumb-arrow" aria-label="Yukarı kaydır">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
        </button>
        ` : ''}

        <div id="gallery-thumb-list">
          ${thumbsHtml}
          ${attrThumbHtml}
        </div>

        ${needsScroll ? `
        <button type="button" id="thumb-scroll-down" class="pd-thumb-arrow" aria-label="Aşağı kaydır">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        ` : ''}

      </div>

      <!-- RIGHT: Main Image Area (content only) -->
      <div id="gallery-main-image">
        ${renderPlaceholder(galleryVisuals[0], 'large')}
      </div>

      <!-- RIGHT: Attributes Card (hidden by default, replaces main image) -->
      ${ProductAttributes()}

      <!-- Navigation arrows — always visible on all slides -->
      <button type="button" id="gallery-prev" class="gallery-nav-btn" aria-label="Önceki">
        <svg width="16" height="16" fill="none" stroke="#333" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button type="button" id="gallery-next" class="gallery-nav-btn" aria-label="Sonraki">
        <svg width="16" height="16" fill="none" stroke="#333" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>

      <!-- Action buttons — always visible -->
      <div id="gallery-action-btns">
        <button type="button" class="gallery-action-btn" aria-label="Favorilere ekle">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <button type="button" class="gallery-action-btn" aria-label="Görsel ile ara">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9a2 2 0 012-2h2l1-2h8l1 2h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
        </button>
      </div>

    </div>

    <!-- Photos / Attributes tabs -->
    <div id="pd-gallery-tabs">
      <button type="button" class="gallery-view-tab active">Fotoğraflar</button>
      <button type="button" class="gallery-view-tab">Özellikler</button>
    </div>
  `;
}

export function initImageGallery(): void {
  const mainImage = document.getElementById('gallery-main-image');
  const thumbs = document.querySelectorAll<HTMLElement>('.gallery-thumb');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const thumbList = document.getElementById('gallery-thumb-list');
  const scrollUpBtn = document.getElementById('thumb-scroll-up');
  const scrollDownBtn = document.getElementById('thumb-scroll-down');
  const attrCard = document.getElementById('pd-attributes-card');
  const viewTabs = document.querySelectorAll<HTMLButtonElement>('.gallery-view-tab');

  if (!mainImage || thumbs.length === 0) return;

  let currentIndex = 0;
  const imageCount = mockProduct.images.length;
  const totalSlides = imageCount + 1; // images + attributes slide
  const attrsIndex = imageCount;

  function goToSlide(index: number): void {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    const isAttrs = index === attrsIndex;

    // Toggle main image vs attributes card visibility
    mainImage!.classList.toggle('hidden', isAttrs);
    attrCard?.classList.toggle('hidden', !isAttrs);

    // Update image placeholder when showing a photo slide
    if (!isAttrs) {
      const visual = galleryVisuals[index % galleryVisuals.length];
      const placeholder = mainImage!.querySelector('[aria-hidden="true"]');
      if (placeholder) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = renderPlaceholder(visual, 'large');
        mainImage!.replaceChild(wrapper.firstElementChild!, placeholder);
      }
    }

    // Update thumbnail active state
    thumbs.forEach(t => {
      const ti = parseInt(t.dataset.index || '0', 10);
      if (ti === index) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // Update tab active state
    viewTabs.forEach((tab, tabIdx) => {
      // tab 0 = Fotograflar (active for photo slides), tab 1 = Ozellikler (active for attrs)
      if ((tabIdx === 1 && isAttrs) || (tabIdx === 0 && !isAttrs)) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Scroll the active thumbnail into view within the thumb list
    if (thumbList) {
      const activeThumb = thumbList.children[index] as HTMLElement;
      if (activeThumb) {
        const listTop = thumbList.scrollTop;
        const listHeight = thumbList.clientHeight;
        const thumbTop = activeThumb.offsetTop;
        const thumbHeight = activeThumb.offsetHeight;

        if (thumbTop < listTop) {
          thumbList.scrollTo({ top: thumbTop, behavior: 'smooth' });
        } else if (thumbTop + thumbHeight > listTop + listHeight) {
          thumbList.scrollTo({ top: thumbTop + thumbHeight - listHeight, behavior: 'smooth' });
        }
      }
    }
  }

  // HOVER on thumbnails changes slide
  thumbs.forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
      goToSlide(parseInt(thumb.dataset.index || '0', 10));
    });
    thumb.addEventListener('click', () => {
      goToSlide(parseInt(thumb.dataset.index || '0', 10));
    });
  });

  // Prev / Next arrows cycle through all slides including attributes
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex - 1); });
  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex + 1); });

  // Thumbnail scroll up/down
  if (thumbList && scrollUpBtn && scrollDownBtn) {
    const scrollAmount = THUMB_SIZE + THUMB_GAP;

    scrollUpBtn.addEventListener('click', () => {
      thumbList.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    });
    scrollDownBtn.addEventListener('click', () => {
      thumbList.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    });
  }

  // Photos / Attributes tab click handlers
  viewTabs.forEach((tab, tabIdx) => {
    tab.addEventListener('click', () => {
      if (tabIdx === 1) {
        goToSlide(attrsIndex);
      } else {
        goToSlide(0);
      }
    });
  });
}
