import { FETCH_TODOS } from "./actions"


const initState = []

const todosReducer = (
    state = initState,
    action
) => {
    console.log("In todosReducer. action: ", action)

    switch (action.type) {
        case FETCH_TODOS:
            return action.payload
        default:
            return state
    }
}

export default todosReducer