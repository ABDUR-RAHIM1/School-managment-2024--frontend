
export default function Select(props) {
    const { options, name, value, onChange } = props;
    return (
        <select value={value} onChange={onChange} name={name} id={name} className="input">
            {
                options && options.map((op, index) => (
                    <option key={index} value={index === 0 ? "" : op}>{op}</option>
                ))
            }
        </select>
    )
}
