import Hh1 from '../comm/Hh1'
import style from './Box.module.css'
import { useRef, useState, useEffect } from 'react'
const Box = () => {
    // 날짜 선택
    const dt = useRef();
    const [cdt, setCdt] = useState();
   
    // 컴포넌트 생성시 포커스
    useEffect(()=>{
        const today = new Date();
        const yesterday = new Date(today.setDate(today.getDate() -1));
        const defaultDate = yesterday.toISOString().slice(0, 10);
        // console.log(defaultDate); -> 2023-10-04
        dt.current.value = `${defaultDate}`;
        setCdt(defaultDate.replaceAll("-",""));
        
    },[])

    // 날짜가 변경되었을 때
    const handleChange = () => {
        setCdt(dt.current.value.replaceAll("-",""));
    }

    const getFetch = (cdt) => {
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
        url = url + cdt;

        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        getFetch(cdt);
    },[cdt])
    
    
    
    return (
        <main className="container">
            <Hh1 title="박스오피스 업데이트" />
            <article>
                <header>
                    <div htmlFor='dt' className={style.dt}>날짜선택 : {cdt}</div>
                    <form>
                        <input ref={dt} type='date' id='dt' name='dt' onChange={handleChange} />
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Box
