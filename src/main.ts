import './style.css'
import { initFlowbite } from 'flowbite'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Navbar()}
  ${Hero()}
`

// Initialize Flowbite explicitly to ensure interactivity for dynamically added elements
initFlowbite();
