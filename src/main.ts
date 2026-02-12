import './style.css'
import { initFlowbite } from 'flowbite'

// Header components
import { TopBar, SubHeader, SearchArea, initSearchArea, MegaMenu, initMegaMenu } from './components/header'

// Hero components
import { CategoryBrowse, initCategoryBrowse, RecommendationSlider, initRecommendationSlider } from './components/hero'

// Footer components
import { FooterLinks } from './components/footer'

// Floating components
import { FloatingPanel, initFloatingPanel } from './components/floating'

// Utilities
import { initAnimatedPlaceholder } from './utils/animatedPlaceholder'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Header Section -->
  <header style="background: linear-gradient(135deg, #fff7ed 0%, #f6f4e8 25%, #fff1f2 50%, #fbfaf0 75%, #fff7ed 100%); background-size: 300% 300%; animation: searchGradientShift 12s ease infinite;">
    <!-- Sticky Nav (white bg + border on scroll) -->
    <div id="sticky-header" class="sticky top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300">
      ${TopBar()}
      ${SubHeader()}
    </div>
    ${SearchArea()}
  </header>

  <!-- Mega Menu (fixed overlay, positioned by JS) -->
  ${MegaMenu()}

  <!-- Main Content -->
  <main>
    <!-- Hero: Categories + Recommendation Slider -->
    <section class="py-6" aria-label="Browse categories and recommendations">
      <div class="container-boxed flex gap-4 items-stretch">
        ${CategoryBrowse()}
        <div class="flex-1 min-w-0">
          ${RecommendationSlider()}
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
initCategoryBrowse();
initRecommendationSlider();
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
