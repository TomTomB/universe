import { type FC, useEffect } from 'react';
import { NotificationToggleButton } from '../notifications';
import * as C from './primary-navigation.styles';
import clickFileOff from './assets/sounds/sfx-servicestatus-button-click-off.ogg';
import clickFileOn from './assets/sounds/sfx-servicestatus-button-click-on.ogg';
import { useAudio, usePrevious } from '@/uikit/core/hooks';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectIsLCUConnected,
  selectIsNotificationCenterVisible,
  toggleIsNotificationCenterVisible,
} from '@/store/slices';
import { useSfxChannel, useSfxVolume } from '@/domain/core/hooks';

export interface PrimaryNavigationProps {
  showTickerOnly: boolean;
}

export const PrimaryNavigation: FC<PrimaryNavigationProps> = ({
  showTickerOnly,
}) => {
  const isLCUConnected = useAppSelector(selectIsLCUConnected);
  const isNotificationCenterVisible = useAppSelector(
    selectIsNotificationCenterVisible,
  );

  const dispatch = useAppDispatch();

  const sfxVolume = useSfxVolume();
  const playSounds = useSfxChannel();

  const previousIsNotificationCenterVisible = usePrevious(
    isNotificationCenterVisible,
  );

  const clickAudioOff = useAudio(clickFileOff, !playSounds, sfxVolume);
  const clickAudioOn = useAudio(clickFileOn, !playSounds, sfxVolume);

  useEffect(() => {
    dispatch(toggleIsNotificationCenterVisible(!isLCUConnected));
  }, [isLCUConnected, dispatch]);

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
            dispatch(
              toggleIsNotificationCenterVisible(!isNotificationCenterVisible),
            )
          }
        ></NotificationToggleButton>
      )}

      <C.NotificationFrame
        animated
        show={isNotificationCenterVisible}
        onClickOutside={() =>
          dispatch(toggleIsNotificationCenterVisible(false))
        }
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
