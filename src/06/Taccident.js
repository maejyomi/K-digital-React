import Hh1 from '../comm/Hh1'
import data from './dataTaccident.json'
import TaccidentNav from './TaccidentNav'
import { useState, useEffect } from 'react'

const Taccident = () => {    
    // console.log(data.data)

    // 대분류 (한번 만들면 끝)
    let c1 = data.data.map((item) => item.사고유형_대분류)
    c1 = [...new Set(c1)]; 
    
    /* 대분류를 선택하면 해당하는 중분류를 나타내고 싶다 -> 버튼 누를때마다 변경 -> useState 사용 */

    
    const [sel1, setSel1] = useState(); // 대분류 선택
    const [c2, setC2] = useState();  // 중분류 : 대분류 선택할 때마다 다시 만들어야함
    const [sel2, setSel2] = useState(); // 중분류 선택
    const [divTag, setDivTag] = useState(); // 항목

    // 대분류 선택
    useEffect(() => {
       if(!sel1) { // sel1이 undefined 일 때
            return;
       }
       let temp = data.data.filter((item) => item.사고유형_대분류 == sel1).map((item) => item.사고유형_중분류)
       setC2(temp);
       setSel2(); // 초기화
       setDivTag(); // 초기화

       /*
        console.log("대분류 선택 : ", sel1)
        let temp = data.data.filter((item) => item.사고유형_대분류 == sel1)
        temp = temp.map((item) => item.사고유형_중분류)

        */
       
    },[sel1])


    // 중분류 선택
    useEffect(()=>{
        if(!sel1 || !sel2) {
            return;
       }
        let temp = data.data.filter((item) => item.사고유형_대분류 == sel1 && item.사고유형_중분류 == sel2)
        temp = temp[0]; // 결과가 Object

        let k = Object.keys(temp).filter((item) =>(item != '사고유형_대분류'&& item != '사고유형_중분류'))

        // Object일 때는 바로 map을 못쓰기 때문에 keys해서 map 돌기..
        temp = k.map((item, idx) => <div key={`d${idx}`}>{item} : {temp[item]}</div>)
        setDivTag(temp)
    },[sel2])

    return (
        <main className='container'>
            <article>
                <Hh1 title="도로교통공단_사고유형별 교통사고 통계"/>
                <TaccidentNav title = '교통사고 대분류' c={c1} setSel={setSel1} />
                {c2 && <TaccidentNav title = '교통사고 중분류' c={c2} setSel={setSel2} />}
                <div className='grid'>
                    {divTag}
                </div>
            </article>
        
        </main>
    )
}

export default Taccident;
