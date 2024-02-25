/* eslint-disable react/prop-types */
import { CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'

export const Navbar = () => {
	let Links = [
		{ name: 'Home', link: '#' },
		{ name: 'About', link: '#about' },
		{ name: 'Services', link: '#services' },
		{ name: 'Menu', link: '#menu' },
		{ name: 'Contact', link: '#contact' }
	]

	let [open, setOpen] = useState(false)

	return (
		<nav className='shadow-md w-full z-50 fixed top-0 left-0 py-3 px-5 bg-white text-dark xl:px-20'>
			<div className='flex items-center justify-between'>
				<div>
					<a href='/'>
						<img
							className='w-8 md:w-10'
							src='logo.png'
							alt='Zia Bakery'
						/>
					</a>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className='cursor-pointer xl:hidden'>
					<CgMenuRightAlt className='w-10 h-10' />
				</div>

				<ul
					className={`py-10 px-3 absolute top-[105%] right-0 bg-white/70 shadow-md rounded-l-xl backdrop-blur-lg w-1/2 transition-all duration-500 border-2 border-light md:w-1/4 xl:border-none xl:shadow-none xl:w-auto xl:static xl:flex xl:gap-10 xl:items-center xl:p-0 xl:z-auto ${
						open ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
					}`}>
					{Links.map((link) => (
						<li key={link.name} className='text-left my-2 xl:m-0'>
							<a
								href={link.link}
								className='font-semibold block text-lg py-3 px-3 rounded-lg transition-all hover:bg-pink hover:text-white xl:hover:bg-transparent xl:hover:text-pink xl:p-0 xl:rounded-none'>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
