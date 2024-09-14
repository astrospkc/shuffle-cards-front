import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import counterReducer from "../slice/counter/counterSlice"
// import todoReducer from "../slice/todo/todoSlice"
import userReducer from "../slice/user/userSlice"
import cardReducer from "../slice/game/gameSlice"

const rootReducer = combineReducers({

    user: userReducer,
    cards: cardReducer
})

export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch