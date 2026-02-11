/**
 * SubHeader Component
 * Secondary navigation bar with "All Categories" mega menu trigger,
 * navigation links, buyer center, help, mobile app QR popover, and "Become Supplier" CTA
 */

import type { NavLink } from '../../types/navigation';

/** Main navigation links for the SubHeader */
const navigationLinks: NavLink[] = [
  { label: 'New Arrivals', href: '/new-arrivals', icon: 'sparkle' },
  { label: 'Top Ranking', href: '/top-ranking', icon: 'chart' },
  { label: 'Featured Selections', href: '/featured', icon: 'star' },
  { label: 'Trade Assurance', href: '/trade-assurance', icon: 'shield' },
];

/** Buyer center dropdown links */
const buyerCenterLinks: NavLink[] = [
  { label: 'Buyer Central', href: '/buyer/central' },
  { label: 'My Orders', href: '/buyer/orders' },
  { label: 'My RFQs', href: '/buyer/rfqs' },
  { label: 'My Favorites', href: '/buyer/favorites' },
  { label: 'Shipping Info', href: '/buyer/shipping' },
];

/** Help center dropdown links */
const helpLinks: NavLink[] = [
  { label: 'Help Center', href: '/help' },
  { label: 'Contact Supplier', href: '/help/contact-supplier' },
  { label: 'Dispute & Protection', href: '/help/dispute' },
  { label: 'Report IPR Infringement', href: '/help/ipr' },
  { label: 'Report Abuse', href: '/help/abuse' },
];

/**
 * Generates the "All Categories" mega menu trigger button
 */
function renderCategoriesTrigger(): string {
  return `
    <button
      id="mega-menu-trigger"
      data-dropdown-toggle="mega-menu-dropdown"
      data-dropdown-trigger="hover"
      data-dropdown-delay="100"
      class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
      type="button"
      aria-expanded="false"
      aria-controls="mega-menu-dropdown"
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <span>All Categories</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
  `;
}

/**
 * Generates an icon SVG based on the icon name
 */
function renderIcon(iconName: string): string {
  const icons: Record<string, string> = {
    sparkle: `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
    </svg>`,
    chart: `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
    </svg>`,
    star: `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/>
    </svg>`,
    shield: `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
    </svg>`,
  };

  return icons[iconName] || '';
}

/**
 * Generates the main navigation links
 */
function renderNavigationLinks(): string {
  return `
    <div class="hidden lg:flex items-center gap-1">
      ${navigationLinks.map(link => `
        <a
          href="${link.href}"
          class="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          ${link.icon ? renderIcon(link.icon) : ''}
          <span>${link.label}</span>
        </a>
      `).join('')}
    </div>
  `;
}

/**
 * Generates the Buyer Center dropdown
 */
function renderBuyerCenterDropdown(): string {
  return `
    <div class="relative hidden md:block">
      <button
        id="buyer-center-button"
        data-dropdown-toggle="buyer-center-dropdown"
        class="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        type="button"
        aria-label="Buyer Center menu"
      >
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
        <span>Buyer Center</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div
        id="buyer-center-dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="buyer-center-button">
          ${buyerCenterLinks.map(link => `
            <li>
              <a href="${link.href}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                ${link.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Generates the Help dropdown
 */
function renderHelpDropdown(): string {
  return `
    <div class="relative hidden md:block">
      <button
        id="help-button"
        data-dropdown-toggle="help-dropdown"
        class="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        type="button"
        aria-label="Help menu"
      >
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
        </svg>
        <span>Help</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div
        id="help-dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="help-button">
          ${helpLinks.map(link => `
            <li>
              <a href="${link.href}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                ${link.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Generates the Mobile App QR popover
 */
function renderMobileAppPopover(): string {
  return `
    <div class="relative hidden sm:block">
      <button
        id="mobile-app-button"
        data-popover-target="mobile-app-popover"
        data-popover-trigger="hover"
        class="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        type="button"
        aria-label="Download mobile app"
      >
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
        </svg>
        <span>Get App</span>
      </button>
      <div
        id="mobile-app-popover"
        data-popover
        role="tooltip"
        class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div class="p-4">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Download TR TradeHub App</h3>
          <div class="flex items-center justify-center mb-3">
            <!-- QR Code placeholder -->
            <div class="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
              <svg class="w-16 h-16 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h6v6H3V3Zm2 2v2h2V5H5Zm10-2h6v6h-6V3Zm2 2v2h2V5h-2ZM3 15h6v6H3v-6Zm2 2v2h2v-2H5Zm13-2h3v2h-3v-2Zm0 4h3v2h-3v-2Zm-4-4h2v6h-2v-6Zm-2 0h2v2h-2v-2Zm2 4h2v2h-2v-2Z"/>
              </svg>
            </div>
          </div>
          <p class="text-xs text-center text-gray-500 dark:text-gray-400">Scan QR code to download</p>
          <div class="flex gap-2 mt-3">
            <a href="#" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              App Store
            </a>
            <a href="#" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="m3.18 23 1.02-5.93-3.86-4.04L7.5 12.5l3-6.5 3 6.5 7.16.53-3.86 4.04L17.82 23 12 19.69 3.18 23z"/></svg>
              Google Play
            </a>
          </div>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  `;
}

/**
 * Generates the "Become a Supplier" CTA button
 */
function renderSupplierCTA(): string {
  return `
    <a
      href="/become-supplier"
      class="hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-600 border border-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
    >
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/>
      </svg>
      <span>Become a Supplier</span>
    </a>
  `;
}

/**
 * SubHeader Component
 * Renders the secondary navigation bar containing:
 * - "All Categories" mega menu trigger
 * - Featured navigation links (New Arrivals, Top Ranking, etc.)
 * - Buyer Center dropdown
 * - Help dropdown
 * - Mobile App QR popover
 * - "Become a Supplier" CTA button
 */
export function SubHeader(): string {
  return `
    <nav class="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Secondary navigation">
      <div class="container-boxed">
        <div class="flex items-center justify-between py-2">
          <!-- Left Side: Categories Trigger + Navigation Links -->
          <div class="flex items-center gap-4">
            ${renderCategoriesTrigger()}
            ${renderNavigationLinks()}
          </div>

          <!-- Right Side: Buyer Center, Help, Mobile App, Become Supplier -->
          <div class="flex items-center gap-1">
            ${renderBuyerCenterDropdown()}
            ${renderHelpDropdown()}
            ${renderMobileAppPopover()}
            ${renderSupplierCTA()}
          </div>
        </div>
      </div>
    </nav>
  `;
}
