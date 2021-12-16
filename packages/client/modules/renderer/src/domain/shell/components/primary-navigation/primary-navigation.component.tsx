import {
  getIsConnected,
  getIsNotificationCenterVisible,
  setIsNotificationCenterVisible,
  useStore,
} from '@/store';
import { type FC, useEffect } from 'react';
import { NotificationToggleButton } from '../notifications';
import * as C from './primary-navigation.styles';
import clickFileOff from './assets/sounds/sfx-servicestatus-button-click-off.ogg';
import clickFileOn from './assets/sounds/sfx-servicestatus-button-click-on.ogg';
import { useAudio, usePrevious } from '@/uikit/core/hooks';

export interface PrimaryNavigationProps {
  showTickerOnly: boolean;
}

export const PrimaryNavigation: FC<PrimaryNavigationProps> = ({
  showTickerOnly,
}) => {
  const isLCUConnected = useStore(getIsConnected);

  const isNotificationCenterVisible = useStore(getIsNotificationCenterVisible);
  const setIsNotificationCenterVisibleFn = useStore(
    setIsNotificationCenterVisible,
  );

  const previousIsNotificationCenterVisible = usePrevious(
    isNotificationCenterVisible,
  );

  const clickAudioOff = useAudio(clickFileOff);
  const clickAudioOn = useAudio(clickFileOn);

  useEffect(
    () => setIsNotificationCenterVisibleFn(!isLCUConnected),
    [isLCUConnected, setIsNotificationCenterVisibleFn],
  );

  useEffect(() => {
    if (isNotificationCenterVisible === previousIsNotificationCenterVisible) {
      return;
    }

    isNotificationCenterVisible ? clickAudioOn.play() : clickAudioOff.play();
  }, [
    isNotificationCenterVisible,
    previousIsNotificationCenterVisible,
    clickAudioOff,
    clickAudioOn,
  ]);

  return (
    <C.StyledPrimaryNavigation showTickerOnly={showTickerOnly}>
      {!isLCUConnected && (
        <NotificationToggleButton
          variant="error"
          onClick={() =>
            setIsNotificationCenterVisibleFn(!isNotificationCenterVisible)
          }
        ></NotificationToggleButton>
      )}

      <C.NotificationFrame
        animated
        show={isNotificationCenterVisible}
        onClickOutside={() => setIsNotificationCenterVisibleFn(false)}
      >
        <C.NotificationList>
          <C.NotificationListItem>
            <C.NotificationItemHeader>
              Waiting for client...
            </C.NotificationItemHeader>
            <p>
              In order to use Universe the League of Legends client needs to be
              running.
            </p>
          </C.NotificationListItem>
        </C.NotificationList>
      </C.NotificationFrame>
    </C.StyledPrimaryNavigation>
  );
};
