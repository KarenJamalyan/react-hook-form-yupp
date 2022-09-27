import { UserState } from "../../models/models"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: UserState = {
    error: null,
    loading: false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    }
})


export default todoSlice.reducer;