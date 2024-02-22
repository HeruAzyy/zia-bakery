import { ContactOrder } from './Components/Fragments/ContactOrder'
import { MobileNavbar } from './Components/Fragments/MobileNavbar'
import { AboutSection } from './Components/Layouts/AboutSection'
import { HeroSection } from './Components/Layouts/HeroSection'
import { MenuSection } from './Components/Layouts/MenuSection'
import { ServiceSection } from './Components/Layouts/ServiceSection'

export default function App() {
	return (
		<>
			<MobileNavbar />
			<HeroSection />
			<AboutSection />
			<ServiceSection />
			<MenuSection />
			<ContactOrder></ContactOrder>
		</>
	)
}
