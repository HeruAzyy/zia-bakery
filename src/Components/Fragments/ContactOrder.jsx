import { Button } from '../Elements/Button'

export const ContactOrder = () => {
	return (
		<div
			id='contact'
			className='text-center bg-[url(../images/order-img.webp)] bg-center bg-cover'>
			<div className='backdrop-brightness-50 bg-dark/50 py-20 text-white'>
				<p>HUBUNGI KAMI UNTUK</p>
				<h4 className='font-serif font-semibold tracking-wide pb-1'>
					Online Delivery
				</h4>
				<p className='pb-5'>(+62) 8123 4567</p>
				<Button variant='bg-transparant border-2 text-white mx-auto active:scale-100 active:text-black active:bg-white transition-all'>
					Order Sekarang!
				</Button>

				<div className='absolute bottom-0 flex items-center justify-between w-full px-5 pb-1 text-sm'>
					<div className='flex gap-2 items-center'>
						<img
							className='w-5 h-5 bg-white rounded p-0.5'
							src='logo.png'
							alt='Logo'
						/>
						<p className='font-serif tracking-wider'>Zia Bakery.</p>
					</div>
					<p className='text-xs'>© 2024 | Developed by Heru Azy.</p>
				</div>
			</div>
		</div>
	)
}
