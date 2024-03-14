import { CgMenuRightAlt } from 'react-icons/cg'
import { useEffect, useState, useRef } from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaCircleInfo } from 'react-icons/fa6'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdContactPhone } from 'react-icons/md'
import { IoCart } from 'react-icons/io5'
import MobileNav from '../Elements/Navbar/MobileNav'
import DesktopNav from '../Elements/Navbar/DesktopNav'
import Cart from '../Elements/Navbar/Cart'

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
		<nav className='shadow-md w-[90%] z-50 fixed top-3 right-1/2 left-1/2 -translate-x-1/2 py-3 px-7 bg-light/70 backdrop-blur-md rounded-full text-dark lg:px-10'>
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
				<DesktopNav Links={Links} />

				<div
					onClick={() => setCartOpen(!cartOpen)}
					className='hidden cursor-pointer group lg:block'>
					<IoCart className='w-7 h-7 group-hover:fill-pink transition-all' />
				</div>

				{/* Cart */}
				<Cart
					cartOpen={cartOpen}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>

				{/* Mobile Nav */}
				<div className='flex gap-3 items-center lg:hidden'>
					<div
						onClick={() => setCartOpen(!cartOpen)}
						className='cursor-pointer'>
						<IoCart className='w-8 h-8' />
					</div>

					<div onClick={() => setOpen(!open)} className='cursor-pointer'>
						<CgMenuRightAlt className='w-10 h-10' />
					</div>
				</div>

				<MobileNav
					open={open}
					Links={Links}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>
			</div>
		</nav>
	)
}
