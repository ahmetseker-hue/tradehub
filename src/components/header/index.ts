/**
 * Header Components Barrel Export
 * Re-exports all header components for easier importing
 */

// TopBar component - main navigation with logo, auth, cart, locale selectors
export { TopBar } from './TopBar';

// SubHeader component - secondary navigation with categories trigger, nav links
export { SubHeader } from './SubHeader';

// SearchArea component - search input with tabs, deep search, camera button
export { SearchArea, initSearchArea } from './SearchArea';

// WelcomeBar component - welcome message and CTA buttons
export { WelcomeBar } from './WelcomeBar';

// MegaMenu component - full-width category dropdown
export { MegaMenu, initMegaMenu } from './MegaMenu';
