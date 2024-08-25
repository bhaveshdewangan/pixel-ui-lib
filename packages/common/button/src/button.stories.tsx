import { StoryFn, Meta } from '@storybook/react';
import { Button, EButtonTypes, EButtonVariant } from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the button',
      defaultValue: '<span>Button</span>'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the button'
    },
    type: {
      control: 'inline-radio',
      options: [...Object.values(EButtonTypes)],
      description: 'Type of the button',
      defaultValue: EButtonTypes.button
    },
    variant: {
      control: 'inline-radio',
      options: [...Object.values(EButtonVariant)],
      description: 'Variant of the button',
      defaultValue: 'Button'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the button',
      defaultValue: ''
    }
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  variant: EButtonVariant.Primary,
  children: EButtonVariant.Primary
};

Secondary.args = {
  variant: EButtonVariant.Secondary,
  children: EButtonVariant.Secondary
};
