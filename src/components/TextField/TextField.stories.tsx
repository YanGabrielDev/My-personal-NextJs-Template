import type { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { TextField } from "."

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
  args: {
    placeholder: "Text",
    id: "textField",
  },
  
}

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: (args) => <TextField {...args} />,
}

export default meta;

export const FilledTextField: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByTestId('textField')
    await userEvent.type(textField, "Teste do component TextField")
    await userEvent.type(textField, "12345");

    // // Verificando se o valor do campo não contém números
    // expect(textField).toHaveValue(/^[A-Za-z]+$/);
  }
}