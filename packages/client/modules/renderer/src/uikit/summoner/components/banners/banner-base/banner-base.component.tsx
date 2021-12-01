import { Banner as BannerLogic, bannerAnimationConfig } from './util';
import { Images } from './assets';
import { StyledBannerBase, getRankTrim } from './banner-base.styles';
import { useEffect, useRef } from 'react';
import type { BannerAssets, BannerBaseProps } from './banner-base.types';
import type { FC } from 'react';

export const BannerBase: FC<BannerBaseProps> = ({
  rank,
  showPattern,
  className,
}) => {
  const bannerCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let banner: BannerLogic | undefined;

    const bannerAssets: BannerAssets = {
      background: Images.Background.solidBannerAnimatable,
      overlay: showPattern
        ? Images.Pattern.rankPattern00
        : Images.Pattern.blank,
      rank: getRankTrim(rank),
    };

    if (bannerCanvasRef.current) {
      banner = new BannerLogic(
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
