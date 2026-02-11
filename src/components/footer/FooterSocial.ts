/**
 * FooterSocial Component
 * Displays social media icons and app download badges in the footer
 * Features:
 * - Social media icons (Facebook, LinkedIn, Twitter/X, YouTube, Instagram)
 * - App download badges (App Store, Google Play)
 * - Proper hover states with color transitions
 * - Dark mode support
 * - Responsive layout
 */

import type { SocialLink } from '../../types/navigation';

/**
 * Represents an app store download badge
 */
interface AppStoreBadge {
  /** Store name (e.g., 'App Store', 'Google Play') */
  name: string;
  /** URL to the app download page */
  href: string;
  /** Store identifier for icon selection */
  store: 'apple' | 'google';
}

/**
 * Social media links configuration
 */
const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    href: 'https://facebook.com/tradehub',
    icon: 'facebook',
    ariaLabel: 'Follow us on Facebook',
  },
  {
    platform: 'linkedin',
    href: 'https://linkedin.com/company/tradehub',
    icon: 'linkedin',
    ariaLabel: 'Connect with us on LinkedIn',
  },
  {
    platform: 'twitter',
    href: 'https://twitter.com/tradehub',
    icon: 'twitter',
    ariaLabel: 'Follow us on X (Twitter)',
  },
  {
    platform: 'youtube',
    href: 'https://youtube.com/@tradehub',
    icon: 'youtube',
    ariaLabel: 'Subscribe to our YouTube channel',
  },
  {
    platform: 'instagram',
    href: 'https://instagram.com/tradehub',
    icon: 'instagram',
    ariaLabel: 'Follow us on Instagram',
  },
];

/**
 * App store badges configuration
 */
const appStoreBadges: AppStoreBadge[] = [
  {
    name: 'App Store',
    href: 'https://apps.apple.com/app/tradehub',
    store: 'apple',
  },
  {
    name: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.tradehub',
    store: 'google',
  },
];

/**
 * Renders the Facebook icon
 */
function renderFacebookIcon(): string {
  return `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Renders the LinkedIn icon
 */
function renderLinkedInIcon(): string {
  return `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `;
}

/**
 * Renders the Twitter/X icon
 */
function renderTwitterIcon(): string {
  return `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  `;
}

/**
 * Renders the YouTube icon
 */
function renderYouTubeIcon(): string {
  return `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Renders the Instagram icon
 */
function renderInstagramIcon(): string {
  return `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
    </svg>
  `;
}

/**
 * Gets the appropriate icon for a social platform
 */
function getSocialIcon(platform: string): string {
  switch (platform) {
    case 'facebook':
      return renderFacebookIcon();
    case 'linkedin':
      return renderLinkedInIcon();
    case 'twitter':
      return renderTwitterIcon();
    case 'youtube':
      return renderYouTubeIcon();
    case 'instagram':
      return renderInstagramIcon();
    default:
      return '';
  }
}

/**
 * Renders the Apple App Store icon
 */
function renderAppleStoreIcon(): string {
  return `
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  `;
}

/**
 * Renders the Google Play Store icon
 */
function renderGooglePlayIcon(): string {
  return `
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
    </svg>
  `;
}

/**
 * Renders a single social media link icon
 */
function renderSocialLink(link: SocialLink): string {
  return `
    <a
      href="${link.href}"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
      aria-label="${link.ariaLabel}"
    >
      ${getSocialIcon(link.platform)}
    </a>
  `;
}

/**
 * Renders a single app store badge
 */
function renderAppBadge(badge: AppStoreBadge): string {
  const icon = badge.store === 'apple' ? renderAppleStoreIcon() : renderGooglePlayIcon();
  const storeText = badge.store === 'apple' ? 'App Store' : 'Google Play';
  const downloadText = badge.store === 'apple' ? 'Download on the' : 'Get it on';

  return `
    <a
      href="${badge.href}"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-gray-700 transition-all duration-200"
      aria-label="Download TR TradeHub from ${badge.name}"
    >
      ${icon}
      <div class="text-left rtl:text-right">
        <div class="text-xs text-gray-500 dark:text-gray-400">${downloadText}</div>
        <div class="text-sm font-semibold">${storeText}</div>
      </div>
    </a>
  `;
}

/**
 * Renders the social media icons section
 */
function renderSocialIcons(): string {
  return `
    <div class="flex items-center justify-center gap-4">
      ${socialLinks.map(link => renderSocialLink(link)).join('')}
    </div>
  `;
}

/**
 * Renders the app store badges section
 */
function renderAppBadges(): string {
  return `
    <div class="flex flex-wrap items-center justify-center gap-3">
      ${appStoreBadges.map(badge => renderAppBadge(badge)).join('')}
    </div>
  `;
}

/**
 * Renders the section header
 */
function renderSectionHeader(): string {
  return `
    <h3 class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center">
      Follow Us
    </h3>
  `;
}

/**
 * Renders the app download section header
 */
function renderAppSectionHeader(): string {
  return `
    <h3 class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center">
      Download Our App
    </h3>
  `;
}

/**
 * FooterSocial Component
 * Renders a section with social media icons and app download badges.
 *
 * Alibaba-inspired design with:
 * - Centered social media icon links
 * - App store download badges (Apple & Google Play)
 * - Hover color transitions
 * - Dark mode support
 * - Opens links in new tabs with security attributes
 * - Responsive layout
 *
 * Social platforms included:
 * - Facebook
 * - LinkedIn
 * - Twitter/X
 * - YouTube
 * - Instagram
 *
 * App stores included:
 * - Apple App Store
 * - Google Play Store
 *
 * @returns HTML string for the footer social media section
 */
export function FooterSocial(): string {
  return `
    <section class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" aria-label="Social media and app downloads">
      <div class="container-boxed py-6">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          <!-- Social Media Icons -->
          <div class="flex flex-col items-center md:items-start">
            ${renderSectionHeader()}
            ${renderSocialIcons()}
          </div>

          <!-- App Download Badges -->
          <div class="flex flex-col items-center md:items-end">
            ${renderAppSectionHeader()}
            ${renderAppBadges()}
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Get social links data for use by other components
 */
export function getSocialLinksData(): SocialLink[] {
  return socialLinks;
}

/**
 * Get app store badges data for use by other components
 */
export function getAppStoreBadgesData(): AppStoreBadge[] {
  return appStoreBadges;
}
