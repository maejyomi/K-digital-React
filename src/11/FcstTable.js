import getcode from './getcode.json';

const FcstTable = (props) => {
    let items = getcode.filter((item) => item.예보구분== props.title & item.항목값 == props.data[0].category)[0];

    let tag = props.data.map((item, idx)=>{
        return (
            <tr key={'tr'+ idx}>
                <td className='text-center'>{items.항목명}</td>
                <td className='text-center'>{item.fcstTime.substring(0,2)} : {item.fcstTime.substring(2,4)}</td>
                <td className='text-center'>{item.fcstValue} {items.단위}</td>
            </tr>
        )
    })
    
    return (
        <table className="">
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
