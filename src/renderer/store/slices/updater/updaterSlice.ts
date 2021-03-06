import { createSlice } from '@reduxjs/toolkit';
import type { DownloadProgress } from '../../../../types/electron';
import type { PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../../rootReducer';

export type UpdaterStatus =
  | 'init'
  | 'checking'
  | 'found-update'
  | 'up-to-date'
  | 'download-progress'
  | 'downloaded'
  | 'before-quit-for-update'
  | 'error';

export interface UpdaterSliceState {
  status: UpdaterStatus;
  downloadProgress: DownloadProgress | null;
}

const initialState: UpdaterSliceState = {
  status: 'init',
  downloadProgress: null,
};

export const updaterSlice = createSlice({
  name: 'updater',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<UpdaterSliceState['status']>) => {
      state.status = action.payload;
    },
    setDownloadProgress: (
      state,
      action: PayloadAction<UpdaterSliceState['downloadProgress'] | null>,
    ) => {
      state.downloadProgress = action.payload;
    },
  },
});

export const { setStatus, setDownloadProgress } = updaterSlice.actions;

export const selectStatus = (state: RootState) => state.updater.status;
export const selectDownloadProgress = (state: RootState) =>
  state.updater.downloadProgress;

export default updaterSlice.reducer;
