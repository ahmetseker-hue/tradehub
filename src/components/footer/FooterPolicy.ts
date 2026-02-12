/**
 * FooterPolicy Component
 * Bottom bar with logo, policy links, and copyright notice
 * Layout: stacked on mobile, horizontal three-column on xl+
 */

import type { NavLink } from '../../types/navigation';

/**
 * Policy links configuration
 */
const policyLinks: NavLink[] = [
  { label: 'Legal Notice', href: '/legal/notice' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Product Listing Policy', href: '/legal/product-listing' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Intellectual Property', href: '/legal/ip' },
  { label: 'Accessibility', href: '/accessibility' },
];

/**
 * FooterPolicy Component
 * Renders the footer bottom bar with logo, policy links, and copyright.
 */
export function FooterPolicy(): string {
  return `
    <section class="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-4" aria-label="Policy links and copyright">
      <div class="mx-auto w-full max-w-screen-xl px-4">
        <div class="xl:flex xl:items-center xl:justify-between space-y-5 xl:space-y-0">
          <!-- Logo -->
          <a href="/" class="flex items-center" aria-label="iSTOC Home">
            <img src="/images/istoc-logo.png" alt="iSTOC" class="h-5" />
          </a>

          <!-- Policy Links -->
          <div class="flex flex-wrap items-center justify-center gap-y-1 text-xs text-gray-500 dark:text-gray-400">
            ${policyLinks.map((link, index) => `
              <a href="${link.href}" class="hover:underline hover:text-gray-900 dark:hover:text-gray-200">${link.label}</a>${index < policyLinks.length - 1 ? '<span class="mx-1" aria-hidden="true">|</span>' : ''}
            `).join('')}
          </div>

          <!-- Copyright -->
          <p class="text-xs text-gray-500 dark:text-gray-400 text-center xl:text-right">
            &copy; 2010-2026 <a href="/" class="hover:underline hover:text-gray-900 dark:hover:text-gray-200">iSTOC.com</a>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  `;
}

/**
 * Get policy links data for use by other components
 */
export function getPolicyLinksData(): NavLink[] {
  return policyLinks;
}
