import { Arrow } from '../../assets/SVG/Arrow'
import { SectionTitle } from '../Elements/SectionTitle'
import { CardMenu } from '../Fragments/CardMenu'

// const menus = [
// 	{
// 		id: 1,
// 		name: 'Matcha Mille Crepes',
// 		image: '../src/assets/images/menu/matcha.jpg',
// 		stars: 4.5,
// 		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
//     voluptatum quos perferendis ipsum libero id.`,
// 		price: 'IDR 25.000'
// 	},
// 	{
// 		id: 2,
// 		name: 'Nutella Mille Crepes',
// 		image: '../src/assets/images/menu/nutella.jpg',
// 		stars: 4.5,
// 		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
//     voluptatum quos perferendis ipsum libero id.`,
// 		price: 'IDR 23.000'
// 	},
// 	{
// 		id: 3,
// 		name: 'Oreo Mille Crepes',
// 		image: '../src/assets/images/menu/oreo.jpg',
// 		stars: 4.4,
// 		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
//     voluptatum quos perferendis ipsum libero id.`,
// 		price: 'IDR 20.000'
// 	},
// 	{
// 		id: 4,
// 		name: 'Strawberry Mille Crepes',
// 		image: '../src/assets/images/menu/strawberry.jpg',
// 		stars: 4.6,
// 		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
//     voluptatum quos perferendis ipsum libero id.`,
// 		price: 'IDR 23.000'
// 	},
// 	{
// 		id: 5,
// 		name: 'Tiramisu Mille Crepes',
// 		image: '../src/assets/images/menu/tiramisu.jpg',
// 		stars: 4.7,
// 		description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
//     voluptatum quos perferendis ipsum libero id.`,
// 		price: 'IDR 27.000'
// 	}
// ]

export const MenuSection = () => {
	return (
		<section className='px-5 py-20 whitespace-nowrap xl:px-20'>
			<div className='flex items-center justify-between'>
				<SectionTitle>Menu Kami</SectionTitle>
				<a
					href='#menu'
					className='self-start font-semibold pt-1 flex gap-2 group'>
					Semua Menu
					<Arrow />
				</a>
			</div>

			<div className='flex gap-5 overflow-x-scroll snap-x snap-mandatory pb-1'>
				{/* {menus.map((menu) => (
					<CardMenu key={menu.id}>
						<CardMenu.Header image={menu.image} stars={menu.stars} />
						<CardMenu.Body name={menu.name}>
							{menu.description}
						</CardMenu.Body>
						<CardMenu.Footer price={menu.price} />
					</CardMenu>
				))} */}

				<CardMenu>
					<CardMenu.Header
						image='../src/assets/images/menu/matcha.jpg'
						stars='4.5'
					/>
					<CardMenu.Body name='Matcha Mille Crepes'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						voluptatum quos perferendis ipsum libero id.
					</CardMenu.Body>
					<CardMenu.Footer price='23.000' />
				</CardMenu>

				<CardMenu>
					<CardMenu.Header
						image='../src/assets/images/menu/nutella.jpg'
						stars='4.5'
					/>
					<CardMenu.Body name='Nutella Mille Crepes'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						voluptatum quos perferendis ipsum libero id.
					</CardMenu.Body>
					<CardMenu.Footer price='23.000' />
				</CardMenu>

				<CardMenu>
					<CardMenu.Header
						image='../src/assets/images/menu/oreo.jpg'
						stars='4.5'
					/>
					<CardMenu.Body name='Oreo Mille Crepes'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						voluptatum quos perferendis ipsum libero id.
					</CardMenu.Body>
					<CardMenu.Footer price='20.000' />
				</CardMenu>

				<CardMenu>
					<CardMenu.Header
						image='../src/assets/images/menu/strawberry.jpg'
						stars='4.5'
					/>
					<CardMenu.Body name='Strawberry Mille Crepes'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						voluptatum quos perferendis ipsum libero id.
					</CardMenu.Body>
					<CardMenu.Footer price='23.000' />
				</CardMenu>

				<CardMenu>
					<CardMenu.Header
						image='../src/assets/images/menu/tiramisu.jpg'
						stars='4.5'
					/>
					<CardMenu.Body name='Tiramisu Mille Crepes'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
						voluptatum quos perferendis ipsum libero id.
					</CardMenu.Body>
					<CardMenu.Footer price='27.000' />
				</CardMenu>
			</div>
		</section>
	)
}
