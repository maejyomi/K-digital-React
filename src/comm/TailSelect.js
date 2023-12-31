
const TailSelect = ({ id, opItem, handleChange }) => {
    const ops = opItem.map((item)=>{
        return <option key={item[0]} value={item[0]}>{item[1]}</option>
    });

    return (
        <select id={id} name={id} onChange={handleChange} className="h-full">
            <option value=''>선택</option>
            {ops}
        </select>
    )
}

export default TailSelect
