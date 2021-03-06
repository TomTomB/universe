import { FlyoutFrame } from './FlyoutFrame';
import React, { useState } from 'react';
import type { FlyoutFrameProps } from './FlyoutFrame.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Overlay/FlyoutFrame',
  component: FlyoutFrame,
} as Meta;

const Template: Story<FlyoutFrameProps> = (args) => {
  const [show, setShow] = useState(args.show);

  return (
    <>
      {args.animated && (
        <button
          style={{ marginBottom: 40 }}
          onClick={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        >
          Toggle Show
        </button>
      )}

      <FlyoutFrame {...args} show={show}>
        <div style={{ textAlign: 'center', padding: 12 }}>
          <h5>Some Content</h5>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, quo.
            <br />
            Adipisicing elit. Illo, quo. Lorem ipsum dolor!
          </p>
        </div>
      </FlyoutFrame>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  showCloseButton: true,
};
