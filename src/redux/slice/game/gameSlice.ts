// import { RootState } from './../../store/store';
import { createSlice } from "@reduxjs/toolkit";

import cardName from "../../../components/card"
import { CgCardSpades } from "react-icons/cg";

interface Card {
    id: number;
    name: string;
    pic: JSX.Element;
    msg: string;
    title: string

}

interface CardState {
    cards: Card[]
    points: number
    diffuse: number
    card_count: number
    message: string

}


const initialState: CardState = {
    cards: cardName,
    points: 0,
    diffuse: 0, //diffuse is the number of diffuse card selected in the present game
    card_count: 0,//card_count is the number of card selected in the present game
    message: ""
}
export interface RootState {
    deck: CardState
}



const gameSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        shuffleCards: (state) => {
            const shuffleDeck = [...state.cards]

            let i = 0;
            for (i = shuffleDeck.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = shuffleDeck[i]
                shuffleDeck[i] = shuffleDeck[j]
                shuffleDeck[j] = temp

            }
            state.cards = shuffleDeck
            for (let i = 0; i < state.cards.length; i++) {
                console.log(state.cards[i].name)
            }
        },
        revisedCard: (state, action) => {

            const selected_card_id = action.payload
            switch (selected_card_id) {
                case 1:

                    state.cards = state.cards.filter(card => card.id !== 1)
                    state.card_count += 1
                    break;

                case 2:

                    if (state.diffuse != 0) {
                        state.cards = state.cards.filter(card => card.id !== 2)
                        state.card_count += 1
                        state.diffuse -= 1
                    } else {
                        state.cards = cardName
                        state.card_count = 0
                    }


                    break;
                case 3:

                    state.cards = state.cards.filter(card => card.id !== 3)
                    state.diffuse += 1
                    state.card_count += 1
                    break;
                case 4:
                    state.cards = cardName
                    state.card_count = 0
                    state.diffuse = 0
                    break;
                case 5:
                    state.cards = state.cards.filter(card => card.id !== 5)
                    state.card_count += 1
                    break;

            }
            if (state.card_count == 4) {
                state.points += 1
                state.card_count = 0
                state.message = "you won the game !! let's play again"
                console.log("you won the game!!")
                state.cards = cardName
            }

            for (const card in state.cards) {
                console.log("card: ", state.cards[card].name)
            }

            console.log("card count: ", state.card_count)

            // state.cards = state.cards.filter((card) => card.id !== action.payload)
        }
    }
})

export const { shuffleCards, revisedCard } = gameSlice.actions
export default gameSlice.reducer
