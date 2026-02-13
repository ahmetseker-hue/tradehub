import './style.css'
import { initFlowbite } from 'flowbite'

// Header components
import { TopBar, MobileSearchTabs, initMobileDrawer, SubHeader, SearchArea, initSearchArea, initStickyHeaderSearch, MegaMenu, initMegaMenu } from './components/header'

// Hero components
import {
  CategoryBrowse,
  initCategoryBrowse,
  RecommendationSlider,
  initRecommendationSlider,
  HeroSideBannerSlider,
  initHeroSideBannerSlider,
  MobileCategoryBar,
  initMobileCategoryBar,
} from './components/hero'

// Footer components
import { FooterLinks } from './components/footer'

// Floating components
import { FloatingPanel, initFloatingPanel } from './components/floating'

// Utilities
import { initAnimatedPlaceholder } from './utils/animatedPlaceholder'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Sticky Header (global, stays sticky across full page) -->
  <div id="sticky-header" class="sticky top-0 z-[var(--z-header)] bg-white header-gradient transition-[border-color,box-shadow] duration-300">
    ${TopBar()}
    ${SubHeader()}
  </div>

  <!-- Mobile Search Tabs (Products | Manufacturers | Worldwide) — non-sticky -->
  ${MobileSearchTabs()}

  <!-- Hero Search Section (desktop only — mobile search is in TopBar) -->
  <header class="hidden md:block header-gradient">
    ${SearchArea()}
  </header>

  <!-- Mobile Category Bar (Alibaba-style, mobile/tablet only) -->
  ${MobileCategoryBar()}

  <!-- Mega Menu (fixed overlay, positioned by JS) -->
  ${MegaMenu()}

  <!-- Main Content -->
  <main>
    <!-- Hero: Categories + Recommendation Slider + Right Banner Slider -->
    <section class="pt-1 pb-2 lg:py-6" aria-label="Browse categories and recommendations">
      <div class="container-wide">
        <div class="flex flex-col lg:flex-row gap-4 items-stretch">
          <div class="hidden lg:block lg:w-[300px] lg:flex-shrink-0">
            ${CategoryBrowse()}
          </div>
          <div class="h-[260px] lg:h-[300px] flex-1 lg:w-[616px] lg:flex-none xl:w-[736px]">
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
initMobileCategoryBar();
initRecommendationSlider();
initHeroSideBannerSlider();
initFloatingPanel();
initMobileDrawer();
initAnimatedPlaceholder('#search-input');

// Sticky header: warm gradient by default → white on scroll
const stickyHeader = document.getElementById('sticky-header');
if (stickyHeader) {
  const onScroll = (): void => {
    if (window.scrollY > 10) {
      stickyHeader.classList.remove('header-gradient');
      stickyHeader.style.borderBottom = '1px solid #ddd';
    } else {
      stickyHeader.classList.add('header-gradient');
      stickyHeader.style.borderBottom = '';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
