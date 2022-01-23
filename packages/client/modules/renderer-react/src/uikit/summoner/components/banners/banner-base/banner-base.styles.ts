import { Images } from './assets';
import styled from 'styled-components';
import type { Rank } from '@/types';

export const StyledBannerBase = styled.canvas``;

export const getRankTrim = (rank: Rank) => {
  switch (rank) {
    case 'unranked':
      return Images.Trim.bannerTrimDefault;

    case 'iron':
      return Images.Trim.bannerTrimIron;

    case 'bronze':
      return Images.Trim.bannerTrimBronze;

    case 'silver':
      return Images.Trim.bannerTrimSilver;

    case 'gold':
      return Images.Trim.bannerTrimGold;

    case 'platinum':
      return Images.Trim.bannerTrimPlat;

    case 'diamond':
      return Images.Trim.bannerTrimDiamond;

    case 'master':
      return Images.Trim.bannerTrimMaster;

    case 'grandmaster':
      return Images.Trim.bannerTrimGrandmaster;

    case 'challenger':
      return Images.Trim.bannerTrimChallenger;
  }
};
