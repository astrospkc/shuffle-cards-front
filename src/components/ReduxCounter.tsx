

import type { RootState } from '../redux/store/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/slice/counter/counterSlice'


const ReduxCounter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div className='text-white '>
                <button className='m-4 bg-gray-600 p-4 rounded-3xl'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    className='m-4 bg-gray-600 p-4 rounded-3xl'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className='m-4 bg-gray-600 p-4 rounded-3xl'
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    increment by amount 10
                </button>
            </div>
        </div>
    )
}

export default ReduxCounter
