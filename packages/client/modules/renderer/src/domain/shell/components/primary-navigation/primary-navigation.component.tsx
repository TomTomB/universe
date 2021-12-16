import { useStore } from '@/store';
import { FC, useEffect } from 'react';
import { NotificationToggleButton } from '../notifications';
import * as C from './primary-navigation.styles';
import clickFileOff from './assets/sounds/sfx-servicestatus-button-click-off.ogg';
import clickFileOn from './assets/sounds/sfx-servicestatus-button-click-on.ogg';
import { useAudio } from '@/uikit/core/hooks';

export interface PrimaryNavigationProps {
  showTickerOnly: boolean;
}

export const PrimaryNavigation: FC<PrimaryNavigationProps> = ({
  showTickerOnly,
}) => {
  const store = useStore();

  const clickAudioOff = useAudio(clickFileOff);
  const clickAudioOn = useAudio(clickFileOn);

  useEffect(() => {
    if (store.lcu.isConnected) {
      store.window.setIsNotificationCenterVisible(false);
    } else {
      store.window.setIsNotificationCenterVisible(true);
    }
  }, [store.lcu.isConnected, store.window.setIsNotificationCenterVisible]);

  useEffect(() => {
    if (store.window.isNotificationCenterVisible) {
      clickAudioOn.play();
    } else {
      clickAudioOff.play();
    }
  }, [store.window.isNotificationCenterVisible]);

  return (
    <C.StyledPrimaryNavigation showTickerOnly={showTickerOnly}>
      {!store.lcu.isConnected && (
        <NotificationToggleButton
          variant="error"
          onClick={() =>
            store.window.setIsNotificationCenterVisible(
              !store.window.isNotificationCenterVisible,
            )
          }
        ></NotificationToggleButton>
      )}

      <C.NotificationFrame
        animated
        show={store.window.isNotificationCenterVisible}
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
