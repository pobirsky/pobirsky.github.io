import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  loading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userFetching(state) {
      state.loading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser[]> ) {
      state.loading = false;
      state.error = '';
      state.users = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
