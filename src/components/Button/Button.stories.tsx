import type { Meta, StoryObj } from "@storybook/react"
import { within, userEvent } from '@storybook/testing-library';

import { Button } from "."

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    size: "sm",
    inlist: "primary"
  },
  argTypes: {
    size: {
      options: ["default", "sm", "xs"],
    },
    intent: {
      options: ["primary", "success"]
    },

  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta

export const FilledButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));

    // await expect(
    //   canvas.getByText(
    //     'Everything is perfect. Your account is ready and we should probably get you started!'
    //   )
    // ).toBeInTheDocument();
  },
};

