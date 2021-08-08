import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../store/actions"


export default function Todos() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    const renderTodos = () => {
        if (state.loading) {
            return <h2>Loading</h2>
        }

        return state.todos.map(item => <h4 key={item.id}>{item.title}</h4>)
    }

    return (
        <div>
            <h2>Todos:</h2>
            {renderTodos()}
        </div>
    )
}