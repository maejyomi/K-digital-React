import Hh1 from "../comm/Hh1"
import data from './dataFrcst.json'
import style from './Frcst.module.css'
import { useState, useEffect } from "react"
const Frcst = () => {
    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    let dtcn = {};
    // 배열에 map, filter를 쓸 수 있음
    // map의 결과는 배열
    dtkey.map((item, idx) => {
        return  dtcn[data[item]] = data[cnkey[idx]]
        // 날짜(key) : 지역미세먼지(value)인 dtcn 오브젝트 생성
    });
    console.log(dtcn);
    
    // 날짜 영역 만들기
    let dtTag = Object.keys(dtcn).map((item, idx) => {
        return (
            <div 
            key={`dtcn${idx}`} 
            className={style.dtcnKey}
            onClick={() => {handleClick(item)}}
            >
                {item}
            </div>
        );
    });
    
    // state 변수
    const [cnTag, setCnTag] = useState();

    // 날짜가 클릭되었을 때 실행 함수
    const handleClick = (k) =>{
        let temp = dtcn[k].split(",");
        temp = temp.map((item, idx) =>{
            let spitem = item.split(":");
            let color="high";

            if(spitem[1].trim() == "높음") color="spH";
            else if(spitem[1].trim() == "낮음") color="spL";
            else color="spM";

            return (<div key={`cn`+idx}>
                        <span className={style.sp1}>{spitem[0]}</span>
                        <span className={style[`${color}`]}>{spitem[1]}</span>
                    </div>);
        })
        setCnTag(temp)
    }
        
    return (
        <main className="container">
            <article>
                <Hh1 title="미세먼지 확인"/>
                <div className="grid">
                    {dtTag}
                </div>
                <div className="grid">
                    {cnTag}
                </div>
            </article>
        </main>
    )
}

export default Frcst

