import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";

// Define the Todo type
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Define the initial state type
interface TodoState {
    isLoading: boolean;
    data: Todo[] | null; // Array of Todo items or null
    isError: boolean; // To track error state
}

// fetchTodos is action
export const fetchTodos = createAsyncThunk<Todo[]>('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

const initialState: TodoState = {
    isLoading: false,
    data: null,
    isError: false, // Initialize isError to false
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}, // Provide an empty reducers object
    extraReducers: (builder: ActionReducerMapBuilder<TodoState>) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
            state.isError = false; // Reset error state when fetching
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false; // Reset error state on success
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isLoading = false;
            state.isError = true; // Set error state on failure
        });
    }
});

export default todoSlice.reducer;