import { SystemTooltip } from './SystemTooltip';
import { TooltipText } from '../base';
import React, { useRef, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import type { SystemTooltipProps } from './SystemTooltip.types';

export default {
  title: 'UiKit/Overlay/Tooltip/System',
  component: SystemTooltip,
} as Meta;

const Template: Story<SystemTooltipProps> = (args) => {
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

      <SystemTooltip
        defaultVisible={args.defaultVisible}
        placement={args.placement}
        triggerRef={hoverRef.current}
      >
        <TooltipText>
          Some Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis illo corporis dolor.
        </TooltipText>
      </SystemTooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultVisible: true,
  placement: 'top',
};
