export function ManufacturerList(): string {
    // Mock data for manufacturer cards
    const manufacturers = [
        {
            id: "1",
            name: "Shanghai Hongao Luggage Co., Ltd.",
            logo: "/images/suppliers/placeholder1.png",
            verified: true,
            years: "3 yrs",
            staff: "110+ staff",
            area: "1,300+ m²",
            revenue: "$20K+",
            rating: "5.0",
            reviews: "1 review",
            capabilities: [
                "Low MOQ for customization",
                "ODM service available",
                "Response time \u22646h"
            ],
            products: [
                { image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200", price: "$6.50-7.60", minOrder: "100 pieces" },
                { image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=200", price: "$7.60-8.80", minOrder: "100 pieces" },
                { image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=200", price: "$8.60-10.60", minOrder: "100 pieces" }
            ],
            factoryImages: [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
            ],
            imageCount: 16
        },
        {
            id: "2",
            name: "Guangzhou Senka Electronics Co., Ltd.",
            logo: "/images/suppliers/placeholder2.png",
            verified: true,
            years: "5 yrs",
            staff: "200+ staff",
            area: "3,000+ m²",
            revenue: "$500K+",
            rating: "4.9",
            reviews: "24 reviews",
            capabilities: [
                "Full customization",
                "Design service available",
                "Response time \u22642h"
            ],
            products: [
                { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200", price: "$12.00-15.00", minOrder: "50 pieces" },
                { image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=200", price: "$25.00-30.00", minOrder: "20 pieces" },
                { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200", price: "$8.00-10.00", minOrder: "100 pieces" }
            ],
            factoryImages: [
                "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=400"
            ],
            imageCount: 8
        }
    ];

    return `
    <div class="flex flex-col gap-4 mb-10 pb-10">
      ${manufacturers.map(renderManufacturerCard).join('')}
    </div>
  `;
}

function renderManufacturerCard(mfg: any): string {
    // SVG for Verified tick
    const verifiedSvg = `
    <svg class="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  `;

    const verifiedBadge = mfg.verified ? `
    <div class="flex items-center gap-0.5 text-[#1a66ff] font-bold text-[13px] mr-0.5">
      ${verifiedSvg} Verified
    </div>
  ` : '';

    return `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border border-gray-200 dark:border-gray-700 p-5 lg:p-6 transition-shadow hover:shadow-md">
      
      <!-- Top Row: Profile & Actions -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        
        <!-- Left: Logo & Info -->
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-200 shrink-0 overflow-hidden">
             <span class="text-xs text-gray-400 font-semibold px-1 text-center leading-tight overflow-hidden break-words text-ellipsis">${mfg.name}</span>
          </div>
          <div class="flex flex-col justify-center min-h-[56px]">
            <a href="#" class="text-base font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline">
              ${mfg.name}
            </a>
            <div class="flex items-center flex-wrap gap-1.5 mt-1 text-[13px] text-gray-600 dark:text-gray-400">
              ${verifiedBadge}
              <span>${mfg.years}</span>
              <span class="text-gray-300 dark:text-gray-600">&bull;</span>
              <span>${mfg.staff}</span>
              <span class="text-gray-300 dark:text-gray-600">&bull;</span>
              <span>${mfg.area}</span>
              <span class="text-gray-300 dark:text-gray-600">&bull;</span>
              <span>${mfg.revenue}</span>
            </div>
          </div>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-3 shrink-0">
          <button type="button" class="p-2 text-gray-400 hover:text-red-500 transition-colors" aria-label="Favorite">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <button type="button" class="px-5 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors">
            Chat now
          </button>
          <button type="button" class="px-5 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors">
            Contact us
          </button>
        </div>
      </div>

      <!-- Bottom Row: Capabilities, Products, Factory Image -->
      <div class="flex flex-col lg:flex-row gap-6">
        
        <!-- Column 1: Rating & Capabilities -->
        <div class="w-full lg:w-48 xl:w-56 flex-shrink-0">
          <div class="mb-4">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Rating and reviews</p>
            <p class="text-[13px]">
              <span class="font-bold text-gray-900 dark:text-white">${mfg.rating}/5</span>
              <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-[#1a66ff] hover:underline underline-offset-2">(${mfg.reviews})</a>
            </p>
          </div>
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Factory capabilities</p>
            <ul class="space-y-2">
              ${mfg.capabilities.map((cap: string) => `
                <li class="flex items-start gap-1.5">
                  <span class="text-gray-900 dark:text-gray-300 text-sm font-black w-1 mt-0.5 shrink-0">&bull;</span>
                  <span class="text-[13px] font-bold text-gray-800 dark:text-gray-200">${cap}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Column 2: Products (Grid) -->
        <div class="flex-1 min-w-0 grid grid-cols-3 gap-3 md:gap-4">
          ${mfg.products.map((prod: any) => `
            <a href="#" class="flex flex-col group">
              <div class="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-2 relative">
                <img src="${prod.image}" alt="Product" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <p class="text-[15px] font-bold text-gray-900 dark:text-white truncate mt-1">${prod.price}</p>
              <p class="text-[13px] text-gray-500 dark:text-gray-400 truncate mt-0.5">Min. order: ${prod.minOrder}</p>
            </a>
          `).join('')}
        </div>

        <!-- Column 3: Factory Image Slide -->
        <div class="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 relative group rounded-lg overflow-hidden hidden sm:block">
          <img src="${mfg.factoryImages[0]}" alt="Factory" class="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
          
          <!-- Gradient overlay for text readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <!-- Controls (Arrows) -->
          <button type="button" class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
          
          <!-- Image Counter -->
          <div class="absolute bottom-3 right-3 bg-[#4250e6] text-white text-[12px] font-medium px-3 py-1 rounded-full flex items-center justify-center gap-1.5 z-10">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            1/${mfg.imageCount}
          </div>
        </div>

      </div>
    </div>
  `;
}
