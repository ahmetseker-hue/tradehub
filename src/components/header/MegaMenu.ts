/**
 * MegaMenu Component
 * Full-width category dropdown with 39 categories in multi-column grid layout
 * Triggered by the "All Categories" button in SubHeader
 */

import type { Category } from '../../types/navigation';

/**
 * 39 categories for the B2B marketplace mega menu
 * Organized by industry/product type with optional subcategories
 */
const categories: Category[] = [
  {
    id: 'machinery',
    name: 'Machinery',
    icon: 'cog',
    subcategories: [
      { id: 'cnc-machines', name: 'CNC Machines' },
      { id: 'packaging-machines', name: 'Packaging Machines' },
      { id: 'food-machines', name: 'Food Machines' },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'chip',
    subcategories: [
      { id: 'consumer-electronics', name: 'Consumer Electronics' },
      { id: 'electronic-components', name: 'Electronic Components' },
      { id: 'smart-devices', name: 'Smart Devices' },
    ],
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    icon: 'shirt',
    subcategories: [
      { id: 'mens-clothing', name: "Men's Clothing" },
      { id: 'womens-clothing', name: "Women's Clothing" },
      { id: 'fabrics', name: 'Fabrics & Textiles' },
    ],
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: 'home',
    subcategories: [
      { id: 'furniture', name: 'Furniture' },
      { id: 'home-decor', name: 'Home Decor' },
      { id: 'garden-supplies', name: 'Garden Supplies' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction & Real Estate',
    icon: 'building',
    subcategories: [
      { id: 'building-materials', name: 'Building Materials' },
      { id: 'construction-equipment', name: 'Construction Equipment' },
      { id: 'plumbing', name: 'Plumbing' },
    ],
  },
  {
    id: 'auto-parts',
    name: 'Auto Parts & Accessories',
    icon: 'car',
    subcategories: [
      { id: 'engine-parts', name: 'Engine Parts' },
      { id: 'car-electronics', name: 'Car Electronics' },
      { id: 'tires-wheels', name: 'Tires & Wheels' },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: 'sparkles',
    subcategories: [
      { id: 'skincare', name: 'Skincare' },
      { id: 'haircare', name: 'Haircare' },
      { id: 'cosmetics', name: 'Cosmetics' },
    ],
  },
  {
    id: 'lights-lighting',
    name: 'Lights & Lighting',
    icon: 'lightbulb',
    subcategories: [
      { id: 'led-lights', name: 'LED Lights' },
      { id: 'outdoor-lighting', name: 'Outdoor Lighting' },
      { id: 'commercial-lighting', name: 'Commercial Lighting' },
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Entertainment',
    icon: 'trophy',
    subcategories: [
      { id: 'fitness-equipment', name: 'Fitness Equipment' },
      { id: 'outdoor-sports', name: 'Outdoor Sports' },
      { id: 'team-sports', name: 'Team Sports' },
    ],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    icon: 'box',
    subcategories: [
      { id: 'paper-packaging', name: 'Paper Packaging' },
      { id: 'plastic-packaging', name: 'Plastic Packaging' },
      { id: 'printing-services', name: 'Printing Services' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical Equipment',
    icon: 'bolt',
    subcategories: [
      { id: 'cables-wires', name: 'Cables & Wires' },
      { id: 'switches-sockets', name: 'Switches & Sockets' },
      { id: 'generators', name: 'Generators' },
    ],
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    icon: 'beaker',
    subcategories: [
      { id: 'industrial-chemicals', name: 'Industrial Chemicals' },
      { id: 'pharmaceutical-chemicals', name: 'Pharmaceutical Chemicals' },
      { id: 'agricultural-chemicals', name: 'Agricultural Chemicals' },
    ],
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    icon: 'utensils',
    subcategories: [
      { id: 'snacks', name: 'Snacks & Confectionery' },
      { id: 'beverages', name: 'Beverages' },
      { id: 'frozen-food', name: 'Frozen Food' },
    ],
  },
  {
    id: 'rubber-plastics',
    name: 'Rubber & Plastics',
    icon: 'cube',
    subcategories: [
      { id: 'plastic-raw-materials', name: 'Plastic Raw Materials' },
      { id: 'rubber-products', name: 'Rubber Products' },
      { id: 'plastic-products', name: 'Plastic Products' },
    ],
  },
  {
    id: 'security',
    name: 'Security & Protection',
    icon: 'shield',
    subcategories: [
      { id: 'cctv-cameras', name: 'CCTV Cameras' },
      { id: 'access-control', name: 'Access Control' },
      { id: 'fire-safety', name: 'Fire Safety' },
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    icon: 'wrench',
    subcategories: [
      { id: 'hand-tools', name: 'Hand Tools' },
      { id: 'power-tools', name: 'Power Tools' },
      { id: 'fasteners', name: 'Fasteners' },
    ],
  },
  {
    id: 'office-supplies',
    name: 'Office & School Supplies',
    icon: 'clipboard',
    subcategories: [
      { id: 'office-furniture', name: 'Office Furniture' },
      { id: 'stationery', name: 'Stationery' },
      { id: 'office-electronics', name: 'Office Electronics' },
    ],
  },
  {
    id: 'bags-shoes',
    name: 'Bags, Shoes & Accessories',
    icon: 'bag',
    subcategories: [
      { id: 'handbags', name: 'Handbags' },
      { id: 'footwear', name: 'Footwear' },
      { id: 'fashion-accessories', name: 'Fashion Accessories' },
    ],
  },
  {
    id: 'health-medical',
    name: 'Health & Medical',
    icon: 'heart',
    subcategories: [
      { id: 'medical-equipment', name: 'Medical Equipment' },
      { id: 'health-products', name: 'Health Products' },
      { id: 'pharmaceuticals', name: 'Pharmaceuticals' },
    ],
  },
  {
    id: 'toys-hobbies',
    name: 'Toys & Hobbies',
    icon: 'puzzle',
    subcategories: [
      { id: 'educational-toys', name: 'Educational Toys' },
      { id: 'outdoor-toys', name: 'Outdoor Toys' },
      { id: 'hobby-supplies', name: 'Hobby Supplies' },
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'leaf',
    subcategories: [
      { id: 'farm-machinery', name: 'Farm Machinery' },
      { id: 'seeds-plants', name: 'Seeds & Plants' },
      { id: 'fertilizers', name: 'Fertilizers' },
    ],
  },
  {
    id: 'minerals-metals',
    name: 'Minerals & Metals',
    icon: 'gem',
    subcategories: [
      { id: 'steel', name: 'Steel' },
      { id: 'aluminum', name: 'Aluminum' },
      { id: 'copper', name: 'Copper' },
    ],
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    icon: 'signal',
    subcategories: [
      { id: 'mobile-phones', name: 'Mobile Phones' },
      { id: 'network-equipment', name: 'Network Equipment' },
      { id: 'communication-devices', name: 'Communication Devices' },
    ],
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: 'sun',
    subcategories: [
      { id: 'solar-products', name: 'Solar Products' },
      { id: 'batteries', name: 'Batteries' },
      { id: 'power-supplies', name: 'Power Supplies' },
    ],
  },
  {
    id: 'environment',
    name: 'Environment',
    icon: 'recycle',
    subcategories: [
      { id: 'waste-management', name: 'Waste Management' },
      { id: 'water-treatment', name: 'Water Treatment' },
      { id: 'air-purification', name: 'Air Purification' },
    ],
  },
  {
    id: 'gifts-crafts',
    name: 'Gifts & Crafts',
    icon: 'gift',
    subcategories: [
      { id: 'promotional-gifts', name: 'Promotional Gifts' },
      { id: 'handicrafts', name: 'Handicrafts' },
      { id: 'seasonal-items', name: 'Seasonal Items' },
    ],
  },
  {
    id: 'jewelry-watches',
    name: 'Jewelry & Watches',
    icon: 'diamond',
    subcategories: [
      { id: 'fashion-jewelry', name: 'Fashion Jewelry' },
      { id: 'watches', name: 'Watches' },
      { id: 'fine-jewelry', name: 'Fine Jewelry' },
    ],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: 'truck',
    subcategories: [
      { id: 'vehicles', name: 'Vehicles' },
      { id: 'logistics', name: 'Logistics' },
      { id: 'marine-equipment', name: 'Marine Equipment' },
    ],
  },
  {
    id: 'measurement',
    name: 'Measurement & Analysis',
    icon: 'gauge',
    subcategories: [
      { id: 'testing-equipment', name: 'Testing Equipment' },
      { id: 'measuring-instruments', name: 'Measuring Instruments' },
      { id: 'lab-supplies', name: 'Lab Supplies' },
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'couch',
    subcategories: [
      { id: 'home-furniture', name: 'Home Furniture' },
      { id: 'commercial-furniture', name: 'Commercial Furniture' },
      { id: 'outdoor-furniture', name: 'Outdoor Furniture' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Equipment',
    icon: 'hammer',
    subcategories: [
      { id: 'industrial-tools', name: 'Industrial Tools' },
      { id: 'measuring-tools', name: 'Measuring Tools' },
      { id: 'welding-equipment', name: 'Welding Equipment' },
    ],
  },
  {
    id: 'textile-leather',
    name: 'Textile & Leather Products',
    icon: 'fabric',
    subcategories: [
      { id: 'leather-goods', name: 'Leather Goods' },
      { id: 'textile-products', name: 'Textile Products' },
      { id: 'yarn-thread', name: 'Yarn & Thread' },
    ],
  },
  {
    id: 'timepieces',
    name: 'Timepieces, Eyewear',
    icon: 'clock',
    subcategories: [
      { id: 'clocks', name: 'Clocks' },
      { id: 'sunglasses', name: 'Sunglasses' },
      { id: 'eyeglasses', name: 'Eyeglasses' },
    ],
  },
  {
    id: 'computer-products',
    name: 'Computer Products',
    icon: 'desktop',
    subcategories: [
      { id: 'computers', name: 'Computers' },
      { id: 'computer-peripherals', name: 'Computer Peripherals' },
      { id: 'storage-devices', name: 'Storage Devices' },
    ],
  },
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics',
    icon: 'tv',
    subcategories: [
      { id: 'audio-video', name: 'Audio & Video' },
      { id: 'home-appliances', name: 'Home Appliances' },
      { id: 'smart-home', name: 'Smart Home' },
    ],
  },
  {
    id: 'fabrication',
    name: 'Fabrication Services',
    icon: 'factory',
    subcategories: [
      { id: 'metal-fabrication', name: 'Metal Fabrication' },
      { id: 'plastic-molding', name: 'Plastic Molding' },
      { id: 'cnc-machining', name: 'CNC Machining' },
    ],
  },
  {
    id: 'pet-supplies',
    name: 'Pet Supplies',
    icon: 'paw',
    subcategories: [
      { id: 'pet-food', name: 'Pet Food' },
      { id: 'pet-accessories', name: 'Pet Accessories' },
      { id: 'pet-grooming', name: 'Pet Grooming' },
    ],
  },
  {
    id: 'baby-products',
    name: 'Baby Products',
    icon: 'baby',
    subcategories: [
      { id: 'baby-clothing', name: 'Baby Clothing' },
      { id: 'baby-care', name: 'Baby Care' },
      { id: 'baby-toys', name: 'Baby Toys' },
    ],
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    icon: 'wind',
    subcategories: [
      { id: 'solar-panels', name: 'Solar Panels' },
      { id: 'wind-turbines', name: 'Wind Turbines' },
      { id: 'energy-storage', name: 'Energy Storage' },
    ],
  },
];

/**
 * Renders an icon SVG based on the icon name
 */
function renderIcon(iconName: string): string {
  const icons: Record<string, string> = {
    cog: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    chip: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`,
    shirt: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm9 4l-3-4h-3m-6 0H6l-3 4m0 0v8h18v-8m-18 0h18"/></svg>`,
    home: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    building: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    car: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17h.01M16 17h.01M6 11l1.5-4.5A2 2 0 019.4 5h5.2a2 2 0 011.9 1.5L18 11M6 11h12m-12 0a2 2 0 00-2 2v4a1 1 0 001 1h1m12-7a2 2 0 012 2v4a1 1 0 01-1 1h-1m-8 0h4"/></svg>`,
    sparkles: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    lightbulb: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    trophy: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3h14M5 3v3a7 7 0 007 7m-7-10H3m16 0h2M5 6H3m2 0a7 7 0 007 7m7-7h2M19 6a7 7 0 01-7 7m0 0v4m0 0H9m3 0h3m-3 0v3"/></svg>`,
    box: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
    bolt: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    beaker: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    utensils: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    cube: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
    shield: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    wrench: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>`,
    clipboard: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>`,
    bag: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
    heart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    puzzle: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a2 2 0 110-4h1a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>`,
    leaf: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/></svg>`,
    gem: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3L2 9l10 13 10-13-10-6z"/></svg>`,
    signal: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>`,
    sun: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    recycle: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    gift: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>`,
    diamond: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3L2 9l10 13 10-13-10-6zm0 0v6m-8 0h16"/></svg>`,
    truck: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>`,
    gauge: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    couch: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    hammer: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
    fabric: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`,
    clock: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    desktop: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    tv: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    factory: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    paw: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h.01M10 10h.01M12 14c-2 0-3 1-3 2s1 2 3 2 3-1 3-2-1-2-3-2zm5-6a2 2 0 100-4 2 2 0 000 4zM7 8a2 2 0 100-4 2 2 0 000 4zm12 4a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 100-4 2 2 0 000 4z"/></svg>`,
    baby: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    wind: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>`,
  };

  return icons[iconName] || icons['box'];
}

/**
 * Renders a single category item with optional subcategories on hover
 */
function renderCategoryItem(category: Category): string {
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return `
    <div class="group/item relative">
      <a
        href="/category/${category.id}"
        class="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400 rounded-lg transition-colors"
      >
        <span class="flex-shrink-0 text-gray-400 group-hover/item:text-primary-500 dark:text-gray-500 dark:group-hover/item:text-primary-400 transition-colors">
          ${renderIcon(category.icon || 'box')}
        </span>
        <span class="flex-1 truncate">${category.name}</span>
        ${hasSubcategories ? `
          <svg class="w-4 h-4 text-gray-400 group-hover/item:text-primary-500 dark:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
          </svg>
        ` : ''}
      </a>
      ${hasSubcategories ? `
        <div class="absolute left-full top-0 ml-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
          <div class="py-2">
            ${category.subcategories?.map(sub => `
              <a
                href="/category/${category.id}/${sub.id}"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400 transition-colors"
              >
                ${sub.name}
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renders a column of categories for the grid layout
 */
function renderCategoryColumn(columnCategories: Category[], columnIndex: number): string {
  return `
    <div class="space-y-1" data-column="${columnIndex}">
      ${columnCategories.map(cat => renderCategoryItem(cat)).join('')}
    </div>
  `;
}

/**
 * Splits categories into columns for the grid layout
 * Creates a balanced distribution across the specified number of columns
 */
function splitIntoColumns(items: Category[], numColumns: number): Category[][] {
  const columns: Category[][] = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push([]);
  }

  const itemsPerColumn = Math.ceil(items.length / numColumns);

  items.forEach((item, index) => {
    const columnIndex = Math.floor(index / itemsPerColumn);
    if (columnIndex < numColumns) {
      columns[columnIndex].push(item);
    } else {
      columns[numColumns - 1].push(item);
    }
  });

  return columns;
}

/**
 * Renders the mobile version of the mega menu
 */
function renderMobileMegaMenu(): string {
  return `
    <div class="lg:hidden py-4 max-h-96 overflow-y-auto">
      <div class="space-y-1">
        ${categories.map(category => `
          <details class="group">
            <summary class="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg cursor-pointer list-none">
              <div class="flex items-center gap-3">
                <span class="text-gray-400 dark:text-gray-500">
                  ${renderIcon(category.icon || 'box')}
                </span>
                <span>${category.name}</span>
              </div>
              ${category.subcategories && category.subcategories.length > 0 ? `
                <svg class="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
                </svg>
              ` : ''}
            </summary>
            ${category.subcategories && category.subcategories.length > 0 ? `
              <div class="pl-12 pr-4 pb-2 space-y-1">
                ${category.subcategories.map(sub => `
                  <a
                    href="/category/${category.id}/${sub.id}"
                    class="block py-2 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    ${sub.name}
                  </a>
                `).join('')}
              </div>
            ` : ''}
          </details>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Renders the desktop version of the mega menu with multi-column grid
 */
function renderDesktopMegaMenu(): string {
  // Split categories into 5 columns for desktop view
  const columns = splitIntoColumns(categories, 5);

  return `
    <div class="hidden lg:block py-6">
      <div class="grid grid-cols-5 gap-6">
        ${columns.map((col, index) => renderCategoryColumn(col, index)).join('')}
      </div>
    </div>
  `;
}

/**
 * Renders the quick links section at the bottom of the mega menu
 */
function renderQuickLinks(): string {
  return `
    <div class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-4 text-sm">
          <a href="/categories" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
            View All Categories →
          </a>
          <span class="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
          <a href="/trending" class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
            Trending Products
          </a>
          <span class="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
          <a href="/new-arrivals" class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
            New Arrivals
          </a>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>39 Categories Available</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * MegaMenu Component
 * Renders a full-width dropdown menu with 39 categories in a multi-column grid layout
 * - Desktop: 5-column grid with hover subcategories
 * - Mobile: Accordion-style expandable categories
 * - Opens on hover via Flowbite dropdown
 */
export function MegaMenu(): string {
  return `
    <div
      id="mega-menu-dropdown"
      class="fixed left-0 right-0 z-50 hidden bg-white border-b border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700"
      style="top: auto;"
    >
      <div class="container-boxed">
        <!-- Header with title and close hint -->
        <div class="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            All Categories
          </h2>
          <span class="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">
            Hover over categories to explore
          </span>
        </div>

        <!-- Desktop Multi-Column Grid -->
        ${renderDesktopMegaMenu()}

        <!-- Mobile Accordion View -->
        ${renderMobileMegaMenu()}

        <!-- Quick Links Footer -->
        ${renderQuickLinks()}
      </div>
    </div>
  `;
}

/**
 * Initializes the mega menu with custom behavior
 * Call this after DOM is ready and Flowbite is initialized
 */
export function initMegaMenu(): void {
  // Get the mega menu and trigger elements
  const megaMenu = document.getElementById('mega-menu-dropdown');
  const trigger = document.getElementById('mega-menu-trigger');

  if (!megaMenu || !trigger) return;

  // Add keyboard navigation support
  megaMenu.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      // Close menu on Escape key
      megaMenu.classList.add('hidden');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });

  // Ensure proper positioning below the trigger
  const positionMenu = (): void => {
    const triggerRect = trigger.getBoundingClientRect();
    megaMenu.style.top = `${triggerRect.bottom}px`;
  };

  // Position on scroll and resize
  window.addEventListener('scroll', positionMenu, { passive: true });
  window.addEventListener('resize', positionMenu, { passive: true });

  // Initial positioning
  positionMenu();
}
