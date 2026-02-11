/**
 * FooterLinks Component
 * 5-column grid with categorized links for the footer
 * Columns: Support, Payments, Sourcing, Selling, About
 * Responsive: 5-column grid on desktop, 2-column grid on mobile
 */

import type { FooterColumn, NavLink } from '../../types/navigation';

/**
 * Footer columns configuration with support links
 */
const footerColumns: FooterColumn[] = [
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Report Abuse', href: '/report-abuse' },
      { label: 'Submit Dispute', href: '/dispute' },
      { label: 'Order Issues', href: '/order-issues' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    title: 'Payments',
    links: [
      { label: 'Payment Methods', href: '/payments/methods' },
      { label: 'Trade Assurance', href: '/trade-assurance' },
      { label: 'Secure Payments', href: '/payments/secure' },
      { label: 'Letter of Credit', href: '/payments/lc' },
      { label: 'Bank Transfers', href: '/payments/bank-transfer' },
    ],
  },
  {
    title: 'Sourcing',
    links: [
      { label: 'Request for Quotation', href: '/rfq' },
      { label: 'Supplier Discovery', href: '/suppliers/discover' },
      { label: 'Verified Suppliers', href: '/suppliers/verified' },
      { label: 'Product Sourcing', href: '/sourcing/products' },
      { label: 'Customization', href: '/sourcing/customization' },
      { label: 'Bulk Orders', href: '/sourcing/bulk' },
    ],
  },
  {
    title: 'Selling',
    links: [
      { label: 'Become a Supplier', href: '/seller/register' },
      { label: 'Seller Central', href: '/seller/dashboard' },
      { label: 'Seller Support', href: '/seller/support' },
      { label: 'Advertising', href: '/seller/advertising' },
      { label: 'Membership Plans', href: '/seller/membership' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About TR TradeHub', href: '/about' },
      { label: 'Company Info', href: '/about/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Room', href: '/press' },
      { label: 'Blog', href: '/blog' },
      { label: 'Investor Relations', href: '/investors' },
    ],
  },
];

/**
 * Renders a single link item
 */
function renderLink(link: NavLink): string {
  return `
    <li>
      <a
        href="${link.href}"
        class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
      >
        ${link.label}
      </a>
    </li>
  `;
}

/**
 * Renders a single column for desktop view
 */
function renderDesktopColumn(column: FooterColumn): string {
  return `
    <div class="footer-column">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
        ${column.title}
      </h3>
      <ul class="space-y-3 text-sm">
        ${column.links.map(link => renderLink(link)).join('')}
      </ul>
    </div>
  `;
}

/**
 * Renders a single column for mobile view (simple stacked layout, no accordion)
 */
function renderMobileColumn(column: FooterColumn): string {
  return `
    <div class="footer-column mb-6">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
        ${column.title}
      </h3>
      <ul class="space-y-2 text-sm">
        ${column.links.map(link => renderLink(link)).join('')}
      </ul>
    </div>
  `;
}

/**
 * Renders the desktop grid layout
 */
function renderDesktopGrid(): string {
  return `
    <div class="hidden md:grid md:grid-cols-5 md:gap-8">
      ${footerColumns.map(column => renderDesktopColumn(column)).join('')}
    </div>
  `;
}

/**
 * Renders the mobile layout (simple 2-column grid, no accordion)
 */
function renderMobileLayout(): string {
  return `
    <div class="md:hidden grid grid-cols-2 gap-x-4 gap-y-2">
      ${footerColumns.map(column => renderMobileColumn(column)).join('')}
    </div>
  `;
}

/**
 * FooterLinks Component
 * Renders a footer section with 5 columns of categorized links:
 * - Support: Help, Contact, Abuse reporting
 * - Payments: Payment methods, Trade assurance
 * - Sourcing: RFQ, Supplier discovery
 * - Selling: Supplier registration, Seller tools
 * - About: Company info, Careers, Blog
 *
 * Features:
 * - 5-column grid layout on desktop (md+)
 * - 2-column grid layout on mobile
 * - Dark mode support
 * - Hover effects on links
 * - Semantic HTML with proper heading hierarchy
 */
export function FooterLinks(): string {
  return `
    <section class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" aria-label="Footer navigation">
      <div class="container-boxed py-8 md:py-12">
        <!-- Desktop Grid Layout -->
        ${renderDesktopGrid()}

        <!-- Mobile Layout (Simple Grid) -->
        ${renderMobileLayout()}
      </div>
    </section>
  `;
}

/**
 * Get footer columns data for use by other components
 */
export function getFooterColumnsData(): FooterColumn[] {
  return footerColumns;
}
