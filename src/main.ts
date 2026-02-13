import './style.css'
import { initFlowbite } from 'flowbite'

// Header components
import { TopBar, SubHeader, SearchArea, initSearchArea, initStickyHeaderSearch, MegaMenu, initMegaMenu } from './components/header'

// Hero components
import {
  CategoryBrowse,
  initCategoryBrowse,
  RecommendationSlider,
  initRecommendationSlider,
  HeroSideBannerSlider,
  initHeroSideBannerSlider,
} from './components/hero'

// Footer components
import { FooterLinks } from './components/footer'

// Floating components
import { FloatingPanel, initFloatingPanel } from './components/floating'

// Utilities
import { initAnimatedPlaceholder } from './utils/animatedPlaceholder'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Sticky Header (global, stays sticky across full page) -->
  <div id="sticky-header" class="sticky top-0 z-[var(--z-header)] transition-[background-color,border-color,box-shadow] duration-300">
    ${TopBar()}
    ${SubHeader()}
  </div>

  <!-- Hero Search Section -->
  <header style="background: linear-gradient(135deg, #fff7ed 0%, #f6f4e8 25%, #fff1f2 50%, #fbfaf0 75%, #fff7ed 100%); background-size: 300% 300%; animation: searchGradientShift 12s ease infinite;">
    ${SearchArea()}
  </header>

  <!-- Mega Menu (fixed overlay, positioned by JS) -->
  ${MegaMenu()}

  <!-- Main Content -->
  <main>
    <!-- Hero: Categories + Recommendation Slider + Right Banner Slider -->
    <section class="py-6" aria-label="Browse categories and recommendations">
      <div class="container-wide overflow-x-auto">
        <div class="flex gap-4 items-stretch lg:min-w-[1328px] xl:min-w-[1448px]">
          ${CategoryBrowse()}
          <div class="h-[300px] min-w-0 flex-1 lg:w-[616px] lg:flex-none xl:w-[736px]">
            ${RecommendationSlider()}
          </div>
          <div class="hidden h-[300px] lg:block lg:w-[380px] lg:flex-none">
            ${HeroSideBannerSlider()}
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer Section -->
  <footer>
    ${FooterLinks()}
  </footer>

  <!-- Floating Panel -->
  ${FloatingPanel()}
`

// Initialize custom component behaviors FIRST (before Flowbite can interfere)
initMegaMenu();

// Initialize Flowbite for other interactive components
initFlowbite();

// Initialize remaining custom behaviors
initSearchArea();
initStickyHeaderSearch();
initCategoryBrowse();
initRecommendationSlider();
initHeroSideBannerSlider();
initFloatingPanel();
initAnimatedPlaceholder('#search-input');

// Sticky header: white bg + border on scroll
const stickyHeader = document.getElementById('sticky-header');
if (stickyHeader) {
  const onScroll = (): void => {
    if (window.scrollY > 10) {
      stickyHeader.style.backgroundColor = '#fff';
      stickyHeader.style.borderBottom = '1px solid #ddd';
    } else {
      stickyHeader.style.backgroundColor = '';
      stickyHeader.style.borderBottom = '';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
