import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContactOrder } from './Components/Fragments/ContactOrder'
import { Navbar } from './Components/Fragments/Navbar'
import { AboutSection } from './Components/Layouts/AboutSection'
import { HeroSection } from './Components/Layouts/HeroSection'
import { MenuSection } from './Components/Layouts/MenuSection'
import { ServiceSection } from './Components/Layouts/ServiceSection'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navbar />
		<HeroSection />
		<AboutSection />
		<ServiceSection />
		<MenuSection />
		<ContactOrder />
	</React.StrictMode>
)
