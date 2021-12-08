import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Tetse',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;
