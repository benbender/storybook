import { screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { Story } from '@storybook/svelte';
import Button from '../components/Button.svelte';
import ButtonView from './views/ButtonView.svelte';

export default {
  title: 'Button/CSF3',
  component: ButtonView,
};

export const CSF3Button = {
  args: { text: 'foo' },
};

export const CSF3ButtonWithRender = {
  ...CSF3Button,
  args: {
    text: 'bar',
    rounded: false,
  },
  // render: (args) => (
  //   <div>
  //     <p data-testid="custom-render">I am a custom render function</p>
  //     <Button {...args} />
  //   </div>
  // ),
};

export const InputFieldFilled = {
  // render: () => {
  //   return <input />
  // },
  play: async () => {
    await userEvent.type(screen.getByRole('textbox'), 'Hello world!');
  },
};
