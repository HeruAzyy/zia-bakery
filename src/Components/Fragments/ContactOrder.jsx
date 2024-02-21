import { Button } from '../Elements/Button'

export const ContactOrder = () => {
	return (
		<div className='text-center bg-[url(../src/assets/images/order-img.jpg)] bg-center bg-cover'>
			<div className='backdrop-brightness-50 bg-dark/50 py-14 text-white'>
				<p>HUBUNGI KAMI UNTUK</p>
				<h4 className='font-serif font-semibold tracking-wide pb-1'>
					Online Delivery
				</h4>
				<p className='pb-5'>(+62) 8123 4567</p>
				<Button variant='bg-transparant border-2 text-white mx-auto active:scale-100 active:text-black active:bg-white transition-all'>
					Order Sekarang!
				</Button>
			</div>
		</div>
	)
}
