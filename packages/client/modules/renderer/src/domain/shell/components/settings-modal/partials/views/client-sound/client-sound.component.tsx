import { Checkbox, FormField, Label } from '@/uikit/forms/components';
import { type FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as C from './client-sound.styles';

interface FormValue {
  enableMusic: boolean;
  enableSfx: boolean;
  enableSound: boolean;
  masterVolume: string;
  musicVolume: string;
  playAmbientSounds: boolean;
  playBanQuotes: boolean;
  playChampionSelectMusic: boolean;
  playLobbyPostGameMusic: boolean;
  playLoginMusic: boolean;
  playPickQuotes: boolean;
  sfxVolume: string;
}

export interface ClientSoundProps {
  className?: string;
}

export const ClientSound: FC<ClientSoundProps> = ({ className }) => {
  const { register, watch } = useForm<FormValue>({
    mode: 'onChange',
  });

  const watchAllFields = watch();

  useEffect(() => {
    console.log(watchAllFields);
  }, [watchAllFields]);

  return (
    <C.StyledClientSound className={className}>
      <Checkbox
        label="Enable Sound"
        id="enableSound"
        name="enableSound"
        register={register}
      />
      <C.SliderSection>
        <FormField>
          <Label htmlFor="masterVolume">Overall Volume: 22</Label>
          <C.AlignedRange
            name="masterVolume"
            id="masterVolume"
            register={register}
          />
        </FormField>
      </C.SliderSection>
      <C.IndentedSection>
        <Checkbox
          label="Enable SFX"
          id="enableSfx"
          name="enableSfx"
          register={register}
        />
        <C.IndentedSectionInner>
          <C.SliderSection>
            <FormField>
              <Label htmlFor="sfxVolume">SFX Volume: 22</Label>
              <C.AlignedRange
                name="sfxVolume"
                id="sfxVolume"
                register={register}
              />
            </FormField>
          </C.SliderSection>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Ambient Sounds"
              id="playAmbientSounds"
              name="playAmbientSounds"
              register={register}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Pick Quotes"
              id="playPickQuotes"
              name="playPickQuotes"
              register={register}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Ban Quotes"
              id="playBanQuotes"
              name="playBanQuotes"
              register={register}
            />
          </C.CheckboxWrapper>
        </C.IndentedSectionInner>
      </C.IndentedSection>
      <C.IndentedSection>
        <Checkbox
          label="Enable Music"
          id="enableMusic"
          name="enableMusic"
          register={register}
        />
        <C.IndentedSectionInner>
          <C.SliderSection>
            <FormField>
              <Label htmlFor="musicVolume">Music Volume: 22</Label>
              <C.AlignedRange
                name="musicVolume"
                id="musicVolume"
                register={register}
              />
            </FormField>
          </C.SliderSection>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Champion Select Music"
              id="playChampionSelectMusic"
              name="playChampionSelectMusic"
              register={register}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Lobby/Post-game Music"
              id="playLobbyPostGameMusic"
              name="playLobbyPostGameMusic"
              register={register}
            />
          </C.CheckboxWrapper>
          <C.CheckboxWrapper>
            <Checkbox
              label="Play Login Music"
              id="playLoginMusic"
              name="playLoginMusic"
              register={register}
            />
          </C.CheckboxWrapper>
        </C.IndentedSectionInner>
      </C.IndentedSection>
    </C.StyledClientSound>
  );
};
