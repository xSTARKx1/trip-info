import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import briefReducer from '../features/brief/briefSlice';

export const store = configureStore({
  reducer: {
    brief: briefReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
