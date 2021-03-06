import { ChampionMasteryTooltip } from './ChampionMasteryTooltip';
import { Tooltip } from '@universe/renderer/uikit/overlay';
import React, { useRef, useState } from 'react';
import type { ChampionMasteryTooltipProps } from './ChampionMasteryTooltip.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Champion/ChampionMasteryTooltip',
  component: ChampionMasteryTooltip,
} as Meta;

const Template: Story<ChampionMasteryTooltipProps> = (args) => {
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

      <Tooltip defaultVisible placement="top" triggerRef={hoverRef.current}>
        <ChampionMasteryTooltip {...args} />
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  championName: 'Karma',
  masteryPoints: 100420,
  masteryTitle: 'Warden',
  masteryLevel: 4,
  masteryProgress: 40,
};
