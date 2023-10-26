import { useState, useEffect, useRef } from 'react';
import ButtonBlue from '../comm/ButtonBlue';
import getxy from './getxy.json';
import { Link } from 'react-router-dom';

const FcstMain = () => {
    // select -> option 생성
    const options = getxy.map((item) => {
        return <option value={item.행정구역코드} key={item.행정구역코드}>{item['1단계']}</option>
    })

    // state 변수
    const [dt, setDt] = useState(); // 날짜
    const [area, setArea] = useState();
    const [x, setX] = useState(); // 해당 지역의 x 좌표
    const [y, setY] = useState(); // 해당 지역의 y 좌표

    // 입력폼
    const dtRef = useRef();
    const selRef = useRef();

    // 컴포넌트 생성시
    useEffect(()=>{
        dtRef.current.focus();
    },[])

    const handleDtChange = () => { // 사용자 정의 함수: 날짜 변경시 발생
        setDt(dtRef.current.value.replaceAll('-',''));
    }

    const handleAreaChange = () => { // 사용자 정의 함수: 지역 선택 발생
        // 1. select 값을 가져옴
        // 2. getxy에서 sel 값과 행정구역코드가 같은 자료 추출
        // 3. state변수 area, x, y 변경
        if(selRef.current.value == '') {
            setArea();
            setX();
            setY();
            return;
        }
        let temp = getxy.filter((item)=>item.행정구역코드 == selRef.current.value)[0];

        setArea(temp['1단계']);
        setX(temp['격자 X']);
        setY(temp['격자 Y']);
    }

    const handleClick = (e) => {
        e.preventDefault();
        alert("정보를 입력해주세요");
    }

    useEffect(()=>{
        if(!dt) return;
        console.log(dt);

    },[dt]);

    useEffect(()=>{
        if(!area) return;
        console.log(area, x, y);
    },[area, x, y]); // dependency array 여러개 사용할 수 있음


    return (
        <div className="shadow-xl p-8 mt-5">
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <h1 className="text-xl font-bold col-span-1 md:col-span-2 mb-4">단기예보 입력정보</h1>
                    <div>
                        <input type="date" name="dt" ref={dtRef} onChange={handleDtChange}/>
                    </div>
                    <div className='mb-4'>
                        <select id="sel" name="sel" ref={selRef} onChange={handleAreaChange} className='h-full'>
                            <option value=''>-- 지역선택 --</option>
                            {options}
                        </select>
                    </div>
                    <div>
                        {
                            (dt === undefined) | (area === undefined)
                            ? <ButtonBlue caption='초단기예보' handleClick={handleClick}/>
                            :<Link to={`/ultra/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='초단기예보'/></Link>
                        
                        }
                    </div>
                    <div>
                        {
                            (dt === undefined) | (area === undefined)
                            ? <ButtonBlue caption='단기예보' handleClick={handleClick}/>
                            :<Link to={`/vilage/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='단기예보'/></Link>
                        }
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FcstMain
