import TailH1 from '../comm/TailH1';
import TailSelect from '../comm/TailSelect';
import getcode from './getcode.json';

const Ultra = ({ dt, area, m, tItem }) => {
    const title = m == 1 ? '초단기예보' : '단기예보'
    let ultraTitle = area + " " + title;
    ultraTitle = ultraTitle +"("+ dt.substring(0, 4) +"-" + dt.substring(4, 6) +"-"+ dt.substring(6, 8)+")";

    const opItems = getcode.filter((item) => item.예보구분 == title)
        .map((item) => [item.항목값 + "-" + item.항목명, item.항목명 + "(" + item.항목값 + ")"]);

    const handleSelChange = (e) => {
        let temp = e.target.value.split('-');
        let test = tItem.filter((item) => item["category"] == temp[0])
        console.log(test);
    };

    return (
        <section className='p-10 shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-10'>
                <div>
                    <TailH1 title={ultraTitle} />
                </div>
                <div>
                    <TailSelect id={'sel'} opItem={opItems} handleChange={handleSelChange} />
                </div>
            </div>
        </section>
    )
}

export default Ultra
