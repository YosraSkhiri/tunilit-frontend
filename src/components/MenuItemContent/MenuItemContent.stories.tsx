import { Meta, StoryObj } from '@storybook/react'

import { CheckIcon,ChevronSmallRightIcon } from '../Icons'
import MenuItemContent from './MenuItemContent'

const meta: Meta<typeof MenuItemContent> = {
  component: MenuItemContent,
}

export default meta

type Story = StoryObj<typeof MenuItemContent>

export const DefaultMenuItem: Story = {
  args: {
    children: 'Menu Item'
  }
}

export const DefaultMenuItemWithRightAdorn: Story = {
  args: {
    children: 'Menu Item',
    renderRightAdorn: (props) => (<ChevronSmallRightIcon {...props} />)
  }
}

export const DefaultMenuItemWithLeftAdorn: Story = {
  args: {
    children: 'Menu Item',
    renderLeftAdorn: (props) => (<CheckIcon {...props} />)
  }
}

export const LargeMenuItem: Story = {
  args: {
    children: 'Menu Item',
    size: 'lg',
  }
}

export const MediumMenuItem: Story = {
  args: {
    children: 'Menu Item',
    size: 'md',
  }
}

export const SmallMenuItem: Story = {
  args: {
    children: 'Menu Item',
    size: 'sm',
  }
}

export const DisabledMenuItem: Story = {
  args: {
    children: 'Menu Item',
    disabled: true,
  }
}

export const SelectedMenuItem: Story = {
  args: {
    children: 'Menu Item',
    selected: true,
  }
}
