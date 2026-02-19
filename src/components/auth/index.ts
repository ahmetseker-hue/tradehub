/**
 * Auth Components Barrel Export
 * Re-exports all authentication components for easier importing
 */

// Social Login Buttons
export {
  SocialLoginButtons,
  initSocialLoginButtons,
  getSocialLoginButtons,
  type LoginProvider,
  type SocialLoginButtonsOptions
} from './SocialLoginButtons';

// Auth Layout
export {
  AuthLayout,
  initAuthLayout,
  getBaseUrl,
  type AuthLayoutOptions
} from './AuthLayout';

// Login Page
export {
  LoginPage,
  initLoginPage,
  type LoginPageOptions
} from './LoginPage';
