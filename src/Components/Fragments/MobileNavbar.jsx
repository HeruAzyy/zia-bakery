/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5'
import { CgMenuRightAlt } from 'react-icons/cg'

export const MobileNavbar = () => {
	return (
		<nav className='bg-white z-50 fixed top-0 left-0 right-0 flex justify-between items-center py-5 px-5'>
			<div>
				<h4>Logo</h4>
			</div>

			<div onClick={alert}>
				<CgMenuRightAlt className='w-10 h-10 cursor-pointer' />
			</div>

			<div
				className={`absolute scale-y-0 origin-top top-full left-0 right-0 w-full bg-white transition-all duration-300`}>
				<ul className='block text-center'>
					<li className='py-3 mx-auto'>
						<a
							href='#m'
							className='font-semibold py-3 px-14 rounded-lg hover:bg-pink hover:text-white transition-all'>
							Home
						</a>
					</li>
					<li className='py-3 mx-auto'>
						<a
							href='#m'
							className='font-semibold py-3 px-14 rounded-lg hover:bg-pink hover:text-white transition-all'>
							About
						</a>
					</li>
					<li className='py-3 mx-auto'>
						<a
							href='#m'
							className='font-semibold py-3 px-14 rounded-lg hover:bg-pink hover:text-white transition-all'>
							Services
						</a>
					</li>
					<li className='py-3 mx-auto'>
						<a
							href='#m'
							className='font-semibold py-3 px-14 rounded-lg hover:bg-pink hover:text-white transition-all'>
							Menu
						</a>
					</li>
					<li className='py-3 mx-auto'>
						<a
							href='#m'
							className='font-semibold py-3 px-14 rounded-lg hover:bg-pink hover:text-white transition-all'>
							Contact
						</a>
					</li>
					<li>
						<a href='#m' className='pb-3 px-14'>
							<IoClose className='mx-auto w-10 h-10' />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
