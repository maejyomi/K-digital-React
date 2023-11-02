
const FcstTable = ({data}) => {

    let tag = data[0].map((item, idx) => {
        return (
            <tr key={'tr' + idx}>
                <td className='text-center'>{data[1]}</td>
                <td className='text-center'>{item.fcstTime.substring(0, 2)} : {item.fcstTime.substring(2, 4)}</td>
                <td className='text-center'>{item.fcstValue}{data[2]}</td>
            </tr>
        );
    })

    return (
        <table>
            <thead className='bg-sky-300'>
                <tr>
                    <th className='text-white font-bold text-center'>항목명</th>
                    <th className='text-white font-bold text-center'>예측시간</th>
                    <th className='text-white font-bold text-center'>예보값</th>
                </tr>
            </thead>
            <tbody>
                {tag}
            </tbody>
        </table>
    )
}

export default FcstTable
