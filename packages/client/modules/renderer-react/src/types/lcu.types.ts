export interface LCUCredentials {
  username: string;
  process: string;
  address: string;
  PID: number;
  port: number;
  password: string;
  protocol: string;
}

export type Currency = 'be' | 'rp';

export type Rank =
  | 'unranked'
  | 'iron'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master'
  | 'grandmaster'
  | 'challenger';
