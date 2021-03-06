import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/user";
import { UserState } from "../types/reduxState";


const initialState: UserState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: null,
  isLogged: false,
  profileImage: "",
}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    seLoggedUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    }
  }
});

export const userActions = { ...user.actions };

export default user;