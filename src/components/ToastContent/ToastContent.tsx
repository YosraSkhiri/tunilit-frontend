import styles from './ToastContent.module.scss'
import ToastContentProps from './ToastContent.types.ts'
import { CrossSmallIcon } from '../Icons/index.tsx'
import IconButton from '../IconButton/index.tsx'
import Typography from '../Typography/index.tsx'
import Link from '../Link/index.tsx'
import Layout from '../Layout/index.tsx'

const ToastContent = ({
	closeToast,
	adorn,
	message,
	linkProps,
}: ToastContentProps) => {
	return (
		<Layout classname={styles['toast-content']}>
			<Layout classname={styles['toast-content__1']}>
				{adorn && <div className={styles['toast-content__icon']}>{adorn}</div>}
				<div>
					<Typography
						className={styles['toast-content__text']}
						variant="body3">
						{message}
					</Typography>
				</div>
			</Layout>

			<Layout classname={styles['toast-content__2']}>
				{linkProps?.children && (
					<Link {...linkProps}>{linkProps?.children}</Link>
				)}
				<IconButton
					variant="subtle"
					onClick={closeToast}>
					<CrossSmallIcon />
				</IconButton>
			</Layout>
		</Layout>
	)
}

export default ToastContent
