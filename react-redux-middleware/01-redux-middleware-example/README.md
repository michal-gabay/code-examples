# Redux Middleware Example

## Overview

This is a simple counter example.

state contains only count and it is represented in the ```Counter``` component. the component also have Decrement and Increment buttons that disatches Decrement and Increment actions.

## Middlewares

there are 4 middlewares in this example. they are added in the ```index.js``` file, in the creation of the store, using the redux ```applyMiddleware``` function:

```
import { applyMiddleware, createStore } from 'redux';

const store = createStore(
  counterReducer, 
  applyMiddleware(myLoggerMiddleware, secondMiddleware, capAt10Middleware, logger)
)

```

The middlewares will run whenever an action is dispatch and they will run before the reducer. They will run in the order in which they appear in the ```applyMiddleware``` function.

## Redux Middleware Structure:
```
export const middlewareNmae = store => next => action => {
    // do somthing...
    next(action)
}
```
It is equal to:
```
export function middlewareNmae(store) {
    return (next) => {
        return (action) => {
            // do somthing...
            return next(action)
        }
    }
}
```
It is a function that returns a function that returns a function that dispatch action to the reducer

The next function is the function that do the dispatch to the reducer.

#### Importent note
If we wont use the next function the action will not be dispatched to the reducer and therefor the reducer code will not run.


### The 4 middlewares in this project:

1. #### myLoggerMiddleware
    A custom middleware that writes the type of the action that was dispathed to the console.log

2. #### secondMiddleware
    A custom middleware that writes `secondMiddleware log :)` to the console.log

3. #### capAt10Middleware
    A custom middleware that makes sure the count value will not higher then 10. If we will press the increment button when the value is 10, the middleware will dispetch an decrement action instead of increament

2. #### logger
    An **external** middleware that writes action and state details to the console.log.
    In order to use this middelware you need to:
    - install the package: ```> npm install redux-logger```
    - in the ```index.js``` file, if you wish to add this middleware you need to import it: ```import logger from 'redux-logger'``` and then add it to the ```applyMiddleware``` function
