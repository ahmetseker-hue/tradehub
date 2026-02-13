/**
 * FooterLinks Component (Consolidated Footer)
 * Main footer component containing:
 * - Logo + social media icons on the left
 * - 4 link columns on the right (My Account, Sell Wholesale, iSTOC, About Us)
 * - Internally renders FooterGroup (payment badges) and FooterPolicy (bottom bar)
 * Responsive: stacked on mobile, side-by-side on desktop
 */

import type { FooterColumn, NavLink, SocialLink } from '../../types/navigation';
import { FooterGroup } from './FooterGroup';
import { FooterPolicy } from './FooterPolicy';


/**
 * Footer columns configuration
 */
const footerColumns: FooterColumn[] = [
  {
    title: 'My Account',
    links: [
      { label: 'My Orders', href: '/buyer/orders' },
      { label: 'Messages', href: '/buyer/messages' },
      { label: 'My Account', href: '/buyer/account' },
    ],
  },
  {
    title: 'Sell Wholesale',
    links: [
      { label: 'My Orders', href: '/seller/orders' },
      { label: 'Messages', href: '/seller/messages' },
      { label: 'My Account', href: '/seller/account' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'iSTOC',
    links: [
      { label: 'Private Labels', href: '/private-labels' },
      { label: 'iSTOC Companies', href: '/companies' },
      { label: 'Categories', href: '/categories' },
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'iSTOC Blog', href: '/blog' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About iSTOC', href: '/about' },
      { label: 'iSTOC Finance', href: '/finance' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

/**
 * Social media links
 */
const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com/istoc', icon: 'facebook', ariaLabel: 'Follow us on Facebook' },
  { platform: 'instagram', href: 'https://instagram.com/istoc', icon: 'instagram', ariaLabel: 'Follow us on Instagram' },
  { platform: 'twitter', href: 'https://twitter.com/istoc', icon: 'twitter', ariaLabel: 'Follow us on X (Twitter)' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/istoc', icon: 'linkedin', ariaLabel: 'Connect with us on LinkedIn' },
  { platform: 'youtube', href: 'https://youtube.com/@istoc', icon: 'youtube', ariaLabel: 'Subscribe to our YouTube channel' },
  { platform: 'tiktok', href: 'https://tiktok.com/@istoc', icon: 'tiktok', ariaLabel: 'Follow us on TikTok' },
];

/**
 * Social media icon SVGs
 */
function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    facebook: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
    </svg>`,
    instagram: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
    </svg>`,
    twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`,
    linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
    youtube: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
    </svg>`,
    tiktok: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17V11.7a4.84 4.84 0 01-3.77-1.78V6.69h3.77z"/>
    </svg>`,
  };
  return icons[platform] || '';
}

/**
 * Get base URL for assets (handles GitHub Pages subdirectory)
 */
const getBaseUrl = (): string => {
  // Vite provides BASE_URL at build time
  if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
    return import.meta.env.BASE_URL;
  }
  // Fallback: detect from current path
  const path = window.location.pathname;
  if (path.startsWith('/tradehub/')) {
    return '/tradehub/';
  }
  return '/';
};

/**
 * Renders the footer logo
 */
function renderFooterLogo(): string {
  const baseUrl = getBaseUrl();
  return `
    <a href="${baseUrl}" class="flex items-center mb-5" aria-label="iSTOC Home">
      <img src="${baseUrl}images/istoc-logo.png" alt="iSTOC" class="h-8" />
    </a>
  `;
}

/**
 * Renders the social media icons row
 */
function renderSocialIcons(): string {
  return `
    <div class="flex items-center gap-1 flex-wrap">
      ${socialLinks.map(link => `
        <a
          href="${link.href}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
          aria-label="${link.ariaLabel}"
        >
          ${getSocialIcon(link.platform)}
        </a>
      `).join('')}
    </div>
  `;
}

/**
 * Renders a single link item
 */
function renderLink(link: NavLink): string {
  return `
    <li>
      <a
        href="${link.href}"
        class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 leading-relaxed"
      >
        ${link.label}
      </a>
    </li>
  `;
}

/**
 * Renders a single column
 */
function renderColumn(column: FooterColumn): string {
  return `
    <div class="footer-column">
      <h3 class="text-[13px] font-bold text-gray-800 dark:text-gray-100 uppercase tracking-widest mb-5">
        ${column.title}
      </h3>
      <ul class="space-y-3.5 text-sm">
        ${column.links.map(link => renderLink(link)).join('')}
      </ul>
    </div>
  `;
}

/**
 * FooterLinks Component (Consolidated Footer)
 * Renders the complete footer with:
 * - Logo + social media icons on the left side
 * - 4 link columns on the right side
 * - Payment badges section (via FooterGroup)
 * - Policy links + copyright bottom bar (via FooterPolicy)
 */
export function FooterLinks(): string {
  return `
    <section class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" aria-label="Footer navigation">
      <div class="container-boxed py-12 md:py-16">
        <div class="flex flex-col md:flex-row gap-10 md:gap-16">
          <!-- Left Side: Logo + Description + Social Icons -->
          <div class="flex flex-col items-center md:items-start md:w-56 shrink-0">
            ${renderFooterLogo()}
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-center md:text-left">Global wholesale trade platform connecting buyers and sellers worldwide.</p>
            ${renderSocialIcons()}
          </div>

          <!-- Right Side: Link Columns -->
          <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            ${footerColumns.map(column => renderColumn(column)).join('')}
          </div>
        </div>
      </div>
    </section>

    ${FooterGroup()}
    ${FooterPolicy()}
  `;
}

/**
 * Get footer columns data for use by other components
 */
export function getFooterColumnsData(): FooterColumn[] {
  return footerColumns;
}
