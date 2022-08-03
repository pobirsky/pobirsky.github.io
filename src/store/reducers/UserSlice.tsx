
import {IUser} from "../../models/IUser";
import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    list: IUser[];
    loading: boolean;
    error: string;
}

const friendsState: UserState = {
    list: [],
    loading: false,
    error: ''
}

const friendsOnlineState: UserState = {
    list: [],
    loading: false,
    error: ''
}

export const userSlice = createSlice({
    list: 'user',
    friendsState,
    friendsOnlineState,
    reducers: {
    }
})

export default userSlice.reducer;
