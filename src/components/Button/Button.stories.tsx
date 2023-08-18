import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    size: "sm",
  },
  argTypes: {
    size: {
      options: ["default", "sm", "xs"],
    },
    intent: {
      options: ["primary", "success"],
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta
