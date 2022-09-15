import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const login = createAsyncThunk("auth/login", ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password)
);

export const signup = createAsyncThunk(
  "auth/signup",
  ({ name, email, password }) =>
    createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
      updateProfile(userCred.user, {
        displayName: name,
      });
      return userCred;
    })
);

export const logout = createAsyncThunk("auth/logout", () => {
  signOut(auth);
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    addUserToStore: (state, action) => {
      state.currentUser = action.payload.user;
      state.isLoggedIn = true;
    },
    removeUserFromStore: (state) => {
      state.currentUser = null;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload.user;
    },
    [signup.rejected]: (state) => {
      state.isLoading = false;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    [logout.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addUserToStore, removeUserFromStore } = authSlice.actions;
export default authSlice.reducer;
