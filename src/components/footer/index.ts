/**
 * Footer Components Barrel Export
 * Re-exports all footer components for easier importing
 */

// FooterLinks component - 5-column grid with categorized links
export { FooterLinks, getFooterColumnsData } from './FooterLinks';

// FooterGroup component - partner/sister company logos and links
export { FooterGroup, getGroupCompaniesData } from './FooterGroup';

// FooterPolicy component - legal/policy links row
export { FooterPolicy, getPolicyLinksData } from './FooterPolicy';

// FooterSocial component - social media icons and app download badges
export { FooterSocial, getSocialLinksData, getAppStoreBadgesData } from './FooterSocial';

// FooterCopyright component - copyright text
export { FooterCopyright, getCopyrightConfig } from './FooterCopyright';
