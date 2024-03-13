/* eslint-disable react/prop-types */
import { CgMenuRightAlt } from 'react-icons/cg'
import { useEffect, useState, useRef } from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaCircleInfo } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdContactPhone } from 'react-icons/md'
import { motion } from 'framer-motion'
import { IoCart } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

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

	const containerVariants = {
		open: {
			transform: 'translateX(0%)',
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.05
			}
		},
		closed: {
			transform: 'translateX(100%)',
			opacity: 0,
			transition: {
				duration: 0.3
			}
		}
	}

	const itemVariants = {
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
	}

	let [open, setOpen] = useState(false)
	let [cartOpen, setCartOpen] = useState(false)
	let menuRef = useRef()

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false)
			}
			if (!menuRef.current.contains(e.target)) {
				setCartOpen(false)
			}
		}

		document.addEventListener('click', handler)
	})

	return (
		<motion.nav className='shadow-md w-[90%] z-50 fixed top-3 right-1/2 left-1/2 -translate-x-1/2 py-3 px-7 bg-light/70 backdrop-blur-md rounded-full text-dark lg:px-10'>
			<div ref={menuRef} className='flex items-center justify-between'>
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
							<a
								href={link.link}
								className='hover:text-pink transition-all'>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				<div
					onClick={() => setCartOpen(!cartOpen)}
					className='hidden cursor-pointer group lg:block'>
					<IoCart className='w-7 h-7 group-hover:fill-pink transition-all' />
				</div>

				{/* Cart */}
				<motion.ul
					variants={containerVariants}
					initial='closed'
					animate={cartOpen ? 'open' : 'closed'}
					className='flex flex-col gap-3 p-5 absolute top-[120%] right-0 bg-light w-full shadow-md rounded-xl md:w-1/2 lg:w-1/3'>
					<motion.li variants={itemVariants}>
						<div className='flex justify-between items-center'>
							<div className='flex gap-3 items-center'>
								<div className='w-20 rounded-lg overflow-hidden border border-dark'>
									<img src='images/menu/matcha.jpg' alt='Menu' />
								</div>

								<div>
									<p className='font-semibold'>Matcha Mille Crepes</p>
									<p className='text-sm'>Rp 25.000,00</p>
								</div>
							</div>

							<div className='cursor-pointer group'>
								<MdDelete className='w-7 h-7 group-hover:fill-pink' />
							</div>
						</div>
					</motion.li>

					<motion.li variants={itemVariants}>
						<div className='flex justify-between items-center'>
							<div className='flex gap-3 items-center'>
								<div className='w-20 rounded-lg overflow-hidden border border-dark'>
									<img src='images/menu/nutella.jpg' alt='Menu' />
								</div>

								<div>
									<p className='font-semibold'>Nutella Mille Crepes</p>
									<p className='text-sm'>Rp 23.000,00</p>
								</div>
							</div>

							<div className='cursor-pointer group'>
								<MdDelete className='w-7 h-7 group-hover:fill-pink' />
							</div>
						</div>
					</motion.li>
				</motion.ul>

				{/* Mobile Nav */}
				<div className='flex gap-3 lg:hidden'>
					<div
						onClick={() => setCartOpen(!cartOpen)}
						className='cursor-pointer'>
						<IoCart className='w-9 h-9' />
					</div>

					<div onClick={() => setOpen(!open)} className='cursor-pointer'>
						<CgMenuRightAlt className='w-10 h-10' />
					</div>
				</div>

				<motion.ul
					initial='closed'
					animate={open ? 'open' : 'closed'}
					variants={containerVariants}
					className='py-5 px-3 absolute top-[120%] right-0 bg-light shadow-md rounded-xl w-1/2 md:w-1/4 lg:hidden'>
					{Links.map((link) => (
						<motion.li
							variants={itemVariants}
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
