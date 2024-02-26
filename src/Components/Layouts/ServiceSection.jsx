import { SectionTitle } from '../Elements/SectionTitle'
import { CardService } from '../Fragments/CardService'

const services = [
	{
		id: 1,
		title: 'Menu Berkualitas',
		description: `Semua menu yang kami sajikan merupakan menu yang terjamin fresh dan berkualitas baik untuk anda.`
	},
	{
		id: 2,
		title: 'Pesan Online',
		description: `Anda bisa memesan menu kami secara online dan biarkan kami yang mengantarkan sesuai tujuan.`
	},
	{
		id: 3,
		title: 'Konsultasi',
		description: `Konsultasikan keluhan anda mengenai menu kami, kami akan selalu membantu dan menyelesaikannya.`
	}
]

export const ServiceSection = () => {
	return (
		<section id='services' className='px-5 pt-24 lg:px-20'>
			<SectionTitle>Services</SectionTitle>

			<div className='flex gap-5 flex-col md:flex-row'>
				{services.map((service) => (
					<CardService
						key={service.id}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</section>
	)
}
