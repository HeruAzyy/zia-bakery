import { FaFacebookSquare } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { BsInstagram } from 'react-icons/bs'

export const SocialIcons = () => {
	let Icons = [
		{
			id: 1,
			href: '#instagram',
			nameIcon: <BsInstagram className='fill-black w-5 h-5' />
		},
		{
			id: 2,
			href: '#facebook',
			nameIcon: <FaFacebookSquare className='fill-black w-5 h-5' />
		},
		{
			id: 3,
			href: '#whatsapp',
			nameIcon: <BsWhatsapp className='fill-black w-5 h-5' />
		},
		{
			id: 4,
			href: '#mail',
			nameIcon: <IoMail className='fill-black w-5 h-5' />
		}
	]

	return (
		<div className='flex gap-5 items-center justify-center flex-row'>
			{Icons.map((icon) => (
				<a className='cursor-pointer' href={icon.href} key={icon.id}>
					<div className='bg-white p-3 rounded-full hover:scale-125 transition-all'>
						{icon.nameIcon}
					</div>
				</a>
			))}
		</div>
	)
}
