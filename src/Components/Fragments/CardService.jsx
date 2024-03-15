/* eslint-disable react/prop-types */
import { Services } from '../Elements/Services'

export const CardService = ({ title, description }) => {
	return (
		<div className='bg-light rounded-2xl group transition-all duration-300 lg:hover:-rotate-6'>
			<div className='flex h-full w-full bg-white flex-col justify-between p-10 border text-center rounded-2xl transition-all duration-300 lg:group-hover:rotate-6 lg:group-hover:shadow-lg'>
				<Services title={title} description={description} />
			</div>
		</div>
	)
}
