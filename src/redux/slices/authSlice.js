import { createSlice } from '@reduxjs/toolkit';
import { getUser, register, login, logout } from 'redux/thunks/operationsThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    isAuth: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(getUser.rejected, state => {
        state.isLoading = false;
        state.token = null;
        state.name = '';
        state.email = '';
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.name = '';
        state.email = '';
        state.token = '';
        state.isAuth = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
