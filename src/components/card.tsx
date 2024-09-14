import { FaCat } from "react-icons/fa";
import { GiBrightExplosion, GiWildfires } from "react-icons/gi"
import { MdPowerOff } from "react-icons/md"
import { FaShuffle } from "react-icons/fa6"
const cardName = [
    {
        id: 1,
        name: "Cat Card",
        pic: <FaCat className="text-5xl border-2 border-black rounded-full p-4 w-full h-full bg-gray-700 text-white" />,
        msg: "Removing the card from the deck, one card down!!",
        title: "yipppe!! , you get one point"

    },
    {
        id: 2,
        name: "Exploding Card",
        pic: <GiBrightExplosion className="text-5xl border-2 border-black rounded-full p-4 w-full h-full bg-gray-700 text-white" />,
        msg: "You have exploded the game , you loose the game",
        title: "oh noooo!! , wrong card choosen, you lost buddy"

    },
    {
        id: 3,
        name: "Diffuse Card",
        pic: <MdPowerOff className="text-5xl border-2 border-black rounded-full p-4 w-full h-full bg-gray-700 text-white" />,
        msg: "Removing the card from the deck\n storing this card to diffuse another explosion",
        title: "Got lucky !!"
    },
    {
        id: 4,
        name: "Shuffle card",
        pic: <FaShuffle className="text-5xl border-2 border-black rounded-full p-4 w-full h-full bg-gray-700 text-white" />,
        msg: "Game restarted",
        title: "Bro!  , you nailed it, changed the game entirely , bravo!!"

    },
    {
        id: 5,
        name: "Wild card",
        pic: < GiWildfires className="text-5xl border-2 border-black rounded-full p-4 w-full h-full bg-gray-700 text-white" />,
        msg: "wild card saved you",
        title: "see your luck!!"
    }


]

export default cardName