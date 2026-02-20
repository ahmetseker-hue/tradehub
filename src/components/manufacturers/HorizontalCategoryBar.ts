export function HorizontalCategoryBar(): string {
  // Mock horizontal categories
  const topCategories = [
    "Luggage, Bags & Cases",
    "Sportswear & Outdoor Apparel",
    "Consumer Electronics",
    "Jewelry, Eyewear, Watches & Accessories",
    "Packaging & Printing"
  ];

  // Mock filters (pill buttons)
  const filters = [
    "Low MOQ for customization",
    "Sample-based customization",
    "Quality management certified",
    "Minor customization"
  ];

  // Mega menu columns data mock
  const cols = [
    { title: "All categories", items: ["Jewelry, Eyewear, Watches & Accessories", "Apparel & Accessories", "Food & Beverage", "Chemicals", "Home & Garden", "Security", "Industrial Machinery", "Tools & Hardware", "Power Transmission", "Personal Care & Household Cleaning"] },
    { title: "Luggage, Bags & Cases", items: ["Packaging & Printing", "Mother, Kids & Toys", "Fabric & Textile Raw Material", "Metals & Alloys", "Medical devices & Supplies", "Vehicle Parts & Accessories", "Beauty", "Furniture", "Material Handling", "Construction & Building Machinery"] },
    { title: "Sportswear & Outdoor Apparel", items: ["Gifts & Crafts", "Safety", "Electrical Equipment & Supplies", "Environment", "Sports & Entertainment", "Lights & Lighting", "Rubber & Plastics", "Commercial Equipment & Machinery", "Renewable Energy", "Pet Supplies"] },
    { title: "Consumer Electronics", items: ["Shoes & Accessories", "Agriculture", "Home Appliances", "Construction & Real Estate", "School & Office Supplies", "Fabrication Services", "Electronic Components, Accessories &\nTelecommunications", "Vehicles & Transportation", "Testing Instrument & Equipment"] }
  ];

  return `
    <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-2 lg:p-4 mb-8">
      
      <!-- Top Row: All Categories + Horizontal List -->
      <div class="flex items-end justify-between border-b border-gray-200 dark:border-gray-700 relative mb-3">
        <div class="flex-1 flex items-center gap-4 lg:gap-8 overflow-hidden pr-4 pb-3">
          <a href="#" class="flex-shrink-0 font-bold text-gray-900 dark:text-white whitespace-nowrap px-2 relative after:content-[''] after:absolute after:-bottom-[13px] after:inset-x-2 after:h-[2px] after:bg-gray-900 after:dark:bg-white text-sm">
            All categories
          </a>
          <div class="flex items-center gap-4 lg:gap-8 min-w-0">
            ${topCategories.map(cat => `
              <a href="#" class="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 whitespace-nowrap transition-colors flex-shrink-0">
                ${cat}
              </a>
            `).join('')}
          </div>
        </div>
        
        <!-- View more button placed naturally on the right, without overlap -->
        <div class="flex-shrink-0 pl-4 bg-white dark:bg-gray-800 pb-2 relative z-10 w-[120px] flex justify-end">
          <button id="hm-view-more" type="button" class="flex items-center justify-between gap-2 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors w-full">
            <span>View more</span>
            <svg class="w-4 h-4 text-gray-500 transition-transform duration-200" id="hm-view-more-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </div>

      <!-- Mega Menu Dropdown -->
      <div id="hm-mega-menu" class="hidden absolute top-14 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-gray-700 rounded-b-xl p-4 lg:p-6 mx-2 lg:mx-4 mt-2 transition-all">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
          ${cols.map(col => `
            <div class="flex flex-col gap-3">
              <h4 class="font-bold text-sm text-gray-900 dark:text-white">${col.title}</h4>
              ${col.items.map(item => `
                <a href="#" class="text-[13px] text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 leading-snug">
                  ${item}
                </a>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom Row: Filter Pills -->
      <div class="relative pt-1 pb-1">
        <div class="flex items-center gap-3 overflow-x-auto no-scrollbar md:pr-32 py-1">
          ${filters.map(filter => `
            <button type="button" class="flex-shrink-0 px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-gray-900 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap bg-white dark:bg-gray-800">
              ${filter}
            </button>
          `).join('')}
        </div>
        
        <div class="hidden md:flex absolute right-0 top-0 h-full items-center bg-gradient-to-l from-white via-white to-transparent dark:from-gray-800 dark:via-gray-800 dark:to-transparent w-40 justify-end pointer-events-none pr-1">
          <button type="button" class="pointer-events-auto flex-shrink-0 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap bg-white dark:bg-gray-800 shadow-sm">
            View more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </div>

    </div>
  `;
}

export function initHorizontalCategoryBar() {
  const btn = document.getElementById('hm-view-more');
  const menu = document.getElementById('hm-mega-menu');
  const icon = document.getElementById('hm-view-more-icon');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        menu.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target as Node) && e.target !== btn) {
        menu.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  }
}
