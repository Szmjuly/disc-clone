import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    channelId: null,
    channelName: null,
};

export const serverSlice = createSlice({
  name: 'server',
  initialState,

  reducers: {
    setChannelId: (state, action) => {
      state.server = action.payload;
    },
  },
});

export const { setChannelId } = serverSlice.actions;

export const selectChannelId = (state) => state.server.channelId;
export const selectChannelName = (state) => state.server.channelName;

export default serverSlice.reducer;
