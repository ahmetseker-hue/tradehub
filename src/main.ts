import './style.css'
import { initFlowbite } from 'flowbite'

// Header components
import { TopBar, SubHeader, SearchArea, initSearchArea, WelcomeBar, MegaMenu, initMegaMenu } from './components/header'

// Footer components
import { FooterLinks, FooterGroup, FooterPolicy, FooterSocial, FooterCopyright } from './components/footer'

// Floating components
import { FloatingPanel, initFloatingPanel } from './components/floating'

// Main content (existing)
import { Hero } from './components/Hero'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Header Section -->
  <header>
    ${TopBar()}
    ${SubHeader()}
    ${MegaMenu()}
    ${SearchArea()}
    ${WelcomeBar()}
  </header>

  <!-- Main Content -->
  <main>
    ${Hero()}
  </main>

  <!-- Footer Section -->
  <footer class="bg-secondary-900 text-white">
    ${FooterLinks()}
    ${FooterGroup()}
    ${FooterPolicy()}
    ${FooterSocial()}
    ${FooterCopyright()}
  </footer>

  <!-- Floating Panel -->
  ${FloatingPanel()}
`

// Initialize Flowbite explicitly to ensure interactivity for dynamically added elements
initFlowbite();

// Initialize custom component behaviors
initSearchArea();
initMegaMenu();
initFloatingPanel();
