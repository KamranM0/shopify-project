import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  role: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logoutUser: (state) => {
      state.username = null;
      state.email = null;
      state.role = null;
    },
  },
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
