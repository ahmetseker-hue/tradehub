/**
 * TopBar Component
 * Top navigation bar with iSTOC logo, delivery selector, language/currency,
 * utility icons (messages, orders), cart, and auth buttons
 * Each icon/selector has a Flowbite popover panel
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
 * Generates the iSTOC logo
 */
function renderLogo(): string {
  return `
    <a href="/" class="flex items-center hover:opacity-80 transition-opacity" aria-label="iSTOC Home">
      <img src="/images/istoc-logo.png" alt="iSTOC" class="h-8 lg:h-9" />
    </a>
  `;
}

/**
 * Generates the delivery country selector with popover panel
 */
function renderCountrySelector(): string {
  const defaultCountry = countryOptions[0];
  return `
    <button
      data-popover-target="popover-deliver-to"
      data-popover-placement="bottom"
      class="flex flex-col items-center px-2 py-1 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      type="button"
      aria-label="Select delivery country"
    >
      <span class="text-xs text-gray-500 dark:text-gray-400">Deliver to:</span>
      <span class="text-sm font-medium">${defaultCountry.flag} ${defaultCountry.code}</span>
    </button>

    <!-- Deliver To Popover -->
    <div data-popover id="popover-deliver-to" role="tooltip"
      class="absolute z-50 invisible inline-block w-80 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-5">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1">Specify your location</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Shipping options and fees vary based on your location</p>

        <!-- Add Address Button -->
        <button type="button" class="w-full px-4 py-2.5 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors mb-4">
          Add address
        </button>

        <!-- Or Divider -->
        <div class="flex items-center gap-3 mb-4">
          <div class="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
          <span class="text-sm text-gray-400">Or</span>
          <div class="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
        </div>

        <!-- Country Select -->
        <div class="mb-3">
          <select class="w-full px-3 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white appearance-none cursor-pointer">
            ${countryOptions.map(country => `
              <option value="${country.code}">${country.flag} ${country.name}</option>
            `).join('')}
          </select>
        </div>

        <!-- ZIP Code Input -->
        <div class="mb-4">
          <input
            type="text"
            placeholder="Enter ZIP or postal code"
            class="w-full px-3 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <!-- Save Button -->
        <button type="button" class="w-full px-4 py-2.5 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors">
          Save
        </button>
      </div>
      <div data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the language/currency selector with popover panel
 */
function renderLanguageCurrencySelector(): string {
  return `
    <button
      data-popover-target="popover-language-currency"
      data-popover-placement="bottom"
      class="flex items-center gap-1.5 px-2 py-1.5 text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      type="button"
      aria-label="Select language and currency"
    >
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-4.247m0 0A8.959 8.959 0 0 1 3 12c0-1.177.227-2.302.637-3.332" />
      </svg>
      <span class="font-medium">English-USD</span>
    </button>

    <!-- Language & Currency Popover -->
    <div data-popover id="popover-language-currency" role="tooltip"
      class="absolute z-50 invisible inline-block w-96 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-5">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1">Set language and currency</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">Select your preferred language and currency. You can update the settings at any time.</p>

        <!-- Language Select -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Language</label>
          <select class="w-full px-3 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white appearance-none cursor-pointer">
            ${languageOptions.map(lang => `
              <option value="${lang.code}">${lang.name}</option>
            `).join('')}
          </select>
        </div>

        <!-- Currency Select -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Currency</label>
          <select class="w-full px-3 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white appearance-none cursor-pointer">
            ${currencyOptions.map(currency => `
              <option value="${currency.code}">${currency.code} - ${currency.name}</option>
            `).join('')}
          </select>
        </div>

        <!-- Save Button -->
        <button type="button" class="w-full px-4 py-2.5 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors">
          Save
        </button>
      </div>
      <div data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the Messages icon button with popover panel
 */
function renderMessagesButton(): string {
  return `
    <button
      data-popover-target="popover-messages"
      data-popover-placement="bottom"
      class="hidden md:flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors relative"
      type="button"
      aria-label="Messages"
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      <span class="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">1</span>
    </button>

    <!-- Messages Popover -->
    <div data-popover id="popover-messages" role="tooltip"
      class="absolute z-50 invisible inline-block w-96 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-5">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-4">Messages</h3>

        <!-- Message Items -->
        <div class="space-y-4 mb-4">
          <!-- Message 1 -->
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <p class="text-sm font-semibold text-gray-900 dark:text-white">Procurement Assistant</p>
                <span class="text-xs text-gray-400">2025-1-16</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">iSTOC.com</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">[Message]</p>
            </div>
            <span class="flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-bold text-white bg-red-500 rounded-full">32</span>
          </div>

          <!-- Message 2 -->
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <p class="text-sm font-semibold text-gray-900 dark:text-white">Connie Zhao</p>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">Guangzhou Senka Electronics Co., Ltd.</p>
            </div>
            <span class="flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-bold text-white bg-red-500 rounded-full">1</span>
          </div>
        </div>

        <!-- View More Button -->
        <a href="/messages" class="block w-full px-4 py-2.5 text-sm font-medium text-center text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors">
          View more
        </a>
      </div>
      <div data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the Orders icon button with popover panel
 */
function renderOrdersButton(): string {
  return `
    <button
      data-popover-target="popover-orders"
      data-popover-placement="bottom"
      class="hidden md:flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors"
      type="button"
      aria-label="Orders"
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    </button>

    <!-- Orders Popover -->
    <div data-popover id="popover-orders" role="tooltip"
      class="absolute z-50 invisible inline-block w-96 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-5">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-4">Orders</h3>

        <!-- Trade Assurance Header -->
        <div class="flex items-center gap-2 mb-2">
          <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
            <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.94s4.18 1.36 4.18 3.85c0 1.89-1.44 2.98-3.12 3.19z"/>
            </svg>
          </span>
          <span class="text-lg font-bold text-gray-900 dark:text-white">Trade Assurance</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">Enjoy protection from payment to delivery</p>

        <!-- Features List -->
        <div class="space-y-4 mb-5">
          <div class="flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-50">
              <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </span>
            <span class="text-sm text-gray-700 dark:text-gray-300">Safe & easy payments</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-50">
              <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </span>
            <span class="text-sm text-gray-700 dark:text-gray-300">Money-back policy</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-50">
              <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.029-.504 1.029-1.125a3.75 3.75 0 0 0-3.75-3.75H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </span>
            <span class="text-sm text-gray-700 dark:text-gray-300">Shipping & logistics services</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-50">
              <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </span>
            <span class="text-sm text-gray-700 dark:text-gray-300">After-sales protections</span>
          </div>
        </div>

        <!-- Learn More Link -->
        <a href="/trade-assurance" class="text-sm font-medium text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 underline transition-colors">
          Learn more
        </a>
      </div>
      <div data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the cart button with badge and popover panel
 */
function renderCartButton(itemCount: number = 0): string {
  const showBadge = itemCount > 0;
  const badgeText = itemCount > 99 ? '99+' : String(itemCount);

  return `
    <button
      data-popover-target="popover-cart"
      data-popover-placement="bottom"
      class="relative flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors"
      type="button"
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
    </button>

    <!-- Cart Popover -->
    <div data-popover id="popover-cart" role="tooltip"
      class="absolute z-50 invisible inline-block w-80 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-5">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-4">Shopping cart</h3>

        <!-- Empty Cart State -->
        <div class="flex flex-col items-center py-4">
          <!-- Cart Illustration -->
          <div class="mb-4">
            <svg class="w-20 h-20 text-gray-300" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="28" width="56" height="44" rx="4" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/>
              <path d="M20 36h56" stroke="#D1D5DB" stroke-width="2"/>
              <rect x="32" y="20" width="32" height="12" rx="2" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="2"/>
              <circle cx="36" cy="76" r="4" fill="#D1D5DB"/>
              <circle cx="60" cy="76" r="4" fill="#D1D5DB"/>
              <path d="M40 48h16M48 44v8" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Your cart is empty</p>
        </div>

        <!-- Go to Cart Button -->
        <a href="/cart" class="block w-full px-4 py-2.5 text-sm font-medium text-center text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
          Go to cart
        </a>
      </div>
      <div data-popper-arrow></div>
    </div>
  `;
}

/**
 * Generates the auth buttons (Sign In / Join Free)
 */
function renderAuthButtons(): string {
  return `
    <div class="flex items-center gap-3">
      <a
        href="/login"
        class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors"
      >
        Sign In
      </a>
      <a
        href="/register"
        class="px-5 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full shadow-sm hover:shadow-md transition-all"
      >
        Join Free
      </a>
    </div>
  `;
}

/**
 * TopBar Component
 * Renders the top navigation bar containing:
 * - iSTOC logo
 * - Delivery country selector with location popover
 * - Language/Currency selector with settings popover
 * - Messages icon with messages popover
 * - Orders icon with trade assurance popover
 * - Cart with empty/items popover
 * - Auth buttons (Sign In / Join Free pill)
 */
export function TopBar(): string {
  return `
    <div class="relative z-30 dark:bg-gray-900" style="height: 64px;">
      <div class="container-boxed h-full">
        <div class="flex items-center justify-between h-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            ${renderLogo()}
          </div>

          <!-- Right Side: Selectors + Icons + Cart + Auth -->
          <div class="flex items-center gap-2 md:gap-4">
            <!-- Country Selector (hidden on mobile) -->
            <div class="hidden md:block">
              ${renderCountrySelector()}
            </div>

            <!-- Language/Currency Selector (hidden on mobile) -->
            <div class="hidden md:block">
              ${renderLanguageCurrencySelector()}
            </div>

            <!-- Messages Button -->
            ${renderMessagesButton()}

            <!-- Orders Button -->
            ${renderOrdersButton()}

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
            <a href="/register" class="w-full px-4 py-3 text-center text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-full">
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
