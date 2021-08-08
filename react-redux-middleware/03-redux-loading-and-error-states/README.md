## Redux Request, Success & Failure pattern

We will upgrade the second example to include the Redux Request, Success & Failure pattern. 
In the previos example we assume that fetching the data from the API will go smoothly, but if we will receive an unexpected error. 
Using the Redux Request, Success & Failure pattern will help us handle errors.
Second edvantage is that we can add a UI indication during the loading time

Instead of creating only one action for fetching data, we will have 3 actions:
* Fetch Request (for requesting the data)
* Fetch Success (for successfully receiving the data)
* Fetch Request (if an error occured and while trying to fetch the data)

For appling this we will also need to change our store to include:
* The items
* loading (boolean)
* error

and the action will now look like this:
```
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'


export const fetchTodos = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_TODOS_REQUEST
    })

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
    
        dispatch({
            type: FETCH_TODOS_SUCCESS,
            payload: data
        })    
    } catch(error) {
        dispatch({
            type: FETCH_TODOS_FAILURE,
            error
        })
    }

}
```

and the reducer:
```
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
```

I'v also added redux-toolkit-extention to the project so that we can see the actions that were dispatched. and thus, in case of success we will see FETCH_TODOS_REQUEST, followed by FETCH_TODOS_SUCCESS