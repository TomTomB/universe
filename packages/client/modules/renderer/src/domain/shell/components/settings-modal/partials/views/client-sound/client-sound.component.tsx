import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectEnableMusic,
  selectEnableSfx,
  selectEnableSound,
  selectMasterVolume,
  selectMusicVolume,
  selectPlayAmbientSounds,
  selectPlayBanQuotes,
  selectPlayChampionSelectMusic,
  selectPlayLobbyPostGameMusic,
  selectPlayLoginMusic,
  selectPlayPickQuotes,
  selectSfxVolume,
  setMasterVolume,
  setMusicVolume,
  setSfxVolume,
  toggleEnableMusic,
  toggleEnableSfx,
  toggleEnableSound,
  togglePlayAmbientSounds,
  togglePlayBanQuotes,
  togglePlayChampionSelectMusic,
  togglePlayLobbyPostGameMusic,
  togglePlayLoginMusic,
  togglePlayPickQuotes,
} from '@/store/slices';
import { Checkbox, FormField, Label } from '@/uikit/forms/components';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as C from './client-sound.styles';

export interface ClientSoundProps {
  className?: string;
}

export const ClientSound: FC<ClientSoundProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const enableMusic = useAppSelector(selectEnableMusic);
  const enableSfx = useAppSelector(selectEnableSfx);
  const enableSound = useAppSelector(selectEnableSound);
  const masterVolume = useAppSelector(selectMasterVolume);
  const musicVolume = useAppSelector(selectMusicVolume);
  const sfxVolume = useAppSelector(selectSfxVolume);
  const playAmbientSounds = useAppSelector(selectPlayAmbientSounds);
  const playBanQuotes = useAppSelector(selectPlayBanQuotes);
  const playChampionSelectMusic = useAppSelector(selectPlayChampionSelectMusic);
  const playLobbyPostGameMusic = useAppSelector(selectPlayLobbyPostGameMusic);
  const playLoginMusic = useAppSelector(selectPlayLoginMusic);
  const playPickQuotes = useAppSelector(selectPlayPickQuotes);

  const { control } = useForm({
    mode: 'onChange',
  });

  return (
    <C.StyledClientSound className={className}>
      <Checkbox
        label="Enable Sound"
        id="enableSound"
        name="enableSound"
        control={control}
        defaultValue={enableSound}
        playSounds
        onChange={(v) => dispatch(toggleEnableSound(v))}
      />
      <C.SliderSection>
        <FormField>
          <Label htmlFor="masterVolume" disabled={!enableSound}>
            Overall Volume: {masterVolume}%
          </Label>
          <C.AlignedRange
            name="masterVolume"
            id="masterVolume"
            control={control}
            defaultValue={masterVolume}
            onChange={(v) => dispatch(setMasterVolume(v))}
            isDisabled={!enableSound}
          />
        </FormField>
      </C.SliderSection>
      <C.IndentedSection>
        <Checkbox
          label="Enable SFX"
          id="enableSfx"
          name="enableSfx"
          control={control}
          playSounds
          defaultValue={enableSfx}
          isDisabled={!enableSound}
          onChange={(v) => dispatch(toggleEnableSfx(v))}
        />
        <C.IndentedSectionInner>
          <C.SliderSection>
            <FormField>
              <Label htmlFor="sfxVolume" disabled={!enableSound || !enableSfx}>
                SFX Volume: {sfxVolume}%
              </Label>
              <C.AlignedRange
                name="sfxVolume"
                id="sfxVolume"
                control={control}
                defaultValue={sfxVolume}
                isDisabled={!enableSound || !enableSfx}
                onChange={(v) => dispatch(setSfxVolume(v))}
              />
            </FormField>
          </C.SliderSection>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Ambient Sounds"
              id="playAmbientSounds"
              name="playAmbientSounds"
              control={control}
              playSounds
              defaultValue={playAmbientSounds}
              isDisabled={!enableSound || !enableSfx}
              onChange={(v) => dispatch(togglePlayAmbientSounds(v))}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Pick Quotes"
              id="playPickQuotes"
              name="playPickQuotes"
              control={control}
              playSounds
              defaultValue={playPickQuotes}
              isDisabled={!enableSound || !enableSfx}
              onChange={(v) => dispatch(togglePlayPickQuotes(v))}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Ban Quotes"
              id="playBanQuotes"
              name="playBanQuotes"
              control={control}
              playSounds
              defaultValue={playBanQuotes}
              isDisabled={!enableSound || !enableSfx}
              onChange={(v) => dispatch(togglePlayBanQuotes(v))}
            />
          </C.CheckboxWrapper>
        </C.IndentedSectionInner>
      </C.IndentedSection>
      <C.IndentedSection>
        <Checkbox
          label="Enable Music"
          id="enableMusic"
          name="enableMusic"
          control={control}
          playSounds
          defaultValue={enableMusic}
          isDisabled={!enableSound}
          onChange={(v) => dispatch(toggleEnableMusic(v))}
        />
        <C.IndentedSectionInner>
          <C.SliderSection>
            <FormField>
              <Label
                htmlFor="musicVolume"
                disabled={!enableSound || !enableMusic}
              >
                Music Volume: {musicVolume}%
              </Label>
              <C.AlignedRange
                name="musicVolume"
                id="musicVolume"
                control={control}
                defaultValue={musicVolume}
                isDisabled={!enableSound || !enableMusic}
                onChange={(v) => dispatch(setMusicVolume(v))}
              />
            </FormField>
          </C.SliderSection>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Champion Select Music"
              id="playChampionSelectMusic"
              name="playChampionSelectMusic"
              control={control}
              playSounds
              defaultValue={playChampionSelectMusic}
              isDisabled={!enableSound || !enableMusic}
              onChange={(v) => dispatch(togglePlayChampionSelectMusic(v))}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Lobby/Post-game Music"
              id="playLobbyPostGameMusic"
              name="playLobbyPostGameMusic"
              control={control}
              playSounds
              defaultValue={playLobbyPostGameMusic}
              isDisabled={!enableSound || !enableMusic}
              onChange={(v) => dispatch(togglePlayLobbyPostGameMusic(v))}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Login Music"
              id="playLoginMusic"
              name="playLoginMusic"
              control={control}
              playSounds
              defaultValue={playLoginMusic}
              isDisabled={!enableSound || !enableMusic}
              onChange={(v) => dispatch(togglePlayLoginMusic(v))}
            />
          </C.CheckboxWrapper>
        </C.IndentedSectionInner>
      </C.IndentedSection>
    </C.StyledClientSound>
  );
};
