
const TailTable = ({tbItem}) => {

    const th = tbItem['th'].map((item, idx) => <th key={`th${idx}`} className='text-center'>{item}</th>);
    const tr = tbItem['tr'].map((item, idx) =>
        <tr key={`tr${idx}`}>
            {item.map((i, idx) => <td key={`td${idx}`} className='text-center'>{i}</td>)}
        </tr>
    )
    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>
            <tbody>
                {tr}
            </tbody>
        </table>
    )
}

export default TailTable
