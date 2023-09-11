import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { User } from '@/models';

interface AuthState {
  currentUser?: User;
}

const initialState: AuthState = {
  currentUser: undefined,
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
  },
});

export const authAction = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

const authReducer = authSlice.reducer;
export default authReducer;
