import { UserState } from "../../models/models"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from '../../models/models';


const initialState: UserState = {
    users: [
        {
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa@aa.a',
            password: '12345678',
            age: 26,
        }
    ],
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<IUser>) {
            state.users = [...state.users, action.payload]
        },
        login(state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload
        }
    }
})

export default userSlice.reducer;
