import './CustomSelect.css'

export default function CustomSelect(props) {
    const {options, onSelect} = props

    function handleSelect(event) {
        onSelect(event.target.value)
    }

    return (
        <select className="custom-select" onChange={handleSelect}>
            {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
    )
}