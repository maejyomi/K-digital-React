import { useState, useEffect, useRef } from "react";
import Hh1 from "../comm/Hh1"

const MyRef = () => {
    const title = 'useRef Hook';
    const [cnt, setCnt] = useState(0); // cnt=0으로 초기화
    
    // Ref 변수
    const cnt2 = useRef(0);
    const txt1 = useRef();

    const handleClick = () => {
        setCnt(cnt + 1);
    }

    const handleClickRef = () => {
        // console.log(cnt2); // 오류
        cnt2.current = cnt2.current + 1; // 화면이 재랜더링 되는 시점에 업데이트
        console.log("handleClickRef :", cnt2.current);
    }

    const handleChange = () => {
        console.log("handleChange :", txt1.current.value); // input 박스의 value를 가져와야 함
        setCnt(parseInt(txt1.current.value));
    }

    useEffect(()=>{
        setCnt(100);
        txt1.current.focus();
    },[]) // 컴포넌트 생성시 한번만 호출

    useEffect(()=>{
        console.log("useEffect:", cnt);
    },[cnt]) // 컴포넌트 업데이트시 생성 : cnt state 변수가 업데이트 될 때

    
    return (
        <main className="container">
            <article>
                <Hh1 title={title} />
                <div className="grid">
                    <div>state변수 : {cnt}</div>
                    <div>Ref변수 : {cnt2.current}</div>
                </div>
                <footer>
                    <div className="grid">
                        <button onClick={handleClick}>state 변수 증가</button>
                        <button onClick={handleClickRef}>Ref 변수 증가</button>
                    </div>
                </footer>
            </article>
            <article>
                <Hh1 title='useHook : Form 제어'/>
                <form>
                    <input ref={txt1} type="number" id="txt1" name="txt1" placeholder="숫자입력" onChange={handleChange}/>
                </form>
            </article>
        </main>
    )
}

export default MyRef
