import './CustomButton.css'

export default function CustomButton(props) {
    const {text, color} = props.details;
    const onButtonClick = props.onButtonClick;

    const style = {
        backgroundColor: color
    }

    return (
        <button className="button" style={style} onClick={onButtonClick}>{text}</button>
    )
}