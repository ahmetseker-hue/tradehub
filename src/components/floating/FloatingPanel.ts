/**
 * FloatingPanel Component
 * Fixed right-bottom panel with chat button (badge showing 9+),
 * visual search lens button, and scroll-to-top button
 */

/**
 * Generates the chat button with message badge
 */
function renderChatButton(): string {
  const messageCount = '9+';

  return `
    <button
      type="button"
      class="relative flex items-center justify-center w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
      aria-label="Open chat, ${messageCount} new messages"
      data-tooltip-target="tooltip-chat"
      data-tooltip-placement="left"
    >
      <!-- Chat Icon -->
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
      <!-- Badge -->
      <span class="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold text-white bg-red-500 rounded-full">
        ${messageCount}
      </span>
    </button>
    <div id="tooltip-chat" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Chat Support
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the visual search lens button
 */
function renderLensButton(): string {
  return `
    <button
      type="button"
      class="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
      aria-label="Visual search"
      data-tooltip-target="tooltip-lens"
      data-tooltip-placement="left"
    >
      <!-- Camera/Lens Icon -->
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    </button>
    <div id="tooltip-lens" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Search by Image
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the scroll-to-top button
 */
function renderScrollToTopButton(): string {
  return `
    <button
      type="button"
      id="scroll-to-top-btn"
      class="hidden items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
      aria-label="Scroll to top"
      data-tooltip-target="tooltip-scroll-top"
      data-tooltip-placement="left"
    >
      <!-- Arrow Up Icon -->
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
    <div id="tooltip-scroll-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Back to Top
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  `;
}

/**
 * FloatingPanel Component
 * Renders a fixed positioned panel at the bottom-right of the viewport containing:
 * - Chat button with badge showing 9+ messages
 * - Visual search lens button
 * - Scroll-to-top button (hidden until scrolled > 300px)
 */
export function FloatingPanel(): string {
  return `
    <div
      id="floating-panel"
      class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
      aria-label="Quick actions panel"
    >
      <!-- Scroll to Top Button (hidden by default, shown on scroll > 300px) -->
      ${renderScrollToTopButton()}

      <!-- Visual Search Lens Button -->
      ${renderLensButton()}

      <!-- Chat Button with Badge -->
      ${renderChatButton()}
    </div>
  `;
}

/**
 * Initializes the FloatingPanel scroll behavior
 * Shows/hides the scroll-to-top button based on scroll position
 * Should be called after DOM is ready
 */
export function initFloatingPanel(): void {
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  const SCROLL_THRESHOLD = 300;

  if (!scrollToTopBtn) {
    return;
  }

  // Handle scroll event to show/hide scroll-to-top button
  const handleScroll = (): void => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      scrollToTopBtn.classList.remove('hidden');
      scrollToTopBtn.classList.add('flex');
    } else {
      scrollToTopBtn.classList.remove('flex');
      scrollToTopBtn.classList.add('hidden');
    }
  };

  // Handle click on scroll-to-top button
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  scrollToTopBtn.addEventListener('click', handleScrollToTop);

  // Initial check in case page is already scrolled
  handleScroll();
}
