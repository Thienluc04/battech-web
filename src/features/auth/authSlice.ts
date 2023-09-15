import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { User } from '@/models';

interface AuthState {
  currentUser?: User;
  rememberPass: boolean;
  showSidebar?: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  rememberPass: false,
  showSidebar: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
    logOut(state) {
      state.currentUser = undefined;
    },
    setRememberPass(state, action: PayloadAction<boolean>) {
      state.rememberPass = action.payload;
    },
    setShowSidebar(state, action: PayloadAction<boolean>) {
      state.showSidebar = action.payload;
    },
  },
});

export const authAction = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectRememberPass = (state: RootState) => state.auth.rememberPass;
export const selectShowSidebar = (state: RootState) => state.auth.showSidebar;

const authReducer = authSlice.reducer;
export default authReducer;
