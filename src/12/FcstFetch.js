import { useParams } from "react-router-dom"
import Ultra from "./Ultra";
import { useEffect, useState } from "react";


const FcstFetch = () => {
    // 파라미터 값
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const m = useParams().m;

    // 환경변수값 가져오기
    const apikey = process.env.REACT_APP_API_KEY;

    // 상태변수
    const [tItem, setTItem] = useState();

    useEffect(()=>{
        let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
        if(m == 1){
            url = url +"getUltraSrtFcst?" + `serviceKey=${apikey}`;
            url = url + "&numOfRows=60&pageNo=1";
            url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;
        } else {
            url = url + "getVilageFcst?"+ `serviceKey=${apikey}`;
            url = url + `&pageNo=1&numOfRows=60&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
        }
    
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTItem(data.response.body.items.item))
        .catch(err => console.log(err));
    },[]);

    useEffect(()=>{
        if (!tItem) return;

    },[tItem])

    return (
        <div>
            <Ultra dt={dt} area={area} m={m} tItem={tItem} />
        </div>
    )
}

export default FcstFetch
