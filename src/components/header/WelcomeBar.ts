/**
 * WelcomeBar Component
 * Welcome message and CTA buttons for quick access to key features
 * Displays: Welcome message, RFQ button, Popular Products button, Quick Customize button
 */

/**
 * CTA button configuration interface
 */
interface CTAButton {
  id: string;
  label: string;
  href: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'accent';
}

/** CTA buttons configuration */
const ctaButtons: CTAButton[] = [
  {
    id: 'rfq-cta',
    label: 'Submit RFQ',
    href: '/rfq/create',
    icon: 'document',
    variant: 'primary',
  },
  {
    id: 'popular-cta',
    label: 'Popular Products',
    href: '/products/popular',
    icon: 'fire',
    variant: 'secondary',
  },
  {
    id: 'customize-cta',
    label: 'Quick Customize',
    href: '/customize',
    icon: 'sparkles',
    variant: 'accent',
  },
];

/**
 * Generates the icon SVG based on icon type
 */
function renderIcon(iconType: string): string {
  switch (iconType) {
    case 'document':
      return `
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      `;
    case 'fire':
      return `
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      `;
    case 'sparkles':
      return `
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
      `;
    default:
      return '';
  }
}

/**
 * Gets the CSS classes for a button variant
 */
function getButtonClasses(variant: CTAButton['variant']): string {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  switch (variant) {
    case 'primary':
      return `${baseClasses} text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-400`;
    case 'secondary':
      return `${baseClasses} text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-400`;
    case 'accent':
      return `${baseClasses} text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 focus:ring-accent-400`;
    default:
      return baseClasses;
  }
}

/**
 * Generates a single CTA button
 */
function renderCTAButton(button: CTAButton): string {
  const classes = getButtonClasses(button.variant);

  return `
    <a
      id="${button.id}"
      href="${button.href}"
      class="${classes}"
      aria-label="${button.label}"
    >
      ${renderIcon(button.icon)}
      <span>${button.label}</span>
    </a>
  `;
}

/**
 * Generates all CTA buttons
 */
function renderCTAButtons(): string {
  return `
    <div class="flex flex-wrap items-center gap-2 sm:gap-3">
      ${ctaButtons.map(button => renderCTAButton(button)).join('')}
    </div>
  `;
}

/**
 * Generates the welcome message
 */
function renderWelcomeMessage(): string {
  return `
    <div class="flex items-center gap-2">
      <svg class="w-5 h-5 text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
      <h2 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
        TR TradeHub'a Hoş Geldiniz
      </h2>
    </div>
  `;
}

/**
 * Generates the mobile version of the welcome bar
 */
function renderMobileWelcomeBar(): string {
  return `
    <div class="sm:hidden space-y-3">
      <!-- Welcome Message -->
      <div class="flex justify-center">
        ${renderWelcomeMessage()}
      </div>

      <!-- CTA Buttons - Horizontal scroll on mobile -->
      <div class="overflow-x-auto -mx-4 px-4">
        <div class="flex items-center gap-2 min-w-max">
          ${ctaButtons.map(button => renderCTAButton(button)).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the desktop version of the welcome bar
 */
function renderDesktopWelcomeBar(): string {
  return `
    <div class="hidden sm:flex items-center justify-between">
      <!-- Welcome Message -->
      ${renderWelcomeMessage()}

      <!-- CTA Buttons -->
      ${renderCTAButtons()}
    </div>
  `;
}

/**
 * WelcomeBar Component
 * Renders a welcome bar containing:
 * - Welcome message: "TR TradeHub'a Hoş Geldiniz"
 * - CTA buttons styled as pills: RFQ, Popular Products, Quick Customize
 *
 * Features:
 * - Responsive design with different layouts for mobile and desktop
 * - Pill-styled buttons with icons
 * - Hover effects with subtle scale animation
 * - Dark mode support
 */
export function WelcomeBar(): string {
  return `
    <section class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Welcome bar">
      <div class="container-boxed py-3">
        <!-- Desktop Layout -->
        ${renderDesktopWelcomeBar()}

        <!-- Mobile Layout -->
        ${renderMobileWelcomeBar()}
      </div>
    </section>
  `;
}
