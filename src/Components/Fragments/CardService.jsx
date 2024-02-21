/* eslint-disable react/prop-types */
import { Arrow } from '../../assets/SVG/Arrow'
import { Services } from '../Elements/Services'

export const CardService = ({ title, description }) => {
	return (
		<div className='flex flex-col justify-between p-10 text-center border-t-2 rounded-2xl shadow-md xl:hover:bg-gray-200'>
			<Services title={title} description={description} />
			<a
				href='#services'
				className='font-semibold inline-flex items-center justify-center gap-2 group'>
				Selengkapnya
				<Arrow variant='fill-pink' />
			</a>
		</div>
	)
}
