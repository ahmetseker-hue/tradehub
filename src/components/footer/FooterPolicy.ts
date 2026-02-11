/**
 * FooterPolicy Component
 * Displays legal and policy links in a single centered row
 * Features:
 * - Single row of legal links
 * - Pipe-separated items
 * - Centered alignment
 * - Small font styling
 * - Hover effects on links
 * - Dark mode support
 */

import type { NavLink } from '../../types/navigation';

/**
 * Policy links configuration
 * Legal and compliance links for the footer
 */
const policyLinks: NavLink[] = [
  { label: 'Legal Notice', href: '/legal/notice' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Intellectual Property', href: '/legal/ip' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Site Map', href: '/sitemap' },
];

/**
 * Renders a separator pipe between policy links
 */
function renderSeparator(): string {
  return `
    <span class="text-gray-300 dark:text-gray-600 mx-2 hidden sm:inline" aria-hidden="true">|</span>
  `;
}

/**
 * Renders a single policy link
 */
function renderPolicyLink(link: NavLink, isLast: boolean): string {
  return `
    <span class="inline-flex items-center whitespace-nowrap">
      <a
        href="${link.href}"
        class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 text-xs"
      >
        ${link.label}
      </a>
      ${!isLast ? renderSeparator() : ''}
    </span>
  `;
}

/**
 * Renders the desktop layout with centered pipe-separated links
 */
function renderDesktopLayout(): string {
  return `
    <div class="hidden sm:flex flex-wrap items-center justify-center gap-y-1">
      ${policyLinks.map((link, index) =>
        renderPolicyLink(link, index === policyLinks.length - 1)
      ).join('')}
    </div>
  `;
}

/**
 * Renders the mobile layout with stacked links
 */
function renderMobileLayout(): string {
  return `
    <div class="sm:hidden flex flex-col items-center gap-2">
      ${policyLinks.map(link => `
        <a
          href="${link.href}"
          class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 text-xs"
        >
          ${link.label}
        </a>
      `).join('')}
    </div>
  `;
}

/**
 * FooterPolicy Component
 * Renders a centered row of legal and policy links.
 *
 * Alibaba-inspired design with:
 * - Centered horizontal list of policy links
 * - Pipe separators between links (desktop)
 * - Stacked vertical list (mobile)
 * - Small, unobtrusive text styling
 * - Dark mode support
 * - Hover color transitions
 *
 * Links included:
 * - Legal Notice
 * - Privacy Policy
 * - Terms of Use
 * - Cookie Policy
 * - Intellectual Property
 * - Accessibility
 * - Site Map
 *
 * @returns HTML string for the footer policy section
 */
export function FooterPolicy(): string {
  return `
    <section class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" aria-label="Policy links">
      <div class="container-boxed py-3">
        <!-- Desktop Layout -->
        ${renderDesktopLayout()}

        <!-- Mobile Layout -->
        ${renderMobileLayout()}
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
