import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../store/actions"


export default function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)

    useEffect(() => {
        console.log("In useEffect")
        dispatch(fetchTodos())
    }, [])

    return (
        <div>
            <h2>Todos:</h2>
            {todos.map(item => <h4 key={item.id}>{item.title}</h4>)}
        </div>
    )
}