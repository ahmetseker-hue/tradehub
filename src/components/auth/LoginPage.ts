/**
 * LoginPage Component
 * Login page content with social login options (Google, Facebook, Apple, Email),
 * promotional banner, and 'Create account' link.
 * Used within AuthLayout for both desktop and mobile views.
 */

import { SocialLoginButtons, initSocialLoginButtons, type LoginProvider } from './SocialLoginButtons';
import { getBaseUrl } from './AuthLayout';

/* ── Types ──────────────────────────────────────────── */

export interface LoginPageOptions {
  /** Callback when a social provider is selected */
  onProviderSelect?: (provider: LoginProvider) => void;
  /** Callback when 'Create account' is clicked */
  onCreateAccount?: () => void;
}

/* ── Component HTML ─────────────────────────────────── */

export function LoginPage(): string {
  const baseUrl = getBaseUrl();

  return `
    <div id="login-page" class="auth-page-content">
      <!-- Header -->
      <div class="mb-6 text-center lg:text-left">
        <h1 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">Giriş Yap</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Son giriş yönteminizi kullanın</p>
      </div>

      <!-- Promotional Banner (Desktop only) -->
      <div class="hidden lg:block mb-6 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-100 dark:border-orange-800/30">
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-800/40 flex items-center justify-center">
            <svg class="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-orange-800 dark:text-orange-300">
              <strong>İlk siparişinizde ÜCRETSİZ kargo</strong>
            </p>
            <p class="text-xs text-orange-600/80 dark:text-orange-400/80">
              Üye olun ve özel fırsatlardan yararlanın
            </p>
          </div>
        </div>
      </div>

      <!-- Social Login Buttons -->
      ${SocialLoginButtons()}

      <!-- Footer Links -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          TradeHub'da yeni misiniz?
          <a
            href="${baseUrl}register.html"
            id="login-create-account-link"
            class="ml-1 font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 hover:underline transition-colors"
          >
            Hesap oluştur
          </a>
        </p>
      </div>

      <!-- QR Code Link -->
      <div class="mt-4 text-center">
        <a
          href="javascript:void(0)"
          id="login-qr-link"
          class="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
          </svg>
          QR kod ile giriş yap
        </a>
      </div>

      <!-- Terms Notice -->
      <div class="mt-6 text-center">
        <p class="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
          Devam ederek,
          <a href="javascript:void(0)" class="underline hover:text-gray-600 dark:hover:text-gray-400">Kullanım Şartları</a>
          ve
          <a href="javascript:void(0)" class="underline hover:text-gray-600 dark:hover:text-gray-400">Gizlilik Politikası</a>'nı
          kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  `;
}

/* ── Init Logic ──────────────────────────────────────── */

/**
 * Initialize LoginPage interactivity
 * Sets up social login button handlers and create account link
 */
export function initLoginPage(options: LoginPageOptions = {}): void {
  const loginPage = document.getElementById('login-page');
  if (!loginPage) return;

  // Initialize social login buttons
  initSocialLoginButtons({
    onProviderSelect: (provider) => {
      // Call custom handler if provided
      if (options.onProviderSelect) {
        options.onProviderSelect(provider);
      }

      // Default behavior: redirect based on provider
      handleProviderLogin(provider);
    }
  });

  // Handle 'Create account' link
  const createAccountLink = document.getElementById('login-create-account-link');
  if (createAccountLink && options.onCreateAccount) {
    createAccountLink.addEventListener('click', (e) => {
      e.preventDefault();
      options.onCreateAccount!();
    });
  }

  // Handle QR code link (visual only for now)
  const qrLink = document.getElementById('login-qr-link');
  if (qrLink) {
    qrLink.addEventListener('click', (e) => {
      e.preventDefault();
      // TODO: Implement QR code modal when backend is ready
    });
  }
}

/* ── Helper Functions ────────────────────────────────── */

/**
 * Handle provider login selection (UI-only, no actual auth)
 * In production, this would redirect to OAuth flow
 */
function handleProviderLogin(provider: LoginProvider): void {
  // For now, just dispatch a custom event for analytics/tracking
  const event = new CustomEvent('login-provider-selected', {
    bubbles: true,
    detail: { provider, timestamp: Date.now() }
  });
  document.dispatchEvent(event);

  // TODO: When backend is ready, redirect to OAuth flow:
  // window.location.href = `/api/auth/${provider}`;
}
