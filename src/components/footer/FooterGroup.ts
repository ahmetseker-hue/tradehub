/**
 * FooterGroup Component
 * Displays partner/sister company logos and links in the footer
 * Features:
 * - Horizontal list with separators
 * - Centered alignment
 * - Hover effects on company names
 * - Responsive: horizontal scroll on mobile, flex wrap on desktop
 */

import type { GroupCompany } from '../../types/navigation';

/**
 * Partner company configuration
 * These represent the group companies/partners of TR TradeHub
 */
const groupCompanies: GroupCompany[] = [
  { name: 'AliExpress', href: 'https://www.aliexpress.com' },
  { name: '1688.com', href: 'https://www.1688.com' },
  { name: 'Tmall', href: 'https://www.tmall.com' },
  { name: 'Taobao', href: 'https://www.taobao.com' },
  { name: 'Alimama', href: 'https://www.alimama.com' },
  { name: 'Alibaba Cloud', href: 'https://www.alibabacloud.com' },
  { name: 'AliOS', href: 'https://www.alios.cn' },
  { name: 'Lazada', href: 'https://www.lazada.com' },
  { name: 'Daraz', href: 'https://www.daraz.com' },
  { name: 'Trendyol', href: 'https://www.trendyol.com' },
];

/**
 * Renders a separator dot between company links
 */
function renderSeparator(): string {
  return `
    <span class="text-gray-300 dark:text-gray-600 mx-2 hidden sm:inline" aria-hidden="true">•</span>
  `;
}

/**
 * Renders a single company link
 */
function renderCompanyLink(company: GroupCompany, isLast: boolean): string {
  return `
    <span class="inline-flex items-center whitespace-nowrap">
      <a
        href="${company.href}"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
      >
        ${company.name}
      </a>
      ${!isLast ? renderSeparator() : ''}
    </span>
  `;
}

/**
 * Renders the section header
 */
function renderSectionHeader(): string {
  return `
    <h3 class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center">
      Group Companies
    </h3>
  `;
}

/**
 * Renders the desktop layout with centered flex wrap
 */
function renderDesktopLayout(): string {
  return `
    <div class="hidden sm:flex flex-wrap items-center justify-center gap-y-2">
      ${groupCompanies.map((company, index) =>
        renderCompanyLink(company, index === groupCompanies.length - 1)
      ).join('')}
    </div>
  `;
}

/**
 * Renders the mobile layout with horizontal scroll
 */
function renderMobileLayout(): string {
  return `
    <div class="sm:hidden overflow-x-auto -mx-4 px-4">
      <div class="flex items-center gap-4 pb-2 min-w-max">
        ${groupCompanies.map(company => `
          <a
            href="${company.href}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 text-sm whitespace-nowrap"
          >
            ${company.name}
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * FooterGroup Component
 * Renders a section displaying partner/group company links.
 *
 * Alibaba-inspired design with:
 * - Centered horizontal list of company names
 * - Dot separators between links (desktop)
 * - Horizontal scrollable list (mobile)
 * - Opens links in new tabs with security attributes
 * - Dark mode support
 * - Hover color transitions
 *
 * @returns HTML string for the footer group companies section
 */
export function FooterGroup(): string {
  return `
    <section class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" aria-label="Group companies">
      <div class="container-boxed py-4">
        ${renderSectionHeader()}

        <!-- Desktop Layout -->
        ${renderDesktopLayout()}

        <!-- Mobile Layout -->
        ${renderMobileLayout()}
      </div>
    </section>
  `;
}

/**
 * Get group companies data for use by other components
 */
export function getGroupCompaniesData(): GroupCompany[] {
  return groupCompanies;
}
