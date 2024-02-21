/* eslint-disable react/prop-types */
export const Icon = ({ children, background }) => {
	return (
		<div
			className={`${background} p-3 rounded-full hover:scale-110 transition-all`}>
			{children}
		</div>
	)
}
