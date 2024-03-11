import { IoArrowForward } from 'react-icons/io5'
import { SectionTitle } from '../Elements/SectionTitle'
import { CardMenu } from '../Fragments/CardMenu'

let menus = [
	{
		id: 1,
		name: 'Matcha Mille Crepes',
		image: 'images/menu/matcha.jpg',
		stars: 4.4,
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 25000
	},
	{
		id: 2,
		name: 'Nutella Mille Crepes',
		image: 'images/menu/nutella.jpg',
		stars: 4.5,
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 23000
	},
	{
		id: 3,
		name: 'Oreo Mille Crepes',
		image: 'images/menu/oreo.jpg',
		stars: 4.4,
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 20000
	},
	{
		id: 4,
		name: 'Strawberry Mille Crepes',
		image: 'images/menu/strawberry.jpg',
		stars: 4.6,
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 23000
	},
	{
		id: 5,
		name: 'Tiramisu Mille Crepes',
		image: 'images/menu/tiramisu.jpg',
		stars: 4.7,
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 27000
	},
	{
		id: 6,
		name: 'Coming Soon..',
		image: 'images/menu/soon.png',
		stars: '???',
		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
    voluptatum quos perferendis ipsum libero id.`,
		price: 'Rp ???'
	}
]

export let MenuSection = () => {
	return (
		<section id='menu' className='px-5 pt-24 whitespace-nowrap lg:px-20'>
			<div className='flex items-center justify-between'>
				<SectionTitle>Menu Kami</SectionTitle>
				<a
					href='#menu'
					className='self-start font-semibold pt-1 flex items-center gap-2 group'>
					Semua Menu
					<IoArrowForward className='h-5 w-5 group-hover:translate-x-1 transition-all' />
				</a>
			</div>

			<div className='flex gap-3 overflow-x-scroll snap-x snap-mandatory pb-1 lg:gap-5 lg:px-0.5 lg:grid lg:grid-cols-3'>
				{menus.map((menu) => (
					<CardMenu key={menu.id}>
						<CardMenu.Header image={menu.image} stars={menu.stars} />
						<CardMenu.Body name={menu.name}>
							{menu.description}
						</CardMenu.Body>
						<CardMenu.Footer
							price={menu.price.toLocaleString('id-ID', {
								style: 'currency',
								currency: 'IDR'
							})}
						/>
					</CardMenu>
				))}
			</div>
		</section>
	)
}
