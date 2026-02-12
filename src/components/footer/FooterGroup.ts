/**
 * FooterGroup Component
 * Payment methods badge row with security indicators
 * Simplified inline layout with flex-wrap
 */

/**
 * FooterGroup Component
 * Renders payment method badges and security indicators in a centered row.
 */
export function FooterGroup(): string {
  return `
    <section class="bg-gray-50 dark:bg-gray-800 py-4" aria-label="Payment methods">
      <div class="mx-auto w-full max-w-screen-xl px-4">
        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-gray-400 dark:text-gray-500">
          <!-- Security Badges -->
          <span class="flex items-center gap-1">
            <svg class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
            </svg>
          </span>
          <span class="flex items-center gap-1">
            <svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </span>

          <!-- Divider -->
          <span class="border-l border-gray-300 dark:border-gray-600 h-5" aria-hidden="true"></span>

          <!-- Mastercard ID Check -->
          <span class="flex items-center gap-1">
            <svg class="w-5 h-5" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="12" cy="16" r="10" fill="#EB001B"/>
              <circle cx="20" cy="16" r="10" fill="#F79E1B"/>
              <path d="M16 8.8a10 10 0 0 1 0 14.4 10 10 0 0 1 0-14.4z" fill="#FF5F00"/>
            </svg>
            <span>ID Check</span>
          </span>

          <!-- Visa -->
          <span class="font-bold italic text-blue-800 dark:text-blue-400">VISA</span>

          <!-- Mastercard -->
          <span class="flex items-center">
            <svg class="w-5 h-5" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="12" cy="16" r="10" fill="#EB001B"/>
              <circle cx="20" cy="16" r="10" fill="#F79E1B"/>
              <path d="M16 8.8a10 10 0 0 1 0 14.4 10 10 0 0 1 0-14.4z" fill="#FF5F00"/>
            </svg>
          </span>

          <!-- Amex -->
          <span class="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">AMEX</span>

          <!-- PayPal -->
          <span><span class="font-bold text-blue-800 dark:text-blue-400">Pay</span><span class="font-bold text-blue-500 dark:text-blue-300">Pal</span></span>

          <!-- Apple Pay -->
          <span class="font-medium text-gray-600 dark:text-gray-400">Apple Pay</span>

          <!-- G Pay -->
          <span class="font-medium text-gray-600 dark:text-gray-400">G Pay</span>

          <!-- Discover -->
          <span class="font-bold text-orange-500">Discover</span>

          <!-- JCB -->
          <span class="font-bold text-blue-700 dark:text-blue-400">JCB</span>

          <!-- T/T Bank Transfer -->
          <span class="font-medium text-gray-600 dark:text-gray-400">T/T</span>
        </div>
      </div>
    </section>
  `;
}

/**
 * Get group companies data for use by other components
 * @deprecated Use FooterGroup() directly
 */
export function getGroupCompaniesData(): { name: string; href: string }[] {
  return [];
}
