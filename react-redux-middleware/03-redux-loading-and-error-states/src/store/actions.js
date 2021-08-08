
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
