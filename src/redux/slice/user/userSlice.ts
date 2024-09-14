import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface User {

    name: string;
}

interface UserState {
    isLoading: boolean;
    data: User[] | null;
    isError: boolean

}


const initialState: UserState = {
    isLoading: false,
    data: null,
    isError: false

};


export const postUserData = createAsyncThunk<User[], User>("postUserData", async (userData) => {
    const response = await fetch("http://localhost:3000/api/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })

    if (!response.ok) {
        throw new Error("Failed to post user data")
    }

    const data = await response.json()
    console.log("userdata: ", data)


    return data

})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // setUserData: (state, action: PayloadAction<User[]>) => {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(postUserData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;

        });
        builder.addCase(postUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false
        });
        builder.addCase(postUserData.rejected, (state, action) => {
            console.log("error: ", action.payload)
            state.isLoading = false
            state.isError = true
        })
    }



})

export const { } = userSlice.actions
export default userSlice.reducer