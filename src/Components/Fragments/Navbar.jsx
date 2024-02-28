/* eslint-disable react/prop-types */
import { CgMenuRightAlt } from 'react-icons/cg'
import { useEffect, useState, useRef } from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaCircleInfo } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdContactPhone } from 'react-icons/md'
import { motion } from 'framer-motion'

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
	let menuRef = useRef()

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false)
			}
		})
	})

	return (
		<motion.nav
			initial={false}
			animate={open ? 'open' : 'closed'}
			className='shadow-md w-full z-50 fixed top-0 left-0 py-3 px-5 bg-white text-dark lg:px-20'>
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

				{/* Desktop Nav */}
				<ul className={`hidden lg:flex lg:gap-7`}>
					{Links.map((link) => (
						<li key={link.name} className='text-lg font-semibold'>
							<a href={link.link} className='hover:text-pink'>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Nav */}
				<div
					ref={menuRef}
					onClick={() => setOpen(!open)}
					className='cursor-pointer lg:hidden'>
					<CgMenuRightAlt className='w-10 h-10' />
				</div>

				<motion.ul
					variants={{
						open: {
							transform: 'translateX(0px)',
							transition: {
								duration: 0.5,
								delayChildren: 0.3,
								staggerChildren: 0.05,
								type: 'spring',
								stiffness: 300,
								damping: 20
							}
						},
						closed: {
							transform: 'translateX(110%)',
							transition: {
								duration: 0.2
							}
						}
					}}
					className='py-5 px-3 absolute top-[110%] right-2 bg-white/70 shadow-md rounded-xl backdrop-blur-lg w-1/2 transition-all border-2 border-light md:w-1/4 lg:hidden'>
					{Links.map((link) => (
						<motion.li
							variants={{
								open: {
									opacity: 1,
									x: 0,
									transition: {
										type: 'spring',
										stiffness: 300,
										damping: 20
									}
								},
								closed: {
									opacity: 0,
									x: 20,
									transition: { duration: 0.2 }
								}
							}}
							key={link.name}
							className='text-left my-2'>
							<a
								href={link.link}
								className='flex items-center gap-3 text-lg py-3 px-3 rounded-lg transition-all hover:bg-pink hover:text-white'>
								{link.icon}
								{link.name}
							</a>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</motion.nav>
	)
}
