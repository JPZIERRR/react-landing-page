import { GridTwoColumn } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Templates = args => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
