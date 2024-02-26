/* eslint-disable react/prop-types */
import { CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaCircleInfo } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdContactPhone } from 'react-icons/md'

export const Navbar = () => {
	let Links = [
		{
			name: 'Home',
			link: '#',
			icon: <GoHomeFill className='w-5 h-5 lg:hidden' />
		},
		{
			name: 'About',
			link: '#about',
			icon: <FaCircleInfo className='lg:hidden' />
		},
		{
			name: 'Services',
			link: '#services',
			icon: <RiCustomerService2Fill className='w-5 h-5 lg:hidden' />
		},
		{
			name: 'Menu',
			link: '#menu',
			icon: <BiSolidFoodMenu className='w-5 h-5 lg:hidden' />
		},
		{
			name: 'Contact',
			link: '#contact',
			icon: <MdContactPhone className='w-5 h-5 lg:hidden' />
		}
	]

	let [open, setOpen] = useState(false)

	return (
		<nav className='shadow-md w-full z-50 fixed top-0 left-0 py-3 px-5 bg-white text-dark lg:px-20'>
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
					className='cursor-pointer lg:hidden'>
					<CgMenuRightAlt className='w-10 h-10' />
				</div>

				<ul
					className={`py-10 px-3 absolute top-[105%] right-0 bg-white/70 shadow-md rounded-l-xl backdrop-blur-lg w-1/2 transition-all duration-500 border-2 border-light md:w-1/4 lg:border-none lg:shadow-none lg:w-auto lg:static lg:flex lg:gap-10 lg:items-center lg:p-0 lg:z-auto ${
						open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
					}`}>
					{Links.map((link) => (
						<li key={link.name} className='text-left my-2 lg:m-0'>
							<a
								href={link.link}
								className='flex items-center gap-3 text-lg font-semibold py-3 px-3 rounded-lg transition-all hover:bg-pink hover:text-white lg:hover:bg-transparent lg:hover:text-pink lg:p-0 lg:rounded-none'>
								{link.icon}
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
