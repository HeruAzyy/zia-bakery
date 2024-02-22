import { IoArrowForward } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa6'
import { Button } from '../Elements/Button'
import { SectionTitle } from '../Elements/SectionTitle'

export const AboutSection = () => {
	return (
		<section id='about' className='px-5 pt-24 xl:px-20'>
			<div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
				<div className='bg-[url(../src/assets/images/about-img.jpg)] bg-center bg-cover rounded-2xl overflow-hidden w-full shadow-md'>
					<div className='flex h-[400px] bg-dark/40 bg-gradient-to-r from-dark'>
						<div className='self-center text-white px-10 xl:px-20'>
							<h5 className='font-serif pb-3'>Zia Bakery </h5>
							<p>
								Setiap kreasi Mille Crepes adalah cerminan dari
								keindahan, kelembutan, dan kelezatan. Kami mengundang
								Anda untuk menjelajahi dunia rasa yang tak terbatas
								bersama kami dan merayakan setiap momen dengan keindahan
								dan kelezatan kue kami.
							</p>
						</div>
					</div>
				</div>

				<div className='md:w-3/4'>
					<SectionTitle>Tentang Kami</SectionTitle>

					<p className='pb-5'>
						<span className='font-bold'>Zia Bakery</span> didirikan pada
						tahun 2023. Kami memprioritaskan keunggulan layanan dan
						kebutuhan pelanggan kami dengan membangun tim delivery dan
						layanan pelanggan yang paling efektif untuk mencapai tujuan
						kami dalam menjadi toko kue online dengan{' '}
						<span className='font-bold'>one-click-away-service</span> yang
						dapat diandalkan.
					</p>

					<div className='pb-10 flex items-center gap-3'>
						<div className='p-3 bg-light rounded-full'>
							<FaPhone className='fill-pink w-5 h-5' />
						</div>
						<div>
							<p className='font-bold'>(+62) 8123 4567</p>
							<p>Hubungi Kami</p>
						</div>
					</div>

					<Button variant='bg-pink text-white'>
						Selengkapnya
						<IoArrowForward className='fill-white h-5 w-5 group-hover:translate-x-1 transition-all' />
					</Button>
				</div>
			</div>
		</section>
	)
}
