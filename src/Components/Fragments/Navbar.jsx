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
		<nav className='shadow-md w-full z-50 fixed top-0 left-0 py-5 px-5 bg-dark/80 backdrop-blur-xl text-white xl:px-20'>
			<div className='flex items-center justify-between'>
				<div>
					<a href='/'>
						<h4>Logo</h4>
					</a>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className='text-3xl flex items-center cursor-pointer xl:hidden'>
					<CgMenuRightAlt className='w-10 h-10' />
				</div>

				<ul
					className={`xl:flex xl:gap-7 xl:items-center xl:pb-0 py-10 top-full absolute xl:static bg-dark xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 transition-all duration-300 ${
						open
							? 'scale-y-100 origin-top opacity-100 xl:opacity-100 xl:scale-y-100'
							: 'scale-y-0 origin-top opacity-0 xl:opacity-100 xl:scale-y-100'
					}`}>
					{Links.map((link) => (
						<li key={link.name} className='text-center xl:my-0 my-7'>
							<a
								href={link.link}
								className='font-semibold text-lg hover:bg-pink hover:text-white py-3 px-10 rounded-lg transition-all xl:hover:bg-white xl:hover:text-pink xl:p-0 xl:rounded-none'>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
