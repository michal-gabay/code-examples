import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../store/actions";

export default function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
            <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        </div>
    )
}