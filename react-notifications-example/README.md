# React Notification component

## Documantation
https://www.npmjs.com/package/react-notifications-component

## Usage steps
- Install the package: 
```
> npm install react-notifications-component
```
- In the root component file:
    - Add those imports statments to the root component file: 
        ```
        import ReactNotification from 'react-notifications-component'
        import 'react-notifications-component/dist/theme.css'
        ```
    - Render react-notifications-component at the top of your application so that it does not conflict with other absolutely positioned DOM elements:
    ```
    const App = () => {
        return (
            <div className="app-container">
            <ReactNotification />
            <Application />
            </div>
        )
    };
    ```
- In the component in which you wish to add notiffication:
    - Add the following import statment:
    ```
    import { store } from 'react-notifications-component';
    ```
    - Then call addNotification:
    ```
    store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
    ```
