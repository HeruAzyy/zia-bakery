/* eslint-disable react/prop-types */
export const SectionTitle = ({ children }) => {
	return (
		<h5 className='font-bold pb-5 after:content-[""] after:block after:w-11 after:h-1 after:rounded-full after:bg-pink'>
			{children}
		</h5>
	)
}
