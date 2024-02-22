import { Icon } from '../Elements/Icon'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { BsInstagram } from 'react-icons/bs'

export const SocialIcons = () => {
	return (
		<div className='flex gap-5 items-center justify-center flex-row'>
			<a href='#home'>
				<Icon background='bg-white'>
					<BsInstagram className='fill-black w-5 h-5' />
				</Icon>
			</a>

			<a href='#home'>
				<Icon background='bg-white'>
					<FaFacebookSquare className='fill-black w-5 h-5' />
				</Icon>
			</a>

			<a href='#home'>
				<Icon background='bg-white'>
					<BsWhatsapp className='fill-black w-5 h-5' />
				</Icon>
			</a>

			<a href='#home'>
				<Icon background='bg-white'>
					<IoMail className='fill-black w-5 h-5' />
				</Icon>
			</a>
		</div>
	)
}
