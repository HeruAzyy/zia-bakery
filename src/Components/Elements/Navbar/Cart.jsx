import { motion } from 'framer-motion'
import { MdDelete } from 'react-icons/md'

export default function Cart({ containerVariants, itemVariants, cartOpen }) {
	return (
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
		</motion.ul>
	)
}
