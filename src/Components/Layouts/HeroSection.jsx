import { ArrowDown } from '../../assets/SVG/ArrowDown'
import { SocialIcons } from '../Fragments/SocialIcons'

export const HeroSection = () => {
	return (
		<section className='bg-[url(../src/assets/images/hero-img.jpg)] bg-cover bg-center h-[100svh]'>
			<div className='h-full w-full backdrop-brightness-50 bg-dark/50 flex items-center justify-center'>
				<div className='text-center text-white px-5 md:px-20'>
					<p className='text-lg tracking-wider'>WELCOME TO</p>
					<h1 className='font-serif tracking-wide py-3 px-3 my-2 border-t border-b'>
						Zia Bakery
					</h1>
					<p className='text-lg tracking-wider pb-10'>
						Professional Artisan Mille Crepes
					</p>

					<SocialIcons />

					<a
						href='#about'
						className='w-10 mx-auto flex justify-center items-center mt-20'>
						<ArrowDown />
					</a>
				</div>
			</div>
		</section>
	)
}