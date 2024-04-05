import Button from '../Button';
import { ChevronDownIcon, ChevronSmallRightIcon } from '../Icons';
import Layout from '../Layout';
import Link from '../Link';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Typography from '../Typography';
import styles from './CategoriesDropdown.module.scss';
import CategoriesDropdownProps from './CategoriesDropdown.types.ts'

// TODO Try using https://headlessui.com/react/popover for this component

const CategoriesDropdown = ({}: CategoriesDropdownProps) => {
  return (
    <Menu
    //style={{width: '980px'}}
    fullWidth
			renderMenuTrigger={(props: object) => (
				<Button variant='subtle' {...props}>
          Categories
          <ChevronDownIcon />
        </Button>
			)}>
        <Layout >
          <Layout direction='column'>
            <MenuItem fullWidth label="option1" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem fullWidth label="option2" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem label="option3" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem label="option4" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem label="option5" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem label="option6" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
            <MenuItem label="option7" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          </Layout>
          <Layout direction='column'>
          <MenuItem fullWidth label="option1" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option2" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option3" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option4" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option5" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option6" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          <MenuItem label="option7" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
          </Layout>
          <Layout direction='column'>
            <Link underline>Link</Link>
            <Link underline>Link</Link>
            <Link underline>Link</Link>
            <Link underline>Link</Link>
            <Link underline>Link</Link>
          </Layout>
        </Layout>
        
		</Menu>
  )
}

export default CategoriesDropdown
