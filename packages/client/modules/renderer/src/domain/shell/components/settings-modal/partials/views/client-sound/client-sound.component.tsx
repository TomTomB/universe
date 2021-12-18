import type { FC } from 'react';
import * as C from './client-sound.styles';

export interface ClientSoundProps {
  className?: string;
}

export const ClientSound: FC<ClientSoundProps> = ({ className }) => {
  return (
    <C.StyledClientSound className={className}>
      <p>Client sound</p>
    </C.StyledClientSound>
  );
};
