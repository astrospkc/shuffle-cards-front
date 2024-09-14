
import CardFlip from "./CardFlip"
import Header from "./Header"

import { useState } from "react"
import cardName from "./card"
import { useDispatch, useSelector } from "react-redux"
import { shuffleCards, revisedCard } from "../redux/slice/game/gameSlice"
import { RootState } from "../redux/store/store"





const GamePage = () => {
    const dispatch = useDispatch()
    // const cards = useSelector((state: RootState) => state.cards.cards)
    const { cards, points, diffuse, card_count } = useSelector((state: RootState) => state.cards)
    console.log("points: , diffuse: , card_count: ", points, diffuse, card_count)

    // const [deck, setDeck] = useState(cardName)
    const [countHandleClick, setCountHandleClick] = useState(0)


    const handleClick = () => {
        if (countHandleClick < cardName.length) {
            setCountHandleClick(prev => prev + 1)
        }

        if (countHandleClick >= cardName.length) {

            setCountHandleClick(0)
        }

        console.log("count: ", countHandleClick)


        // const shuffleDeck = [...deck]
        // console.log(Math.floor(Math.random() * 6), shuffleDeck.length)
        // let i = 0;
        // for (i = shuffleDeck.length - 1; i >= 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1))
        //     const temp = shuffleDeck[i]
        //     shuffleDeck[i] = shuffleDeck[j]
        //     shuffleDeck[j] = temp

        // }

        dispatch(shuffleCards())

        // setDeck(shuffleDeck)
        // console.log("shuffle deck: ", shuffleDeck)


    }
    // console.log("deck outside the loop", deck)

    const handleRevisedCard = (id) => {
        setTimeout(() => {
            dispatch(revisedCard(id))
        }, 3000)
    }


    return (
        <div className="text-white flex h-full  flex-col">
            <Header />
            <div className=" flex flex-col justify-center items-center m-auto h-full">
                <button onClick={handleClick} className="bg-gray-900 p-4 rounded-3xl">shuffle</button>
                <div className="grid grid-cols-3 gap-3 justify-center items-center">
                    {
                        countHandleClick && cards ? cards.map((card) => {
                            return (
                                <div key={card.id}>

                                    <CardFlip

                                        card_id={card.id}
                                        cardname={card.name}
                                        pic={card.pic}
                                        msg={card.msg}
                                        title={card.title}
                                        handleFn={handleRevisedCard}

                                    />
                                </div>

                            )
                        }) : <div className="ml-7">Now shuffle the card , Start the game again</div>
                    }
                </div>
            </div>


        </div>
    )
}

export default GamePage
