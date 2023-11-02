import { useState, useEffect } from 'react';
import TailH1 from '../comm/TailH1';
import TailSelect from '../comm/TailSelect';
import FcstTable from './FcstTable';
import getcode from './getcode.json';
import TailTable from '../comm/TailTable';

const Ultra = ({ dt, area, m, tItem }) => {

    const [myTableData, setMyTableData] = useState();
    const [tableData, setTableData] = useState();

    const title = m == 1 ? '초단기예보' : '단기예보'
    let ultraTitle = area + " " + title;
    ultraTitle = ultraTitle + "(" + dt.substring(0, 4) + "-" + dt.substring(4, 6) + "-" + dt.substring(6, 8) + ")";

    const opItems = getcode.filter((temp) => temp.예보구분 == title)
        .map((item) => [item.항목값 + "-" + item.항목명 + "-" + item.단위, item.항목명 + "(" + item.항목값 + ")"]);


    const handleSelChange = (e) => {
        if (e.target.value == '') {
            setMyTableData(undefined);
            setTableData(undefined);
            return;
        }

        let temp = e.target.value.split('-');

        // 1. FcstTable 데이터
        let test = [];
        console.log(tItem);
        test.push(tItem.filter((item) => item["category"] == temp[0]));
        test.push(temp[1]);
        test.push(temp[2]);
        setMyTableData(test);


        // 2. TailTable 데이터
        let data2 = {
            'th': ['항목명', '예측시간', '예보값'],
            'tr': []
        };
        let tempList = []
        
        // PTY, SKY 코드값 처리해줘야함
        const sky = { '1': '맑음', '2': '구름많음', '4': '흐림' };
        const pty = {
            '0': '없음', '1': '비', '2': '비/눈', '3': '눈', '4': '소나기',
            '5': '빗방울', '6': '빗방울눈날림', '7': '눈날림'
        };
        tItem.filter((item) => item["category"] == temp[0]).map((i) => {
            let value = i.fcstValue+" "+ temp[2];
            if (temp[1] == '강수형태' || temp[1] == '하늘상태'){
                value = temp[1] == '하늘상태'? sky[i.fcstValue] : pty[i.fcstValue];
            }
            
            tempList.push([temp[1], i.fcstTime.substring(0, 2) + " : " + i.fcstTime.substring(2, 4),value])
        })
        data2.tr = tempList

        setTableData(data2);

    };


    // 1. FcstTable 데이터
    useEffect(() => {
        if (!myTableData) return;

    }, [myTableData])

    useEffect(() => {
        if (!tableData) return;
        console.log(tableData);

    }, [tableData])

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
            <div>
                {
                    tableData
                        ? <TailTable tbItem={tableData} />
                        : ""
                }

                {/* {
                    myTableData
                    ? <FcstTable data={myTableData}/>
                    : ""
                } */}

            </div>
        </section>
    )
}

export default Ultra
