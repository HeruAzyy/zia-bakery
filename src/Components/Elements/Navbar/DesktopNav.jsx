export default function DesktopNav({ Links }) {
	return (
		<ul className={`hidden lg:flex lg:gap-7`}>
			{Links.map((link) => (
				<li key={link.name} className='text-lg font-semibold'>
					<a href={link.link} className='hover:text-pink transition-all'>
						{link.name}
					</a>
				</li>
			))}
		</ul>
	)
}
