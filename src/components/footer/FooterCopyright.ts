/**
 * FooterCopyright Component
 * Displays the copyright text at the bottom of the footer
 * Features:
 * - Centered copyright text
 * - Dynamic year (2026 as specified)
 * - Gray text color with proper contrast
 * - Dark mode support
 * - Proper spacing and typography
 */

/**
 * Configuration for copyright content
 */
const copyrightConfig = {
  /** Company name displayed in copyright */
  companyName: 'TR TradeHub',
  /** Copyright year */
  year: 2026,
  /** Rights reserved text in Turkish */
  rightsText: 'Tüm Hakları Saklıdır.',
};

/**
 * Builds the full copyright text string
 */
function buildCopyrightText(): string {
  return `© ${copyrightConfig.year} ${copyrightConfig.companyName}. ${copyrightConfig.rightsText}`;
}

/**
 * FooterCopyright Component
 * Renders the copyright notice at the bottom of the footer.
 *
 * Alibaba-inspired design with:
 * - Centered text alignment
 * - Subtle gray text color for visual hierarchy
 * - Dark mode compatibility
 * - Proper vertical spacing
 * - Small font size for footer context
 *
 * Content:
 * "© 2026 TR TradeHub. Tüm Hakları Saklıdır."
 *
 * @returns HTML string for the footer copyright section
 */
export function FooterCopyright(): string {
  return `
    <section class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" aria-label="Copyright information">
      <div class="container-boxed py-4">
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
          ${buildCopyrightText()}
        </p>
      </div>
    </section>
  `;
}

/**
 * Get copyright configuration for use by other components
 */
export function getCopyrightConfig(): typeof copyrightConfig {
  return { ...copyrightConfig };
}
