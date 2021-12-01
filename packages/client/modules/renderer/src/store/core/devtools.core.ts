import type {
  State,
  SetState,
  GetState,
  StoreApi,
  StateCreator,
} from 'zustand';
import { devtools } from 'zustand/middleware';

export const addDevtools = <
  T extends State,
  CustomSetState extends SetState<T>,
  CustomGetState extends GetState<T>,
  CustomStoreApi extends StoreApi<T>,
>(
  config: StateCreator<T>,
): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> => {
  if (import.meta.env.DEV) {
    return devtools(config, { name: 'store' });
  }

  return config;
};
