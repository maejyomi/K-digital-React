import { useState, useEffect } from "react";

const Box = () => {
    // let boxlist = []
    const [boxlist, setBoxlist] = useState(); // 초기값 없으면 undefined 됨
    const [listTag, setListTag] = useState();

    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918";
    // fetch는 한번만 실행하면 됨
    // useEffect는 함수라서 뒤에 () 붙여주기
    
    // 컴포넌트 생성시 한번 실행
    useEffect(() =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err));
    }, []); // 아무것도 없는 dependency array(?)[] : 처음 한번만 실행
    
    const [detailTag, setDetailTag] = useState([]);

    const handleClick = (item) => {
        console.log(item);
        setDetailTag(
        <div>
            <h3>{item.movieNm} [{item.movieCd}]</h3>
            <p>개봉일 : {item.openDt}</p>
            <p>{
            item.rankOldAndNew == "OLD"
            ? "🌲OLD🌲"
            : "🌼NEW🌼"
            }</p>
            <p>누적 관객수 : {parseInt(item.audiAcc).toLocaleString('ko-KR')}명</p>
            <p>누적 매출액 : {parseInt(item.salesAcc).toLocaleString('ko-KR')}원</p>
        </div>
        
        )
    }

    // state변수가 변경될 때마다 무조건 실행
    useEffect(()=>{
        console.log(boxlist);
        if(boxlist) {
            setListTag(boxlist.map((item, idx) => 
                <tr key={'mv'+idx} onClick={() => handleClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        item.rankInten == 0
                        ? "-"
                        : item.rankInten > 0
                        ? "▲" + item.rankInten
                        : "▼" + Math.abs(item.rankInten)
                        }
                    </td>
                </tr>
                
            ));
        }
    },[boxlist]);

    return (
        <main className="container">
            <article>
                <header><h2>박스오피스</h2></header>
                <table>
                    <thead>
                        <tr>
                            <th>순위</th><th>영화명</th><th>매출액</th><th>증감</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listTag}
                    </tbody>
                </table>
                <footer>
                    <div>{detailTag}</div>
                </footer>
            </article>

            
        </main>
    );
}

export default Box;