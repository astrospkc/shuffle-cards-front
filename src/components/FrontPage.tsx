import { Link } from "react-router-dom"
import { useState } from "react"

import { useDispatch } from "react-redux"
import { postUserData } from "../redux/slice/user/userSlice"
// import { fetchTodos } from "../redux/slice/todo/todoSlice"
// import { RootState } from "../redux/store/store"
// import { div } from "framer-motion/client"


const FrontPage = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = username

        dispatch(postUserData(data))
        setUsername('')
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)

    }
    console.log(username)

    return (
        <div className="flex flex-col justify-center items-center m-auto h-full">
            {/* <ReduxCounter /> */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <input type="text" placeholder='@username' className="text-black rounded-xl p-3 m-3 my-4" value={username} onChange={handleInputChange} />

                    <Link to="/gamePage">

                        <button type="submit" className='bg-gradient-to-tr from-violet-950 to-black text-white font-bold p-4 rounded-3xl hover:cursor-pointer hover:from-cyan-700 hover:to-black hover:scale-125'>Start the game</button>
                    </Link>

                </div>



            </form>

            {/* {!state && <div>...loading</div>}
            <button className="bg-white" onClick={e => dispatch(fetchTodos())}>fetch todos</button>
            {
                state &&
                state.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    )
                })

            } */}


        </div>
    )
}

export default FrontPage
