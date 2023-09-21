import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";

const Lotto = () => {
    const [nums, setNums] = useState();

    // 버튼 클릭 이벤트
    const handleClick = () => {
        let temp = [];

        while(temp.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            if(temp.indexOf(n)<0) temp.push(n);
        }
        setNums(temp);
    }

    // nums 변수 변경시 수행
    useEffect(()=>{
       console.log("nums = ", nums)
    }, [nums]);

    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또 생성기</h1>
                </header>
                { nums? <LottoNums ns={nums} /> : '숫자가 없습니다' }
                {/* undefined는 false, 맨 처음 실행했을 때 nums = undefined */}
                <footer>
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article>
        </main>
    );
};

export default Lotto;