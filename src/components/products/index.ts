/**
 * Products Components Barrel Export
 * Re-exports all products page components for easier importing
 */

// FilterSidebar component - Alibaba-style filter panel with multiple filter types
export { FilterSidebar, initFilterSidebar, getDefaultFilterSections } from './FilterSidebar';

// ProductListingGrid component - responsive product grid with hover zoom effect
export { ProductListingGrid, initProductListingGrid, renderProductListingCard, renderNoResults } from './ProductListingGrid';

// SearchHeader component - search results header with sorting and view controls
export { SearchHeader, initSearchHeader, updateSearchHeader } from './SearchHeader';
