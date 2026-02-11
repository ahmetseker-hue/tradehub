/**
 * TopBar Component
 * Top navigation bar with logo, auth buttons, cart, country/language selectors
 * Height: 72px
 */

import type { LocaleOption, CurrencyOption } from '../../types/navigation';

/** Default country options for the delivery selector */
const countryOptions: LocaleOption[] = [
  { code: 'TR', name: 'Türkiye', flag: '🇹🇷' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
];

/** Default language options */
const languageOptions: LocaleOption[] = [
  { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
];

/** Default currency options */
const currencyOptions: CurrencyOption[] = [
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
];

/**
 * Generates the country selector dropdown HTML
 */
function renderCountrySelector(): string {
  const defaultCountry = countryOptions[0];
  return `
    <div class="relative">
      <button
        id="country-selector-button"
        data-dropdown-toggle="country-dropdown"
        class="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        type="button"
        aria-label="Select delivery country"
      >
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span class="hidden sm:inline">Deliver to</span>
        <span class="font-medium">${defaultCountry.flag} ${defaultCountry.code}</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div
        id="country-dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="country-selector-button">
          ${countryOptions.map(country => `
            <li>
              <a href="#" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <span>${country.flag}</span>
                <span>${country.name}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Generates the language/currency selector dropdown HTML
 */
function renderLanguageCurrencySelector(): string {
  const defaultLanguage = languageOptions[0];
  const defaultCurrency = currencyOptions[0];
  return `
    <div class="relative">
      <button
        id="language-currency-button"
        data-dropdown-toggle="language-currency-dropdown"
        class="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        type="button"
        aria-label="Select language and currency"
      >
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-4.247m0 0A8.959 8.959 0 0 1 3 12c0-1.177.227-2.302.637-3.332" />
        </svg>
        <span class="font-medium">${defaultLanguage.code}</span>
        <span class="text-gray-400 dark:text-gray-500">/</span>
        <span class="font-medium">${defaultCurrency.symbol} ${defaultCurrency.code}</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div
        id="language-currency-dropdown"
        class="z-10 hidden bg-white rounded-lg shadow-lg w-64 dark:bg-gray-700"
      >
        <div class="p-4">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
            <div class="space-y-1">
              ${languageOptions.map(lang => `
                <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
                  <span>${lang.flag}</span>
                  <span>${lang.name}</span>
                </a>
              `).join('')}
            </div>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-600 pt-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
            <div class="space-y-1">
              ${currencyOptions.map(currency => `
                <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
                  <span class="font-medium">${currency.symbol}</span>
                  <span>${currency.name}</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the cart button with badge
 */
function renderCartButton(itemCount: number = 0): string {
  const showBadge = itemCount > 0;
  const badgeText = itemCount > 99 ? '99+' : String(itemCount);

  return `
    <a
      href="/cart"
      class="relative flex items-center justify-center p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      aria-label="Shopping cart${showBadge ? `, ${itemCount} items` : ''}"
    >
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
      ${showBadge ? `
        <span class="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold text-white bg-primary-500 rounded-full">
          ${badgeText}
        </span>
      ` : ''}
    </a>
  `;
}

/**
 * Generates the auth buttons (Login/Register)
 */
function renderAuthButtons(): string {
  return `
    <div class="flex items-center gap-2">
      <a
        href="/login"
        class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      >
        Sign In
      </a>
      <a
        href="/register"
        class="px-4 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
      >
        Join Free
      </a>
    </div>
  `;
}

/**
 * Generates the logo element
 */
function renderLogo(): string {
  return `
    <a href="/" class="flex items-center gap-2" aria-label="TR TradeHub Home">
      <svg class="w-8 h-8 text-primary-500" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <rect x="2" y="4" width="28" height="24" rx="3" fill="currentColor" opacity="0.1"/>
        <path d="M6 8h20v2H6z"/>
        <path d="M16 10v14M10 16h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.6"/>
      </svg>
      <span class="text-xl font-bold text-gray-900 dark:text-white">
        TR <span class="text-primary-500">TradeHub</span>
      </span>
    </a>
  `;
}

/**
 * TopBar Component
 * Renders the top navigation bar with 72px height containing:
 * - Logo
 * - Delivery country selector
 * - Language/Currency selector
 * - Cart with badge
 * - Auth buttons (Sign In / Join Free)
 */
export function TopBar(): string {
  return `
    <div class="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700" style="height: 64px;">
      <div class="container-boxed h-full">
        <div class="flex items-center justify-between h-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            ${renderLogo()}
          </div>

          <!-- Right Side: Selectors + Cart + Auth -->
          <div class="flex items-center gap-3 md:gap-5">
            <!-- Country Selector (hidden on mobile) -->
            <div class="hidden md:block">
              ${renderCountrySelector()}
            </div>

            <!-- Language/Currency Selector (hidden on mobile) -->
            <div class="hidden md:block">
              ${renderLanguageCurrencySelector()}
            </div>

            <!-- Cart Button -->
            ${renderCartButton(3)}

            <!-- Auth Buttons -->
            <div class="hidden sm:block">
              ${renderAuthButtons()}
            </div>

            <!-- Mobile Menu Button -->
            <button
              data-drawer-target="mobile-menu-drawer"
              data-drawer-toggle="mobile-menu-drawer"
              class="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
              aria-controls="mobile-menu-drawer"
              aria-label="Open main menu"
            >
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <div
        id="mobile-menu-drawer"
        class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <h5 id="drawer-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
        <button
          type="button"
          data-drawer-hide="mobile-menu-drawer"
          aria-controls="mobile-menu-drawer"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <div class="py-4 space-y-4">
          <!-- Mobile Auth Buttons -->
          <div class="flex flex-col gap-2">
            <a href="/login" class="w-full px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
              Sign In
            </a>
            <a href="/register" class="w-full px-4 py-3 text-center text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg">
              Join Free
            </a>
          </div>

          <!-- Mobile Country Selector -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h6 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Deliver to</h6>
            <div class="space-y-1">
              ${countryOptions.map(country => `
                <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <span>${country.flag}</span>
                  <span>${country.name}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <!-- Mobile Language Selector -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h6 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Language</h6>
            <div class="space-y-1">
              ${languageOptions.map(lang => `
                <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <span>${lang.flag}</span>
                  <span>${lang.name}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <!-- Mobile Currency Selector -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h6 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Currency</h6>
            <div class="space-y-1">
              ${currencyOptions.map(currency => `
                <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <span class="font-medium">${currency.symbol}</span>
                  <span>${currency.name}</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
