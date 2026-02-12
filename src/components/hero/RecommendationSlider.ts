/**
 * RecommendationSlider Component
 * Alibaba-style "Browsing history" / "Keep looking for" cards in a Swiper slider.
 * Shows 3 cards at a time with navigation arrows.
 */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

/* ──── Card data ──── */

interface RecommendationCard {
  title: string;
  subtitle?: string;
  products: { name: string; price: string; href: string }[];
}

const recommendationCards: RecommendationCard[] = [
  {
    title: 'Browsing history',
    products: [
      { name: 'Telescopic Ladder', price: '$500', href: '/search?q=telescopic+ladder' },
      { name: 'LED Monitor', price: '$89.99', href: '/search?q=led+monitor' },
      { name: 'Wireless Earbuds', price: '$12.46', href: '/search?q=wireless+earbuds' },
      { name: 'Smart Watch', price: '$22.50', href: '/search?q=smart+watch' },
    ],
  },
  {
    title: 'Keep looking for',
    subtitle: 'Portable Air Conditioners',
    products: [
      { name: 'Mini AC Unit', price: '$22.45', href: '/search?q=mini+ac' },
      { name: 'Portable Cooler', price: '$74.87', href: '/search?q=portable+cooler' },
      { name: 'Desk Fan AC', price: '$99.99', href: '/search?q=desk+fan+ac' },
      { name: 'Evaporative Cooler', price: '$120', href: '/search?q=evaporative+cooler' },
    ],
  },
  {
    title: 'Keep looking for',
    subtitle: 'Jewelry Findings & Components',
    products: [
      { name: 'Thread Spools', price: '$0.78', href: '/search?q=thread+spools' },
      { name: 'Beading Kit', price: '$4', href: '/search?q=beading+kit' },
      { name: 'Gold Chains', price: '$856.20', href: '/search?q=gold+chains' },
      { name: 'Clasp Set', price: '$0.35', href: '/search?q=clasp+set' },
    ],
  },
  {
    title: 'Keep looking for',
    subtitle: 'Set-top Box',
    products: [
      { name: 'Android TV Box', price: '$22.50', href: '/search?q=android+tv+box' },
      { name: 'Smart 8K Box', price: '$38', href: '/search?q=smart+8k+box' },
      { name: 'Google TV', price: '$48', href: '/search?q=google+tv' },
      { name: 'Streaming Box', price: '$23.99', href: '/search?q=streaming+box' },
    ],
  },
  {
    title: 'Keep looking for',
    subtitle: 'Office Chairs',
    products: [
      { name: 'Ergonomic Chair', price: '$355', href: '/search?q=ergonomic+chair' },
      { name: 'Executive Chair', price: '$29', href: '/search?q=executive+chair' },
      { name: 'Gaming Chair', price: '$28', href: '/search?q=gaming+chair' },
      { name: 'Mesh Office Chair', price: '$91.99', href: '/search?q=mesh+office+chair' },
    ],
  },
  {
    title: 'Keep looking for',
    subtitle: 'LCL+Express',
    products: [
      { name: 'Cargo Service', price: '$2', href: '/search?q=cargo+service' },
      { name: 'Shipping Agent', price: '$2', href: '/search?q=shipping+agent' },
      { name: 'Express Logistics', price: '$1.25', href: '/search?q=express+logistics' },
      { name: 'Air Freight', price: '$0.80', href: '/search?q=air+freight' },
    ],
  },
];

/* ──── Render a single card ──── */

function renderCard(card: RecommendationCard): string {
  return `
    <div class="swiper-slide">
      <div class="bg-[#f8f8f8] dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 mx-auto" style="max-width: 242px; height: 304px;">
        <!-- Card Header -->
        <div class="mb-3">
          <h3 class="text-xs font-bold text-gray-900 dark:text-white leading-tight">${card.title}</h3>
          ${card.subtitle ? `<p class="text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5">${card.subtitle}</p>` : ''}
        </div>
        <!-- Product Grid 2x2 -->
        <div class="grid grid-cols-2 gap-2">
          ${card.products.map(product => `
            <a href="${product.href}" class="group/item relative block">
              <div class="relative w-full aspect-square rounded-md bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex items-center justify-center group-hover/item:border-primary-300 transition-colors overflow-hidden">
                <svg class="w-7 h-7 text-gray-200 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75Z"/>
                </svg>
                <!-- Price overlay -->
                <span class="absolute bottom-1 left-1 text-[10px] font-bold text-gray-900 dark:text-white">${product.price}</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ──── Main component ──── */

export function RecommendationSlider(): string {
  return `
    <div class="relative recommendation-slider-wrapper">
      <div class="swiper recommendation-swiper">
        <div class="swiper-wrapper">
          ${recommendationCards.map(card => renderCard(card)).join('')}
        </div>
      </div>
      <!-- Navigation Arrows -->
      <button class="rec-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors disabled:opacity-30 disabled:cursor-default">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button class="rec-swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors disabled:opacity-30 disabled:cursor-default">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;
}

/* ──── Init Swiper ──── */

export function initRecommendationSlider(): void {
  new Swiper('.recommendation-swiper', {
    modules: [Navigation],
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 12,
    navigation: {
      nextEl: '.rec-swiper-next',
      prevEl: '.rec-swiper-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
}
