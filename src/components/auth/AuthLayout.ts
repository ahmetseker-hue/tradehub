/**
 * AuthLayout Component
 * Shared layout for login and register pages with split-screen desktop
 * and full-screen mobile layouts (Alibaba-style).
 *
 * Desktop: Orange promotional banner on left (40%), form content on right (60%)
 * Mobile: Full orange background with centered white card overlay
 */

/* ── Types ──────────────────────────────────────────── */

export interface AuthLayoutOptions {
  /** Page title for mobile header */
  title?: string;
  /** Whether to show back button on mobile */
  showBackButton?: boolean;
  /** Custom back button handler */
  onBackClick?: () => void;
}

/* ── Utility Functions ───────────────────────────────── */

/**
 * Get base URL for assets (handles GitHub Pages subdirectory)
 */
export const getBaseUrl = (): string => {
  // Vite replaces import.meta.env.BASE_URL at build time.
  // If it's set to a subdirectory (not just "/"), use it directly.
  const viteBase = typeof import.meta !== 'undefined' ? import.meta.env?.BASE_URL : undefined;
  if (viteBase && viteBase !== '/') {
    return viteBase;
  }
  // Runtime fallback: detect GitHub Pages subdirectory from URL
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/tradehub/')) {
    return '/tradehub/';
  }
  return '/';
};

/* ── Sub-component Renders ───────────────────────────── */

/**
 * Renders the mobile header bar with optional back button and title
 */
function renderMobileHeader(options: AuthLayoutOptions = {}): string {
  const { title = 'Giriş yap veya hesap oluştur', showBackButton = true } = options;
  const baseUrl = getBaseUrl();

  return `
    <header class="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center h-14 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      ${showBackButton ? `
        <button
          type="button"
          id="auth-mobile-back"
          class="flex items-center justify-center w-10 h-10 -ml-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Geri"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
        </button>
      ` : ''}
      <span class="flex-1 text-center text-sm font-medium text-gray-900 dark:text-white truncate ${showBackButton ? 'pr-10' : ''}">${title}</span>
      <a href="${baseUrl}" class="absolute right-4 top-1/2 -translate-y-1/2" aria-label="iSTOC Ana Sayfa">
        <img src="${baseUrl}images/istoc-logo.png" alt="iSTOC" class="h-6" />
      </a>
    </header>
  `;
}

/**
 * Renders the promotional banner for desktop (left side) and mobile background
 */
function renderPromoBanner(): string {
  return `
    <div class="auth-promo-banner flex flex-col items-center justify-center px-8 py-12 text-center text-white">
      <!-- Tagline -->
      <h1 class="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
        Küresel ticareti<br/>basitleştiriyoruz
      </h1>
      <p class="text-sm lg:text-base opacity-90 mb-8 max-w-xs">
        Dünya genelinde güvenilir tedarikçilerle bağlantı kurun
      </p>

      <!-- Illustration placeholder - globe with packages -->
      <div class="relative w-48 h-48 lg:w-64 lg:h-64">
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="w-32 h-32 lg:w-40 lg:h-40 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <!-- Decorative elements -->
        <div class="absolute top-4 right-4 w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-white/20 flex items-center justify-center">
          <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
        </div>
        <div class="absolute bottom-4 left-4 w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-white/20 flex items-center justify-center">
          <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
      </div>

      <!-- Trust badges -->
      <div class="mt-8 flex items-center gap-4 text-xs opacity-80">
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          Güvenli Ödeme
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Dünya Çapında
        </span>
      </div>
    </div>
  `;
}

/* ── Main Component ──────────────────────────────────── */

/**
 * AuthLayout Component
 * Renders split-screen desktop / full-screen mobile auth layout
 *
 * @param content - HTML string for the form content (LoginPage, RegisterPage, etc.)
 * @param options - Layout configuration options
 * @returns HTML string for the complete auth layout
 */
export function AuthLayout(content: string, options: AuthLayoutOptions = {}): string {
  return `
    <div id="auth-layout" class="min-h-screen">
      <!-- Mobile Header -->
      ${renderMobileHeader(options)}

      <!-- Main Container -->
      <div class="flex min-h-screen">

        <!-- Left: Promo Banner (Desktop only) -->
        <div class="hidden lg:flex lg:w-[40%] xl:w-[45%] auth-gradient-bg">
          ${renderPromoBanner()}
        </div>

        <!-- Right: Form Content -->
        <div class="flex-1 flex flex-col lg:w-[60%] xl:w-[55%]">

          <!-- Mobile: Orange background with white card overlay -->
          <div class="lg:hidden flex-1 auth-gradient-bg">
            <!-- Spacer for fixed header -->
            <div class="h-14"></div>

            <!-- Mobile promo content (condensed) -->
            <div class="px-6 pt-6 pb-4 text-white text-center">
              <h2 class="text-xl font-bold mb-1">Küresel ticareti basitleştiriyoruz</h2>
              <p class="text-sm opacity-90">Dünya genelinde güvenilir tedarikçilerle bağlantı kurun</p>
            </div>

            <!-- White card overlay -->
            <div class="auth-mobile-card bg-white dark:bg-gray-900 rounded-t-3xl min-h-[60vh] px-6 py-8">
              ${content}
            </div>
          </div>

          <!-- Desktop: Clean white/dark form area -->
          <div class="hidden lg:flex flex-1 flex-col justify-center px-8 xl:px-16 py-12 bg-white dark:bg-gray-900">
            <div class="w-full max-w-md mx-auto">
              ${content}
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

/* ── Init Logic ──────────────────────────────────────── */

/**
 * Initialize AuthLayout interactivity
 * Sets up mobile back button handler
 */
export function initAuthLayout(options: AuthLayoutOptions = {}): void {
  const backBtn = document.getElementById('auth-mobile-back');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (options.onBackClick) {
        options.onBackClick();
      } else {
        // Default: go back in history or to home
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = getBaseUrl();
        }
      }
    });
  }
}
