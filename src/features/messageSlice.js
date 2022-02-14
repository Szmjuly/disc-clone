import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messageId: null,
    messageName: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,

  reducers: {
    setMessageInfo: (state, action) => {
      state.messageId = action.payload.messageId;
      state.messageName = action.payload.messageName;
    },
  },
});

export const { setMessageInfo } = messageSlice.actions;

export const selectMessageId = (state) => state.message.messageId;
export const selectMessageName = (state) => state.message.messageName;

export default messageSlice.reducer;
