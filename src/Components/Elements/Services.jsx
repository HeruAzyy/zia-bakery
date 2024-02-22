/* eslint-disable react/prop-types */
export const Services = ({ title, description }) => {
	return (
		<>
			<h5 className='font-semibold'>{title}</h5>
			<p className='py-5'>{description}</p>
		</>
	)
}
