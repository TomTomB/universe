import * as C from './system-tooltip.styles';
import { springConfigHarsh } from '@/uikit/core/constants';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useTransition } from 'react-spring';
import { useEffect, type FC } from 'react';
import { useCompare } from '@/uikit/core/hooks';

export interface SystemTooltipProps {
  triggerRef: HTMLElement | null;
  placement?: 'auto' | 'left' | 'top' | 'right' | 'bottom';
}

export const SystemTooltip: FC<SystemTooltipProps> = ({
  triggerRef,
  children,
  placement = 'auto',
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
    update,
  } = usePopperTooltip({ placement, delayShow: 100 });

  const transition = useTransition(visible, {
    config: springConfigHarsh,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const childrenHasChanged = useCompare(children?.toString() ?? '');

  useEffect(() => {
    if (!triggerRef) {
      return;
    }
    setTriggerRef(triggerRef);
  }, [triggerRef, setTriggerRef]);

  useEffect(() => {
    if (update && children && childrenHasChanged) {
      update();
    }
  }, [children, update, childrenHasChanged]);

  if (!triggerRef) {
    return <></>;
  }

  return (
    <>
      {transition(
        (style, show) =>
          show && (
            <C.StyledSystemTooltip
              ref={setTooltipRef}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...getTooltipProps({ style: style as any })}
            >
              <div {...getArrowProps({ className: 'tooltip-arrow' })} />
              {children}
            </C.StyledSystemTooltip>
          ),
      )}
    </>
  );
};
