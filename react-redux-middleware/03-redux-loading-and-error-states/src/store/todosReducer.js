import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "./actions"


const initState = {
    todos: [],
    loading: false,
    error: null
}

const todosReducer = (
    state = initState,
    action
) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default todosReducer