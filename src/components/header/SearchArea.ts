/**
 * SearchArea Component
 * Search interface with tabs, animated placeholder input, Deep Search and camera buttons
 * This is a critical component for the TR TradeHub search functionality
 */

import type { SearchTab } from '../../types/navigation';

/** Search tabs configuration */
const searchTabs: SearchTab[] = [
  { id: 'ai-mode', label: 'AI Mode', isActive: false },
  { id: 'products', label: 'Products', isActive: true },
  { id: 'manufacturers', label: 'Manufacturers', isActive: false },
  { id: 'by-country', label: 'By Country', isActive: false },
];

/**
 * Generates the search tabs HTML
 * Uses Flowbite tabs pattern with custom styling
 */
function renderSearchTabs(): string {
  return `
    <div class="flex items-center border-b border-gray-200 dark:border-gray-700 mb-4">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        ${searchTabs.map(tab => `
          <li class="me-1" role="presentation">
            <button
              id="search-tab-${tab.id}"
              data-tabs-target="#search-panel-${tab.id}"
              type="button"
              role="tab"
              aria-controls="search-panel-${tab.id}"
              aria-selected="${tab.isActive ? 'true' : 'false'}"
              class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg border-b-2 ${
                tab.isActive
                  ? 'text-primary-600 border-primary-500 dark:text-primary-400 dark:border-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              } transition-colors"
            >
              ${tab.id === 'ai-mode' ? renderAIIcon() : ''}
              <span>${tab.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

/**
 * Renders the AI sparkle icon for AI Mode tab
 */
function renderAIIcon(): string {
  return `
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/>
    </svg>
  `;
}

/**
 * Generates the search input with container for animated placeholder
 * The animated placeholder is initialized via initAnimatedPlaceholder() from main.ts
 */
function renderSearchInput(): string {
  return `
    <div class="relative flex-1">
      <input
        type="text"
        id="search-input"
        name="search"
        class="w-full h-12 px-4 pr-12 text-base text-gray-900 bg-white border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Search for products, suppliers, or categories..."
        autocomplete="off"
        aria-label="Search products, suppliers, or categories"
      />
    </div>
  `;
}

/**
 * Generates the Deep Search button with gradient styling
 */
function renderDeepSearchButton(): string {
  return `
    <button
      type="button"
      id="deep-search-button"
      class="flex items-center gap-1.5 h-12 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-y border-gray-300 dark:border-gray-600 transition-all"
      aria-label="Deep Search - AI-powered search"
      data-tooltip-target="deep-search-tooltip"
      data-tooltip-placement="bottom"
    >
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>
      </svg>
      <span class="hidden sm:inline">Deep Search</span>
    </button>
    <div
      id="deep-search-tooltip"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      AI-powered search for detailed results
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the camera button for visual/image search
 */
function renderCameraButton(): string {
  return `
    <button
      type="button"
      id="camera-search-button"
      class="flex items-center justify-center h-12 w-12 text-gray-500 hover:text-primary-600 bg-white border-y border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
      aria-label="Search by image"
      data-tooltip-target="camera-search-tooltip"
      data-tooltip-placement="bottom"
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
      </svg>
    </button>
    <div
      id="camera-search-tooltip"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      Search by image
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the main search button
 */
function renderSearchButton(): string {
  return `
    <button
      type="submit"
      id="search-submit-button"
      class="flex items-center justify-center gap-2 h-12 px-6 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-r-lg transition-colors"
      aria-label="Search"
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
      </svg>
      <span class="hidden sm:inline">Search</span>
    </button>
  `;
}

/**
 * Generates the mobile search input (simplified for small screens)
 */
function renderMobileSearchInput(): string {
  return `
    <div class="md:hidden">
      <div class="flex">
        <div class="relative flex-1">
          <input
            type="text"
            id="mobile-search-input"
            name="mobile-search"
            class="w-full h-11 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search products..."
            autocomplete="off"
            aria-label="Search products"
          />
        </div>
        <button
          type="submit"
          class="flex items-center justify-center h-11 px-4 text-white bg-primary-500 hover:bg-primary-600 rounded-r-lg transition-colors"
          aria-label="Search"
        >
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

/**
 * Generates the desktop search bar with all features
 */
function renderDesktopSearchBar(): string {
  return `
    <div class="hidden md:block">
      <form id="search-form" action="/search" method="GET" role="search">
        <div class="flex">
          ${renderSearchInput()}
          ${renderDeepSearchButton()}
          ${renderCameraButton()}
          ${renderSearchButton()}
        </div>
      </form>
    </div>
  `;
}

/**
 * Generates popular search suggestions
 */
function renderSearchSuggestions(): string {
  const popularSearches = [
    'Electronics',
    'Machinery',
    'Textiles',
    'Auto Parts',
    'Building Materials',
  ];

  return `
    <div class="hidden md:flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
      <span class="font-medium">Popular:</span>
      ${popularSearches.map(term => `
        <a
          href="/search?q=${encodeURIComponent(term)}"
          class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        >
          ${term}
        </a>
      `).join('<span class="text-gray-300 dark:text-gray-600">|</span>')}
    </div>
  `;
}

/**
 * SearchArea Component
 * Renders the main search area containing:
 * - Search mode tabs (AI Mode, Products, Manufacturers, By Country)
 * - Large search input with animated placeholder (initialized separately)
 * - Deep Search button for AI-powered search
 * - Camera button for visual/image search
 * - Primary Search button
 * - Popular search suggestions
 */
export function SearchArea(): string {
  return `
    <section class="bg-white dark:bg-gray-900 py-6" aria-label="Search area">
      <div class="container-boxed">
        <!-- Search Tabs -->
        ${renderSearchTabs()}

        <!-- Desktop Search Bar -->
        ${renderDesktopSearchBar()}

        <!-- Mobile Search Bar -->
        ${renderMobileSearchInput()}

        <!-- Popular Searches -->
        ${renderSearchSuggestions()}
      </div>
    </section>
  `;
}

/**
 * Initializes search area interactivity
 * Should be called after DOM is ready
 * Note: Animated placeholder should be initialized via initAnimatedPlaceholder('#search-input')
 */
export function initSearchArea(): void {
  // Tab switching functionality
  if (typeof document !== 'undefined') {
    const initTabs = (): void => {
      const tabButtons = document.querySelectorAll('[role="tab"][id^="search-tab-"]');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active state from all tabs
          tabButtons.forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
            btn.classList.remove(
              'text-primary-600',
              'border-primary-500',
              'dark:text-primary-400',
              'dark:border-primary-400'
            );
            btn.classList.add(
              'border-transparent',
              'text-gray-500',
              'hover:text-gray-600',
              'hover:border-gray-300',
              'dark:text-gray-400',
              'dark:hover:text-gray-300'
            );
          });

          // Set active state on clicked tab
          button.setAttribute('aria-selected', 'true');
          button.classList.remove(
            'border-transparent',
            'text-gray-500',
            'hover:text-gray-600',
            'hover:border-gray-300',
            'dark:text-gray-400',
            'dark:hover:text-gray-300'
          );
          button.classList.add(
            'text-primary-600',
            'border-primary-500',
            'dark:text-primary-400',
            'dark:border-primary-400'
          );
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTabs);
    } else {
      initTabs();
    }
  }
}
