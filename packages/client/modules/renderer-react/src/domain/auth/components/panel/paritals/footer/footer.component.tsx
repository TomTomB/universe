import type { FC } from 'react';
import * as C from './footer.styles';
import { hash } from '../../../../../../../../../../../temp/version.json';
import { version } from '../../../../../../../../../package.json';

export const Footer: FC = () => {
  return (
    <>
      <C.StyledFooter>
        <p>
          <a href="#foo" className="external">
            Forgot your email?
          </a>
        </p>
        <p>
          <a href="#foo" className="external">
            Forgot your password?
          </a>
        </p>
        <p>
          <a href="#foo" className="external">
            Create an account
          </a>
        </p>
      </C.StyledFooter>
      <C.VersionFooter>
        <span>
          V{version}.{hash}
        </span>
      </C.VersionFooter>
    </>
  );
};
