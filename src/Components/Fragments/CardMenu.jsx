/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa6'
import { Button } from '../Elements/Button'

export const CardMenu = ({ children }) => {
	return (
		<div className='border shadow-md rounded-2xl p-5 snap-center snap-always hover:bg-gray-100'>
			{children}
		</div>
	)
}
export const Header = ({ image, stars }) => {
	return (
		<div className='rounded-t-lg overflow-hidden relative w-[300px]'>
			<img className='w-full' src={image} alt='Menu Kami' />
			<div className='absolute top-3 left-3'>
				<div className='px-4 py-2 flex items-center gap-2 bg-pink rounded-3xl'>
					<FaStar className='fill-yellow-300' />
					<p className='text-white text-sm font-semibold'>{stars}</p>
				</div>
			</div>
		</div>
	)
}
export const Body = ({ name, children }) => {
	return (
		<>
			<h5 className='font-semibold pt-5'>{name}</h5>
			<p className='py-3 whitespace-normal'>{children}</p>
		</>
	)
}
export const Footer = ({ price }) => {
	return (
		<div className='flex items-center justify-between pt-3'>
			<p className='font-bold'>{price}</p>
			<Button variant='bg-pink text-white'>Order Sekarang</Button>
		</div>
	)
}

CardMenu.Header = Header
CardMenu.Body = Body
CardMenu.Footer = Footer
