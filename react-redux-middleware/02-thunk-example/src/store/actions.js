
export const FETCH_TODOS = 'FETCH_TODOS'


export const fetchTodos = () => async (dispatch, getState) => {
    console.log("In fetchTodos before fetching data")

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log("In fetchTodos after fetching data")

    dispatch({
        type: FETCH_TODOS,
        payload: data
    })
}

// export const fetchTodos = () => {

//     return async (dispatch, getState) => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await response.json()

//         dispatch({
//             type: FETCH_TODOS,
//             payload: data
//         })
//     }
// }

