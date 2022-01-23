import {
  BannerContext,
  bannerAnimationConfig,
  type BannerAssets,
} from './util';
import { Images } from './assets';
import { StyledBannerBase, getRankTrim } from './banner-base.styles';
import { useEffect, useRef, type FC } from 'react';
import type { BannerBaseProps } from './banner-base.types';

export const BannerBase: FC<BannerBaseProps> = ({
  rank,
  showPattern,
  className,
}) => {
  const bannerCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let banner: BannerContext | undefined;

    const bannerAssets: BannerAssets = {
      background: Images.Background.solidBannerAnimatable,
      overlay: showPattern
        ? Images.Pattern.rankPattern00
        : Images.Pattern.blank,
      rank: getRankTrim(rank),
    };

    if (bannerCanvasRef.current) {
      banner = new BannerContext(
        bannerAssets,
        bannerCanvasRef.current,
        bannerAnimationConfig,
      );

      banner.on('loaded', () => banner?.play());
    }

    return () => {
      banner?.destroy();
      banner?.removeAllListeners();
    };
  }, [bannerCanvasRef, rank, showPattern]);

  return <StyledBannerBase className={className} ref={bannerCanvasRef} />;
};
