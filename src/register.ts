/**
 * Register Page — Entry Point
 * Assembles AuthLayout with RegisterPage content for the registration flow.
 */

import './style.css'
import { initFlowbite } from 'flowbite'

// Auth components
import { AuthLayout, initAuthLayout, RegisterPage, initRegisterPage } from './components/auth'

/* ── App Setup ───────────────────────────────────────── */

const appEl = document.querySelector<HTMLDivElement>('#app')!
appEl.innerHTML = AuthLayout(RegisterPage(), {
  title: 'Hesap oluştur',
  showBackButton: true,
})

/* ── Initialize Behaviors ─────────────────────────────── */

// Initialize Flowbite components (dropdowns, modals, etc.)
initFlowbite()

// Initialize auth layout (back button handler)
initAuthLayout()

// Initialize register page interactivity (multi-step flow, form validation)
initRegisterPage()
