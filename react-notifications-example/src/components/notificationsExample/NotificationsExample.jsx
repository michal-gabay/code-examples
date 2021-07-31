import "./NotificationsExample.css"
import CustomButton from "../customBotton/CustomButton"
import { store as NotificationStore } from 'react-notifications-component';
import { useState } from "react";
import CustomSelect from "../customSelect/CustomSelect";

export default function NotificationsExample() {
    const [notificationIds, setNotificationIds] = useState([])

    const positionOptions = [
        "top-left",
        "top-right",
        "top-center",
        "center",
        "bottom-left",
        "bottom-right",
        "bottom-center"
    ]
    const [position, setPosition] = useState(positionOptions[1])

    const [isDismissed, setIsDismissed] = useState(true)
    const [showDismissBar, setShowDismissBar] = useState(true)
    const [pauseOnHover, setPauseOnHover] = useState(true)

    const buttons = [
        { text: 'Success', color: '#28a745' },
        { text: 'Info', color: '#17a2b8' },
        { text: 'Default', color: '#007bff' },
        { text: 'Warning', color: '#eab000' },
        { text: 'Danger', color: '#dc3545' },
    ]

    function handleButtonClick(item) {
        let notificationParams = {
            title: item.text,
            message: `some text for ${item.text}`,
            type: item.text.toLowerCase(),
            insert: "bottom",
            container: position,
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            onRemoval: (id, removedBy) => {
                console.log(`Notiification with id ${id} was removed by: ${removedBy}`)
            }
        }

        if (isDismissed) {
            notificationParams = {
                ...notificationParams,
                dismiss: {
                    duration: 5000,
                    onScreen: showDismissBar,
                    pauseOnHover: pauseOnHover
                }
            }
        }

        const id = NotificationStore.addNotification(notificationParams)

        setNotificationIds([...notificationIds, id])
    }

    function handlePositionSelect(position) {
        setPosition(position)
    }

    function onDismissSelect() {
        setIsDismissed(!isDismissed)
    }

    function onShowDismissBarSelect() {
        setShowDismissBar(!showDismissBar)
    }

    function onPauseOnHoverSelect() {
        setPauseOnHover(!pauseOnHover)
    }

    function removeAll() {
        notificationIds.forEach(id => NotificationStore.removeNotification(id))
    }

    return (
        <div className="main-container">
            <div className="content-container">
                <div className="buttons-container">
                    {buttons.map(item => <CustomButton key={item.text} details={item} onButtonClick={() => handleButtonClick(item)} />)}
                </div>
                <div className="position-container">
                    <label className="position-lable">Position:</label>
                    <CustomSelect options={positionOptions} onSelect={handlePositionSelect} />
                </div>
                <div className="dismiss-container">
                    <div className="radio-dual">
                        <input type="checkbox" id="isDismissed" checked={isDismissed} onChange={onDismissSelect} />
                        <label>Dismiss</label>
                    </div>
                    <div className="radio-dual">
                        <input type="checkbox" id="showDismissedBar" checked={showDismissBar} onChange={onShowDismissBarSelect} disabled={!isDismissed} />
                        <label>Show Dismiss Bar</label>
                    </div>
                    <div className="radio-dual">
                        <input type="checkbox" id="pauseOnHover" checked={pauseOnHover} onChange={onPauseOnHoverSelect} disabled={!isDismissed || !showDismissBar} />
                        <label>PauseOnHover</label>
                    </div>
                </div>
                <button className="remove-all-button" onClick={removeAll}>Remove All</button>
            </div>
        </div>
    )
}