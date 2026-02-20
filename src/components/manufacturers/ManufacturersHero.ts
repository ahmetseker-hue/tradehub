export function ManufacturersHero(): string {
  return `
    <!-- Top Bar for Manufacturers specific promos (optional, like "Accio AI | Quotation") -->
    <div class="hidden lg:flex items-center justify-between mb-4 px-2">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white">Welcome to iSTOC.com</h2>
      <div class="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <a href="#" class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
          <span class="text-lg font-black">▲</span> Accio AI
        </a>
        <span class="text-gray-300 dark:text-gray-600">|</span>
        <a href="#" class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Request for Quotation
        </a>
        <span class="text-gray-300 dark:text-gray-600">|</span>
        <a href="#" class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
          <span class="font-bold text-lg">A</span> Online Trade Show
        </a>
        <span class="text-gray-300 dark:text-gray-600">|</span>
        <a href="#" class="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
          <span class="font-bold italic text-lg">P</span> Prime hub supplies
        </a>
      </div>
    </div>

    <!-- Main Grid: 4 columns (Sidebar) + (Samples/LIVE) + (Top Ranking) + (Profile Box) -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 items-stretch">
      
      <!-- Column 1: Source by category (Sidebar) -->
      ${renderSourceByCategory()}

      <!-- Column 2: Get samples & Factory LIVE Q&A -->
      ${renderMiddleColumn()}

      <!-- Column 3: Top-ranking manufacturers -->
      ${renderTopRankingColumn()}

      <!-- Column 4: Profile / Guest Panel -->
      ${renderProfileColumn()}

    </div>
  `;
}

function renderSourceByCategory(): string {
  // Mock categories similar to Alibaba
  const categories = [
    { icon: '💼', label: 'Luggage, Bags & Cases' },
    { icon: '👕', label: 'Sportswear & Outdoor Apparel' },
    { icon: '🎧', label: 'Consumer Electronics' },
    { icon: '⌚', label: 'Jewelry, Eyewear, Watches & Accessories' },
    { icon: '👠', label: 'Shoes & Accessories' },
    { icon: '📦', label: 'Packaging & Printing' },
  ];

  return `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col h-full">
      <h3 class="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        Source by category
      </h3>
      <ul class="flex-1 flex flex-col gap-1">
        ${categories.map(cat => `
          <li>
            <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <span class="text-xl w-6 text-center flex-shrink-0">${cat.icon}</span>
                <span class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium truncate">${cat.label}</span>
              </div>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-primary-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </li>
        `).join('')}
        <li class="mt-auto pt-2">
          <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span class="text-xl w-6 text-center text-gray-500 flex-shrink-0">㗊</span>
              <span class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate">All categories</span>
            </div>
            <svg class="w-4 h-4 text-gray-400 group-hover:text-primary-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </li>
      </ul>
    </div>
  `;
}

function renderMiddleColumn(): string {
  return `
    <div class="flex flex-col gap-4 h-full">
      
      <!-- Get samples (Top Half) -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex-1">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-bold text-gray-900 dark:text-white">Get samples</h3>
        </div>
        <div class="grid grid-cols-2 gap-3 h-[calc(100%-2rem)]">
          <a href="#" class="group relative rounded-lg bg-[#f4f7fb] dark:bg-gray-700/50 p-3 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div class="flex-1 flex items-center justify-center mb-2">
              <img src="https://images.unsplash.com/photo-1550009158-9efff620e236?auto=format&fit=crop&q=80&w=150&h=100" alt="Trending" class="object-contain h-20 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal">
            </div>
            <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 mt-auto">Trending</p>
          </a>
          <a href="#" class="group relative rounded-lg bg-[#f4f7fb] dark:bg-gray-700/50 p-3 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div class="flex-1 flex items-center justify-center mb-2">
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=150&h=100" alt="Newly released" class="object-contain h-20 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal">
            </div>
            <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 mt-auto">Newly released</p>
          </a>
        </div>
      </div>

      <!-- Factory LIVE Q&A (Bottom Half) -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex-1">
        <div class="flex items-center gap-2 mb-3">
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-[10px]">&gt;</span>
          <h3 class="text-base font-bold text-gray-900 dark:text-white">Factory LIVE Q&A</h3>
        </div>
        <div class="grid grid-cols-2 gap-3 h-[calc(100%-2rem)]">
          <a href="#" class="group relative rounded-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=300" alt="Q&A LIVE" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-x-0 bottom-0 bg-blue-900/40 backdrop-blur-sm p-1.5 flex items-center justify-center border-t border-white/20">
              <div class="flex items-center gap-1.5">
                <div class="w-5 h-5 rounded-full border border-white/50 bg-gray-400 flex overflow-hidden"><img src="https://i.pravatar.cc/50?img=1" class="w-full h-full object-cover"></div>
                <span class="text-[11px] font-medium text-white shadow-sm tracking-wide">Q&A LIVE</span>
              </div>
            </div>
          </a>
          <a href="#" class="group relative rounded-lg overflow-hidden flex flex-col">
             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300" alt="Q&A LIVE" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-x-0 bottom-0 bg-blue-900/40 backdrop-blur-sm p-1.5 flex items-center justify-center border-t border-white/20">
              <div class="flex items-center gap-1.5">
                <div class="w-5 h-5 rounded-full border border-white/50 bg-gray-400 flex overflow-hidden"><img src="https://i.pravatar.cc/50?img=2" class="w-full h-full object-cover"></div>
                <span class="text-[11px] font-medium text-white shadow-sm tracking-wide">Q&A LIVE</span>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  `;
}

function renderTopRankingColumn(): string {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 h-full flex flex-col">
      <h3 class="text-base font-bold text-gray-900 dark:text-white mb-3">Top-ranking manufacturers</h3>
      <div class="grid grid-cols-2 grid-rows-2 flex-1 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full">
        
        <!-- Most popular -->
        <a href="#" class="group relative p-2 overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full pb-6 border-r border-b border-gray-100 dark:border-gray-700">
          <div class="flex-1 rounded min-h-[80px] mb-2 flex flex-col items-center justify-center">
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=150" alt="Most popular" class="h-20 object-contain group-hover:scale-105 transition-transform duration-300">
          </div>
          <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 absolute bottom-2 w-full left-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">Most popular</p>
        </a>

        <!-- Best sellers -->
        <a href="#" class="group relative p-2 overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full pb-6 border-b border-gray-100 dark:border-gray-700">
          <div class="flex-1 rounded min-h-[80px] mb-2 flex flex-col items-center justify-center">
            <img src="https://images.unsplash.com/photo-1588508065123-287b28e01bb2?auto=format&fit=crop&w=150" alt="Best sellers" class="h-20 object-contain group-hover:scale-105 transition-transform duration-300">
          </div>
          <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 absolute bottom-2 w-full left-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">Best sellers</p>
        </a>

        <!-- Leading factories -->
        <a href="#" class="group relative p-2 overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full pb-6 border-r border-gray-100 dark:border-gray-700">
          <div class="flex-1 flex items-center justify-center min-h-[80px] mb-2">
            <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=150" alt="Leading factories" class="h-16 object-contain group-hover:scale-105 transition-transform duration-300">
          </div>
          <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 absolute bottom-2 w-full left-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">Leading factories</p>
        </a>

        <!-- Quick response -->
        <a href="#" class="group relative p-2 overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full pb-6">
          <div class="flex-1 flex items-center justify-center min-h-[80px] mb-2 relative">
             <span class="text-4xl font-bold text-gray-100 dark:text-gray-700 tracking-tighter absolute inset-0 flex items-center justify-center z-0 select-none opacity-80">XX</span>
             <img src="https://images.unsplash.com/photo-1549488344-cddf27027b40?auto=format&fit=crop&w=150" alt="Quick response" class="h-10 object-contain z-10 opacity-90 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal">
          </div>
          <p class="text-[13px] text-center text-gray-600 dark:text-gray-400 absolute bottom-2 w-full left-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">Quick response</p>
        </a>
      </div>
    </div>
  `;
}

function renderProfileColumn(): string {
  return `
    <div class="flex flex-col gap-4 h-full">
      <!-- Welcome Card -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 flex-1 flex flex-col">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 ring-2 ring-white dark:ring-gray-800 shadow-sm">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400">Welcome!</p>
            <p class="text-base font-bold text-gray-900 dark:text-white">Guest</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mb-6">
          <a href="/login" class="flex items-center justify-center rounded-full bg-[#f60] hover:bg-[#e05a00] text-white py-2 px-4 text-sm font-bold transition-colors">Sign in</a>
          <a href="/register" class="flex items-center justify-center rounded-full bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 text-[#f60] border border-[#f60] py-2 px-4 text-sm font-bold transition-colors">Join for free</a>
        </div>

        <div class="mt-auto">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-2">Your browsing history</h4>
          <div class="flex items-center gap-2">
            <a href="#" class="w-14 h-14 rounded overflow-hidden relative flex-shrink-0 group"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"></a>
            <a href="#" class="w-14 h-14 rounded overflow-hidden relative flex-shrink-0 group"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"></a>
            <a href="#" class="w-14 h-14 rounded overflow-hidden relative flex-shrink-0 group"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"></a>
            <a href="#" class="w-14 h-14 rounded overflow-hidden relative flex-shrink-0 group"><img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"></a>
          </div>
        </div>
      </div>

      <!-- RFQ Banner -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 hidden xl:flex flex-col items-center justify-center text-center">
        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">One request, multiple quotes</p>
        <a href="#" class="w-full py-2.5 px-4 bg-white dark:bg-gray-900 border border-gray-900 dark:border-gray-500 rounded-full text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          Request for Quotation
        </a>
      </div>
    </div>
  `;
}
