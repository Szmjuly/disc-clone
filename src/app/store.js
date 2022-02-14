import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import serverReducer from '../features/serverSlice';
import channelReducer from '../features/channelSlice';
import messageReducer from '../features/messageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    server: serverReducer,
    channel: channelReducer,
    message: messageReducer,
  },
});
