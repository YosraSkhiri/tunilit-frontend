import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import SchoolLogo from './SchoolLogo'
import styles from './SchoolLogo.module.scss'
import { schoolLogoSizes } from './SchoolLogo.types'

const sizes: schoolLogoSizes[] = [
	'xxlarge',
	'xlarge',
	'large',
	'medium',
	'small',
]

describe('<SchoolLogo />', () => {
	sizes.map((size: schoolLogoSizes) =>
		it(`should render ${size} school logo`, () => {
			const { container } = render(
				<SchoolLogo
					size={size}
					src="placeholder.png"
				/>
			)
			expect(container.firstChild).toHaveClass(styles[`s-logo--${size}`])
		})
	)
})
