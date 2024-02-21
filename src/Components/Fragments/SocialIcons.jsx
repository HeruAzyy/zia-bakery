import { Instagram } from '../../assets/SVG/Instagram'
import { Facebook } from '../../assets/SVG/Facebook'
import { Whatsapp } from '../../assets/SVG/Whatsapp'
import { Mail } from '../../assets/SVG/Mail'
import { Icon } from '../Elements/Icon'

export const SocialIcons = () => {
	return (
		<div className='flex gap-5 items-center justify-center flex-row'>
			<a href='#'>
				<Icon background='bg-white'>
					<Instagram variant='fill-dark' />
				</Icon>
			</a>

			<a href='#'>
				<Icon background='bg-white'>
					<Facebook variant='fill-dark' />
				</Icon>
			</a>

			<a href='#'>
				<Icon background='bg-white'>
					<Whatsapp variant='fill-dark' />
				</Icon>
			</a>

			<a href='#'>
				<Icon background='bg-white'>
					<Mail variant='fill-dark' />
				</Icon>
			</a>
		</div>
	)
}
