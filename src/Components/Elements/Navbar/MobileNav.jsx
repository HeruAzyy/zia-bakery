import { motion } from 'framer-motion'

export default function MobileNav({
	containerVariants,
	itemVariants,
	Links,
	open
}) {
	return (
		<motion.ul
			initial='closed'
			animate={open ? 'open' : 'closed'}
			variants={containerVariants}
			className='p-3 absolute top-[120%] right-0 bg-light shadow-md rounded-xl w-1/2 md:w-1/4 lg:hidden'>
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
	)
}
