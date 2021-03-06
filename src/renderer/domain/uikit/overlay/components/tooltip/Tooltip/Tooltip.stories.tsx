import { Tooltip } from './Tooltip';
import { TooltipText } from '../base';
import React, { useRef, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import type { TooltipProps } from './Tooltip.types';

export default {
  title: 'UiKit/Overlay/Tooltip/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => {
  const hoverRef = useRef<HTMLElement>(null);
  const [state, setState] = useState(false);

  if (!state) {
    setTimeout(() => {
      setState(true);
    }, 1);
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <button ref={hoverRef as any}>Some Button</button>

      <Tooltip
        defaultVisible={args.defaultVisible}
        placement={args.placement}
        triggerRef={hoverRef.current}
      >
        <TooltipText>
          Some Text Lorem ipsum dolor sit amet consec tetur adipisicing elit.
          Facilis illo corporis dolor.
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultVisible: true,
  placement: 'top',
};
